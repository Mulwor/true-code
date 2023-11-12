import React, { ReactNode } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import style from './Modal.module.scss';

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

  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  };

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
  };

  return (
    <div className={classNames(style.Modal, mods, [className])}>
      <div className={style.overlay} onClick={closeHandler}>
        <div className={style.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  );
};
