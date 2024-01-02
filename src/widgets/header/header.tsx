import { ReactElement } from 'react';

import s from './header.module.scss';

import { BurgerMenu, Logo, LogoTitle } from '@/shared/assets';
import avatar from '@/shared/assets/images/avatar.jpg';
import { Typography } from '@/shared/ui';

export const Header = (): ReactElement => {
  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <Logo />
        <LogoTitle />
      </div>
      <button aria-label="button" className={s.menu} type="button">
        <BurgerMenu />
      </button>
      <div className={s.header__wrap}>
        <Typography className={s.header__title} variant="h3" as="h3">
          Библиотека
        </Typography>
        <div className={s.header__person}>
          <Typography variant="sub-sm">Привет, Иван!</Typography>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};
