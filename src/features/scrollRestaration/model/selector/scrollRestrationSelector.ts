import { createSelector } from '@reduxjs/toolkit';
import { StateShema } from 'app/provider/StoreProvider';

export const getScrollRestration = (state: StateShema) => state.scrollRestration.scroll;
export const getScrollRestrationByPath = createSelector(
  // Получаем весь объект
  getScrollRestration,
  // Передаем путь
  (state: StateShema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
