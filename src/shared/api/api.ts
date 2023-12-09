import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export const $api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    // export const USER_LOCALSTORAGE_KEY = 'user';
    Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
  },
});
