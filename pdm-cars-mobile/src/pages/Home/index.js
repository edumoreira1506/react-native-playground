import React, { useEffect, useState } from 'react';
import { View, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import ActionSheet from 'react-native-actionsheet'

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
  const [actionSheet, setActionSheet] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  const findCars = () => CarsAPI.getCars().then(({ data }) => setCars(data));

  useEffect(() => {
    findCars();
  }, []);

  const handleSaveCarForm = () => {
    const isEditing = Boolean(formCar.id);

    if (isEditing) {
      CarsAPI.update(formCar, formCar.id).then(() => {
        setFormCar(EMPTY_CAR);
        findCars();
      });
    } else {
      CarsAPI.create(formCar).then(() => {
        setFormCar(EMPTY_CAR);
        findCars();
      });
    }
  }

  const handleChangeFormCar = (key, value) => setFormCar(prevFormCar => ({
    ...prevFormCar,
    [key]: value
  }));

  const handleClickOnCar = car => {
    setSelectedCar(car);
    actionSheet?.show?.();
  }

  const handleDeleteCar = () => CarsAPI.remove(selectedCar.id).then(findCars);

  const handleEditCar = () => CarsAPI.show(selectedCar.id).then(({ data }) => setFormCar(data));

  const handleSelectActionSheetOption = index => {
    switch (index) {
      case 1:
        handleEditCar();
        break;
      case 2:
        handleDeleteCar();
        break;
      default:
        setSelectedCar(null);
        break;
    }
  }

  return (
    <View>
      <StatusBar />
      <View style={styles.form}>
        <CarForm {...formCar} onSubmit={handleSaveCarForm} onChangeField={handleChangeFormCar} />
      </View>
      <ScrollView style={styles.carsList}>
        {cars.map((car) => (
          <TouchableOpacity onPress={() => handleClickOnCar(car)} style={styles.car} key={car.id}>
            <CarDetails {...car} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ActionSheet
        ref={setActionSheet}
        options={['Cancelar', 'Editar', 'Deletar']}
        onPress={handleSelectActionSheetOption}
      />
    </View>
  )
}
