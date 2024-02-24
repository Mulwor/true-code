import { StateShema } from 'app/provider/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateShema) => state.articleDetailRecommendations?.isLoading;
export const getArticleRecommendationsError = (state: StateShema) => state.articleDetailRecommendations?.error;
