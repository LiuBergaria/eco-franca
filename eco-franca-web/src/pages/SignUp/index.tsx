import React, { useRef, useCallback, useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background } from './styles';

import LogoSignIn from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import { useToast } from '../../hooks/ToastContext';

interface SignUpFormProps {
  first_name: string;
  last_name: string;
  ra: string;
  email: string;
  password: string;
}

export default function SignUp(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (registerProps: SignUpFormProps) => {
      setIsLoading(true);

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          first_name: Yup.string().required('Nome obrigatório'),
          last_name: Yup.string().required('Sobrenome obrigatório'),
          ra: Yup.string().required('Chapa obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatória')
            .email('Digite email valido'),
          password: Yup.string().min(6, 'No minimo 6 digitos'),
        });

        await schema.validate(registerProps, {
          abortEarly: false,
        });

        const response = await api.post('employee', {
          first_name: registerProps.first_name,
          last_name: registerProps.last_name,
          ra: registerProps.ra,
          email: registerProps.email,
          password: registerProps.password,
        });

        if (response.status === 404) {
          formRef.current?.setErrors({
            email: 'E-mail e/ou senha incorretos',
          });
        } else if (response.status === 200) {
          addToast({
            title: 'Conta criada com sucesso!',
          });

          formRef.current?.reset();
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Cadastrar usuário</h1>
          <strong>1. Informe os dados do usuário</strong>

          <Input
            name="first_name"
            icon={FiMail}
            placeholder="Nome"
            disabled={isLoading}
          />
          <Input
            name="last_name"
            icon={FiMail}
            placeholder="Sobrenome"
            disabled={isLoading}
          />
          <Input
            name="ra"
            icon={FiMail}
            placeholder="Chapa"
            disabled={isLoading}
          />
          <Input
            name="email"
            icon={FiMail}
            placeholder="E-mail"
            disabled={isLoading}
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            disabled={isLoading}
          />

          <Button type="submit" isLoading={isLoading}>
            Cadastrar
          </Button>
        </Form>
      </Content>

      <Background>
        <img src={LogoSignIn} alt="Logo Eco Franca" />
      </Background>
    </Container>
  );
}
