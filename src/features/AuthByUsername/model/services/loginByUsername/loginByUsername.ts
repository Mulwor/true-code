import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'enteties/User';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

// export interface User { id: string; username: string}

// Типизация - первым аргументом то, что возвращает, а второй это аргумент, то, что ожидаем на вход
// Первоначально значение rejectValue - это unknown, мы решили явно дать типизацию
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

      // Если с сервера придется пустой ответ, то будем считать, что это ошибка
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('error');
    }
  },
);
