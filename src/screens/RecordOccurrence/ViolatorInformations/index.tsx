import React, { useRef, useState } from 'react';

import { FormHandles, SubmitHandler } from '@unform/core';
import * as Yup from 'yup';

import Button from 'src/components/Button';
import Input from 'src/components/Input';
import Switch from 'src/components/Switch';
import violatorInformationsSchema from 'src/schemas/RecordOccurrence/violatorInformationsSchema';
import getValidationErrors from 'src/utils/getValidationErrors';

import {
  Container,
  FormContainer,
  InstructionsText,
  MultilineInput,
  StepText,
} from './styles';

interface IProps {
  onNext: (data: IData) => void;
}

interface IData {
  violatorName: string;
  violatorVehicle: string;
  violatorAddress: string;
  violatorOtherInformation: string;
}

const ViolatorInformations = ({ onNext }: IProps): JSX.Element => {
  const formRef = useRef<FormHandles>(null);

  const [selectedOption, setSelectedOption] = useState<number | undefined>(
    undefined,
  );

  const submit: SubmitHandler<IData> = async (data): Promise<void> => {
    try {
      await violatorInformationsSchema.validate(data, { abortEarly: false });

      onNext(data);
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        formRef?.current?.setErrors(getValidationErrors(e));
      }
    }
  };

  return (
    <Container>
      <StepText>5. Você tem informações sobre o infrator?</StepText>

      <Switch selected={selectedOption} setSelected={setSelectedOption} />

      <FormContainer ref={formRef} onSubmit={submit}>
        {selectedOption === 0 && (
          <>
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
              name={'violatorVehicle'}
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
              name={'violatorOtherInformation'}
              placeholder={
                'Outras informações (vizinhos, empresa de trabalho, contato, etc)'
              }
              multiline={true}
              icon={'info-circle'}
            />
          </>
        )}
      </FormContainer>

      {selectedOption !== undefined && (
        <Button
          title={'Finalizar'}
          onPress={() => formRef.current?.submitForm()}
        />
      )}
    </Container>
  );
};

export default ViolatorInformations;
