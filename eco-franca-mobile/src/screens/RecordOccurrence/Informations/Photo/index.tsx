import React from 'react';

import { Asset } from 'react-native-image-picker';

import { CloseButton, Container, Icon, Image } from './styles';

interface IProps {
  asset: Asset;
  removeFn: () => void;
}

const Photo = ({ asset, removeFn }: IProps): JSX.Element => {
  return (
    <Container>
      <Image
        source={{ uri: asset.uri }}
        accessibilityIgnoresInvertColors={true}
      />

      <CloseButton onPress={removeFn}>
        <Icon />
      </CloseButton>
    </Container>
  );
};

export default Photo;
