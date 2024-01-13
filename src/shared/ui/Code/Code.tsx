import { Mods, classNames } from 'shared/libs/classNames/classNames';
import { ReactNode, memo } from 'react';
import style from './Code.module.scss';
import { Button } from '../Button/Button';

interface CodeProps {
  className?: string;
  children: ReactNode;
}

export const Code = memo((props: CodeProps) => {
  const { className, children } = props;

  const mods: Mods = {};

  return (
    <pre className={classNames(style.Code, mods, [className])}>
      <Button className={style.copyBtn}>Копировать</Button>
      <code>
        {children}
      </code>
    </pre>
  );
});
