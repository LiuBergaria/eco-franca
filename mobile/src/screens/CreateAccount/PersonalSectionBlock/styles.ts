import { Dimensions } from 'react-native';

import { Form } from '@unform/mobile';
import styled from 'styled-components/native';

import Fonts from 'src/styles/Fonts';

export const FormContainer = styled(Form)`
  width: ${Dimensions.get('window').width}px;
  padding: 0 24px;
`;

export const StepText = styled.Text`
  margin-bottom: 8px;

  font-family: ${Fonts.Inter.SemiBold};
  font-size: 16px;

  color: ${({ theme }) => theme.foreground};
`;
