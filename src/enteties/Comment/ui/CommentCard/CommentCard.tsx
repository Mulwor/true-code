import React, { memo } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
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
      {comment.text}
    </div>
  );
});
