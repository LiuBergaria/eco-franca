import { Dimensions } from 'react-native';

import { Form } from '@unform/mobile';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

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

export const MapViewWrapped = styled(MapView)`
  width: 100%;
  height: 400px;

  margin-bottom: 16px;
`;
