import { StyleSheet } from 'react-native';
import { colors } from '../../globalStyles';

const FeedStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  post: {
    width: '100%',
    borderBottomColor: colors.GREY,
    borderBottomWidth: 1,
  },
  postHeader: {
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
  },
  userName: {
    marginLeft: 10,
    color: colors.BLACK,
    fontWeight: 'bold',
  },
  userImage: {
    width: 30,
    height: 30,
    marginLeft: 15,
    borderRadius: 100
  },
  reacts: {
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
    paddingLeft: 15
  },
  smallArea: {
    flexDirection: 'row',
    width: '40%',
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  bigArea: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  likes: {
    marginLeft: 15,
    marginBottom: 20,
  }
});

export default FeedStyles;
