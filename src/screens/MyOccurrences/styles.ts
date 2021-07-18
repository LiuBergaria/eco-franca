import styled from 'styled-components/native';

import Fonts from 'src/styles/Fonts';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  padding: 24px 24px 16px;

  font-family: ${Fonts.Inter.Medium};
  font-size: 18px;

  color: ${({ theme }) => theme.foreground};
`;

export const List = styled.FlatList`
  flex: 1;

  padding: 0 24px;
`;
