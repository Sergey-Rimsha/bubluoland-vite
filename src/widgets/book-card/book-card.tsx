import { ReactElement } from 'react';

import s from './book-card.module.scss';

import { DefaultImgBook, Star } from '@/shared/assets';
import { Typography } from '@/shared/ui';

export const BookCard = (): ReactElement => {
  return (
    <div className={s.card}>
      <div className={s.card__img}>
        <DefaultImgBook />
      </div>
      <div className={s.card__stars}>
        <Star active />
        <Star active />
        <Star active />
        <Star />
        <Star />
      </div>
      <Typography className={s.card__title} variant="sub-sm">
        Грокаем алгоритмы. Иллюстрированное пособие для програм
      </Typography>
      <Typography variant="body-sm">Адитья Бхаргава, Патрик Нимейер, 2019</Typography>
      <div className={s.card__button}>
        <button className={s.button} type="button">
          Забронирована
        </button>
      </div>
    </div>
  );
};
