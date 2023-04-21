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

  margin-bottom: 8px;
`;

export const Wrapper = styled.View`
  width: 100%;
  justify-content: center;
`;

export const IconContainer = styled.TouchableWithoutFeedback``;

export const Icon = styled(FontAwesome5Icon)<IIconProps>`
  position: absolute;
  right: 12px;

  color: ${({ theme }) => transparentize(0.6, theme.foreground)};

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

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: transparentize(0.6, theme.foreground),
}))<ITextInputProps>`
  background-color: ${({ theme }) => transparentize(0.95, theme.foreground)};

  color: ${({ theme }) => theme.foreground};

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
