import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import Colors from 'src/styles/Colors';

import { Container } from './styles';

const PhotosLoader = (): JSX.Element => {
  return (
    <Container>
      <SkeletonPlaceholder backgroundColor={Colors.placeholders.teal}>
        <SkeletonPlaceholder.Item
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          marginBottom={16}
        >
          <SkeletonPlaceholder.Item width={180} height={34.3} />
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item width={294} height={29.7} />
      </SkeletonPlaceholder>
    </Container>
  );
};

export default PhotosLoader;
