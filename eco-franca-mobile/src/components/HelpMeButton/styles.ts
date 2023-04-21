import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';

import Colors from 'src/styles/Colors';

export const Container = styled.TouchableWithoutFeedback``;

export const Icon = styled(FontAwesome5Icon)`
  color: ${Colors.white};
`;
