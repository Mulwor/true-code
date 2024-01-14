import React, { memo } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import style from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props:CommentCardProps) => {
  const { className, comment, isLoading } = props;

  return (
    <div className={classNames(style.CommentCard, {}, [className])}>
      <div className={style.header}>
        {comment.user.avatar
          ? <Avatar size={30} src={comment.user.avatar} />
          : null}
        <Text className={style.username} title={comment.user.username} />
      </div>
      <Text className={style.text} text={comment.text} />
    </div>
  );
});
