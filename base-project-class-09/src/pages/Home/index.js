import React from 'react';
import { View, ScrollView, SectionList } from 'react-native';

import { getGamesCategory } from '../../services/games';
import Category from '../../components/Category';
import Game from '../../components/Game';

import styles from './styles';

const gamesCategoryData = getGamesCategory();

const HomePage = () => (
  <View style={styles.container}>
    <ScrollView style={styles.gamesCategoryList}>
      <SectionList
        sections={gamesCategoryData}
        keyExtractor={({ key }) => key}
        renderItem={({ item: { name, platform, metacritic } }) => (
          <View style={styles.game}>
            <Game name={name} platform={platform} metacritic={metacritic} />
          </View>
        )}
        renderSectionHeader={({ section: { name } }) => (
          <Category name={name} />
        )}
      />
    </ScrollView>
  </View>
)

export default HomePage;
