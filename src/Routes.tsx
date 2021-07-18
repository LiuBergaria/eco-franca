import React from 'react';

import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import Header from './components/Header';
import { useAuth } from './contexts/auth';
import CreateAccount from './screens/CreateAccount';
import CreateAccountSuccess from './screens/CreateAccountSuccess';
import Home from './screens/Home';
import Login from './screens/Login';
import MyAccount from './screens/MyAccount';
import MyOccurrences from './screens/MyOccurrences';
import RecordOccurrence from './screens/RecordOccurrence';
import ShowOccurrence from './screens/ShowOccurrence';
import Welcome from './screens/Welcome';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  transitionSpec: {
    open: {
      config: { duration: 450 },
      animation: 'timing',
    },
    close: {
      config: { duration: 450 },
      animation: 'timing',
    },
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    const item = next ?? current;
    const outputRange = next
      ? [0, -layouts.screen.width * 1.1]
      : [layouts.screen.width * 1.1, 0];

    return {
      cardStyle: {
        transform: [
          {
            translateX: item.progress.interpolate({
              inputRange: [0, 1],
              outputRange,
            }),
          },
        ],
      },
    };
  },
};

const Routes = (): JSX.Element | null => {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        ...screenOptions,
        header: (props) => <Header {...props} />,
      }}
    >
      {!isAuthenticated ? (
        <>
          <Stack.Screen name={'Welcome'} component={Welcome} />
          <Stack.Screen name={'Login'} component={Login} />
          <Stack.Screen name={'CreateAccount'} component={CreateAccount} />
          <Stack.Screen
            name={'CreateAccountSuccess'}
            component={CreateAccountSuccess}
          />
        </>
      ) : (
        <>
          <Stack.Screen name={'Home'} component={Home} />
          <Stack.Screen
            name={'RecordOccurrence'}
            component={RecordOccurrence}
          />
          <Stack.Screen name={'MyOccurrences'} component={MyOccurrences} />
          <Stack.Screen name={'ShowOccurrence'} component={ShowOccurrence} />
          <Stack.Screen name={'MyAccount'} component={MyAccount} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Routes;
