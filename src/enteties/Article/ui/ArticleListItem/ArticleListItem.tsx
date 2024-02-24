import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import style from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view } = props;
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const onOpentArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  const types = <Text text={article.type.join(', ')} className={style.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={style.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

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
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={style.textBlock} />
          )}

          <div className={style.footer}>
            <Button onClick={onOpentArticle} theme={ThemeButton.OUTLINE}>
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
      <Card className={style.card} onClick={onOpentArticle}>
        <div className={style.imageWrapper}>
          <img src={article.img} className={style.img} alt={article.title} />
          <Text text={article.createdAt} className={style.date} />
        </div>
        <div className={style.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={style.title} />
      </Card>
    </div>
  );
});
