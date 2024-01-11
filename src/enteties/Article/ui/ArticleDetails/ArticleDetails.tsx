import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import style from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

export const ArticleDetails = (props: ArticleDetailsProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(style.ArticleImageBlockComponent, {}, [className])}>
      Article Details
    </div>
  );
};
