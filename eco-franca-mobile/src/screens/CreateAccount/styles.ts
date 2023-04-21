import { ActivityIndicator } from 'react-native';

import styled from 'styled-components/native';

import Colors from 'src/styles/Colors';
import Fonts from 'src/styles/Fonts';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  width: 100%;
  padding: 24px 0;
`;

export const Title = styled.Text`
  margin-bottom: 16px;
  padding: 0 24px;

  font-family: ${Fonts.Archivo.SemiBold};
  font-size: 36px;

  color: ${({ theme }) => theme.foreground};
`;

export const Subtitle = styled.Text`
  margin-bottom: 48px;
  padding: 0 24px;

  font-family: ${Fonts.Inter.Medium};
  font-size: 18px;

  color: ${Colors.teal};
`;

export const HorizontalScroll = styled.ScrollView``;

export const LoaderContainer = styled.View`
  margin-top: 32px;

  align-items: center;
`;

export const LoaderText = styled.Text`
  margin-top: 32px;

  text-align: center;

  font-family: ${Fonts.Inter.Medium};
  font-size: 16px;

  color: ${({ theme }) => theme.foreground};
`;

export const Loader = styled(ActivityIndicator).attrs(({ theme }) => ({
  size: 'large',
  color: theme.foreground,
}))``;
