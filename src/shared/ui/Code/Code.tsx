import { classNames } from 'shared/libs/classNames/classNames';
import { memo, useCallback } from 'react';
import CopyIcon from 'src/shared/assets/icons/copy-20-20.svg';
import style from './Code.module.scss';
import { Button } from '../Button/Button';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(style.Code, {}, [className])}>
      <Button onClick={onCopy} className={style.copyBtn}>
        <CopyIcon className={style.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
