import { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

import s from './main-layout.module.scss';

import { Menu } from '@/features';
import { Footer, Header } from '@/widgets';

export const MainLayout = (): ReactElement => {
  return (
    <div className={s.layout}>
      <div className={s.layout__container}>
        <Header />
        <div className={s.layout__block}>
          <Menu />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
