import React from 'react';

import { Container, FirstSquare, SecondSquare } from './styles';

const AnimatedBackground = (): JSX.Element => {
  return (
    <Container>
      <FirstSquare
        style={{
          transform: [
            {
              translateX: 0,
            },
            {
              rotate: '55deg',
            },
          ],
        }}
      />
      <SecondSquare
        style={{
          transform: [
            {
              translateX: 0,
            },
            {
              rotate: '55deg',
            },
          ],
        }}
      />
    </Container>
  );
};

export default AnimatedBackground;
