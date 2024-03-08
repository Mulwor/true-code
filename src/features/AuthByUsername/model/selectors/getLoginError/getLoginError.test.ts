import { StateShema } from 'app/provider/StoreProvider';
import { getLoginError } from './getLoginError';

describe('Написание тестов для loginError', () => {
  test('Должна возвращаться ошибка (error)', () => {
    const state: DeepPartial<StateShema> = {
      loginForm: {
        error: 'error',
      },
    };

    expect(getLoginError(state as StateShema)).toEqual('error');
  });

  test('Если пустой значение, то возвращает undefined', () => {
    const state: DeepPartial<StateShema> = {};
    expect(getLoginError(state as StateShema)).toEqual(undefined);
  });
});
