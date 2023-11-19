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
  const [caretPosition, setCaretPosition] = useState(0);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
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
          onSelect={onSelect}
        />

        {isFocused && (
          <span className={style.caret} style={{ left: `${caretPosition * 9}px` }} />
        )}
      </div>
    </div>
  );
});
