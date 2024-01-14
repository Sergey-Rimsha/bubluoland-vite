import { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

import s from './book-info-layout.module.scss';

import { Breadcrumbs } from '@/widgets';

export const BookInfoLayout = (): ReactElement => {
  return (
    <div className={s.bookInfoLayout}>
      <Breadcrumbs />
      <Outlet />
    </div>
  );
};
