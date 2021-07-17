import React from 'react';

import Button from 'src/components/Button';
import Input from 'src/components/Input';

import { FormContainer, StepText } from './styles';

interface IProps {
  goNext: () => void;
}

const PersonalSectionBlock = ({ goNext }: IProps): JSX.Element => {
  return (
    <FormContainer onSubmit={() => {}}>
      <StepText>2. Informe seus dados</StepText>

      <Input name={'name'} placeholder={'Nome'} icon={'user'} />
      <Input name={'surname'} placeholder={'Sobrenome'} icon={'user-friends'} />
      <Input name={'whatsapp'} placeholder={'WhatsApp'} icon={'phone'} />
      <Input name={'email'} placeholder={'E-mail'} icon={'envelope'} />

      <Button title={'Próximo'} onPress={goNext} />
    </FormContainer>
  );
};

export default PersonalSectionBlock;
