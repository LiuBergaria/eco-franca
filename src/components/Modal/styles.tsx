import { Animated } from 'react-native';

import styled from 'styled-components/native';

export const Background = styled(Animated.View)`
  width: 100%;
  height: 100%;
  justify-content: flex-end;

  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.6);
`;

export const Content = styled(Animated.ScrollView)`
  width: 100%;
  position: relative;
  flex-grow: 0;

  background-color: ${({ theme }) => theme.background};

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  padding: 16px;
`;
