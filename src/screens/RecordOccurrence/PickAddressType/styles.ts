import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

import Fonts from 'src/styles/Fonts';

export const Container = styled.ScrollView`
  flex: 1;
  width: ${Dimensions.get('window').width};
  padding: 24px;
`;

export const StepText = styled.Text`
  margin-bottom: 16px;

  font-family: ${Fonts.Inter.Medium};
  font-size: 18px;

  color: ${({ theme }) => theme.foreground};
`;
