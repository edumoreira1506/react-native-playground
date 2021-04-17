import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';

import styles from './styles';

const CarForm = ({ hp, model, brand, onChangeField, onSubmit }) => (
  <View style={styles.container}>
    <TextInput style={styles.field} value={model} placeholder="Modelo" onChangeText={newModel => onChangeField('model', newModel)} />
    <TextInput style={styles.field} value={String(hp || '')} placeholder="Cavalos" onChangeText={newHp => onChangeField('hp', newHp)} />
    <TextInput style={styles.field} value={brand} placeholder="Marca" onChangeText={newBrand => onChangeField('brand', newBrand)} />
    <TouchableOpacity style={{ ...styles.button, ...styles.field }} onPress={onSubmit}>
      <Text>Salvar</Text>
    </TouchableOpacity>
  </View>
);

export default CarForm;
