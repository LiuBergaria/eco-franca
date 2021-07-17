import React, { useState } from 'react';

import Button from 'src/components/Button';
import Input from 'src/components/Input';
import Switch from 'src/components/Switch';

import {
  Container,
  FormContainer,
  InstructionsText,
  MultilineInput,
  StepText,
} from './styles';

const ViolatorInformations = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<number | undefined>(
    undefined,
  );

  return (
    <Container>
      <StepText>5. Você tem informações sobre o infrator?</StepText>

      <Switch selected={selectedOption} setSelected={setSelectedOption} />

      {selectedOption === 0 && (
        <FormContainer onSubmit={() => {}}>
          <InstructionsText>
            Preencha apenas as informaçoes que você possui do infrator (nenhum
            campo é obrigatório)
          </InstructionsText>

          <Input
            name={'violatorName'}
            placeholder={'Nome do infrator'}
            icon={'user-times'}
          />
          <MultilineInput
            name={'violatorCar'}
            placeholder={
              'Informações do carro do infrator (automóvel, marca, cor, placa, etc)'
            }
            multiline={true}
            icon={'car'}
          />
          <MultilineInput
            name={'violatorAddress'}
            placeholder={'Informações do endereço do infrator'}
            multiline={true}
            icon={'map'}
          />
          <MultilineInput
            name={'violatorInformations'}
            placeholder={
              'Outras informações (vizinhos, empresa de trabalho, contato, etc)'
            }
            multiline={true}
            icon={'info-circle'}
          />
        </FormContainer>
      )}

      {selectedOption !== undefined && <Button title={'Finalizar'} />}
    </Container>
  );
};

export default ViolatorInformations;
