import { ReactElement } from 'react';

import s from './main.module.scss';

import { Menu } from '@/features';
import { Header, Footer } from '@/widgets';

export const Main = (): ReactElement => {
  return (
    <div className={s.layout}>
      <div className={s.container}>
        <div className={s.layout__block}>
          <Header />
          <div className={s.layout__content}>
            <Menu />
            <div className={s.main}>
              <div>search-bar</div>
              <section>content outlet</section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
