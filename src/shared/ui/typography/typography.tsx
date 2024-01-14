import { ComponentPropsWithoutRef, ElementType, ReactElement } from 'react';

import clsx from 'clsx';

import s from './typography.module.scss';

type VariantType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'sub-lg'
  | 'sub-sm'
  | 'body-lg'
  | 'body-sm'
  | 'info-lg'
  | 'info-sm';

type TextProps<T extends ElementType> = {
  as?: T;
  variant?: VariantType;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = 'p'>({
  as,
  className,
  variant = 'h1',
  ...restProps
}: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>): ReactElement => {
  const Component = as || 'p';
  const classNames = clsx(s[variant], className);

  return <Component className={classNames} {...restProps} />;
};
