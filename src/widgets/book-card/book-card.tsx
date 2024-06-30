import { ReactElement, KeyboardEvent } from 'react';

import cn from 'clsx';
import { useNavigate } from 'react-router-dom';

import s from './book-card.module.scss';

import { BooksState } from '@/entities/books';
import { CardI } from '@/entities/stateCards.ts';
import { BookImg, Button, Rating, Typography } from '@/shared/ui';

interface PropsBookCard extends CardI {
  view?: BooksState['view'];
}

export const BookCard = ({ id, title, description, image, booking, view = 'GRID' }: PropsBookCard): ReactElement => {
  const navigate = useNavigate();
  const cardStyle = cn(s.card, { [s.grid]: view === 'GRID' }, { [s.list]: view === 'LIST' });

  const onClickHandleCard = (): void => {
    navigate(`/bookInfo/:${id}`);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      onClickHandleCard();
    }
  };

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
          {text}
        </Button>
      </div>
    );
  };

  return (
    <div className={cardStyle} onClick={onClickHandleCard} onKeyDown={handleKeyPress} role="button" tabIndex={0}>
      <BookImg className={s.card__img} image={image[0]} variant={view === 'GRID' ? 'bookCards' : 'bookList'} />
      <div className={s.card__wrap}>
        {view === 'GRID' && <Rating className={s.card__rating} />}
        <div className={s.card__wrap}>
          <Typography className={s.card__title} variant={view === 'GRID' ? 'sub-sm' : 'h5'}>
            {title}
          </Typography>
          <Typography className={s.card__description} variant={view === 'GRID' ? 'body-sm' : 'body-lg'}>
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
