import React from 'react';
import { TextProps, TouchableOpacityProps } from 'react-native';

import Colors from 'src/styles/Colors';

import { Container, Title } from './styles';

interface IProps extends TouchableOpacityProps {
  title: string;
  colorStyle?: 'teal' | 'lightTeal' | 'red' | 'transparent';
  textStyles?: TextProps;
}

const textColorMap = {
  teal: Colors.white,
  lightTeal: Colors.white,
  red: Colors.white,
  transparent: Colors.black,
};

const Button = ({
  title,
  colorStyle = 'teal',
  textStyles,
  ...props
}: IProps): JSX.Element => {
  const color = Colors[colorStyle];
  const textColor = textColorMap[colorStyle];

  return (
    <Container activeOpacity={0.75} {...props} color={color}>
      <Title style={textStyles} textColor={textColor}>
        {title}
      </Title>
    </Container>
  );
};

export default Button;
