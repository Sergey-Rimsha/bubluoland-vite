import { ComponentProps, FC } from 'react';

import cn from 'clsx';

import s from './rating-book.module.scss';

import { Rating } from '@/shared/ui';

interface RatingBookProps extends ComponentProps<'div'> {
  rating?: number;
}

export const RatingBook: FC<RatingBookProps> = ({ rating, className, ...rest }) => {
  const style = cn(s.rating, className);

  return (
    <div className={style} {...rest}>
      <Rating />
      <div className={s.rating__value}>{rating}</div>
    </div>
  );
};
