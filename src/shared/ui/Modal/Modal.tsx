import React, {
  ReactNode, useState, useRef, useEffect, useCallback, MutableRefObject,
} from 'react';
import { Mods, classNames } from 'shared/libs/classNames/classNames';
import style from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    lazy,
    onClose,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounter, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

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

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const mods: Mods = {
    [style.opened]: isOpen,
    [style.isClosing]: isClosing,
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

  if (lazy && !isMounter) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(style.Modal, mods, [className])}>
        <div className={style.overlay} onClick={closeHandler}>
          <div className={style.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
