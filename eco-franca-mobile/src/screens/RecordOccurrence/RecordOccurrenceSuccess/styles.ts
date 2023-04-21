import { Dimensions } from 'react-native';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';

import Colors from 'src/styles/Colors';
import Fonts from 'src/styles/Fonts';

export const Container = styled.View`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  padding: 24px;

  justify-content: center;
  align-items: center;
`;

export const Icon = styled(FontAwesome5Icon)`
  margin-bottom: 32px;

  color: ${({ theme }) => theme.foreground};
`;

export const Title = styled.Text`
  margin-bottom: 32px;

  font-family: ${Fonts.Archivo.SemiBold};
  font-size: 32px;

  color: ${({ theme }) => theme.foreground};
  text-align: center;
`;

export const Subtitle = styled.Text`
  margin-bottom: 32px;

  font-family: ${Fonts.Inter.Medium};
  font-size: 16px;

  color: ${Colors.teal};
  text-align: center;
`;
