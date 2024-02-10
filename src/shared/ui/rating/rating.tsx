import { ComponentProps, FC } from 'react';

import cn from 'clsx';

import s from './rating.module.scss';

import { Star } from '@/shared/assets';

export const Rating: FC<ComponentProps<'div'>> = props => {
  const { className, ...rest } = props;

  const style = cn(s.rating, className);

  return (
    <div className={style} {...rest}>
      <Star active="active" />
      <Star active="active" />
      <Star />
      <Star />
      <Star />
    </div>
  );
};
