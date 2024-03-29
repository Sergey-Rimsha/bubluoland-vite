import { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

import s from './main-layout.module.scss';

import { Footer, Header } from '@/widgets';

export const MainLayout = (): ReactElement => {
  return (
    <div className={s.layout}>
      <div className={s.layout__container}>
        <div className={s.layout__wrap}>
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
