import React from 'react';

import { Container, Field } from './styles';

interface IProps {
  data: {
    description: string;
    violator: {
      name?: string;
      vehicle?: string;
      address?: string;
      otherInformation?: string;
    };
  };
}

const MoreInformations: React.FC<IProps> = ({
  data: { description, violator },
}) => {
  return (
    <Container>
      <Field.Row>
        <Field.Container>
          <Field.Name>Observações</Field.Name>
          <Field.Value>{description}</Field.Value>
        </Field.Container>
      </Field.Row>

      {(violator.name || violator.vehicle) && (
        <Field.Row>
          {violator.name && (
            <Field.Container>
              <Field.Name>Nome do infrator</Field.Name>
              <Field.Value>{violator.name}</Field.Value>
            </Field.Container>
          )}
          {violator.vehicle && (
            <Field.Container>
              <Field.Name>Carro do infrator</Field.Name>
              <Field.Value>{violator.vehicle}</Field.Value>
            </Field.Container>
          )}
        </Field.Row>
      )}

      {violator.address && (
        <Field.Row>
          <Field.Container>
            <Field.Name>Endereço do infrator</Field.Name>
            <Field.Value>{violator.address}</Field.Value>
          </Field.Container>
        </Field.Row>
      )}

      {violator.otherInformation && (
        <Field.Row>
          <Field.Container>
            <Field.Name>Outras informações do infrator</Field.Name>
            <Field.Value>{violator.otherInformation}</Field.Value>
          </Field.Container>
        </Field.Row>
      )}
    </Container>
  );
};

export default MoreInformations;
