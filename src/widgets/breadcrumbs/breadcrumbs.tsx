import { FC } from 'react';

import s from './breadcrumbs.module.scss';

import { Typography } from '@/shared/ui';

export const Breadcrumbs: FC = () => {
  return (
    <div className={s.breadcrumbs}>
      <Typography className={s.breadcrumbs__item} variant="body-sm" as="span">
        Бизнес книги / Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
      </Typography>
      <div className={s.breadcrumbs__bg} />
    </div>
  );
};
