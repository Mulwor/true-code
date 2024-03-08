import { StateShema } from 'app/provider/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateShema) => {
  return state.articleDetailsPage?.comments?.isLoading
}

export const getArticleCommentsError = (state: StateShema) => {
  return state.articleDetailsPage?.comments?.error;
}
