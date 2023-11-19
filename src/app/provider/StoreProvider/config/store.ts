import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'enteties/Counter';
import { userReducer } from 'enteties/User';
import { loginReducer } from 'features/AuthByUsername';
import { StateShema } from './StateSchema';

export function createReduxStore(initialState?: StateShema) {
  // Представляет из себя типизацию объекта, чье значение, cоответствует различным редьюсером. Это устраняет следующию ошибку на строке 16
  // Type '{ counter: any; }' is not assignable to type 'Reducer<StateShema, AnyAction> | ReducersMapObject<StateShema, AnyAction>'.
  // Property 'user' is missing in type '{ counter: any; }' but required in type 'ReducersMapObject<StateShema, AnyAction>
  const rootReducers: ReducersMapObject<StateShema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateShema>({
    reducer: rootReducers,

    // Можем отключить девтулсы для продакшена
    devTools: __IS_DEV__,

    // Является опциональным, берет исходное значение из стора
    preloadedState: initialState,
  });
}
