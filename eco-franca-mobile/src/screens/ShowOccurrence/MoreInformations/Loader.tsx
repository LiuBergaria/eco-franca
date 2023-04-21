import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import Colors from 'src/styles/Colors';

import { Container } from './styles';

const MoreInformationsLoader = (): JSX.Element => {
  return (
    <Container>
      <SkeletonPlaceholder backgroundColor={Colors.placeholders.lightTeal}>
        <SkeletonPlaceholder.Item
          flexDirection={'row'}
          alignItems={'center'}
          marginBottom={8}
        >
          <SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item
              width={70}
              height={14}
              marginBottom={1.3}
            />
            <SkeletonPlaceholder.Item width={294} height={48} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          flexDirection={'row'}
          alignItems={'center'}
          marginBottom={8}
        >
          <SkeletonPlaceholder.Item width={'50%'}>
            <SkeletonPlaceholder.Item
              width={90}
              height={14}
              marginBottom={1.3}
            />
            <SkeletonPlaceholder.Item width={120} height={16} />
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item width={'50%'}>
            <SkeletonPlaceholder.Item
              width={80}
              height={14}
              marginBottom={1.3}
            />
            <SkeletonPlaceholder.Item width={60} height={16} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          flexDirection={'row'}
          alignItems={'center'}
          marginBottom={8}
        >
          <SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item
              width={120}
              height={14}
              marginBottom={1.3}
            />
            <SkeletonPlaceholder.Item width={100} height={16} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          flexDirection={'row'}
          alignItems={'center'}
          marginBottom={8}
        >
          <SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item
              width={140}
              height={14}
              marginBottom={1.3}
            />
            <SkeletonPlaceholder.Item width={80} height={16} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </Container>
  );
};

export default MoreInformationsLoader;
