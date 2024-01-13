import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { memo } from 'react';
import { ArticleImageBlock } from 'enteties/Article/model/types/article';
import { TextAlign, Text } from 'shared/ui/Text/Text';
import style from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(style.ArticleImageBlockComponent, {}, [className])}>
      <img src={block.src} className={style.img} alt={block.title} />
      {block.title && (
        <Text text={block.title} align={TextAlign.CENTER} />
      )}
    </div>
  );
});
