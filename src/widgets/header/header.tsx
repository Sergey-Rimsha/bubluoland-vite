import { ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';

import s from './header.module.scss';

import { BurgerMenu, Logo, LogoTitle } from '@/shared/assets';
import avatar from '@/shared/assets/images/avatar.jpg';
import { Typography } from '@/shared/ui';

export const Header = (): ReactElement => {
  const navigate = useNavigate();

  const onClickHandleCard = (): void => {
    navigate('/');
  };

  return (
    <header className={s.header}>
      <button className={s.header__logo} onClick={onClickHandleCard} aria-label="button" type="button">
        <Logo />
        <LogoTitle />
      </button>
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
