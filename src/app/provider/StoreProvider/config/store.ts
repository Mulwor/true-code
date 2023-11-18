import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'enteties/Counter';
import { StateShema } from './StateSchema';

export function createReduxStore(initialState?: StateShema) {
  return configureStore<StateShema>({
    reducer: {
      counter: counterReducer,
    },

    // Можем отключить девтулсы для продакшена
    devTools: __IS_DEV__,

    // Является опциональным, берет исходное значение из стора
    preloadedState: initialState,
  });
}
