import { Dimensions } from 'react-native';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';

import Colors from 'src/styles/Colors';

const imageSize = Dimensions.get('window').width / 3 - 32;

export const Container = styled.View`
  margin: 0 16px 16px 0;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: -8px;
  right: -8px;

  background-color: ${Colors.red};
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;

  border-radius: 12px;
`;

export const Image = styled.Image`
  width: ${imageSize}px;
  height: ${imageSize}px;
`;

export const Icon = styled(FontAwesome5Icon).attrs({
  name: 'times',
})`
  color: ${Colors.white};
`;
