import { StateShema } from 'app/provider/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateShema) => {
  return state.articleDetailsPage?.comments?.isLoading
};

export const getArticleRecommendationsError = (state: StateShema) => {
  return state.articleDetailsPage?.comments?.error
};
