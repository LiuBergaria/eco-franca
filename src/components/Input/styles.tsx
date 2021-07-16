import { transparentize } from 'polished';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styled, { css } from 'styled-components/native';

import Colors from 'src/styles/Colors';
import Fonts from 'src/styles/Fonts';

interface ITextInputProps {
  hasError: boolean;
}

interface IIconProps {
  isFocused: boolean;
  hasError: boolean;
}

export const Container = styled.View`
  width: 100%;
  justify-content: center;
`;

export const Wrapper = styled.View`
  width: 100%;
  justify-content: center;
`;

export const Icon = styled(FontAwesome5Icon)<IIconProps>`
  position: absolute;
  right: 12px;

  color: ${transparentize(0.6, Colors.black)};

  ${({ hasError }) =>
    hasError &&
    css`
      color: ${Colors.red};
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: ${Colors.teal};
    `}
`;

export const TextInput = styled.TextInput<ITextInputProps>`
  background-color: ${transparentize(0.95, Colors.black)};

  padding: 12px;
  width: 100%;

  border-radius: 4px;

  border-width: 1px;

  border-color: transparent;

  ${(props) =>
    props.hasError &&
    css`
      border-color: ${Colors.red};
    `}

  font-size: 14px;
`;

export const ErrorText = styled.Text`
  font-size: 12px;
  font-family: ${Fonts.Inter.Medium};

  color: ${Colors.red};

  padding: 4px 0;
`;
