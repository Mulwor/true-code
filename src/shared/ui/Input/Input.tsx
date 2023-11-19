import { classNames } from 'shared/libs/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';
import style from './Input.module.scss';

// Omit - позволяет забрать из типа все пропсы, но изключить, которые нам не нужны.
// Первым аргументов через запятую передаем то, что хотим забрать, а вторым то, что
// исключить: забираем value, исключаем onChange
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void
}

// memo - позволяет избежать лищних перерисовок
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(style.Input, {}, [className])}>
      <input type={type} value={value} onChange={onChangeHandler} />
    </div>
  );
});
