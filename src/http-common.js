import axios from 'axios';

export const BASE_URL = 'https://www.themealdb.com/';

export const HTTP = axios.create({
  baseURL: BASE_URL,
});
