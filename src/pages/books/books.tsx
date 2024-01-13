import { ReactElement } from 'react';

import cn from 'clsx';

import s from './books.module.scss';

import { cards } from '@/entities/stateCards.ts';
import { FilterMenu } from '@/features';
import { useAppSelector } from '@/shared/lib';
import { BookCard } from '@/widgets';

export const Books = (): ReactElement => {
  const view = useAppSelector(state => state.books?.view);

  const styleView = cn(
    s.books__wrap,
    { [s.books__wrap_grid]: view === 'GRID' },
    { [s.books__wrap_list]: view === 'LIST' },
  );

  return (
    <div className={s.books}>
      <FilterMenu />
      <section className={styleView}>
        {cards.map(item => {
          return <BookCard view={view} key={item.id} {...item} />;
        })}
      </section>
    </div>
  );
};
