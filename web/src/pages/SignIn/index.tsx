import React, { useRef, useCallback, useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';

import { Container, Content, Background } from './styles';

import LogoSignIn from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormProps {
  email: string;
  password: string;
}

export default function SignIn(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (loginProps: SignInFormProps) => {
      try {
        setIsLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('E-mail invalido')
            .required('Esse campo é obrigatório'),
          password: Yup.string().required('Esse campo é obrigatório'),
        });

        await schema.validate(loginProps, {
          abortEarly: false,
        });

        const response = await api.post('employee/login', {
          email: loginProps.email,
          password: loginProps.password,
        });

        if (response.status === 404) {
          formRef.current?.setErrors({
            email: 'E-mail e/ou senha incorretos',
          });
        } else if (response.status === 200) {
          signIn({
            token: response.data.token,
            user: {
              first_name: response.data.first_name,
              last_name: response.data.last_name,
            },
          });
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'success',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });
      } finally {
        setIsLoading(false);
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h3>
            Acesso <br />
            <span>Administrativo</span>
          </h3>
          <h1>Seja bem-vindo!</h1>
          <strong>1. Informe seu email e senha</strong>

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

          <Button isLoading={isLoading} type="submit">
            Entrar
          </Button>
          {!isLoading && <Link to="/recuperar-senha">Esqueci minha senha</Link>}
        </Form>
      </Content>

      <Background>
        <img src={LogoSignIn} alt="Logo Eco Franca" />
      </Background>
    </Container>
  );
}
