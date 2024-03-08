import { StateShema } from 'app/provider/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('Написание тестов для LoginPassword', () => {
  test('Должно возвращается значение введенное в username', () => {
    const state: DeepPartial<StateShema> = {
      loginForm: {
        username: 'Valera',
      },
    };

    expect(getLoginUsername(state as StateShema)).toEqual('Valera');
  });

  test('Должно работать с пустым значением', () => {
    const state: DeepPartial<StateShema> = {};
    expect(getLoginUsername(state as StateShema)).toEqual('');
  });
});
