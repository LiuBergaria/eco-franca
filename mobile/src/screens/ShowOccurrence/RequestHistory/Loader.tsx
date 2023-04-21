import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import Colors from 'src/styles/Colors';

import { Container } from './styles';

const RequestHistoryLoader = (): JSX.Element => {
  return (
    <Container>
      <SkeletonPlaceholder backgroundColor={Colors.placeholders.lightTeal}>
        <SkeletonPlaceholder.Item
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          marginBottom={16}
        >
          <SkeletonPlaceholder.Item width={150} height={17.3} />
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          flexDirection={'row'}
          justifyContent={'flex-end'}
          alignItems={'center'}
        >
          <SkeletonPlaceholder.Item
            width={12.3}
            height={12.3}
            borderRadius={6.15}
            marginRight={8}
          />
          <SkeletonPlaceholder.Item width={105.7} height={15} />
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          flexDirection={'row'}
          justifyContent={'flex-start'}
          alignItems={'center'}
          marginBottom={16}
        >
          <SkeletonPlaceholder.Item
            width={20}
            height={20}
            borderRadius={10}
            marginRight={8}
          />
          <SkeletonPlaceholder.Item width={119} height={17.3} />
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          flexDirection={'row'}
          justifyContent={'flex-end'}
          alignItems={'center'}
        >
          <SkeletonPlaceholder.Item
            width={12.3}
            height={12.3}
            borderRadius={6.15}
            marginRight={8}
          />
          <SkeletonPlaceholder.Item width={105.7} height={15} />
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          flexDirection={'row'}
          justifyContent={'flex-start'}
          alignItems={'center'}
        >
          <SkeletonPlaceholder.Item
            width={20}
            height={20}
            borderRadius={10}
            marginRight={8}
          />
          <SkeletonPlaceholder.Item width={131} height={17.3} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </Container>
  );
};

export default RequestHistoryLoader;
