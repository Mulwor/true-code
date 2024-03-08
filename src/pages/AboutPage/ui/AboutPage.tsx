import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widget/Page/Page';

function AboutPage() {
  const { t } = useTranslation('about');
  return (
    <Page>
      {t('about-page')}
    </Page>
  );
}

export default AboutPage;
