import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/provider/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('Написание тестов для LoginPassword', () => {
  test('Должно возвращается значение введенное в пароль', () => {
    const state: DeepPartial<StateShema> = {
      loginForm: {
        password: '123',
      },
    };

    expect(getLoginPassword(state as StateShema)).toEqual('123');
  });

  test('Должно работать с пустым значением', () => {
    const state: DeepPartial<StateShema> = {};
    expect(getLoginPassword(state as StateShema)).toEqual('');
  });
});
