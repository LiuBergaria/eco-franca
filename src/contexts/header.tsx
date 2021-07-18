import React, { createContext, useCallback, useState, useContext } from 'react';

interface IHeaderContextData {
  goBackCallback?: () => void;
  addGoBackCallback(callback: () => void): void;
  resetGoBackCallback(): void;
}

const HeaderContext = createContext<IHeaderContextData>(
  {} as IHeaderContextData,
);

interface IGoBack {
  callback: (() => void) | undefined;
}

export const HeaderProvider: React.FC = ({ children }) => {
  const [goBack, setGoBack] = useState<IGoBack>({ callback: undefined });

  const addGoBackCallback = useCallback((callback: () => void) => {
    setGoBack({ callback });
  }, []);

  const resetGoBackCallback = useCallback(() => {
    setGoBack({ callback: undefined });
  }, []);

  return (
    <HeaderContext.Provider
      value={{
        goBackCallback: goBack.callback,
        addGoBackCallback,
        resetGoBackCallback,
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
