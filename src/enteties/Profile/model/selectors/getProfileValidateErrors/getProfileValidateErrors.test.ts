import { StateShema } from 'app/provider/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('Тесты для getProfileValidateErrors', () => {
  test('Проверяем валидацию', () => {
    const state: DeepPartial<StateShema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.SERVER_ERROR,
          ValidateProfileError.INCORRECT_AGE,
        ],
      },
    };

    expect(getProfileValidateErrors(state as StateShema)).toEqual([
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('Проверяем на пустое значение', () => {
    const state: DeepPartial<StateShema> = {};
    expect(getProfileValidateErrors(state as StateShema)).toEqual(undefined);
  });
});
