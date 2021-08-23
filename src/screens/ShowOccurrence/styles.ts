import styled from 'styled-components/native';

import Fonts from 'src/styles/Fonts';

export const Container = styled.View`
  flex: 1;
`;

export const Wrapper = styled.ScrollView`
  flex: 1;

  padding: 0 24px;
`;

export const Title = styled.Text`
  margin-bottom: 16px;

  font-family: ${Fonts.Inter.Medium};
  font-size: 18px;

  color: ${({ theme }) => theme.foreground};
`;
