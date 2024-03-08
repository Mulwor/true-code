import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/libs/classNames/classNames';
import { ReactNode, memo } from 'react';
import style from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme;
  children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link to={to} className={classNames(style.AppLink, {}, [className, style[theme]])} {...otherProps}>
      {children}
    </Link>
  );
});
