import { Mods, classNames } from 'shared/libs/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import style from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];

  // Принимаем выбранное значение и с помощью этого мы его отразим
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly,
  } = props;

  const optionsList = useMemo(() => options?.map((opt) => (
    <option className={style.option} value={opt.value} key={opt.value}>
      {opt.content}
    </option>
  )), [options]);

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
    /*
      if (onChange) {
        onChange(event.target.value)
      }
    */
  };

  const mods: Mods = {};

  return (
    <div className={classNames(style.Wrapper, mods, [className])}>
      {label && <span className={style.label}>{`${label}>`}</span> }
      <select
        className={style.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
});
