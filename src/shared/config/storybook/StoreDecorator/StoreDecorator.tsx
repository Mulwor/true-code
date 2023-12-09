import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateShema, StoreProvider } from 'app/provider/StoreProvider';
import { profileReducer } from 'enteties/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateShema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateShema>,
  asyncReducers?: DeepPartial<StateShema>,
) => (StoryComponent: StoryFn) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{
      ...defaultAsyncReducers,
      ...asyncReducers,
    }}
  >
    <StoryComponent />
  </StoreProvider>
);
