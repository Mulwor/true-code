import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/provider/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('Написание тестов для LoginIsLoading', () => {
  test('Есть загрузка', () => {
    const state: DeepPartial<StateShema> = {
      loginForm: {
        isLoading: true,
      },
    };

    expect(getLoginIsLoading(state as StateShema)).toEqual(true);
  });

  test('Нет загрузки, если пустое значение', () => {
    const state: DeepPartial<StateShema> = {};
    expect(getLoginIsLoading(state as StateShema)).toEqual(false);
  });
});
