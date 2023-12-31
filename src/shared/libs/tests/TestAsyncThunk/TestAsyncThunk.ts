import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateShema } from 'app/provider/StoreProvider';
import axios, { AxiosStatic } from 'axios';

// Тип, которая представляет из себя функцию, которая принимает какой-то аргумент и возвращает AsyncFuncAction
type ActionCreatorType<
  Return,
  Arg,
  RejectedValue
>= (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

// Например сейчас мы создаем для модуля аксиос - мок, он перехватывает все вызовы и заменяет на свои.
jest.mock('axios');

// Он используется для создания типизированного мока (typed mock) из модуля или объекта,
// что обеспечивает доступ к автозаполнению и проверке типов для мока.
// Функция mocked первым аргументом передаем модуль, который хотим замокать
const mockedAxios = jest.mocked(axios);

// Return - возвращает тип Thunk, arg - это аргумент - то, что возвращает в случае ошибки
export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateShema;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: jest.MockedFn<any>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(
      this.dispatch,
      this.getState,
      {
        api: this.api, navigate: this.navigate,
      },
    );

    return result;
  }
}
