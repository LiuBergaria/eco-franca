import React, { useRef, useState } from 'react';

import { FormHandles, SubmitHandler } from '@unform/core';
import * as Yup from 'yup';

import Button from 'src/components/Button';
import Input from 'src/components/Input';
import personalSectionSchema from 'src/schemas/CreateAccount/personalSectionSchema';
import api from 'src/services/api';
import getValidationErrors from 'src/utils/getValidationErrors';

import { FormContainer, StepText } from './styles';
interface IProps {
  goNext: (data: IData) => void;
}

interface IData {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
}

const PersonalSectionBlock = ({ goNext }: IProps): JSX.Element => {
  const formRef = useRef<FormHandles>(null);

  const [isLoading, setIsLoading] = useState(false);

  const submit: SubmitHandler<IData> = async (data): Promise<void> => {
    setIsLoading(true);

    try {
      await personalSectionSchema.validate(data, { abortEarly: false });

      const response = await api.post('/citizen/check-exists-email', data);

      if (response.data.exists) {
        formRef.current?.setErrors({
          email: 'Esse e-mail já possui cadastro',
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
      <StepText>2. Informe seus dados</StepText>

      <Input
        name={'first_name'}
        placeholder={'Nome'}
        icon={'user'}
        editable={!isLoading}
      />
      <Input
        name={'last_name'}
        placeholder={'Sobrenome'}
        icon={'user-friends'}
        editable={!isLoading}
      />
      <Input
        name={'phone_number'}
        placeholder={'WhatsApp'}
        icon={'phone'}
        editable={!isLoading}
        autoCompleteType={'tel'}
      />
      <Input
        name={'email'}
        placeholder={'E-mail'}
        icon={'envelope'}
        editable={!isLoading}
        keyboardType={'email-address'}
        textContentType={'emailAddress'}
        autoCompleteType={'email'}
        autoCapitalize={'none'}
      />

      <Button
        title={'Próximo'}
        onPress={() => formRef.current?.submitForm()}
        isLoading={isLoading}
      />
    </FormContainer>
  );
};

export default PersonalSectionBlock;
