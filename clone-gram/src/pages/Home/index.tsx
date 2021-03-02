import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';
import styles from './styles';

const HomePage = (): ReactElement => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Header />
    </View>
    <View style={styles.stories}>
      <Text>Stories</Text>
    </View>
    <View style={styles.feed}>
      <Text>Feed</Text>
    </View>
  </View>
);

export default HomePage;
