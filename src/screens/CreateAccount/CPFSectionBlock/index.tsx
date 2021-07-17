import React from 'react';

import Button from 'src/components/Button';
import Input from 'src/components/Input';

import { FormContainer, StepText } from './styles';

interface IProps {
  goNext: () => void;
}

const CPFSectionBlock = ({ goNext }: IProps): JSX.Element => {
  return (
    <FormContainer onSubmit={() => {}}>
      <StepText>1. Informe seu CPF</StepText>

      <Input name={'cpf'} placeholder={'000.000.000-00'} icon={'user'} />

      <Button title={'Próximo'} onPress={goNext} />
    </FormContainer>
  );
};

export default CPFSectionBlock;
