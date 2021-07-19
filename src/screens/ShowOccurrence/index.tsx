import React, { useEffect, useState, useCallback } from 'react';

import { useRoute } from '@react-navigation/native';

import OccurrenceCard from 'src/components/OccurenceCard';
import api from 'src/services/api';

import RequestHistory, { IHistory } from './RequestHistory';
import { Container, Title, Wrapper } from './styles';

interface IFullOccurrence {
  category: string;
  status: string;
  description: string;
  occurrenceDate: string;
  newNotification: boolean;
  occurrenceNumber: string | null;
  violationNumber: string | null;
  address: {
    address: string;
    number: string;
    district: string;
    reference: string | null;
    latitude: string | null;
    longitude: string | null;
  };
  histories: IHistory[];
  violator: {
    name: string | undefined;
    vehicle: string | undefined;
    address: string | undefined;
    otherInformation: string | undefined;
  };
}

const ShowOccurrence = (): JSX.Element => {
  const route = useRoute();

  const [occurrence, setOccurrence] = useState<IFullOccurrence>();

  const getOccurrence = useCallback(async (): Promise<void> => {
    const response = await api.get('/occurrence/citizen/' + route.params?.id);

    setOccurrence(response.data);
  }, [route.params?.id]);

  useEffect(() => {
    getOccurrence();
  }, [getOccurrence]);

  return (
    <Container>
      <Wrapper>
        <Title>
          Ocorrência{' '}
          {occurrence?.occurrenceNumber
            ? `n° ${occurrence?.occurrenceNumber}`
            : 'criada'}
        </Title>

        {occurrence && (
          <>
            <OccurrenceCard data={occurrence} lightStyle={true} />
            <RequestHistory histories={occurrence.histories} />
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default ShowOccurrence;
