import { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

import s from './books-layout.module.scss';

import { FilterMenu, Menu } from '@/features';

export const BooksLayout = (): ReactElement => {
  return (
    <div className={s.booksLayout}>
      <Menu />
      <div className={s.booksLayout__wrap}>
        <FilterMenu />
        <Outlet />
      </div>
    </div>
  );
};
