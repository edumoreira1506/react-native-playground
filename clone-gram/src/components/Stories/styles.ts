import { StyleSheet } from 'react-native';

import { colors } from '../../globalStyles';

const StoriesStyles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    justifyContent: 'center',
    height: 120,
  },
  stories: {
    height: 80,
    flexDirection: 'row',
  },
  storyItem: {
    width: 80,
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyItemImageContainer: {
    borderColor: colors.BLACK,
    borderRadius: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
    marginBottom: 4
  },
  storyItemImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
    padding: 5
  },
  storyItemName: {
    fontSize: 8,
    textAlign: 'center',
    color: colors.BLACK,
    fontWeight: '100'
  },
});

export default StoriesStyles;
