import React from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { Container } from './styles';

import { ToastMessage } from '../../../hooks/ToastContext';

interface ToastProps {
  message: ToastMessage;
  removeToast: () => void;
}

const icons = {
  info: <FiInfo size={20} />,
  error: <FiAlertCircle size={20} />,
  success: <FiCheckCircle size={20} />,
};

const Toast: React.FC<ToastProps> = ({ message, removeToast }) => {
  return (
    <Container type={message.type} hasDescription={!!message.description}>
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={removeToast} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
