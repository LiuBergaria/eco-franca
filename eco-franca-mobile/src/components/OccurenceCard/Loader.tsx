import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import Colors from 'src/styles/Colors';

import { Container } from './styles';

interface IProps {
  lightStyle?: boolean;
}

const OccurrenceCardLoader = ({ lightStyle }: IProps): JSX.Element => {
  return (
    <Container activeOpacity={1} lightStyle={lightStyle}>
      <SkeletonPlaceholder
        backgroundColor={
          lightStyle ? Colors.placeholders.teal : Colors.placeholders.lightTeal
        }
      >
        <SkeletonPlaceholder.Item
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          marginBottom={16}
        >
          <SkeletonPlaceholder.Item width={120} height={17.3} />

          <SkeletonPlaceholder.Item width={20} height={20} borderRadius={10} />
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          marginBottom={8}
        >
          <SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item
              width={95}
              height={14}
              marginBottom={1.3}
            />
            <SkeletonPlaceholder.Item width={120} height={16} />
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item alignItems={'flex-end'}>
            <SkeletonPlaceholder.Item
              width={130}
              height={14}
              marginBottom={1.3}
            />
            <SkeletonPlaceholder.Item width={80} height={16} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          marginBottom={8}
        >
          <SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item
              width={50}
              height={14}
              marginBottom={2.3}
            />
            <SkeletonPlaceholder.Item width={18} height={16} />
          </SkeletonPlaceholder.Item>
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
          <SkeletonPlaceholder.Item width={116} height={17.3} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </Container>
  );
};

export default OccurrenceCardLoader;
