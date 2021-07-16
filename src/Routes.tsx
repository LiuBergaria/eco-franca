import React from 'react';
import { Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './screens/Welcome';

const Stack = createStackNavigator();

const Routes = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Welcome'} component={Welcome} />
      <Stack.Screen name={'Home'} component={() => <Text>Home</Text>} />
    </Stack.Navigator>
  );
};

export default Routes;
