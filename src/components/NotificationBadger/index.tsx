import React from 'react';

import { Container, Text } from './styles';

interface IProps {
  text: string;
}

const NotificationBadger = ({ text }: IProps): JSX.Element => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default NotificationBadger;
