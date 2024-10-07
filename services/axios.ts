import axios from 'axios';
import {BASE_URL, API_TOKEN} from '@env';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
});
