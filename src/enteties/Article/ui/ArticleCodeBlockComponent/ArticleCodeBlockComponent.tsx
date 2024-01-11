import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import style from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(style.ArticleCodeBlockComponent, {}, [className])}>
      Article Code Block Component
    </div>
  );
};
