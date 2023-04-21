import React from 'react';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { useHeader } from 'src/contexts/header';
import { MainNavigationProp, Screens } from 'src/Routes';

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
  const navigation = useNavigation<MainNavigationProp>();
  const { setShowLogo } = useHeader();

  useFocusEffect(() => {
    setShowLogo(false);

    return () => setShowLogo(true);
  });

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

          <StyledButton
            title={'Entrar'}
            onPress={() => {
              navigation.navigate(Screens.Login);
            }}
          />
          <StyledButton
            title={'Criar conta'}
            colorStyle={'lightTeal'}
            onPress={() => {
              navigation.navigate(Screens.CreateAccount);
            }}
          />
        </ActionsContainer>
      </Wrapper>
    </Container>
  );
};

export default Welcome;
