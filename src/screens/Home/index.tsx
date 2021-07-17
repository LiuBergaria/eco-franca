import React from 'react';

import NotificationBadger from 'src/components/NotificationBadger';
import PressableBlock from 'src/components/PressableBlock';

import { Container, ItemsContainer, SizedLogo, Wrapper } from './styles';

const Home = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <SizedLogo />

        <ItemsContainer>
          <PressableBlock
            title={'Registrar\nOcorrência'}
            icon={'pen-alt'}
            lightStyle={true}
          />
          <PressableBlock
            title={'Visualizar\nOcorrências'}
            icon={'book-open'}
            floatElement={<NotificationBadger text={'3'} />}
          />
          <PressableBlock
            title={'Minha\nConta'}
            icon={'smile'}
            lightStyle={true}
          />
        </ItemsContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;
