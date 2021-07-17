import React from 'react';

import Button from 'src/components/Button';

import { Container, FormContainer, ObservationInput, StepText } from './styles';

interface IProps {
  onNext: () => void;
}

const Informations = ({ onNext }: IProps): JSX.Element => {
  return (
    <Container>
      <StepText>
        4. Preencha a data, hora, observações e selecione fotos
      </StepText>

      <FormContainer onSubmit={() => {}}>
        {/* Data e Hora */}

        <ObservationInput
          name={'reference'}
          placeholder={'Observações'}
          multiline={true}
        />
      </FormContainer>

      <Button title={'Próximo'} onPress={onNext} />
    </Container>
  );
};

export default Informations;
