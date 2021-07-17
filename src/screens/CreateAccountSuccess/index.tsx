import React from 'react';

import { useNavigation } from '@react-navigation/native';

import Button from 'src/components/Button';
import Emitter, { EventTypes } from 'src/utils/Emitter';

import { Container, Icon, Subtitle, Title } from './styles';

const CreateAccountSuccess = (): JSX.Element => {
  const navigation = useNavigation();

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
          Emitter.emit(EventTypes.BackgroundAnim, { type: 'outIn' });
          navigation.navigate('Login');
        }}
      />
    </Container>
  );
};

export default CreateAccountSuccess;
