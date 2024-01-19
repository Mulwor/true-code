import { userActions } from 'enteties/User';
import { TestAsyncThunk } from 'shared/libs/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
  /*
  let dispatch: Dispatch;
  let getState: () => StateShema;

  beforeEach(() => {
    // Вызываются заглуши для диспатч и getState
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('Запрос должен выполнится успешно', async () => {
    const userValue = { username: 'Valera', id: '1' };
    // Объявляем типы
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const action = loginByUsername({
      username: 'Valera',
      password: '123',
    });
    const result = await action(dispatch, getState, undefined);

    // Убеждаемся, что dispatch был вызыван
    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    // Убеждаемся в том, что dispatch был вызван 3 раза
    expect(dispatch).toHaveBeenCalledTimes(3);
    // Запрос на сервер был действительно отправлен
    expect(mockedAxios.post).toHaveBeenCalled();
    // Ассинхронная функция сработало без ошибок
    expect(result.meta.requestStatus).toBe('fulfilled');
    // Проверяем, что возвращаются данные о пользователе
    expect(result.payload).toEqual(userValue);
  });

  test('Запрос должен выполнится с ошибкой', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = loginByUsername({ username: 'Valera', password: '123' });
    const result = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
  */

  test('Используем TestAsyncThunk для первого теста', async () => {
    const userValue = { username: 'Valera', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const result = await thunk.callThunk({ username: 'Valera', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('Используем TestAsyncThunk для второго теста', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: 'Valera', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
