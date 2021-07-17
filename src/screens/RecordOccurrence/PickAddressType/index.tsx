import React from 'react';

import PressableBlock from 'src/components/PressableBlock';

import { Container, StepText } from './styles';

interface IProps {
  onNext: () => void;
}

const PickAddressType = ({ onNext }: IProps): JSX.Element => {
  return (
    <Container>
      <StepText>2. Como irá inserir o endereço</StepText>

      <PressableBlock
        title={'GPS'}
        icon={'map-marked-alt'}
        onPress={onNext}
        lightStyle={true}
        isRow={false}
      />
      <PressableBlock
        title={'Manual (escrito)'}
        icon={'pencil-alt'}
        onPress={onNext}
        isRow={false}
      />
    </Container>
  );
};

export default PickAddressType;
