import { memo } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { VStack } from 'shared/ui/Stack';
import style from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props:CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (!comment) {
    return null;
  }

  if (isLoading) {
    return (
      <div className={classNames(style.CommentCard, {}, [className])}>
        <div className={style.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={style.username} />
        </div>
        <Skeleton className={style.text} width="100%" height={50} />
      </div>
    );
  }

  return (
    <VStack gap="8" max className={classNames(style.CommentCard, {}, [className])}>
      <AppLink
        to={`${RoutePath.profile}${comment.user.id}`}
        className={style.header}
      >
        {comment.user.avatar
          ? <Avatar size={30} src={comment.user.avatar} />
          : null}
        <Text className={style.username} title={comment.user.username} />
      </AppLink>
      <Text className={style.text} text={comment.text} />
    </VStack>
  );
});
