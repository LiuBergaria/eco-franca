import React from 'react';

import Button from 'src/components/Button';
import Input from 'src/components/Input';

import { FormContainer, StepText } from './styles';

interface IProps {
  goNext: () => void;
}

const PasswordSectionBlock = ({ goNext }: IProps): JSX.Element => {
  return (
    <FormContainer onSubmit={() => {}}>
      <StepText>3. Crie sua senha</StepText>

      <Input name={'password'} placeholder={'Senha'} secureTextEntry={true} />
      <Input
        name={'confirmPassword'}
        placeholder={'Confirmar senha'}
        secureTextEntry={true}
      />

      <Button title={'Finalizar'} onPress={goNext} />
    </FormContainer>
  );
};

export default PasswordSectionBlock;
