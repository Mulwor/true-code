import { StoryFn } from '@storybook/react';
import { StateShema, StoreProvider } from 'app/provider/StoreProvider';
import { articleDetailsReducer } from 'enteties/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'enteties/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { addCommentFormReducer } from 'features/addCommentsForm/model/slices/addCommentFormSlice';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import { ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
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
