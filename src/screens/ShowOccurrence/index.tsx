import React, { useEffect, useState, useCallback } from 'react';

import { useFocusEffect, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import OccurrenceCard from 'src/components/OccurenceCard';
import { useHeader } from 'src/contexts/header';
import OccurrenceStatus from 'src/enums/OccurrenceStatus';
import OccurrenceTypes from 'src/enums/OccurrenceTypes';
import { ShowOccurrenceScreenProps } from 'src/Routes';
import api from 'src/services/api';

import AddressInformations from './AddressInformations';
import MoreInformations from './MoreInformations';
import Photos from './Photos';
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
  photos: string[];
}

const ShowOccurrence = (): JSX.Element => {
  const {
    params: { id },
  } = useRoute<ShowOccurrenceScreenProps>();
  const { resetGoBackCallback } = useHeader();
  const insets = useSafeAreaInsets();

  const [occurrence, setOccurrence] = useState<IFullOccurrence>();
  const [isLoading, setIsLoading] = useState(false);

  const removeNewNotification = useCallback(async () => {
    await api.patch('/occurrence/' + id + '/remove-notification');
  }, [id]);

  const getOccurrence = useCallback(async (): Promise<void> => {
    setIsLoading(true);

    const response = await api.get('/occurrence/citizen/' + id);

    if (response.data.newNotification) {
      removeNewNotification();
    }

    setOccurrence(response.data);
    setIsLoading(false);
  }, [id, removeNewNotification]);

  useFocusEffect(() => {
    resetGoBackCallback();
  });

  useEffect(() => {
    getOccurrence();
  }, [getOccurrence]);

  const title = occurrence?.occurrenceNumber
    ? `Ocorrência n° ${occurrence?.occurrenceNumber}`
    : 'Ocorrência criada';

  const wrapperStyle = {
    paddingBottom: insets.bottom + 24,
    paddingTop: 24,
  };

  return (
    <Container>
      <Wrapper scrollEnabled={!isLoading} contentContainerStyle={wrapperStyle}>
        <Title>{title}</Title>

        {isLoading && !occurrence && (
          <>
            <OccurrenceCard.Loader lightStyle={true} />
            <RequestHistory.Loader />
            <Photos.Loader />
            <MoreInformations.Loader />
          </>
        )}

        {occurrence && (
          <>
            <OccurrenceCard data={occurrence} lightStyle={true} />
            <RequestHistory histories={occurrence.histories} />
            <Photos photos={occurrence.photos} />
            <MoreInformations
              data={{
                description: occurrence.description,
                violator: occurrence.violator,
              }}
            />
            <AddressInformations address={occurrence.address} />
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default ShowOccurrence;
