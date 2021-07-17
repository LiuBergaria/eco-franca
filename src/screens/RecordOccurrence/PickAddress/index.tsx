import React from 'react';

import Button from 'src/components/Button';
import Input from 'src/components/Input';

import { Container, FormContainer, StepText } from './styles';

interface IProps {
  onNext: () => void;
}

const PickAddress = ({ onNext }: IProps): JSX.Element => {
  return (
    <Container>
      <StepText>3. Confirme o endereço</StepText>

      <FormContainer onSubmit={() => {}}>
        <Input
          name={'street'}
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

      <Button title={'Próximo'} onPress={onNext} />
    </Container>
  );
};

export default PickAddress;
