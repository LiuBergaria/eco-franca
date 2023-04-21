import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

import Fonts from 'src/styles/Fonts';

export const Container = styled.View`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  padding: 24px;

  justify-content: center;
  align-items: center;
`;

export const Loader = styled.ActivityIndicator.attrs({
  size: 'large',
})``;

export const Text = styled.Text`
  margin-top: 32px;

  font-family: ${Fonts.Inter.Medium};
  font-size: 18px;

  color: ${({ theme }) => theme.foreground};
`;
