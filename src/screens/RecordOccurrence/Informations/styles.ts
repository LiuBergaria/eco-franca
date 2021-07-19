import { Dimensions } from 'react-native';

import { Form } from '@unform/mobile';
import styled from 'styled-components/native';

import Input from 'src/components/Input';
import Fonts from 'src/styles/Fonts';

const imageSize = Dimensions.get('window').width / 3 - 32 + 16;

export const Container = styled.ScrollView`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  padding: 24px;
`;

export const StepText = styled.Text`
  margin-bottom: 16px;

  font-family: ${Fonts.Inter.Medium};
  font-size: 18px;

  color: ${({ theme }) => theme.foreground};
`;

export const FormContainer = styled(Form)``;

export const ObservationInput = styled(Input)`
  height: 80px;
`;

export const PhotoContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: 8px 0 16px;
`;

export const PhotoPlaceholder = styled.View`
  width: ${imageSize}px;
  height: ${imageSize}px;
`;

export const Loader = styled.ActivityIndicator.attrs({
  size: 'large',
})`
  margin: 8px;
`;
