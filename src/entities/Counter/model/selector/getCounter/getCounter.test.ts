import { StateShema } from 'app/provider/StoreProvider';
import { getCounter } from './getCounter';

describe('Получения ключа и значения', () => {
  test('Проверяет то, что данный селектор возвращает тот участок стейта, который нам нужен, то есть объект с ключом value и значением 10', () => {
    const state: DeepPartial<StateShema> = {
      counter: { value: 10 },
    };

    expect(getCounter(state as StateShema)).toEqual({ value: 10 });
  });
});
