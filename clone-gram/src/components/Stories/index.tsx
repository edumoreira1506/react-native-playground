import React, { ReactElement } from 'react';
import { Text, View, Image } from 'react-native';

import { StoriesPropsTypes } from './types';
import styles from './styles';

const Stories = ({ stories }: StoriesPropsTypes): ReactElement => (
  <View style={styles.container}>
    <View style={styles.stories}>
      {stories.map(({ key, name, icon }) => (
        <View key={key} style={styles.storyItem}>
          <View style={styles.storyItemImageContainer}>
            <Image source={icon} style={styles.storyItemImage} />
          </View>
          <Text style={styles.storyItemName}>{name}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default Stories;
