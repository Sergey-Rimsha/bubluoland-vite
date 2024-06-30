import { FC } from 'react';

import s from './review.module.scss';

import { Rating } from '@/shared/ui';

type ReviewProps = {
  avatar?: string;
  name?: string;
  date?: string;
  rating?: number;
  message?: string;
};

export const Review: FC<ReviewProps> = () => {
  return (
    <div className={s.review}>
      <div className={s.review__header}>
        <div className={s.review__avatar}>
          <img src="" alt="" />
        </div>
        <div className={s.review__name}>Иван Иванов</div>
        <div className={s.review__date}>5 января 2019</div>
      </div>
      <Rating className={s.review__rating} />
      <div className={s.review__message}>
        Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса
        для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет
        широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно
        упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам
        яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного
        выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно
        синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.
      </div>
    </div>
  );
};
