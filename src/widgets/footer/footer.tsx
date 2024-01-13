import { ReactElement } from 'react';

import s from './footer.module.scss';

import { Facebook, Instagramm, Linkedin, Vk } from '@/shared/assets';
import { Typography } from '@/shared/ui';

export const Footer = (): ReactElement => {
  return (
    <footer className={s.footer}>
      <Typography className={s.footer__description} variant="body-lg">
        © 2020-2023 Cleverland. Все права защищены.
      </Typography>
      <div className={s.footer__social}>
        <div className={s.footer__item}>
          <Facebook />
        </div>
        <div className={s.footer__item}>
          <Instagramm />
        </div>
        <div className={s.footer__item}>
          <Vk />
        </div>
        <div className={s.footer__item}>
          <Linkedin />
        </div>
      </div>
    </footer>
  );
};
