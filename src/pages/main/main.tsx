import { ReactElement } from 'react';

import s from './main.module.scss';

import { Menu } from '@/features';
import { BookCard, FilterMenu, Footer, Header } from '@/widgets';

export const Main = (): ReactElement => {
  return (
    <div className={s.layout}>
      <div className={s.container}>
        <div className={s.layout__block}>
          <Header />
          <div className={s.layout__content}>
            <Menu />
            <div className={s.layout__main}>
              <FilterMenu />
              <div className={s.layout__wrap}>
                <section>
                  <BookCard />
                </section>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
