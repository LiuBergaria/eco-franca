import styled from 'styled-components/native';

import Colors from 'src/styles/Colors';
import Fonts from 'src/styles/Fonts';

export const Container = styled.SafeAreaView`
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
