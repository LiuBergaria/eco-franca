import { Animated, Dimensions } from 'react-native';

import styled from 'styled-components/native';

const windowSize = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  height: 100%;

  position: absolute;
  background-color: ${({ theme }) => theme.background};
`;

export const FirstSquare = styled(Animated.View)`
  position: absolute;
  background-color: ${({ theme }) => theme.animatedSquare};

  width: ${windowSize.width}px;
  height: ${windowSize.height * 0.5}px;

  left: ${-windowSize.width * 0.55}px;
  top: ${-windowSize.height * 0.05}px;

  border-radius: 32px;
`;

export const SecondSquare = styled(Animated.View)`
  position: absolute;
  background-color: ${({ theme }) => theme.animatedSquare};

  width: ${windowSize.width * 0.85}px;
  height: ${windowSize.height * 0.35}px;

  right: ${-windowSize.width * 0.2}px;
  bottom: ${-windowSize.height * 0.1}px;

  border-radius: 32px;
`;
