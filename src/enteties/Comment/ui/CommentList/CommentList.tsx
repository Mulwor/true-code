import { memo } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import style from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  IsLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    IsLoading,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(style.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard comment={comment} className={style.comment} />
        ))
        : <Text text={t('Комментарии отсутствуют')} />}
    </div>
  );
});
