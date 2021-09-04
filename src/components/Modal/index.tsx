import React, { useMemo, useEffect, useRef, useCallback } from 'react';
import { Animated, Dimensions } from 'react-native';

import { TapGestureHandler } from 'react-native-gesture-handler';

import Button from '../Button';
import { Background, Content } from './styles';

const { height } = Dimensions.get('window');

interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
}

const Modal = ({ children, isOpen, close }: IProps): JSX.Element => {
  const modalAnimationRef = useRef<Animated.CompositeAnimation>();

  const animations = useMemo(
    () => ({
      opacity: new Animated.Value(0),
      container: new Animated.Value(height),
      modal: new Animated.Value(height),
    }),
    [],
  );

  const openModal = useCallback(() => {
    modalAnimationRef.current?.stop();

    const animation = Animated.sequence([
      Animated.timing(animations.container, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animations.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animations.modal, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]);

    modalAnimationRef.current = animation;

    animation.start();
  }, [animations.container, animations.modal, animations.opacity]);

  const closeModal = useCallback(() => {
    modalAnimationRef.current?.stop();

    Animated.sequence([
      Animated.timing(animations.modal, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(animations.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animations.container, {
        toValue: height,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, [animations.container, animations.modal, animations.opacity]);

  useEffect(() => {
    if (isOpen) {
      openModal();
    } else {
      closeModal();
    }
  }, [closeModal, isOpen, openModal]);

  return (
    <TapGestureHandler onEnded={close}>
      <Background
        style={[
          {
            opacity: animations.opacity,
            transform: [{ translateY: animations.container }],
          },
        ]}
      >
        <TapGestureHandler>
          <Content
            style={[
              {
                transform: [{ translateY: animations.modal }],
              },
            ]}
          >
            {children}

            <Button title={'Fechar'} onPress={close} />
          </Content>
        </TapGestureHandler>
      </Background>
    </TapGestureHandler>
  );
};

export default Modal;
