import axios from 'axios';

const CARS_API_URL = 'https://pdm-cars-api.herokuapp.com';

const CarsAPI = axios.create({
  baseURL: CARS_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE,PATCH',
  },
});

const getCars = () => CarsAPI.get('/cars');

const create = car => CarsAPI.post('/cars', car);

const update = (car, carId) => CarsAPI.patch(`/cars/${carId}`, car);

const remove = carId => CarsAPI.delete(`/cars/${carId}`);

const show = carId => CarsAPI.get(`/cars/${carId}`);

export default {
  getCars,
  create,
  update,
  remove,
  show,
}
