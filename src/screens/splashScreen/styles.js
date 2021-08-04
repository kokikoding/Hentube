import {StyleSheet} from 'react-native';

import {Colors, Fonts} from '../../misc';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    width: '40%',
    resizeMode: 'contain',
  },
  footerView: {
    alignItems: 'center',
    marginBottom: 24,
  },
  footer: {
    marginVertical: 2,
    fontSize: 12,
    fontFamily: Fonts.thin,
    letterSpacing: 2,
    color: Colors.lighGrey,
  },
});
