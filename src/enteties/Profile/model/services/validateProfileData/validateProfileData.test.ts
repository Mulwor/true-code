import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';
import { validateProfileData } from './valitadeProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
  username: 'admin',
  age: 26,
  country: Country.Ukraine,
  lastname: 'Adigezalli',
  city: 'Saint-Petersburg',
  first: 'Ali',
  currency: Currency.USD,
};

describe('Тесты для validateProfileData', () => {
  test('Успешное выполнение', () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('Когда не указан имя и фамилия', async () => {
    const result = validateProfileData({
      ...data,
      first: '',
      lastname: '',
    });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('Непонят возраст', async () => {
    const result = validateProfileData({
      ...data,
      age: undefined,
    });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('Отсутствует страна', async () => {
    const result = validateProfileData({
      ...data,
      country: undefined,
    });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('Отсутсвие всех данных', () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
});
