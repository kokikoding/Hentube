import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {NodeCameraView} from 'react-native-nodemediaclient';

import styles from './styles';

const {width, height} = Dimensions.get('window');
const config = {
  cameraConfig: {
    cameraId: 1,
    cameraFrontMirror: false,
  },
  videoConfig: {
    preset: 4,
    bitrate: 4000000,
    profile: 2,
    fps: 30,
    videoFrontMirror: true,
  },
  audioConfig: {
    bitrate: 32000,
    profile: 1,
    samplerate: 44100,
  },
};

const index = ({navigation, route}) => {
  const {streamKey, ingestionAddress} = route.params;
  const cameraViewRef = useRef(null);
  const [isStreaming, updateIsStreaming] = useState(false);
  const url = `${ingestionAddress}/${streamKey}`;

  const toggleStream = async () => {
    if (isStreaming) {
      cameraViewRef.current.stop();
      navigation.goBack();
    } else {
      cameraViewRef.current.start();
    }
    updateIsStreaming(!isStreaming);
  };

  return (
    <>
      <StatusBar hidden={false} translucent barStyle="light-content" />
      <View style={styles.view}>
        <NodeCameraView
          style={{width, height}}
          ref={cameraViewRef}
          outputUrl={url}
          camera={config.cameraConfig}
          audio={config.audioConfig}
          video={config.videoConfig}
          autopreview={true}
        />
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={() => toggleStream()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                {isStreaming ? 'STOP STREAMING' : 'START STREAMING'}
              </Text>
              <Text style={styles.buttonText}>url streaming: {url}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default index;
