import { useRef, useCallback, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { useToast } from '../../hooks/ToastContext';

import { Container, Content, Background } from './styles';

import LogoSignIn from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

interface ForgotPasswordFormProps {
  email: string;
}

export default function ForgotPassword(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (forgotProps: ForgotPasswordFormProps) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('E-mail invalido')
            .required('Esse campo é obrigatório'),
        });

        await schema.validate(forgotProps, {
          abortEarly: false,
        });

        await api.post('employee/recovery-password', {
          email: forgotProps.email,
        });

        addToast({
          type: 'success',
          title: 'E-mail de recuperação enviado',
          description:
            'Enviamos um e-mail para a recuperação de senha, cheque sua caixa de entrada',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro na recuperação de senha',
          description:
            'Ocorreu um erro ao realizar a solicitação, tente novamente',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h3>
            Acesso <br />
            <span>Administrativo</span>
          </h3>
          <h1>Recuperar Senha</h1>
          <strong>1. Informe seu email</strong>

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Button isLoading={loading} type="submit">
            Recuperar
          </Button>
          <Link to="/">Voltar ao login</Link>
        </Form>
      </Content>
      <Background>
        <img src={LogoSignIn} alt="Logo Eco Franca" />
      </Background>
    </Container>
  );
}
