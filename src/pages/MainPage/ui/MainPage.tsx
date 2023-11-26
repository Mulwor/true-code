import { BugButton } from 'app/provider/ErrorBoundary';
import { Counter } from 'enteties/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

function MainPage() {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      <BugButton />
      {t('О главной странице')}
      <Counter />
      <Input value={value} onChange={onChange} placeholder={t('Инпут')} autofocus />
    </div>
  );
}

export default MainPage;
