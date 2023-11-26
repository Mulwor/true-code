import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  // От куда хотим телопортировать модалку
  children: ReactNode;
  // Куда хотим его отправить
  element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
  const {
    children,
    element = document.body,
  } = props;

  return createPortal(children, element);
};
