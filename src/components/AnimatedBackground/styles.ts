import { Animated, Dimensions } from 'react-native';

import styled from 'styled-components/native';

const windowSize = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  height: 100%;

  position: absolute;
`;

export const FirstSquare = styled(Animated.View)`
  position: absolute;
  background-color: #00adb5;

  opacity: 0.1;

  width: ${windowSize.width};
  height: ${windowSize.height * 0.5};

  left: ${-windowSize.width * 0.55};
  top: ${-windowSize.height * 0.05};

  border-radius: 32px;
`;

export const SecondSquare = styled(Animated.View)`
  position: absolute;
  background-color: #00adb5;

  opacity: 0.1;

  width: ${windowSize.width * 0.85};
  height: ${windowSize.height * 0.35};

  right: ${-windowSize.width * 0.2};
  bottom: ${-windowSize.height * 0.1};

  border-radius: 32px;
`;
