import { Dimensions } from 'react-native';

import { Form } from '@unform/mobile';
import styled from 'styled-components/native';

import Input from 'src/components/Input';
import Fonts from 'src/styles/Fonts';

export const Container = styled.ScrollView`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  padding: 0 24px;
`;

export const StepText = styled.Text`
  margin-bottom: 16px;

  font-family: ${Fonts.Inter.Medium};
  font-size: 18px;

  color: ${({ theme }) => theme.foreground};
`;

export const FormContainer = styled(Form)``;

export const InstructionsText = styled.Text`
  font-family: ${Fonts.Inter.Medium};
  font-size: 14px;

  color: ${({ theme }) => theme.foreground};
  margin: 8px 0 16px;
`;

export const MultilineInput = styled(Input)`
  height: 60px;
`;
