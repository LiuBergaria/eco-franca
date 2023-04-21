import React, { useRef, useState } from 'react';

import { FormHandles, SubmitHandler } from '@unform/core';
import * as Yup from 'yup';

import Button from 'src/components/Button';
import Input from 'src/components/Input';
import cpfSectionSchema from 'src/schemas/CreateAccount/cpfSectionSchema';
import api from 'src/services/api';
import getValidationErrors from 'src/utils/getValidationErrors';

import { FormContainer, StepText } from './styles';

interface IProps {
  goNext: (data: IData) => void;
}

interface IData {
  cpf: string;
}

const CPFSectionBlock = ({ goNext }: IProps): JSX.Element => {
  const formRef = useRef<FormHandles>(null);

  const [isLoading, setIsLoading] = useState(false);

  const submit: SubmitHandler<IData> = async (data): Promise<void> => {
    setIsLoading(true);

    try {
      await cpfSectionSchema.validate(data, { abortEarly: false });

      const response = await api.post('/citizen/check-exists-cpf', data);

      if (response.data.exists) {
        formRef.current?.setErrors({
          cpf: 'Esse CPF já possui cadastro',
        });
      } else {
        goNext(data);
      }
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        formRef?.current?.setErrors(getValidationErrors(e));
      }
    }

    setIsLoading(false);
  };

  return (
    <FormContainer ref={formRef} onSubmit={submit}>
      <StepText>1. Informe seu CPF</StepText>

      <Input
        name={'cpf'}
        placeholder={'CPF (sem pontuação)'}
        icon={'user'}
        editable={!isLoading}
        keyboardType={'numeric'}
        maxLength={11}
      />

      <Button
        title={'Próximo'}
        onPress={() => formRef.current?.submitForm()}
        isLoading={isLoading}
      />
    </FormContainer>
  );
};

export default CPFSectionBlock;
