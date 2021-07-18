import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Animated, Dimensions, Easing } from 'react-native';

import Emitter, { EventTypes } from 'src/utils/Emitter';

import { Container, FirstSquare, SecondSquare } from './styles';

const windowSize = Dimensions.get('window');

const AnimatedBackground = (): JSX.Element => {
  const anim = useRef(new Animated.Value(0)).current;

  const animate = useCallback(
    (toValue: number, callback?: () => void): void => {
      Animated.timing(anim, {
        toValue: toValue,
        duration: 450,
        easing: Easing.circle,
        useNativeDriver: false,
      }).start(callback);
    },
    [anim],
  );

  useEffect(() => {
    Emitter.on(EventTypes.BackgroundAnim, ({ type }) => {
      if (type === 'in') {
        animate(1);
      } else if (type === 'out') {
        animate(0);
      } else {
        animate(0, () => animate(1));
      }
    });
  }, [animate]);

  const firstSquareStyle = useMemo(
    () => ({
      transform: [
        {
          translateX: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [-windowSize.width / 2, 0],
          }),
        },
        {
          rotate: anim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '55deg'],
          }),
        },
      ],
    }),
    [anim],
  );

  const secondSquareStyle = useMemo(
    () => ({
      transform: [
        {
          translateX: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [windowSize.width, 0],
          }),
        },
        {
          rotate: anim.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '0deg', '55deg'],
          }),
        },
      ],
    }),
    [anim],
  );

  return (
    <Container>
      <FirstSquare style={firstSquareStyle} />
      <SecondSquare style={secondSquareStyle} />
    </Container>
  );
};

export default AnimatedBackground;
