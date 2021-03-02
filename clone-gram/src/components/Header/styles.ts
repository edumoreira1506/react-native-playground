import { StyleSheet } from 'react-native';

const HeaderStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  imageContainer: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '45%',
    marginBottom: 5
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  iconContainer: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: '100%',
    marginBottom: 10
  },
  icon: {
    width: 27,
    height: 27,
    marginRight: 15
  }
});

export default HeaderStyles;
