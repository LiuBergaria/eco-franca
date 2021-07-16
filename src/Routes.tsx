import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Welcome from './screens/Welcome';

const Stack = createStackNavigator();

const Routes = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Welcome'} component={Welcome} />
      <Stack.Screen name={'Login'} component={Login} />
    </Stack.Navigator>
  );
};

export default Routes;
