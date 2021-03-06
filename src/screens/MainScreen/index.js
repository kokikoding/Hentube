import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Alert,
  TextInput,
} from 'react-native';

import {Images} from '../../misc';
import styles from './styles';

const index = ({navigation}) => {
  const [streamKey, updateStreamKey] = useState();

  const createNewStream = async () => {
    const ingestionAddress = 'rtmp://a.rtmp.youtube.com/live2';
    if (streamKey && ingestionAddress) {
      if (Platform.OS === 'android') {
        const cameraGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'Hentube Live Streaming App needs access to your camera ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        const audioGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Microphone Permission',
            message:
              'Hentube Live Streaming App needs access to your microphone ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (
          cameraGranted === PermissionsAndroid.RESULTS.GRANTED &&
          audioGranted === PermissionsAndroid.RESULTS.GRANTED
        ) {
          navigation.navigate('Stream', {
            streamKey,
            ingestionAddress,
          });
        } else {
          Alert.alert('You need to give all permissions to live');
        }
      } else {
        navigation.navigate('Stream', {
          streamKey,
          ingestionAddress,
        });
      }
    } else {
      Alert.alert('You need input the stream key first');
    }
  };

  return (
    <>
      <StatusBar hidden={false} translucent barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Image source={Images.horizontalLogo} style={styles.logo} />
          <Text style={styles.labelText}>Live Streaming</Text>
          <TextInput
            style={styles.userInput}
            value={streamKey}
            placeholder="Put your stream key here"
            onChangeText={updateStreamKey}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => createNewStream()}>
            <View style={styles.buttonStart}>
              <Image source={Images.startLive} />
              <Text style={styles.startText}>GO LIVE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default index;
