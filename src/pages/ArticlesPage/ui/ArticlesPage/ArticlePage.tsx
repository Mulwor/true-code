import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import style from './ArticlePage.module.scss';

interface ArticlePageProps {
  className?: string;
}

const ArticlePage = (props: ArticlePageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(style.ArticlePage, {}, [className])}>
      Данная страница отвечает за список все статьей, поиск, фильтр
    </div>
  );
};

export default memo(ArticlePage);
