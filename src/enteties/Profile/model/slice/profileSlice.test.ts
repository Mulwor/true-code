import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  username: 'admin',
  age: 26,
  country: Country.Ukraine,
  lastname: 'Adigezalli',
  city: 'Saint-Petersburg',
  first: 'Ali',
  currency: Currency.USD,
};

describe('Тесты для редьюсеров в profileSlice', () => {
  test('Проверяем, что возвращает нам readonly: true', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('Тест на закрытие', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: {
        username: '',
      },
    };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('Тест на обновления профиля', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ username: '123456' }),
    )).toEqual({
      form: {
        username: '123456',
      },
    });
  });
});

describe('Тесты для экстра-редьюсеров в profileSlice', () => {
  test('Проверяем service-pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('Проверяем service-fullfiled, когда у экшена есть аргумнеты', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: undefined,
      form: data,
      data,
    });
  });
});
