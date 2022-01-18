import React from 'react';

import { StackActions, useNavigation } from '@react-navigation/native';

import Button from 'src/components/Button';
import { MainNavigationProp, Screens } from 'src/Routes';

import { Container, Icon, Subtitle, Title } from './styles';

const CreateAccountSuccess = (): JSX.Element => {
  const navigation = useNavigation<MainNavigationProp>();

  return (
    <Container>
      <Icon name={'thumbs-up'} size={64} />
      <Title>
        Conta criada
        {'\n'}
        com sucesso!
      </Title>
      <Subtitle>
        Te enviamos um e-mail para confirmação.{'\n'}
        Você só poderá acessar o sistema após confirmar a conta!
      </Subtitle>
      <Button
        title={'Ir para login'}
        onPress={() => {
          navigation.dispatch(StackActions.pop(1));
          navigation.navigate(Screens.Login);
        }}
      />
    </Container>
  );
};

export default CreateAccountSuccess;
