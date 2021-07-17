import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styled, { css } from 'styled-components/native';

import Fonts from 'src/styles/Fonts';

interface IContainer {
  backgroundColor: string;
  isRow: boolean;
}

interface ITitle {
  color: string;
  isRow: boolean;
}

export const Container = styled.TouchableOpacity<IContainer>`
  background-color: ${({ backgroundColor }) => backgroundColor};

  flex-grow: 1;
  height: 140px;
  padding: 24px;
  margin-bottom: 16px;
  border-radius: 4px;

  flex-direction: ${({ isRow }) => (isRow ? 'row' : 'column-reverse')};
  justify-content: ${({ isRow }) => (isRow ? 'space-between' : 'center')};
  align-items: center;
`;

export const Title = styled.Text<ITitle>`
  color: ${({ color }) => color};
  font-size: ${({ isRow }) => (isRow ? '20px' : '14px')};
  font-family: ${Fonts.Inter.Medium};

  ${({ isRow }) =>
    !isRow &&
    css`
      margin-top: 8px;
    `}
`;

export const Icon = styled(FontAwesome5Icon)``;

export const FloatElementContainer = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`;
