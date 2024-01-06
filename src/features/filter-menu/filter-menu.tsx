import { ReactElement } from 'react';

import cn from 'clsx';

import s from './filter-menu.module.scss';

import { booksActions, BooksState } from '@/entities/books';
import { Filter, Grid, List, Search } from '@/shared/assets';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { Typography } from '@/shared/ui';

export const FilterMenu = (): ReactElement => {
  const dispatch = useAppDispatch();

  const view = useAppSelector(state => state.books?.view);

  const onClickViewMode = (view: BooksState['view']): void => {
    dispatch(booksActions.changeView(view));
  };

  const styleButton = (type: BooksState['view']): string => {
    return cn(s.button, { [s.button_active]: view === type });
  };

  const colorSvg = (type: BooksState['view']): string => {
    return view === type ? '#FFF' : '#A7A7A7';
  };

  return (
    <div className={s.filter}>
      <div className={s.filter__block}>
        <div className={s.search}>
          <div className={s.search__img}>
            <Search />
          </div>
          <input className={s.search__input} placeholder="Поиск книги или автора…" type="text" />
        </div>
        <button className={s.buttonFilter} type="button">
          <Filter />
          <Typography variant="body-sm" as="span">
            По рейтенгу
          </Typography>
        </button>
      </div>
      <div className={s.filter__block}>
        <button
          className={styleButton('GRID')}
          onClick={() => onClickViewMode('GRID')}
          aria-label="button"
          type="button"
        >
          <Grid color={colorSvg('GRID')} />
        </button>
        <button
          className={styleButton('LIST')}
          onClick={() => onClickViewMode('LIST')}
          aria-label="button"
          type="button"
        >
          <List color={colorSvg('LIST')} />
        </button>
      </div>
    </div>
  );
};
