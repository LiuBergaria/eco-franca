/**
 * @format
 */

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import './NotificationHandler'; // TODO: Remove once it's imported inside app
import App from './src/App';

AppRegistry.registerComponent(appName, () => App);
