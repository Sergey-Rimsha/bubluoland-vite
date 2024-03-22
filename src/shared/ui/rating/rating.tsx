import { ComponentProps, FC } from 'react';

import cn from 'clsx';

import s from './rating.module.scss';

import { Star } from '@/shared/assets';

interface RatingProps extends ComponentProps<'div'> {
  rating?: number;
  variant?: 'primary' | 'secondary';
}

export const Rating: FC<RatingProps> = props => {
  const { className, rating, variant = 'primary', ...rest } = props;

  const style = cn(s.rating, className);

  return (
    <div className={style} {...rest}>
      <div className={s.rating__star}>
        <Star active="active" />
      </div>
      <div className={s.rating__star}>
        <Star active="active" />
      </div>
      <div className={s.rating__star}>
        <Star />
      </div>
      <div className={s.rating__star}>
        <Star />
      </div>
      <div className={s.rating__star}>
        <Star />
      </div>
      {variant === 'primary' && <div className={s.rating__value}>{rating}</div>}
    </div>
  );
};
