import { ReactElement } from 'react';

import s from './breadcrumbs.module.scss';

import { Typography } from '@/shared/ui';

export const Breadcrumbs = (): ReactElement => {
  return (
    <div className={s.breadcrumbs}>
      <Typography className={s.breadcrumbs__item} variant="body-sm" as="span">
        Бизнес книги
      </Typography>
      <Typography className={s.breadcrumbs__item} variant="body-sm" as="span">
        /
      </Typography>
      <Typography className={s.breadcrumbs__item} variant="body-sm" as="span">
        Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
      </Typography>
      <div className={s.breadcrumbs__bg} />
    </div>
  );
};
