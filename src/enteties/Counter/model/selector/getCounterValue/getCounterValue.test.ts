import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/provider/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('Получения числа', () => {
  test('Проверяет, что селектор возвращает нам число 10', () => {
    const state: DeepPartial<StateShema> = {
      // DeepPartian - позволяет проигнорировать все поля, и объявить те которые необходимы.
      counter: { value: 10 },
    };

    expect(getCounterValue(state as StateShema)).toEqual(10);
  });
});
