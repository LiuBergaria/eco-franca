import React from 'react';

import { StackActions, useNavigation } from '@react-navigation/native';

import Button from 'src/components/Button';
import Emitter, { EventTypes } from 'src/utils/Emitter';

import { Container, Icon, Subtitle, Title } from './styles';

const RecordOccurrenceSuccess = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <Container>
      <Icon name={'grin-beam'} size={64} />
      <Title>
        Ocorrência enviada
        {'\n'}
        com sucesso!
      </Title>
      <Subtitle>
        Te enviamos um e-mail para confirmação.{'\n'}
        Você só poderá acessar o sistema após confirmar a conta!
      </Subtitle>
      <Button
        title={'Ir para home'}
        onPress={() => {
          navigation.dispatch(StackActions.pop(1));
          Emitter.emit(EventTypes.BackgroundAnim, { type: 'outIn' });
        }}
      />
    </Container>
  );
};

export default RecordOccurrenceSuccess;
