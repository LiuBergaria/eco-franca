import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

import { StackHeaderProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useHeader } from 'src/contexts/header';

import {
  Container,
  BackButtonContainer,
  BackButtonIcon,
  BackButtonText,
  SizedLogo,
  DummyBlock,
} from './styles';

const Header = (props: StackHeaderProps): JSX.Element => {
  const { goBackCallback, showLogo } = useHeader();
  const insets = useSafeAreaInsets();

  const logoShowAnim = useRef(new Animated.Value(0));

  const hasBackButton = goBackCallback || props.navigation.canGoBack();
  const goBack = goBackCallback ?? props.navigation.goBack;

  useEffect(() => {
    const toValue = Number(showLogo);

    Animated.timing(logoShowAnim.current, {
      toValue,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, [showLogo]);

  return (
    <Container style={{ marginTop: insets.top }}>
      {hasBackButton && (
        <BackButtonContainer onPress={goBack}>
          <BackButtonIcon />
          <BackButtonText>Voltar</BackButtonText>
        </BackButtonContainer>
      )}

      <DummyBlock />

      <Animated.View
        style={{
          opacity: logoShowAnim.current.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}
      >
        <SizedLogo />
      </Animated.View>
    </Container>
  );
};

export default Header;
