import { ActivityIndicator } from 'react-native';

import { transparentize } from 'polished';
import styled from 'styled-components/native';

import Colors from 'src/styles/Colors';
import Fonts from 'src/styles/Fonts';

interface IContainerProps {
  color: string;
}

interface ITitleProps {
  textColor: string;
}

export const Container = styled.TouchableOpacity<IContainerProps>`
  justify-content: center;

  width: 100%;

  padding: 12px;
  margin-bottom: 16px;

  background-color: ${({ disabled, color }) =>
    disabled ? transparentize(0.2, color) : color};

  border-radius: 4px;
`;

export const Title = styled.Text<ITitleProps>`
  color: ${({ textColor }) => textColor};
  text-align: center;
  font-size: 14px;
  font-family: ${Fonts.Inter.SemiBold};
`;

export const Loader = styled(ActivityIndicator).attrs({
  color: Colors.white,
  size: 'small',
})`
  position: absolute;
  right: 16px;
`;
