import React from 'react';

import { Marker } from 'react-native-maps';

import { Container, MapViewWrapped, Field } from './styles';

interface IProps {
  address: {
    address: string | null;
    number: string | null;
    district: string | null;
    reference: string | null;
    latitude: string | null;
    longitude: string | null;
  };
}

const AddressInformations = ({
  address: { latitude, longitude, address, district, number, reference },
}: IProps): JSX.Element => {
  return (
    <Container>
      {!!latitude && !!longitude && (
        <MapViewWrapped
          initialRegion={{
            latitude: Number(latitude),
            longitude: Number(longitude),
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{
              latitude: Number(latitude),
              longitude: Number(longitude),
            }}
          />
        </MapViewWrapped>
      )}

      {!!address && !!number && (
        <Field.Row>
          <Field.Container>
            <Field.Name>Logradouro</Field.Name>
            <Field.Value>{address}</Field.Value>
          </Field.Container>

          <Field.Container>
            <Field.Name>Número</Field.Name>
            <Field.Value>{number}</Field.Value>
          </Field.Container>
        </Field.Row>
      )}

      {!!district && (
        <Field.Row>
          <Field.Container>
            <Field.Name>Bairro</Field.Name>
            <Field.Value>{district}</Field.Value>
          </Field.Container>
        </Field.Row>
      )}

      {!!reference && (
        <Field.Row>
          <Field.Container>
            <Field.Name>Ponto de referência</Field.Name>
            <Field.Value>{reference}</Field.Value>
          </Field.Container>
        </Field.Row>
      )}
    </Container>
  );
};

export default AddressInformations;
