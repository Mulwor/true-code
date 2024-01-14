import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { ArticleDetails } from 'enteties/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'enteties/Comment';
import style from './ArticleDetalisPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{id:string}>();

  if (!id) {
    return (
      <div>{t('Статья не найдена')}</div>
    );
  }

  return (
    <div className={classNames(style.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text className={style.commentTitle} title={t('Комментарии')} />
      <CommentList comments={[
        {
          id: '1',
          text: 'commen1',
          user: { id: '1', username: 'Valera' },
        },
        {
          id: '2',
          text: 'commen2',
          user: { id: '2', username: 'Valera' },
        },
      ]}
      />
    </div>
  );
};

export default memo(ArticleDetailsPage);
