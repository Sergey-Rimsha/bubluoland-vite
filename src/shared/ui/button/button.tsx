import { ButtonHTMLAttributes, ReactElement } from 'react';

import cn from 'clsx';

import s from './button.module.scss';

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  classStyle?: string;
  size?: 'sm' | 'lg';
}
export const Button = (props: PropsButton): ReactElement => {
  const { classStyle, variant = 'primary', size = 'lg', children } = props;

  const style = cn(s.button, s[size], s[variant], classStyle);

  return (
    <button className={style} type="button" {...props}>
      {children}
    </button>
  );
};
