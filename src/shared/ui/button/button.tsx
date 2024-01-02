import { ButtonHTMLAttributes, ReactElement } from 'react';

import cn from 'clsx';

import s from './button.module.scss';

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'lg';
}
export const Button = (props: PropsButton): ReactElement => {
  const { variant = 'primary', size = 'lg', className, children, ...rest } = props;

  const style = cn(s.button, s[size], s[variant], className);

  return (
    <button className={style} type="button" {...rest}>
      {children}
    </button>
  );
};
