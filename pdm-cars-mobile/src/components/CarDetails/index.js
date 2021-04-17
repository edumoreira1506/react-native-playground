import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const CarDetails = ({ id, model, brand, hp }) => (
  <View style={styles.container}>
    <Text style={styles.field}>Id: {id}</Text>
    {model ? <Text style={styles.field}>Modelo: {model}</Text> : null}
    {brand ? <Text style={styles.field}>Marca: {brand}</Text> : null}
    {hp ? <Text style={styles.field}>Cavalos: {hp}</Text> : null}
  </View>
);

export default CarDetails;
