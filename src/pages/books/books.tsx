import { ReactElement } from 'react';

import cn from 'clsx';

import s from './books.module.scss';

import { cards } from '@/entities/stateCards.ts';
import { useAppSelector } from '@/shared/lib';
import { BookCard } from '@/widgets';

export const Books = (): ReactElement => {
  const view = useAppSelector(state => state.books?.view);

  const styleView = cn(s.books, { [s.books_grid]: view === 'GRID' }, { [s.books_list]: view === 'LIST' });

  return (
    <section className={styleView}>
      {cards.map(item => {
        return <BookCard view={view} key={item.id} {...item} />;
      })}
    </section>
  );
};
