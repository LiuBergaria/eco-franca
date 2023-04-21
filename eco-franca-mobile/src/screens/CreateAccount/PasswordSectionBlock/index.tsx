import React, { useRef } from 'react';

import { FormHandles, SubmitHandler } from '@unform/core';
import * as Yup from 'yup';

import Button from 'src/components/Button';
import Input from 'src/components/Input';
import passwordSectionSchema from 'src/schemas/CreateAccount/passwordSectionSchema';
import getValidationErrors from 'src/utils/getValidationErrors';

import { FormContainer, StepText } from './styles';

interface IProps {
  goNext: (data: IData) => void;
}

interface IData {
  password: string;
  confirmPassword: string;
}

const PasswordSectionBlock = ({ goNext }: IProps): JSX.Element => {
  const formRef = useRef<FormHandles>(null);

  const submit: SubmitHandler<IData> = async (data): Promise<void> => {
    try {
      await passwordSectionSchema.validate(data, { abortEarly: false });

      goNext(data);
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        formRef?.current?.setErrors(getValidationErrors(e));
      }
    }
  };

  return (
    <FormContainer ref={formRef} onSubmit={submit}>
      <StepText>3. Crie sua senha</StepText>

      <Input
        name={'password'}
        placeholder={'Senha'}
        secureTextEntry={true}
        autoCompleteType={'password'}
      />
      <Input
        name={'confirmPassword'}
        placeholder={'Confirmar senha'}
        secureTextEntry={true}
        autoCompleteType={'password'}
        autoCapitalize={'none'}
      />

      <Button
        title={'Finalizar'}
        onPress={() => formRef.current?.submitForm()}
      />
    </FormContainer>
  );
};

export default PasswordSectionBlock;
