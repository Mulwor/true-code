import { BugButton } from 'app/provider/ErrorBoundary';
import { Counter } from 'enteties/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation();
  return (
    <div>
      <BugButton />
      {t('О главной странице')}
      <Counter />
    </div>
  );
}

export default MainPage;
