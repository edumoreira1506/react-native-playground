import React, { ReactElement } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Feed from '../../components/Feed';
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

const posts = Array(10).fill({
  image: require('../../assets/images/photo1.jpg'),
  user: {
    name: 'edumoreira1506',
    icon: require('../../assets/images/profile1.png'),
  },
  likes: [
    'foo', 'bar'
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est elit, auctor tempus quam eu, dapibus venenatis diam. Quisque ornare neque justo, sed euismod massa auctor vel.',
});

const HomePage = (): ReactElement => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Header />
    </View>
    <View style={styles.stories}>
      <Stories stories={stories} />
    </View>
    <ScrollView style={styles.feed}>
      <Feed posts={posts} />
    </ScrollView>
  </View>
);

export default HomePage;
