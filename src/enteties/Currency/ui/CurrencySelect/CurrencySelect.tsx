import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const option = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
  className,
  value,
  onChange,
  readonly,
} : CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Укажите вашу валюту')}
      options={option}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
