import React, { useMemo } from 'react';
import { TouchableOpacityProps } from 'react-native';

import Colors from 'src/styles/Colors';

import { Container, Title, Icon, FloatElementContainer } from './styles';

interface IProps extends TouchableOpacityProps {
  title: string;
  icon: string;
  lightStyle?: boolean;
  isRow?: boolean;
  floatElement?: JSX.Element | false;
}

const PressableBlock = ({
  title,
  icon,
  lightStyle = false,
  isRow = true,
  floatElement,
  ...props
}: IProps): JSX.Element => {
  const pickedColors = useMemo(
    () =>
      lightStyle
        ? {
            backgroundColor: Colors.lightTeal,
            iconColor: Colors.teal,
            textColor: Colors.black,
          }
        : {
            backgroundColor: Colors.teal,
            iconColor: Colors.lightTeal,
            textColor: Colors.white,
          },
    [lightStyle],
  );

  return (
    <Container
      activeOpacity={0.8}
      backgroundColor={pickedColors.backgroundColor}
      isRow={isRow}
      {...props}
    >
      {floatElement && (
        <FloatElementContainer>{floatElement}</FloatElementContainer>
      )}
      <Title color={pickedColors.textColor} isRow={isRow}>
        {title}
      </Title>
      <Icon color={pickedColors.iconColor} size={40} name={icon} />
    </Container>
  );
};

export default PressableBlock;
