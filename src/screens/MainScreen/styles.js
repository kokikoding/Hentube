import {StyleSheet} from 'react-native';

import {Colors, Fonts} from '../../misc';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 30,
    resizeMode: 'contain',
  },
  labelText: {
    fontSize: 18,
    color: Colors.yellow,
    marginTop: 8,
    fontFamily: Fonts.regular,
    letterSpacing: 1,
  },
  buttonView: {
    flex: 1,
  },
  buttonStart: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  startText: {
    fontSize: 18,
    color: Colors.yellow,
    marginTop: 16,
    fontFamily: Fonts.bold,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});
