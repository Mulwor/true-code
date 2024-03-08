import { StateShema } from 'app/provider/StoreProvider';

export const getArticleDetailsData = (state: StateShema) => state.articleDetails?.data;
export const getArticleDetailsIsLoading = (state: StateShema) => state.articleDetails?.isLoading;
export const getArticleDetailsError = (state: StateShema) => state.articleDetails?.error;
