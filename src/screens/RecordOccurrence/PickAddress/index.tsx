import React, { useRef, useState } from 'react';

import { FormHandles, SubmitHandler } from '@unform/core';
import * as Yup from 'yup';

import Button from 'src/components/Button';
import Input from 'src/components/Input';
import pickAddressSchema from 'src/schemas/RecordOccurrence/pickAddress';
import getValidationErrors from 'src/utils/getValidationErrors';

import { Container, FormContainer, StepText } from './styles';

interface IProps {
  onNext: (data: IData) => void;
  type: 'gps' | 'manual';
}

interface IData {
  street: string;
  number: string;
  district: string;
  reference: string;
}

const PickAddress = ({ onNext, type }: IProps): JSX.Element => {
  const formRef = useRef<FormHandles>(null);

  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <Container>
      <StepText>3. Confirme o endereço</StepText>

      {type === 'manual' && (
        <FormContainer ref={formRef} onSubmit={submit}>
          <Input
            name={'address'}
            placeholder={'Logradouro (Rua, avenida, etc)'}
            icon={'road'}
          />
          <Input name={'number'} placeholder={'Número'} icon={'sign'} />
          <Input name={'district'} placeholder={'Bairro'} icon={'map-signs'} />
          <Input
            name={'reference'}
            placeholder={'Ponto de referência (opcional)'}
            icon={'asterisk'}
          />
        </FormContainer>
      )}

      <Button title={'Próximo'} onPress={() => formRef.current?.submitForm()} />
    </Container>
  );
};

export default PickAddress;
