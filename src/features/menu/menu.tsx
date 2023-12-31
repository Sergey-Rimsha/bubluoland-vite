import { ReactElement } from 'react';

import cn from 'clsx';

import s from './menu.module.scss';

import { stateMenu } from '@/entities/stateMenu.ts';
import { Typography } from '@/shared/ui';

export const Menu = (): ReactElement => {
  return (
    <menu className={s.menu}>
      <div className={cn(s.menu__title, s.menu__title_active)}>
        <Typography variant="h5" as="h5">
          Витрина книг
        </Typography>
      </div>
      <div className={s.menu__block}>
        <div className={cn(s.menu__link)}>
          <Typography className={s.menu__link_active} variant="body-lg">
            Все книги
          </Typography>
        </div>
        {stateMenu.map(item => {
          return (
            <div key={item.id} className={s.menu__link}>
              <Typography variant="body-lg">
                {item.title}
                <Typography variant="body-lg" as="span">
                  {item.count}
                </Typography>
              </Typography>
            </div>
          );
        })}
      </div>
      <div className={s.menu__subTitle}>
        <Typography variant="h5" as="h5">
          Правила пользования
        </Typography>
      </div>
      <div className={s.menu__subTitle}>
        <Typography variant="h5" as="h5">
          Договор оферты
        </Typography>
      </div>
    </menu>
  );
};
