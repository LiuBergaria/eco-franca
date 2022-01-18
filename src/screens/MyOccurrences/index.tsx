import React, { useState, useEffect } from 'react';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import OccurrenceCard, { IOccurrence } from 'src/components/OccurenceCard';
import { useHeader } from 'src/contexts/header';
import { MainNavigationProp, Screens } from 'src/Routes';
import api from 'src/services/api';

import { Container, List, LoaderContainer, Title } from './styles';

const MyOccurrences = (): JSX.Element => {
  const navigation = useNavigation<MainNavigationProp>();
  const { resetGoBackCallback } = useHeader();

  const [occurrences, setOccurrences] = useState<IOccurrence[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getOccurrences = async (): Promise<void> => {
    setIsLoading(true);

    const response = await api.get('/occurrence/citizen/list');

    setOccurrences(response.data);

    setIsLoading(false);
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

      {isLoading && !occurrences.length && (
        <LoaderContainer>
          <OccurrenceCard.Loader lightStyle={true} />
          <OccurrenceCard.Loader />
        </LoaderContainer>
      )}

      <List
        data={occurrences}
        keyExtractor={({ id }) => id}
        renderItem={({ item, index }) => (
          <OccurrenceCard
            data={item}
            lightStyle={index % 2 === 0}
            onPress={() => {
              navigation.navigate(Screens.ShowOccurrence, { id: item.id });
            }}
          />
        )}
      />
    </Container>
  );
};

export default MyOccurrences;
