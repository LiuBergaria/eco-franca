import React from 'react';
import { TextProps, TouchableOpacityProps } from 'react-native';

import { useTheme } from 'src/contexts/theme';
import Colors from 'src/styles/Colors';

import { Container, Loader, Title } from './styles';

interface IProps extends TouchableOpacityProps {
  title: string;
  colorStyle?: 'teal' | 'lightTeal' | 'red' | 'transparent';
  textStyles?: TextProps;
  isLoading?: boolean;
}

const textColorMap = {
  teal: Colors.white,
  lightTeal: Colors.white,
  red: Colors.white,
  transparent: {
    light: Colors.black,
    dark: Colors.white,
  },
};

const Button = ({
  title,
  colorStyle = 'teal',
  textStyles,
  isLoading,
  ...props
}: IProps): JSX.Element => {
  const { theme } = useTheme();

  const color = Colors[colorStyle];
  const textColor =
    colorStyle === 'transparent'
      ? textColorMap[colorStyle][theme]
      : textColorMap[colorStyle];

  return (
    <Container
      activeOpacity={0.75}
      {...props}
      color={color}
      disabled={isLoading}
    >
      <Title style={textStyles} textColor={textColor}>
        {title}
      </Title>

      {isLoading && <Loader />}
    </Container>
  );
};

export default Button;
