import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';

import { Container, Icon } from './styles';

type IProps = TouchableWithoutFeedbackProps;

const HelpMeButton = (props: IProps): JSX.Element => {
  return (
    <Container {...props}>
      <Icon name={'question-circle'} size={24} solid={true} />
    </Container>
  );
};

export default HelpMeButton;
