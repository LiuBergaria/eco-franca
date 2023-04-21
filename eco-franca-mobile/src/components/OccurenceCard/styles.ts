import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styled, { css } from 'styled-components/native';

import Colors from 'src/styles/Colors';
import Fonts from 'src/styles/Fonts';

interface IProps {
  lightStyle?: boolean;
}

interface IRightProps {
  right?: boolean;
}

export const Container = styled.TouchableOpacity<IProps>`
  background-color: ${({ lightStyle }) =>
    lightStyle ? Colors.lightTeal : Colors.teal};

  padding: 12px 24px;
  margin-bottom: 16px;
  border-radius: 4px;
`;

export const FieldContainer = styled.View``;

export const FieldName = styled.Text<IProps & IRightProps>`
  color: ${({ lightStyle }) => (lightStyle ? Colors.black : Colors.white)};

  font-family: ${Fonts.Inter.Medium};
  font-size: 12px;

  ${({ right }) =>
    right &&
    css`
      text-align: right;
    `}
`;

export const FieldValue = styled.Text<IProps & IRightProps>`
  color: ${({ lightStyle }) => (lightStyle ? Colors.black : Colors.white)};

  font-family: ${Fonts.Inter.Medium};
  font-size: 14px;

  ${({ right }) =>
    right &&
    css`
      text-align: right;
    `}
`;

export const Icon = styled(FontAwesome5Icon).attrs({ size: 20 })<IProps>`
  color: ${({ lightStyle }) => (lightStyle ? Colors.teal : Colors.lightTeal)};
`;

export const NewNotificationBadge = styled.View`
  background-color: ${Colors.red};

  width: 12px;
  height: 12px;
  border-radius: 6px;

  margin-left: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;
`;

export const DatetimeContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const DatetimeIcon = styled(FontAwesome5Icon).attrs({
  name: 'clock',
  solid: true,
  size: 12,
})<IProps>`
  margin-right: 8px;

  color: ${({ lightStyle }) => (lightStyle ? Colors.black : Colors.white)};
`;

export const DatetimeText = styled.Text<IProps>`
  color: ${({ lightStyle }) => (lightStyle ? Colors.black : Colors.white)};
`;
