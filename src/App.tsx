import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AppProvider from './contexts';
import Routes from './Routes';

// @ts-ignore
FontAwesome5.getStyledIconSet('brand').loadFont();
// @ts-ignore
FontAwesome5.getStyledIconSet('light').loadFont();
// @ts-ignore
FontAwesome5.getStyledIconSet('regular').loadFont();
// @ts-ignore
FontAwesome5.getStyledIconSet('solid').loadFont();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
