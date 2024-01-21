import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Article, ArticleView } from '../../model/types/article';
import style from './ArticleListItem.module.scss';

interface ArticleListItemsProps {
  className?: string;
  article: Article;
  view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemsProps) => {
  const { className, article, view } = props;
  const { t } = useTranslation('article');

  const types = <Text text={article.type.join(', ')} className={style.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={style.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(style.ArticleListItem, {}, [className, style[view]])}>
        <Card className={style.card}>
          <div className={style.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={style.username} />
            <Text text={article.createdAt} className={style.date} />
          </div>
          <Text title={article.title} className={style.title} />
          {types}
          <img src={article.img} className={style.img} alt={article.title} />
          <div className={style.footer}>
            <Button theme={ThemeButton.OUTLINE}>
              {t('Читать далее...')}
            </Button>
            {views}
          </div>
        </Card>
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
          {types}
          {views}
          <Icon Svg={EyeIcon} />
        </div>
        <Text text={article.title} className={style.title} />
      </Card>
    </div>
  );
});
