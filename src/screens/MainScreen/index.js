import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import {Images} from '../../misc';

import styles from './styles';

const index = () => {
  return (
    <>
      <StatusBar hidden={false} translucent barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Image source={Images.horizontalLogo} style={styles.logo} />
          <Text style={styles.labelText}>Live Streaming</Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity activeOpacity={0.6}>
            <View style={styles.buttonStart}>
              <Image source={Images.startLive} />
              <Text style={styles.startText}>Start Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default index;
