import { StateShema } from 'app/provider/StoreProvider';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';
import { getProfileData } from './getProfileData';

describe('Тесты для getProfileData', () => {
  test('Проверяем содержимое даты', () => {
    const data = {
      username: 'admin',
      age: 26,
      country: Country.Ukraine,
      lastname: 'Adigezalli',
      city: 'Saint-Petersburg',
      first: 'Ali',
      currency: Currency.USD,
    };

    const state: DeepPartial<StateShema> = {
      profile: {
        data,
      },
    };

    expect(getProfileData(state as StateShema)).toEqual(data);
  });

  test('Проверяем на пустое значение', () => {
    const state: DeepPartial<StateShema> = {};
    expect(getProfileData(state as StateShema)).toEqual(undefined);
  });
});
