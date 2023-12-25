import { ReactElement } from 'react';

import cn from 'clsx';

import s from './menu.module.scss';

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
        <div className={s.menu__link}>
          <Typography variant="body-lg">Бизнес-книги</Typography>
          <Typography variant="body-lg">14</Typography>
        </div>
        <div className={s.menu__link}>
          <Typography variant="body-lg">Детективы</Typography>
          <Typography variant="body-lg">8</Typography>
        </div>
        <div className={s.menu__link}>
          <Typography variant="body-lg">Детские книги</Typography>
          <Typography variant="body-lg">10</Typography>
        </div>
        <div className={s.menu__link}>
          <Typography variant="body-lg">Зарубежная литература</Typography>
          <Typography variant="body-lg">2</Typography>
        </div>
        <div className={s.menu__link}>
          <Typography variant="body-lg">История</Typography>
          <Typography variant="body-lg">5</Typography>
        </div>
        <div className={s.menu__link}>
          <Typography variant="body-lg">Классическая литература</Typography>
          <Typography variant="body-lg">12</Typography>
        </div>
        <div className={s.menu__link}>
          <Typography variant="body-lg">Книги по психологии</Typography>
          <Typography variant="body-lg">11</Typography>
        </div>
        <div className={s.menu__link}>
          <Typography variant="body-lg">Компьютерная литература</Typography>
          <Typography variant="body-lg">54</Typography>
        </div>
        <div className={s.menu__link}>
          <Typography variant="body-lg">Культура и искусство</Typography>
          <Typography variant="body-lg">0</Typography>
        </div>
        <div className={s.menu__link}>
          <Typography variant="body-lg">Наука и образование</Typography>
          <Typography variant="body-lg">2</Typography>
        </div>
        <div className={s.menu__link}>
          <Typography variant="body-lg">Публицистическая литература</Typography>
          <Typography variant="body-lg">0</Typography>
        </div>
        <div className={s.menu__link}>
          <Typography variant="body-lg">Справочники</Typography>
          <Typography variant="body-lg">0</Typography>
        </div>
        <div className={s.menu__link}>
          <Typography variant="body-lg">Фантастика</Typography>
          <Typography variant="body-lg">12</Typography>
        </div>
        <div className={s.menu__link}>
          <Typography variant="body-lg">Юмористическая литература</Typography>
          <Typography variant="body-lg">8</Typography>
        </div>
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
