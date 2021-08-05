import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {Colors, Images} from '../../misc';
import {storeData, getData} from '../../services';
import styles from './styles';

const index = () => {
  const [accessToken, updateAccessToken] = useState();
  const [isSinging, updateIsSinging] = useState(false);

  useEffect(async () => {
    const token = await getData('accessToken');
    if (token) {
      updateAccessToken(token);
    }
  }, []);

  const signIn = async () => {
    updateIsSinging(true);
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      const token = await GoogleSignin.getTokens();
      if (token && token.accessToken) {
        storeData('accessToken', token.accessToken);
        updateAccessToken(token.accessToken);
      }
    } catch (error) {
      console.log(error);
    }
    updateIsSinging(false);
  };

  return (
    <>
      <StatusBar hidden={false} translucent barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Image source={Images.horizontalLogo} style={styles.logo} />
          <Text style={styles.labelText}>Live Streaming</Text>
        </View>
        {isSinging ? (
          <View style={styles.buttonView}>
            <ActivityIndicator color={Colors.yellow} />
          </View>
        ) : (
          <View style={styles.buttonView}>
            {accessToken ? (
              <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.buttonStart}>
                  <Image source={Images.startLive} />
                  <Text style={styles.startText}>GO LIVE</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity activeOpacity={0.6} onPress={() => signIn()}>
                <View style={styles.loginButton}>
                  <Text style={styles.loginText}>Login with Google</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </>
  );
};

export default index;
