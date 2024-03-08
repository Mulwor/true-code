import { BugButton } from 'app/provider/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'widget/Page/Page';

function MainPage() {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Page>
      <BugButton />
      {t('Главная страница')}
      <Counter />
      <Input value={value} onChange={onChange} placeholder={t('Инпут')} autofocus />
    </Page>
  );
}

export default MainPage;
