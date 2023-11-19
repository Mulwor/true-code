import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
  // По умолчанию стартовые значения:
  username: '',
  password: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // Редьюсер на изменения имени
    // PayloadAction - c помощью него можем определить, что
    // мы ожидаем внутри экшена
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    // Редьюсер на изменения пароля
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
