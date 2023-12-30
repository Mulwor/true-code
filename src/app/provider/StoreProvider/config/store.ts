import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'enteties/Counter';
import { userReducer } from 'enteties/User';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';
import { StateShema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: StateShema,
  asyncReducers?: ReducersMapObject<StateShema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducers: ReducersMapObject<StateShema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    // @ts-ignore
    reducer: reducerManager.reduce as ReducersMapObject<StateShema>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    // Мидлвары (middlewares) — это функции, которые последовательно
    // вызываются во время обновления данных в хранилище.
    // Сначала мидлвары встраиваются в хранилище при его создании
    // Затем начинается отправка действий (диспатчинга)
    // В этот момент данные проходят через мидлвары и затем попадают в редьюсер
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

// Берем typeof от функции, и мы получаем тип того, что это функция
// должна вернуть
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
