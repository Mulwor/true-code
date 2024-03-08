import { StateShema } from 'app/provider/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('Получения числа', () => {
  test('Проверяет, что селектор возвращает нам число 10', () => {
    const state: DeepPartial<StateShema> = {
      counter: { value: 10 },
    };

    expect(getCounterValue(state as StateShema)).toEqual(10);
  });
});
