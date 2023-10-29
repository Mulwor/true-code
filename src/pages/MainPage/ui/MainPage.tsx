import { BugButton } from 'app/provider/ErrorBoundary';
import React from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation();
  return (
    <div>
      <BugButton />
      {t('О главной странице')}
    </div>
  );
}

export default MainPage;
