import {
  AnyAction, Reducer, ReducersMapObject, combineReducers,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchemaKey, StateShema } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateShema>) : ReducerManager {
  const reducers = { ...initialReducers };
  // Много редьюеров превращает в один общий
  let combinedReducer = combineReducers(reducers);

  // Массив, который хранит в себе название редьюсеров, которые
  // мы хотим удалить. Например хотим удалить редюсер логинФорм,
  // добавляем его сюда
  let keysToRemove: Array<StateSchemaKey> = [];

  return {
    // Просто возвращает редьюсеры
    getReducerMap: () => reducers,

    // Функция редюсер рабоатает след.образом - если
    // в массиве у нас есть какие-то ключи, то мы эти ключи из стейта
    // полностью удаляем. Просто по ключу (delete state[key]; )по названию
    // удаляем редюсеры
    reduce: (state: StateShema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },

    // Добавляет в редюсер по ключу новый редюсер
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    // Добавляет ключ в массив и удаляет этот ключ из редюсера
    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
