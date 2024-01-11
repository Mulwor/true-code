import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import style from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(style.ArticleImageBlockComponent, {}, [className])}>
      Article Image Block Component
    </div>
  );
};
