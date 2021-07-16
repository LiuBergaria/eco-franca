import React from 'react';

import Button from 'src/components/Button';
import Input from 'src/components/Input';

import {
  Container,
  Wrapper,
  Title,
  Subtitle,
  FormContainer,
  StepText,
} from './styles';

const Login = (): JSX.Element => {
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

        <FormContainer onSubmit={() => {}}>
          <StepText>Informe seu CPF e senha</StepText>

          <Input placeholder={'000.000.000-00'} name={'cpf'} icon={'user'} />
          <Input
            placeholder={'Senha'}
            name={'password'}
            secureTextEntry={true}
            icon={'eye'}
          />

          <Button title={'Entrar'} onPress={() => {}} />
          <Button
            title={'Esqueci minha senha'}
            colorStyle={'transparent'}
            onPress={() => {}}
          />
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default Login;
