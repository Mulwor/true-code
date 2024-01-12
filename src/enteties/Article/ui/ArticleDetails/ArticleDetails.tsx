import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchArticleById } from 'enteties/Article/model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from 'enteties/Article/model/selectors/articleDetails';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import style from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const data = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  let content;

  if (isLoading) {
    content = (
      <div>{t('loading')}</div>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('error')}
      />
    );
  } else {
    content = (
      <div>{t('Article Details')}</div>
    );
  }

  useEffect(() => {
    dispatch(fetchArticleById(id || ''));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(style.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
