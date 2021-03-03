import React, { ReactElement } from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const icons = [
  {
    icon: require('../../assets/images/ic_heart.png'),
    key: 'ic_heart',
  },
  {
    key: 'ic_send',
    icon: require('../../assets/images/ic_send.png'),
  },
];

const Header = (): ReactElement => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../../assets/images/instagram-logo.png')} />
    </View>
    <View style={styles.iconContainer}>
      {icons.map(({ key, icon }) => (
        <View key={key} style={styles.icon}>
          <Image style={styles.image} source={icon} />
        </View>
      ))}
    </View>
  </View>
);

export default Header;
