import { ReactElement } from 'react';

import s from './book-info.module.scss';
import { InfoBook } from './ui';

import { BookImg, Button, Rating, Typography } from '@/shared/ui';

export const BookInfo = (): ReactElement => {
  return (
    <div className={s.bookInfo}>
      <div className={s.bookInfo__wrap}>
        <BookImg variant="preview" />
        <div className={s.bookInfo__block}>
          <Typography className={s.bookInfo__title} variant="h3" as="h3">
            Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
          </Typography>
          <Typography className={s.bookInfo__description} variant="h5" as="h5">
            Адитья Бхаргава, 2019
          </Typography>
          <Button className={s.bookInfo__button} variant="primary" size="lg">
            Забронировать
          </Button>
          <Typography className={s.bookInfo__subTitle} variant="h5" as="h5">
            О книге
          </Typography>
          <Typography className={s.bookInfo__about} variant="body-lg" as="div">
            Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
            решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
            изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
            время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
            алгоритмы — это веселое и увлекательное занятие.
          </Typography>
        </div>
      </div>
      <Typography className={s.subTitle} variant="h5" as="h5">
        Рейтинг
      </Typography>
      <Rating className={s.rating} rating={4.3} />
      <Typography className={s.subTitle} variant="h5" as="h5">
        Подробная информация
      </Typography>
      <InfoBook />
    </div>
  );
};
