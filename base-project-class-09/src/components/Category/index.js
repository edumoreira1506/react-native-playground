import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const Category = ({ name }) => (
  <Text style={styles.name}>{name}</Text>
);

export default Category;
