import {StyleSheet, Dimensions} from 'react-native';

import {Colors, Fonts} from '../../misc';

const styles = StyleSheet.create({
  view: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'relative',
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: 50,
    position: 'absolute',
    zIndex: 2,
    bottom: 50,
  },
  button: {
    backgroundColor: Colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.yellow,
    fontFamily: Fonts.bold,
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default styles;
