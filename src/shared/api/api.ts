import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export const $api = axios.create({
  baseURL: 'http://localhost:8000',
  // Заголовок для получения данных авторизованным пользователям
  headers: {
    Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
  },
});
