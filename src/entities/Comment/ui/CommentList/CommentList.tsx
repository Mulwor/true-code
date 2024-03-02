import { memo } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading,
  } = props;

  const { t } = useTranslation();

  if (isLoading) {
    <VStack gap="16" max className={classNames('', {}, [className])}>
      <CommentCard isLoading />
      <CommentCard isLoading />
      <CommentCard isLoading />
    </VStack>;
  }

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            comment={comment}
            key={comment.id}
          />
        ))
        : <Text text={t('Комментарии отсутствуют')} />}
    </VStack>
  );
});
