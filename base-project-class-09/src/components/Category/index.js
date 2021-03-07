import React from 'react';
import { Text, View } from 'react-native';

import Game from '../Game';

import styles from './styles';

const Category = ({ name, games }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    <View style={styles.games}>
      {games.map((game) => (
        <View style={styles.game} key={game.key}>
          <Game {...game} />
        </View>
      ))}
    </View>
  </View>
);

export default Category;
