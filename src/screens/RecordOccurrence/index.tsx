import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, Platform, ScrollView } from 'react-native';

import { Asset } from 'react-native-image-picker';

import { useHeader } from 'src/contexts/header';
import OccurrenceTypes from 'src/enums/OccurrenceTypes';
import api from 'src/services/api';

import Informations from './Informations';
import Loading from './Loading';
import PickAddress from './PickAddress';
import PickAddressType from './PickAddressType';
import RecordOccurrenceSuccess from './RecordOccurrenceSuccess';
import SelectProblem from './SelectProblem';
import { Container, HorizontalScroll } from './styles';
import ViolatorInformations from './ViolatorInformations';

interface IFullData {
  category: OccurrenceTypes;
  street?: string;
  number?: string;
  district?: string;
  reference?: string;
  latitude?: number;
  longitude?: number;
  violatorName: string;
  violatorVehicle: string;
  violatorAddress: string;
  violatorOtherInformation: string;
  assets: Asset[];
  occurrenceDate: string;
  observations: string;
}

const RecordOccurrence = (): JSX.Element => {
  const scrollRef = useRef<ScrollView>(null);
  const data = useRef<IFullData>({} as IFullData);

  const [occurrenceId, setOccurrenceId] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pickAddressType, setPickAddressType] = useState<'gps' | 'manual'>(
    'gps',
  );

  const { addGoBackCallback, resetGoBackCallback } = useHeader();

  const scrollTo = useCallback((page: number) => {
    scrollRef.current?.scrollTo({
      x: Dimensions.get('window').width * (page - 1),
    });
  }, []);

  useEffect(() => {
    scrollTo(currentPage);

    if (currentPage === 1 || currentPage === 6 || currentPage === 7) {
      resetGoBackCallback();
    } else {
      const goBack = (): void => {
        setCurrentPage(currentPage - 1);
      };

      addGoBackCallback(goBack);
    }
  }, [scrollTo, currentPage, resetGoBackCallback, addGoBackCallback]);

  const uploadImages = async (id: string): Promise<void> => {
    setIsLoading(true);

    const formData = new FormData();

    for (const asset of data.current.assets) {
      formData.append('files', {
        name: asset.fileName,
        type: asset.type,
        uri:
          Platform.OS === 'android'
            ? asset.uri
            : asset.uri?.replace('file://', ''),
      });
    }

    const response = await api.post(`/occurrence/${id}/photos`, formData);

    setIsLoading(false);

    if (response.status === 204) {
      setCurrentPage((oldCurrentPage) => oldCurrentPage + 1);
    }
  };

  const createOccurrence = async (): Promise<void> => {
    setCurrentPage((oldCurrentPage) => oldCurrentPage + 1);
    setIsLoading(true);

    const occurrenceRequestBody = {
      ...data.current,
      category: OccurrenceTypes[data.current.category],
      assets: undefined,
    };

    const response = await api.post('/occurrence', occurrenceRequestBody);

    setIsLoading(false);

    if (response.status === 200) {
      setOccurrenceId(response.data.id);

      uploadImages(response.data.id);
    }
  };

  return (
    <Container>
      <HorizontalScroll
        ref={scrollRef}
        horizontal={true}
        pagingEnabled={true}
        decelerationRate={0}
        snapToAlignment={'center'}
        snapToInterval={Dimensions.get('window').width}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      >
        <SelectProblem
          onNext={(incomingData) => {
            data.current = { ...data.current, ...incomingData };

            setCurrentPage(currentPage + 1);
          }}
        />
        <PickAddressType
          onNext={(incomingPickAddressType) => {
            setPickAddressType(incomingPickAddressType);

            setCurrentPage(currentPage + 1);
          }}
        />
        <PickAddress
          type={pickAddressType}
          onNext={(incomingData) => {
            data.current = { ...data.current, ...incomingData };

            setCurrentPage(currentPage + 1);
          }}
          setPickAddressType={setPickAddressType}
        />
        <Informations
          onNext={(incomingData) => {
            data.current = { ...data.current, ...incomingData };

            setCurrentPage(currentPage + 1);
          }}
        />
        <ViolatorInformations
          onNext={(incomingData) => {
            data.current = { ...data.current, ...incomingData };

            createOccurrence();
          }}
        />
        <Loading
          isLoading={isLoading}
          loadingType={occurrenceId !== undefined ? 'upload' : 'occurrence'}
        />
        <RecordOccurrenceSuccess />
      </HorizontalScroll>
    </Container>
  );
};

export default RecordOccurrence;
