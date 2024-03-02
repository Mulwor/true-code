import { StateShema } from 'app/provider/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('Тесты для getProfileReadonly', () => {
  test('Проверяем на онли чтения', () => {
    const state: DeepPartial<StateShema> = {
      profile: {
        readonly: true,
      },
    };

    expect(getProfileReadonly(state as StateShema)).toEqual(true);
  });

  test('Проверяем на пустое значение', () => {
    const state: DeepPartial<StateShema> = {};
    expect(getProfileReadonly(state as StateShema)).toEqual(undefined);
  });
});
