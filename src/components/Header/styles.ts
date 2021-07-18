import { Dimensions } from 'react-native';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';

import Fonts from 'src/styles/Fonts';

import Logo from '../Logo';

export const Container = styled.View`
  flex-grow: 0;
  width: ${Dimensions.get('window').width}px;

  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const BackButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  padding: 0 16px;
`;

export const BackButtonIcon = styled(FontAwesome5Icon).attrs({
  name: 'chevron-left',
  size: 18,
})`
  margin-right: 8px;

  color: ${({ theme }) => theme.foreground};
`;

export const BackButtonText = styled.Text`
  color: ${({ theme }) => theme.foreground};

  font-family: ${Fonts.Inter.Medium};
  font-size: 14px;
`;

export const DummyBlock = styled.View`
  width: 1px;
  height: 1px;

  background: transparent;
`;

export const SizedLogo = styled(Logo)`
  width: ${Dimensions.get('window').width * 0.21}px;

  margin-right: 16px;
`;
