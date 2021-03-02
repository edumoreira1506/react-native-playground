import { StyleSheet } from 'react-native';

import { colors } from '../../globalStyles';

const HomeStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    width: '100%',
    height: '10%',
  },
  stories: {
    width: '100%',
    height: '15%',
    borderColor: colors.GREY,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  feed: {
    width: '100%',
    height: '75%',
  }
});

export default HomeStyles;
