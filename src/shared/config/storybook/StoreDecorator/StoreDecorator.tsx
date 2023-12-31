import { StoryFn } from '@storybook/react';
import { StateShema, StoreProvider } from 'app/provider/StoreProvider';
import { profileReducer } from 'enteties/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateShema>,
  asyncReducers?: ReducersList,
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
