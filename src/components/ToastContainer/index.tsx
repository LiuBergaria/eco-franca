import React from 'react';
import { animated, useTransition } from 'react-spring';
import { Container } from './styles';

import Toast from './Toast';
import { ToastMessage } from '../../hooks/ToastContext';

interface ToastContainerProps {
  messages: ToastMessage[];
  removeToast: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  messages,
  removeToast,
}) => {
  const transitions = useTransition(messages, {
    from: { opacity: 0, transform: 'translate3d(100%, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0px, 0px)' },
    leave: { opacity: 0, transform: 'translate3d(100%, 0px, 0px)' },
    delay: 100,
  });

  return (
    <Container>
      {transitions((props, message) => (
        <animated.div style={props}>
          <Toast
            key={message.id}
            removeToast={() => removeToast(message.id)}
            message={message}
          />
        </animated.div>
      ))}
    </Container>
  );
};

export default ToastContainer;
