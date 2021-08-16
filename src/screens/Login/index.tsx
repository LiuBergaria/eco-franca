import React, { useRef, useCallback, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { FormHandles, SubmitHandler } from '@unform/core';

import Button from 'src/components/Button';
import Input from 'src/components/Input';
import { useAuth } from 'src/contexts/auth';
import { MainNavigationProp, Screens } from 'src/Routes';
import api from 'src/services/api';
import Emitter, { EventTypes } from 'src/utils/Emitter';

import {
  Container,
  Wrapper,
  Title,
  Subtitle,
  FormContainer,
  StepText,
} from './styles';

interface IData {
  cpf: string;
  password: string;
}
const Login = (): JSX.Element => {
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation<MainNavigationProp>();
  const { signIn } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const submit: SubmitHandler<IData> = useCallback(
    async (data) => {
      setIsLoading(true);

      const response = await api.post('/citizen/login', data);

      setTimeout(() => {
        if (response.status === 403) {
          formRef.current?.setErrors({
            cpf: 'Por favor, confirme seu e-mail para acessar',
          });
        } else if (response.status === 404) {
          formRef.current?.setErrors({
            cpf: 'CPF e/ou senha incorretos',
          });
        } else if (response.status === 200) {
          signIn({
            token: response.data.token,
            user: {
              first_name: response.data.first_name,
              last_name: response.data.last_name,
              cpf: response.data.cpf,
              phone_number: response.data.phone_number,
              email: response.data.email,
            },
          });

          Emitter.emit(EventTypes.BackgroundAnim, { type: 'outIn' });
          navigation.navigate(Screens.Home);
        }
        setIsLoading(false);
      }, 2000);
    },
    [navigation, signIn],
  );

  return (
    <Container>
      <Wrapper>
        <Title>
          Entre com{'\n'}
          seus dados
        </Title>
        <Subtitle>
          Acesse o sistema e registre{'\n'}
          suas ocorrências
        </Subtitle>

        <FormContainer ref={formRef} onSubmit={submit}>
          <StepText>Informe seu CPF e senha</StepText>

          <Input
            placeholder={'CPF (sem pontuação)'}
            name={'cpf'}
            icon={'user'}
            editable={!isLoading}
            keyboardType={'numeric'}
            maxLength={11}
          />
          <Input
            placeholder={'Senha'}
            name={'password'}
            secureTextEntry={true}
            icon={'eye'}
            editable={!isLoading}
            autoCompleteType={'password'}
            autoCapitalize={'none'}
          />

          <Button
            title={'Entrar'}
            onPress={() => {
              formRef.current?.submitForm();
            }}
            isLoading={isLoading}
          />
          <Button
            title={'Esqueci minha senha'}
            colorStyle={'transparent'}
            disabled={isLoading}
            onPress={() => {
              Emitter.emit(EventTypes.BackgroundAnim, { type: 'outIn' });
              navigation.navigate(Screens.ForgotPassword);
            }}
          />
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default Login;
