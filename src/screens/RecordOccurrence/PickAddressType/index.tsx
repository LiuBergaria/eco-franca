import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PressableBlock from 'src/components/PressableBlock';
import { isGpsFeatureEnabled } from 'src/config';

import { Container, StepText } from './styles';

interface IProps {
  onNext: (pickAddressType: 'gps' | 'manual') => void;
}

const PickAddressType = ({ onNext }: IProps): JSX.Element => {
  const insets = useSafeAreaInsets();

  const containerStyle = {
    paddingBottom: insets.bottom + 24,
    paddingTop: 24,
  };

  return (
    <Container contentContainerStyle={containerStyle}>
      <StepText>2. Como irá inserir o endereço</StepText>

      {isGpsFeatureEnabled && (
        <PressableBlock
          title={'GPS'}
          icon={'map-marked-alt'}
          onPress={() => onNext('gps')}
          lightStyle={true}
          isRow={false}
        />
      )}
      <PressableBlock
        title={'Manual (escrito)'}
        icon={'pencil-alt'}
        onPress={() => onNext('manual')}
        isRow={false}
      />
    </Container>
  );
};

export default PickAddressType;
