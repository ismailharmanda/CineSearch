import axios from 'axios';
import {BASE_URL, API_KEY, API_HOST} from '@env';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
  },
});
