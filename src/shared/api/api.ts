import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

// Первый способ - если мы находимся в dev-режиме тогда в качестве основного url укажем 8к,
// А если у нас режим продакшн, то укажем ссылку на продакшн
// const baseUrl = __IS_DEV__ ? 'http://localhost:8000' : 'https://production.ru';

// Второй способ - переопределить страницу создаем еще одну глоб.переменную: __API__

export const $api = axios.create({
  baseURL: __API__,
  // Заголовок для получения данных авторизованным пользователям
  headers: {
    Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
  },
});
