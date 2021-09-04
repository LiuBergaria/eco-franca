import React, { createContext, useState, useContext } from 'react';

import Modal from 'src/components/Modal';

interface IModalContextData {
  openModal: () => void;
  closeModal: () => void;
  setModalContent: (content: React.ReactNode) => void;
}

const ModalContext = createContext<IModalContextData>({} as IModalContextData);

export const ModalProvider: React.FC = ({ children }) => {
  const [modalContent, setModalContent] = useState<React.ReactNode>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        setModalContent,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}

      <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  );
};

export const useModal = (): IModalContextData => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within an ModalProvider');
  }

  return context;
};
