import { useRef, useCallback, useState } from 'react';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory, useParams } from 'react-router-dom';

import { useToast } from '../../hooks/ToastContext';

import { Container, Content, Background } from './styles';

import LogoSignIn from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

interface ResetPasswordFormProps {
  password: string;
  confirmPassword: string;
}

export default function ResetPassword(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (resetProps: ResetPasswordFormProps) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('Esse campo é obrigatório'),
          confirmPassword: Yup.string()
            .oneOf(
              [Yup.ref('password'), null],
              'Senha e confirmação de senha estão diferentes',
            )
            .required('Esse campo é obrigatório'),
        });

        await schema.validate(resetProps, {
          abortEarly: false,
        });

        const response = await api.post(`employee/recovery-password/${id}`, {
          password: resetProps.password,
        });

        if (response.status === 404) {
          addToast({
            type: 'error',
            title: 'Erro ao alterar senha',
            description:
              'Chave de recuperação de senha inválido, tente novamente',
          });
        } else {
          history.push('/');

          addToast({
            type: 'success',
            title: 'Senha alterada com sucesso',
          });
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro ao alterar senha',
          description: 'Ocorreu um erro ao alterar sua senha, tente novamente',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, history, id],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h3>
            Acesso <br />
            <span>Administrativo</span>
          </h3>
          <h1>Alterar Senha</h1>
          <strong>1. Informe sua nova senha</strong>

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Nova senha"
            disabled={loading}
          />
          <Input
            name="confirmPassword"
            icon={FiLock}
            type="password"
            placeholder="Confirmar nova senha"
            disabled={loading}
          />

          <Button isLoading={loading} type="submit">
            Alterar senha
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
