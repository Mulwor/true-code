import { configureStore } from '@reduxjs/toolkit';
import { StateShema } from './StateSchema';

export function createReduxStore(initialState?: StateShema) {
  return configureStore<StateShema>({
    reducer: {},

    // Можем отключить девтулсы для продакшена
    devTools: __IS_DEV__,

    // Является опциональным, берет исходное значение из стора
    preloadedState: initialState,
  });
}
