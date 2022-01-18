import React from 'react';

import { StackActions, useNavigation } from '@react-navigation/native';

import Button from 'src/components/Button';
import { MainNavigationProp } from 'src/Routes';

import { Container, Icon, Subtitle, Title } from './styles';

const RecordOccurrenceSuccess = (): JSX.Element => {
  const navigation = useNavigation<MainNavigationProp>();

  return (
    <Container>
      <Icon name={'grin-beam'} size={64} />
      <Title>
        Ocorrência enviada
        {'\n'}
        com sucesso!
      </Title>
      <Subtitle>
        A sua solicitação já está sendo analisada e você pode acompanhar o
        status no aplicativo!{'\n'}
        Caso fique com alguma dúvida, entre em contato com o órgão responsável.
      </Subtitle>
      <Button
        title={'Ir para home'}
        onPress={() => {
          navigation.dispatch(StackActions.pop(1));
        }}
      />
    </Container>
  );
};

export default RecordOccurrenceSuccess;
