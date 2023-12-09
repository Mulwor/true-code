import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'enteties/Counter';
import { userReducer } from 'enteties/User';
import { useDispatch } from 'react-redux';
import { StateShema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: StateShema,
  asyncReducers?: ReducersMapObject<StateShema>,
) {
  const rootReducers: ReducersMapObject<StateShema> = {
    ...asyncReducers,
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

// Берем typeof от функции, и мы получаем тип того, что это функция
// должна вернуть
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
