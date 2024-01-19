import { StateShema } from 'app/provider/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateShema) => state.articleDetailsComment?.isLoading;
export const getArticleCommentsError = (state: StateShema) => state.articleDetailsComment?.error;
