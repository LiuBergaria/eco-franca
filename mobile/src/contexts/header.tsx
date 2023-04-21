import React, { createContext, useState, useContext, useCallback } from 'react';

interface IHeaderContextData {
  goBackCallback?: () => void;
  addGoBackCallback(callback: () => void): void;
  resetGoBackCallback(): void;
  showLogo: boolean;
  setShowLogo: (value: boolean) => void;
}

const HeaderContext = createContext<IHeaderContextData>(
  {} as IHeaderContextData,
);

export const HeaderProvider: React.FC = ({ children }) => {
  const [goBackCallback, setGoBack] = useState<() => void>();
  const [showLogo, setShowLogo] = useState(true);

  const addGoBackCallback = useCallback((callback: () => void) => {
    setGoBack(() => callback);
  }, []);

  const resetGoBackCallback = useCallback(() => {
    setGoBack(undefined);
  }, []);

  return (
    <HeaderContext.Provider
      value={{
        goBackCallback,
        addGoBackCallback,
        resetGoBackCallback,
        showLogo,
        setShowLogo,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = (): IHeaderContextData => {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error('useHeader must be used within an HeaderProvider');
  }

  return context;
};
