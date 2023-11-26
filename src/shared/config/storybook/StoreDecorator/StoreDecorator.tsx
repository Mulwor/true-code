import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateShema, StoreProvider } from 'app/provider/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateShema>) => (StoryComponent: StoryFn) => (
  <StoreProvider initialState={state}>
    <StoryComponent />
  </StoreProvider>
);
