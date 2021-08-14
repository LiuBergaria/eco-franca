import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import NotificationBadger from 'src/components/NotificationBadger';
import PressableBlock from 'src/components/PressableBlock';
import api from 'src/services/api';
import Emitter, { EventTypes } from 'src/utils/Emitter';

import { Container, ItemsContainer, Wrapper } from './styles';

const Home = (): JSX.Element => {
  const navigation = useNavigation();
  const [notificationsCount, setNotificationsCount] = useState(0);

  const loadNotificationsCount = async (): Promise<void> => {
    const response = await api.get('/occurrence/citizen/count');

    setNotificationsCount(response.data.count ?? 0);
  };

  useEffect(() => {
    loadNotificationsCount();
  }, []);

  return (
    <Container>
      <Wrapper>
        <ItemsContainer>
          <PressableBlock
            title={'Registrar\nOcorrência'}
            icon={'pen-alt'}
            lightStyle={true}
            onPress={() => {
              Emitter.emit(EventTypes.BackgroundAnim, { type: 'outIn' });
              navigation.navigate('RecordOccurrence');
            }}
          />
          <PressableBlock
            title={'Visualizar\nOcorrências'}
            icon={'book-open'}
            floatElement={
              notificationsCount !== 0 && (
                <NotificationBadger text={notificationsCount.toString()} />
              )
            }
            onPress={() => {
              Emitter.emit(EventTypes.BackgroundAnim, { type: 'outIn' });
              navigation.navigate('MyOccurrences');
            }}
          />
          <PressableBlock
            title={'Minha\nConta'}
            icon={'smile'}
            lightStyle={true}
            onPress={() => {
              Emitter.emit(EventTypes.BackgroundAnim, { type: 'outIn' });
              navigation.navigate('MyAccount');
            }}
          />
        </ItemsContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;
