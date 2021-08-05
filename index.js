/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import App from './src/App';
import {name as appName} from './app.json';
import Config from './src/config';

GoogleSignin.configure({
  webClientId: Config.clientId,
  offlineAccess: false,
  androidClientId: Config.androidClientId,
  iosClientId: Config.iosClientId,
});

AppRegistry.registerComponent(appName, () => App);
