import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';

export const getCanEditArticle = createSelector(
  // Получаем данные об авторизации пользователя, а также статью
  // которую мы рассматриваем.
  getArticleDetailsData,
  getUserAuthData,

  (article, user) => {
    // Если у нас нет статьи и пользователя, то редактировать не получится
    if (!article || !user) {
      return false;
    }

    // В обратном случае берем id пользователя с бекенда и сравнимаем с нашим
    return article.user.id === user.id;
  },
);
