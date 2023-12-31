import { ReactElement } from 'react';

import s from './book-card.module.scss';

import { CardI } from '@/entities/stateCards.ts';
import { DefaultImgBook, Star } from '@/shared/assets';
import { Button, Typography } from '@/shared/ui';

export const BookCard = ({ title, description, image, booking }: CardI): ReactElement => {
  return (
    <div className={s.card}>
      <div className={s.card__img}>{image[0] ? <img src={image[0]} alt="book" /> : <DefaultImgBook />}</div>
      <div className={s.card__stars}>
        <Star active="active" />
        <Star active="active" />
        <Star />
        <Star />
        <Star />
      </div>
      <Typography className={s.card__title} variant="sub-sm">
        {title}
      </Typography>
      <Typography variant="body-sm">{description}</Typography>
      <div className={s.card__button}>
        <Button classStyle={s.card__button_size} size="sm" variant="primary">
          <Typography className={s.card__button_textSize} variant="body-sm" as="span">
            {booking.message}
          </Typography>
        </Button>
      </div>
    </div>
  );
};
