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

export default {
  getCars,
}
