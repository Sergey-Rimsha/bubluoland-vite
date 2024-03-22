import { FC } from 'react';

import s from './info-book.module.scss';

const infoBook = [
  { id: '1', title: 'Издательство', description: 'Питер' },
  { id: '2', title: 'Год издания', description: '2019' },
  { id: '3', title: 'Страниц', description: '288' },
  { id: '4', title: 'Переплёт', description: 'Мягкая обложка' },
  { id: '5', title: 'Формат', description: '70x100' },
  { id: '6', title: 'Жанр', description: 'Компьютерная литература' },
  { id: '7', title: 'Вес', description: '370 г' },
  { id: '8', title: 'ISBN', description: '978-5-4461-0923-4' },
  {
    id: '9',
    title: 'Изготовитель',
    description: 'ООО«Питер Мейл». РФ, 198206, г.Санкт-Петербург, Петергофское ш, д.73, лит. А29',
  },
];

export const InfoBook: FC = () => {
  return (
    <div className={s.info}>
      {infoBook.map(item => (
        <div key={item.id} className={s.info__item}>
          <div className={s.info__title}>{item.title}</div>
          <div className={s.info__description}>{item.description}</div>
        </div>
      ))}
    </div>
  );
};
