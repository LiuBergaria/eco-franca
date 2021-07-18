import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
  useMemo,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

interface IAuthState {
  token: string;
  user: {
    first_name: number;
    last_name: string;
  };
}

interface IAuthContextData {
  user: {
    first_name: number;
    last_name: string;
  };
  signIn(informations: IAuthState): Promise<void>;
  signOut(): Promise<void>;
  isAuthenticated: boolean;
  isLoaded: boolean;
}

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => ({} as IAuthState));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [[, token], [, user]] = await AsyncStorage.multiGet([
        '@EcoFranca:token',
        '@EcoFranca:user',
      ]);

      if (token && user) {
        api.defaults.headers.Authorization = `Bearer ${token}`;

        setData({ token, user: JSON.parse(user) });
      }

      setIsLoaded(true);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ token, user }: IAuthState) => {
    await AsyncStorage.multiSet([
      ['@EcoFranca:token', token],
      ['@EcoFranca:user', JSON.stringify(user)],
    ]);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@EcoFranca:token', '@EcoFranca:user']);

    delete api.defaults.headers.Authorization;
    setData({} as IAuthState);
  }, []);

  useEffect(() => {
    const id = api.interceptors.response.use((value) => {
      if (value.status === 401) {
        signOut();
      }
      return value;
    });

    return () => {
      api.interceptors.response.eject(id);
    };
  }, [data, signOut]);

  const isAuthenticated = useMemo(() => !!data.token, [data.token]);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, isAuthenticated, isLoaded }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
