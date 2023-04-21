import styled from 'styled-components/native';

import Colors from 'src/styles/Colors';
import Fonts from 'src/styles/Fonts';

export const Container = styled.View`
  background-color: ${Colors.red};

  padding: 4px 8px;

  border-radius: 30px;
`;

export const Text = styled.Text`
  font-family: ${Fonts.Inter.Regular};
  font-size: 14px;

  color: ${Colors.white};
`;
