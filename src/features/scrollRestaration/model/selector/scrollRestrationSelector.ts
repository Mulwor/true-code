import { createSelector } from '@reduxjs/toolkit';
import { StateShema } from 'app/provider/StoreProvider';

export const getScrollRestration = (state: StateShema) => state.scrollRestration.scroll;
export const getScrollRestrationByPath = createSelector(
  getScrollRestration,
  (state: StateShema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
