import { classNames } from 'shared/libs/classNames/classNames';
import React, { InputHTMLAttributes, memo, useState } from 'react';
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
    placeholder,
    ...otherProps
  } = props;

  // Каретка когда она в фокусе
  const [isFocused, setIsFocused] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  return (
    <div className={classNames(style.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={style.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={style.caretWrapper}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={style.input}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {isFocused && (
          <span className={style.caret} />
        )}
      </div>
    </div>
  );
});
