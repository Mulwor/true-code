import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { Mods, classNames } from 'shared/libs/classNames/classNames';
import style from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
  start: style.justifyStart,
  center: style.justifyCenter,
  end: style.justifyEnd,
  between: style.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: style.alignStart,
  center: style.alignCenter,
  end: style.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: style.directionRow,
  column: style.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: style.gap4,
  8: style.gap8,
  16: style.gap16,
  32: style.gap32,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify; // Свойство - justify-content
  align?: FlexAlign; // Свойство - align-items
  direction: FlexDirection; // Направление - горизатнальная/вертикальное
  gap?: FlexGap;
  max?: boolean;
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [style.max]: max,
  };

  return (
    <div className={classNames(style.Flex, mods, classes)}>
      {children}
    </div>
  );
};
