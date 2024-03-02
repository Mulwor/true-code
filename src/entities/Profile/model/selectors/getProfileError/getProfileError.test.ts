import { StateShema } from 'app/provider/StoreProvider';
import { getProfileError } from './getProfileError';

describe('Тесты для getProfileError', () => {
  test('Проверяем на возвращение ошибки', () => {
    const state: DeepPartial<StateShema> = {
      profile: {
        error: 'Возникла ошибка',
      },
    };

    expect(getProfileError(state as StateShema)).toEqual('Возникла ошибка');
  });

  test('Проверяем на пустое значение', () => {
    const state: DeepPartial<StateShema> = {};
    expect(getProfileError(state as StateShema)).toEqual(undefined);
  });
});
