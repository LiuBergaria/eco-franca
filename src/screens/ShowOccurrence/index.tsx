import React, { useEffect, useState, useCallback } from 'react';

import { useFocusEffect, useRoute } from '@react-navigation/native';

import OccurrenceCard from 'src/components/OccurenceCard';
import { useHeader } from 'src/contexts/header';
import OccurrenceStatus from 'src/enums/OccurrenceStatus';
import OccurrenceTypes from 'src/enums/OccurrenceTypes';
import { ShowOccurrenceScreenProps } from 'src/Routes';
import api from 'src/services/api';

import RequestHistory, { IHistory } from './RequestHistory';
import { Container, Title, Wrapper } from './styles';

interface IFullOccurrence {
  category: OccurrenceTypes;
  status: OccurrenceStatus;
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
  const {
    params: { id },
  } = useRoute<ShowOccurrenceScreenProps>();
  const { resetGoBackCallback } = useHeader();

  const [occurrence, setOccurrence] = useState<IFullOccurrence>();

  const removeNewNotification = useCallback(async () => {
    await api.patch('/occurrence/' + id + '/remove-notification');
  }, [id]);

  const getOccurrence = useCallback(async (): Promise<void> => {
    const response = await api.get('/occurrence/citizen/' + id);

    if (response.data.newNotification) {
      removeNewNotification();
    }

    setOccurrence(response.data);
  }, [id, removeNewNotification]);

  useFocusEffect(() => {
    resetGoBackCallback();
  });

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
