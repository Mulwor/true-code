import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/libs/hooks/useHover/useHover';
import style from './ArticleListItem.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListItemsProps {
  className?: string;
  article: Article;
  view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemsProps) => {
  const { className, article, view } = props;
  const { t } = useTranslation('article');

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(style.ArticleListItem, {}, [className, style[view]])}>
        {article.title}
      </div>
    );
  }

  return (
    <div className={classNames(style.ArticleListItem, {}, [className, style[view]])}>
      <Card className={style.card}>
        <div className={style.imageWrapper}>
          <img src={article.img} className={style.img} alt={article.title} />
          <Text text={article.createdAt} className={style.date} />
        </div>
        <div className={style.infoWrapper}>
          <Text text={article.type.join(', ')} className={style.types} />
          <Text text={String(article.views)} className={style.views} />
          <Icon Svg={EyeIcon} />
        </div>
        <Text text={article.title} className={style.title} />
      </Card>
    </div>
  );
});
