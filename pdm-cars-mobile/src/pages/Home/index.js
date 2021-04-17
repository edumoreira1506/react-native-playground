import React, { useEffect, useState } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';

import CarsAPI from '../../services/CarsAPI';
import CarDetails from '../../components/CarDetails';

import styles from './styles';

export default function HomePage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    CarsAPI.getCars().then(({ data }) => setCars(data));
  }, []);

  return (
    <View>
      <StatusBar />
      <ScrollView style={styles.carsList}>
        {cars.map((car) => (
          <View style={styles.car} key={car.id}>
            <CarDetails {...car} />
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
