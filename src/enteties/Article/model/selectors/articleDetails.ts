import { StateShema } from 'app/provider/StoreProvider';

// Селектор для получения статьи
export const getArticleDetailsData = (state: StateShema) => state.articleDetails?.data;

// Селектор isLoading
export const getArticleDetailsIsLoading = (state: StateShema) => state.articleDetails?.isLoading;

// Селектор для получение ошибки
export const getArticleDetailsError = (state: StateShema) => state.articleDetails?.error;
