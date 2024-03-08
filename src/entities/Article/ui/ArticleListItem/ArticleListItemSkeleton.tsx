import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleleton/Skeleton';
import { classNames } from 'shared/libs/classNames/classNames';
import style from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const { className, view } = props;

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(style.ArticleListItem, {}, [className, style[view]])}>
        <Card className={style.card}>
          <div className={style.header}>
            <Skeleton border="50%" height={30} width={30} />
            <Skeleton width={150} height={16} className={style.username} />
            <Skeleton width={150} height={16} className={style.date} />
          </div>
          <Skeleton width={250} height={24} className={style.title} />
          <Skeleton height={200} className={style.img} />
          <div className={style.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(style.ArticleListItem, {}, [className, style[view]])}>
      <Card className={style.card}>
        <div className={style.imageWrapper}>
          <Skeleton width={200} height={200} className={style.img} />
        </div>
        <div className={style.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={style.title} />
      </Card>
    </div>
  );
});
