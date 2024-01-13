import { ReactElement } from 'react';

import cn from 'clsx';

import s from './book-card.module.scss';

import { BooksState } from '@/entities/books';
import { CardI } from '@/entities/stateCards.ts';
import { Rating } from '@/features';
import { BookImg, Button, Typography } from '@/shared/ui';

interface PropsBookCard extends CardI {
  view?: BooksState['view'];
}

export const BookCard = ({ title, description, image, booking, view = 'GRID' }: PropsBookCard): ReactElement => {
  const cardStyle = cn(s.card, { [s.grid]: view === 'GRID' }, { [s.list]: view === 'LIST' });

  const cardButton = (text: string): ReactElement => {
    let variantBtn: 'primary' | 'secondary' | 'text' = 'primary';
    let disabled = false;

    if (text === 'Забронирована') {
      variantBtn = 'secondary';
    }

    if (text.includes('занята')) {
      variantBtn = 'secondary';
      disabled = true;
    }

    return (
      <div className={s.card__button}>
        <Button className={s.card__button_size} variant={variantBtn} disabled={disabled} size="sm">
          <Typography className={s.card__button_textSize} variant="body-sm" as="span">
            {text}
          </Typography>
        </Button>
      </div>
    );
  };

  return (
    <div className={cardStyle}>
      <BookImg className={s.card__img} image={image[0]} variant={view === 'GRID' ? 'bookCards' : 'bookList'} />
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
        {view === 'GRID' ? (
          cardButton(booking.message)
        ) : (
          <div className={s.card__block}>
            <Rating className={s.card__rating} />
            {cardButton(booking.message)}
          </div>
        )}
      </div>
    </div>
  );
};
