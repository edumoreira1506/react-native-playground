import React from 'react';
import { View, ScrollView } from 'react-native';

import { getGamesCategory } from '../../services/games';
import Category from '../../components/Category';

import styles from './styles';

const HomePage = () => (
  <View style={styles.container}>
    <ScrollView style={styles.gamesCategoryList}>
      {getGamesCategory().map((category) => (
        <View key={category.key} style={styles.category}>
          <Category {...category} />
        </View>
      ))}
    </ScrollView>
  </View>
)

export default HomePage;
