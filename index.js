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
  scopes: [
    'https://www.googleapis.com/auth/youtube.force-ssl',
    'https://www.googleapis.com/auth/youtube',
    'https://www.googleapis.com/auth/youtube.readonly',
    'https://www.googleapis.com/auth/youtube.upload',
  ],
  androidClientId: Config.androidClientId,
  iosClientId: Config.iosClientId,
});

AppRegistry.registerComponent(appName, () => App);
