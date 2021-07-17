import React from 'react';

import { useNavigation } from '@react-navigation/native';

import Emitter, { EventTypes } from 'src/utils/Emitter';

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
  const navigation = useNavigation();

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
              Emitter.emit(EventTypes.BackgroundAnim, { type: 'outIn' });
              navigation.navigate('Login');
            }}
          />
          <StyledButton
            title={'Criar conta'}
            colorStyle={'lightTeal'}
            onPress={() => {
              Emitter.emit(EventTypes.BackgroundAnim, { type: 'outIn' });
              navigation.navigate('CreateAccount');
            }}
          />
        </ActionsContainer>
      </Wrapper>
    </Container>
  );
};

export default Welcome;
