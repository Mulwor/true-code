import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterScheme } from 'enteties/Counter';
import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateShema {
  counter: CounterScheme;
  user: UserSchema;

  // Асинхронные редюсеры
  loginForm?: LoginSchema;
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
