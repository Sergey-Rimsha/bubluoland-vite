import { ReactElement } from 'react';

import cn from 'clsx';

import s from './filter-menu.module.scss';

import { Filter, Grid, List, Search } from '@/shared/assets';
import { Typography } from '@/shared/ui';

export const FilterMenu = (): ReactElement => {
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
        <button className={cn(s.button, s.button_active)} aria-label="button" type="button">
          <Grid />
        </button>
        <button className={s.button} aria-label="button" type="button">
          <List color="#A7A7A7" />
        </button>
      </div>
    </div>
  );
};
