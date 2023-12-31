import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider/config/StateSchema';
import { Profile } from '../../types/profile';

// 1. Создаем thunk, которая дженериком принимает три значения: тип Профиля, void и конфиг санков
// из стринги
export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',

  // Если у нас нет никаких аргументов, то мы ставим прочерк. Пример с аргументом находится
  // в loginByUsername
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      // extra.api.get<Profile>('/profile'); => похож на axios.get, который идет
      // в db.json и возвращает профиль,
      const response = await extra.api.get<Profile>('/profile');
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('error');
    }
  },
);
