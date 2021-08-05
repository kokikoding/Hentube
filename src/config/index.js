import Config from 'react-native-config';

const {API_KEY, CHANNEL_ID, CLINET_ID, ANDROID_CLIENT_ID, IOS_CLIENT_ID} =
  Config;

export default {
  apiKey: API_KEY,
  channelId: CHANNEL_ID,
  clientId: CLINET_ID,
  androidClientId: ANDROID_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
};
