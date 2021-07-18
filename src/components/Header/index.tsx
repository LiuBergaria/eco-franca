import React, { useMemo, useCallback } from 'react';

import { StackHeaderProps } from '@react-navigation/stack';

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
  const { goBackCallback } = useHeader();

  const hasBackButton = goBackCallback || props.navigation.canGoBack();
  const goBack = goBackCallback ?? props.navigation.goBack;

  return (
    <Container>
      {hasBackButton && (
        <BackButtonContainer onPress={goBack}>
          <BackButtonIcon />
          <BackButtonText>Voltar</BackButtonText>
        </BackButtonContainer>
      )}

      <DummyBlock />

      <SizedLogo />
    </Container>
  );
};

export default Header;
