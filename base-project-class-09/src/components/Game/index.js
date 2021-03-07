import React from 'react';
import { Text, View } from 'react-native';
import { templateInfo } from '../../services/games';

import sytles from './styles';

const Game = ({ name, platform, metacritic }) => (
  <View style={sytles.container}>
    <Text style={sytles.info}>{templateInfo('game', name)}</Text>
    <Text style={sytles.info}>{templateInfo('platform', platform)}</Text>
    <Text style={sytles.info}>{templateInfo('metacritic', metacritic)}</Text>
  </View>
);

export default Game;
