import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';
import Stories from '../../components/Stories';
import styles from './styles';

const stories = Array(5).fill({
  name: 'edumoreira1506',
  icon: require('../../assets/images/profile1.png'),
}).map(({ name, ...storyItem }, index) => ({
  name,
  ...storyItem,
  key: `story-${index}-${name}`
}));

const HomePage = (): ReactElement => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Header />
    </View>
    <View style={styles.stories}>
      <Stories stories={stories} />
    </View>
    <View style={styles.feed}>
      <Text>Feed</Text>
    </View>
  </View>
);

export default HomePage;
