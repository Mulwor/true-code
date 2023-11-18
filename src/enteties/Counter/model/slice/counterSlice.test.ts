import { CounterActions, counterReducer } from './counterSlice';
import { CounterScheme } from '../types/counterScheme';

describe('Тестирование слайсов и редьюсеров', () => {
  test('Отвечает за изменения счетчика на -1', () => {
    const state: CounterScheme = { value: 10 };
    expect(counterReducer(state, CounterActions.decrement())).toEqual({
      value: 9,
    });
  });

  test('Отвечает за изменения счетчика на +1', () => {
    const state: CounterScheme = { value: 10 };
    expect(counterReducer(state, CounterActions.increment())).toEqual({
      value: 11,
    });
  });

  test('Проверяет работоспособность экшена при пустом стейте', () => {
    expect(counterReducer(undefined, CounterActions.increment())).toEqual({
      value: 1,
    });
  });
});
