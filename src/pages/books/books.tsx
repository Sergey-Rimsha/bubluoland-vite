import { ReactElement } from 'react';

import s from './books.module.scss';

import { cards } from '@/entities/stateCards.ts';
import { FilterMenu } from '@/features';
import { BookCard } from '@/widgets';

export const Books = (): ReactElement => {
  return (
    <div className={s.books}>
      <FilterMenu />
      <div className={s.books__main}>
        <section className={s.books__wrap}>
          {cards.map(item => {
            return <BookCard key={item.id} {...item} />;
          })}
        </section>
      </div>
    </div>
  );
};
