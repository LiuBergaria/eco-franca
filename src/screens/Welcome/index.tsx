import React from 'react';

import {
  Container,
  Title,
  Subtitle,
  ActionsContainer,
  ActionText,
  StyledButton,
  Wrapper,
  SizedLogo,
} from './styles';

const Welcome = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <SizedLogo />

        <Title>Seja bem-vindo!</Title>
        <Subtitle>
          Com o Eco Franca você pode registrar ocorrências da sua regiao
        </Subtitle>

        <ActionsContainer>
          <ActionText>O que você deseja fazer?</ActionText>

          <StyledButton title={'Entrar'} />
          <StyledButton title={'Criar conta'} colorStyle={'lightTeal'} />
        </ActionsContainer>
      </Wrapper>
    </Container>
  );
};

export default Welcome;
