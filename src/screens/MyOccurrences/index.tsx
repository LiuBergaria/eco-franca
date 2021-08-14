import React, { useState, useEffect } from 'react';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import OccurrenceCard, { IOccurrence } from 'src/components/OccurenceCard';
import { useHeader } from 'src/contexts/header';
import api from 'src/services/api';
import Emitter, { EventTypes } from 'src/utils/Emitter';

import { Container, List, Title } from './styles';

const MyOccurrences = (): JSX.Element => {
  const navigation = useNavigation();
  const { resetGoBackCallback } = useHeader();

  const [occurrences, setOccurrences] = useState<IOccurrence[]>([]);

  const getOccurrences = async (): Promise<void> => {
    const response = await api.get('/occurrence/citizen/list');

    setOccurrences(response.data);
  };

  useFocusEffect(() => {
    resetGoBackCallback();
  });

  useEffect(() => {
    getOccurrences();
  }, []);

  return (
    <Container>
      <Title>Minhas ocorrências</Title>

      <List
        data={occurrences}
        keyExtractor={({ id }) => id}
        renderItem={({ item, index }) => (
          <OccurrenceCard
            data={item}
            lightStyle={index % 2 === 0}
            onPress={() => {
              Emitter.emit(EventTypes.BackgroundAnim, { type: 'outIn' });
              navigation.navigate('ShowOccurrence', { id: item.id });
            }}
          />
        )}
      />
    </Container>
  );
};

export default MyOccurrences;
