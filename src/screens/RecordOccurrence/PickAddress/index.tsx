import React, { useRef, useState, useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';

import { FormHandles, SubmitHandler } from '@unform/core';
import Geolocation from 'react-native-geolocation-service';
import { Marker } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Yup from 'yup';

import Button from 'src/components/Button';
import Input from 'src/components/Input';
import { isGpsFeatureEnabled } from 'src/config';
import pickAddressSchema from 'src/schemas/RecordOccurrence/pickAddress';
import getValidationErrors from 'src/utils/getValidationErrors';

import { Container, FormContainer, MapViewWrapped, StepText } from './styles';

interface IProps {
  onNext: (data: IData) => void;
  type: 'gps' | 'manual';
  setPickAddressType(type: 'gps' | 'manual'): void;
}

interface IData {
  street?: string;
  number?: string;
  district?: string;
  reference?: string;
  latitude?: number;
  longitude?: number;
}

interface ICoords {
  latitude: number;
  longitude: number;
}

const PickAddress = ({
  onNext,
  type,
  setPickAddressType,
}: IProps): JSX.Element => {
  const formRef = useRef<FormHandles>(null);

  const [coordinates, setCoordinates] = useState<ICoords>();
  const [isLoading, setIsLoading] = useState(false);

  const insets = useSafeAreaInsets();

  const submit: SubmitHandler<IData> = async (data): Promise<void> => {
    setIsLoading(true);

    try {
      await pickAddressSchema.validate(data, { abortEarly: false });

      onNext(data);
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        formRef?.current?.setErrors(getValidationErrors(e));
      }
    }

    setIsLoading(false);
  };

  const requestLocationAccess = async (): Promise<'denied' | 'granted'> => {
    if (!isGpsFeatureEnabled) {
      return 'denied';
    }

    const response = await (Platform.OS === 'android'
      ? PermissionsAndroid.request('android.permission.ACCESS_FINE_LOCATION')
      : Geolocation.requestAuthorization('whenInUse'));

    if (
      response === 'denied' ||
      response === 'never_ask_again' ||
      response === 'disabled'
    ) {
      return 'denied';
    }

    return 'granted';
  };

  useEffect(() => {
    if (type === 'gps') {
      setIsLoading(true);

      requestLocationAccess().then((response) => {
        if (response === 'granted') {
          Geolocation.getCurrentPosition(
            (position) => {
              setCoordinates({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });

              setIsLoading(false);
            },
            () => {
              setPickAddressType('manual');
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
          );
        } else {
          setPickAddressType('manual');
        }
      });
    }
  }, [setPickAddressType, type]);

  const containerStyle = {
    paddingBottom: insets.bottom + 24,
    paddingTop: 24,
  };

  return (
    <Container contentContainerStyle={containerStyle}>
      <StepText>3. Confirme o endereço</StepText>

      {type === 'manual' && (
        <>
          <FormContainer ref={formRef} onSubmit={submit}>
            <Input
              name={'address'}
              placeholder={'Logradouro (Rua, avenida, etc)'}
              icon={'road'}
            />
            <Input name={'number'} placeholder={'Número'} icon={'sign'} />
            <Input
              name={'district'}
              placeholder={'Bairro'}
              icon={'map-signs'}
            />
            <Input
              name={'reference'}
              placeholder={'Ponto de referência (opcional)'}
              icon={'asterisk'}
            />
          </FormContainer>

          <Button
            title={'Próximo'}
            onPress={() => formRef.current?.submitForm()}
          />
        </>
      )}

      {type === 'gps' && !isLoading && coordinates && (
        <>
          <MapViewWrapped
            initialRegion={{
              ...coordinates,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          >
            <Marker coordinate={coordinates} />
          </MapViewWrapped>

          <Button title={'Próximo'} onPress={() => onNext(coordinates)} />
        </>
      )}
    </Container>
  );
};

export default PickAddress;
