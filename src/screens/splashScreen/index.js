import React, {useEffect} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';

import {Images} from '../../misc';
import styles from './styles';
import {author, version} from '../../../package.json';

const index = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Main'}],
      });
    }, 3000);
  }, []);

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Image source={Images.mainLogo} style={styles.logo} />
        <View style={styles.footerView}>
          <Text style={styles.footer}>{author}</Text>
          <Text style={styles.footer}>{`V ${version}`}</Text>
        </View>
      </View>
    </>
  );
};

export default index;
