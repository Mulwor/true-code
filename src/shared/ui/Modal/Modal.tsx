import React, {
  ReactNode, useState, useRef, useEffect, useCallback,
} from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { useTheme } from 'app/provider/ThemeProvider';
import style from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

export interface ModalProps {
  className?: string;
  // Данный пропс необходим для передачи содержимого
  children?: ReactNode;
  // Данный пропс отвечает за определение открытости модального окна
  isOpen?: boolean;
  // Данный пропс отвечает за закрытие модального окна
  onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  // Анимация для закрытие модалки
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 100);
    }
  }, [onClose]);

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  // Данный код отвечает за всплытие, то есть если бы его не было, то
  // модалка отключалось бы даже при нажатии на модалку - некий глушитель,
  // чтобы она не отключалось.
  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Нужен для добавлнеия нужных стилей в будущем
  const mods: Record<string, boolean> = {
    // сработает когда переменная isOpen будет равняться true
    [style.opened]: isOpen,
    [style.isClosing]: isClosing,
    [style[theme]]: true,
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(style.Modal, mods, [className, theme])}>
        <div className={style.overlay} onClick={closeHandler}>
          <div className={style.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
