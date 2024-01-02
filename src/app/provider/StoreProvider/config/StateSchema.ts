import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterScheme } from 'enteties/Counter';
import { ProfileSchema } from 'enteties/Profile';
import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'features/AuthByUsername';
import { To, NavigateOptions } from 'react-router-dom';

export interface StateShema {
  counter: CounterScheme;
  user: UserSchema;

  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateShema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateShema>
  reduce: (state: StateShema, action: AnyAction) => CombinedState<StateShema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateShema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateShema;
}
