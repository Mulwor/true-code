import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/libs/classNames/classNames';
import { Page } from 'widget/Page/Page';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  // Если у нас айдишник есть значит это режим редактирования
  const { id } = useParams<{id: string}>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit
        ? t('Редактирование статьи с ID = ') + id
        : t('Создание новой статьи')}
    </Page>
  );
});

export default ArticleEditPage;
