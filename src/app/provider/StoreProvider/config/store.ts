import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'enteties/Counter';
import { userReducer } from 'enteties/User';
import { StateShema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateShema) {
  const rootReducers: ReducersMapObject<StateShema> = {
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateShema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
