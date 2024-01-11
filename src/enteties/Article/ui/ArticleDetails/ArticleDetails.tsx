import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import style from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = (props: ArticleDetailsProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(style.ArticleImageBlockComponent, {}, [className])}>
        {t('Article Details')}
      </div>
    </DynamicModuleLoader>
  );
};
