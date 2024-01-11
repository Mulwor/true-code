import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { ArticleDetails } from 'enteties/Article';
import style from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(style.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails />
    </div>
  );
};

export default memo(ArticleDetailsPage);
