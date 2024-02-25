import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'enteties/User';
import { getArticleDetailsData } from 'enteties/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import style from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <div className={classNames(style.ArticleDetailsPageHeader, {}, [className])}>
      <Button
        theme={ThemeButton.OUTLINE}
        onClick={onBackToList}
      >
        {t('Назад к списку')}
      </Button>

      {canEdit && (
        <Button
          className={style.editArticle}
          theme={ThemeButton.OUTLINE}
          onClick={onEditArticle}
        >
          {t('Редактировать')}
        </Button>
      )}
    </div>
  );
});
