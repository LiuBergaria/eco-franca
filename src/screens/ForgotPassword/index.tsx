import React, { useRef, useCallback, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { FormHandles, SubmitHandler } from '@unform/core';

import Button from 'src/components/Button';
import Input from 'src/components/Input';
import { useAuth } from 'src/contexts/auth';
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
}

const ForgotPassword = (): JSX.Element => {
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();
  const { signIn } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);

  const submit: SubmitHandler<IData> = useCallback(async (data) => {
    setIsLoading(true);

    const response = await api.post('/citizen/recovery-password', data);

    if (response.status === 404) {
      formRef.current?.setErrors({
        cpf: 'CPF incorreto',
      });
    } else if (response.status === 204) {
      setIsSended(true);
    }

    setIsLoading(false);
  }, []);

  if (isSended) {
    return (
      <Container>
        <Wrapper>
          <Title>E-mail enviado</Title>
          <Subtitle>Verifique sua caixa de entrada</Subtitle>

          <StepText>Você já pode voltar para o login</StepText>

          <Button
            title={'Voltar'}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          Recupere{'\n'}
          sua conta
        </Title>
        <Subtitle>Te enviaremos um e-mail contendo para recuperação</Subtitle>

        <FormContainer ref={formRef} onSubmit={submit}>
          <StepText>Informe seu CPF</StepText>

          <Input
            placeholder={'CPF (sem pontuação)'}
            name={'cpf'}
            icon={'user'}
            editable={!isLoading}
            keyboardType={'numeric'}
            maxLength={11}
          />

          <Button
            title={'Enviar'}
            onPress={() => {
              formRef.current?.submitForm();
            }}
            isLoading={isLoading}
          />
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default ForgotPassword;
