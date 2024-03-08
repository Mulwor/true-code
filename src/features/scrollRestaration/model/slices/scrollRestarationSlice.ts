import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollRestrationSchema } from '../types/scrollRestarationSchema';

const initialState: ScrollRestrationSchema = {
  scroll: {},
};

export const scrollRestrationSlice = createSlice({
  name: 'scrollRestrationSlice',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{
      path: string;
      position: number;
    }>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: scrollRestrationActions } = scrollRestrationSlice;
export const { reducer: scrollRestrationReducer } = scrollRestrationSlice;
