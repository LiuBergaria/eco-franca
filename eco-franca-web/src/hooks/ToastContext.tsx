import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { v4 } from 'uuid';

import ToastContainer from '../components/ToastContainer';

type TAddToast = (
  message: Omit<ToastMessage, 'id' | 'duration'> & { duration?: number },
) => void;

interface ToastContextData {
  addToast: TAddToast;
}

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
  duration: number;
}

type AuthProps = {
  children: ReactNode;
};

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

function ToastProvider({ children }: AuthProps): JSX.Element {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  const addToast: TAddToast = useCallback(
    ({ type, title, description, duration = 3000 }) => {
      const id = v4();

      const toast = {
        id,
        type,
        title,
        description,
        duration,
      };

      setMessages(oldMessages => [...oldMessages, toast]);

      setTimeout(() => {
        removeToast(id);
      }, duration);
    },
    [removeToast],
  );

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer messages={messages} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
