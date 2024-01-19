import { StateShema } from 'app/provider/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('Тесты для getProfileIsLoading', () => {
  test('Проверяем на возвращение загрузки', () => {
    const state: DeepPartial<StateShema> = {
      profile: {
        isLoading: true,
      },
    };

    expect(getProfileIsLoading(state as StateShema)).toEqual(true);
  });

  test('Проверяем на пустое значение', () => {
    const state: DeepPartial<StateShema> = {};
    expect(getProfileIsLoading(state as StateShema)).toEqual(undefined);
  });
});
