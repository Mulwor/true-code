import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateShema } from 'app/provider/StoreProvider';

// Тип, которая представляет из себя функцию, которая принимает какой-то аргумент и возвращает AsyncFuncAction
type ActionCreatorType<
  Return,
  Arg,
  RejectedValue
>= (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

// Return - возвращает тип Thunk, arg - это аргумент - то, что возвращает в случае ошибки
export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateShema;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
