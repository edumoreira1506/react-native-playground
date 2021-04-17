import React, { useEffect, useState } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';

import CarsAPI from '../../services/CarsAPI';
import CarDetails from '../../components/CarDetails';
import CarForm from '../../components/CarForm';

import styles from './styles';

const EMPTY_CAR = {
  model: '',
  brand: '',
  hp: '',
}

export default function HomePage() {
  const [cars, setCars] = useState([]);
  const [formCar, setFormCar] = useState(EMPTY_CAR);

  const findCars = () => CarsAPI.getCars().then(({ data }) => setCars(data));

  useEffect(() => {
    findCars();
  }, []);

  const handleSaveCar = () => CarsAPI.create(formCar).then(() => {
    setFormCar(EMPTY_CAR);
    findCars();
  });

  const handleChangeFormCar = (key, value) => setFormCar(prevFormCar => ({
    ...prevFormCar,
    [key]: value
  }));

  return (
    <View>
      <StatusBar />
      <View style={styles.form}>
        <CarForm {...formCar} onSubmit={handleSaveCar} onChangeField={handleChangeFormCar} />
      </View>
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
