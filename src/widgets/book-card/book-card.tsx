import { ReactElement } from 'react';

import cn from 'clsx';

import s from './book-card.module.scss';

import { BooksState } from '@/entities/books';
import { CardI } from '@/entities/stateCards.ts';
import { Rating } from '@/features';
import { DefaultImgBook } from '@/shared/assets';
import { Button, Typography } from '@/shared/ui';

interface PropsBookCard extends CardI {
  view?: BooksState['view'];
}

export const BookCard = ({ title, description, image, booking, view = 'GRID' }: PropsBookCard): ReactElement => {
  const cardStyle = cn(s.card, { [s.grid]: view === 'GRID' }, { [s.list]: view === 'LIST' });

  const cardButton = (): ReactElement => {
    return (
      <div className={s.card__button}>
        <Button className={s.card__button_size} variant="primary" size="sm">
          <Typography className={s.card__button_textSize} variant="body-sm" as="span">
            {booking.message}
          </Typography>
        </Button>
      </div>
    );
  };

  return (
    <div className={cardStyle}>
      <div className={s.card__img}>{image[0] ? <img src={image[0]} alt="book" /> : <DefaultImgBook />}</div>
      <div className={s.card__wrap}>
        {view === 'GRID' && <Rating className={s.card__rating} />}
        <div className={s.card__wrap}>
          <Typography className={s.card__title} variant="sub-sm">
            {title}
          </Typography>
          <Typography className={s.card__description} variant="body-sm">
            {description}
          </Typography>
        </div>
        {view === 'GRID' && cardButton()}
        {view === 'LIST' && (
          <div className={s.card__block}>
            <Rating className={s.card__rating} />
            {cardButton()}
          </div>
        )}
      </div>
    </div>
  );
};
