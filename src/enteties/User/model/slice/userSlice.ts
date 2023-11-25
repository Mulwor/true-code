import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {};

// Редаксовый слайс
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Сохраняем данные в стейт
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },

    // Когда пользователь открывает и закрывает вкладчку, нам необходимо
    // определить авторизован ли пользователь
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      // Если нам вернулся не null, не undefined из локалстоража, то
      // эти данные в state помещаем
      if (user) {
        state.authData = JSON.parse(user);
      }
    },

    // Логика для выхода из системы
    logout: (state) => {
      // Очищаем стейт, делаем его undefined и удаляем токен
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
