import { ReactElement } from 'react';

import s from './book-card.module.scss';

import { CardI } from '@/entities/stateCards.ts';
import { Rating } from '@/features';
import { DefaultImgBook } from '@/shared/assets';
import { Button, Typography } from '@/shared/ui';

export const BookCard = ({ title, description, image, booking }: CardI): ReactElement => {
  return (
    <div className={s.card}>
      <div className={s.card__img}>{image[0] ? <img src={image[0]} alt="book" /> : <DefaultImgBook />}</div>
      <div className={s.card__wrap}>
        <Rating className={s.card__stars} />
        <div className={s.card__wrap}>
          <Typography className={s.card__title} variant="sub-sm">
            {title}
          </Typography>
          <Typography className={s.card__description} variant="body-sm">
            {description}
          </Typography>
        </div>
        <div className={s.card__button}>
          <Button className={s.card__button_size} variant="primary" size="sm">
            <Typography className={s.card__button_textSize} variant="body-sm" as="span">
              {booking.message}
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};
