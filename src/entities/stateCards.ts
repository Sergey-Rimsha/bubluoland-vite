import book from '@/shared/assets/images/book.jpg';

export interface BookingI {
  status: 'open' | 'close' | 'complete';
  message: string;
}

export interface CommentI {
  id: string;
  name: string;
  data: string;
  rating: number;
  message: string | undefined;
}

export interface CardI {
  id: string;
  image: string[];
  title: string;
  description: string;
  rating: number;
  booking: BookingI;
  comments?: CommentI[];
}

export const cards: CardI[] = [
  {
    id: '1',
    image: [''],
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    description: 'Адитья Бхаргава, 2019',
    rating: 4.3,
    booking: { status: 'open', message: 'Забронировать' },
    comments: [
      { id: '1', name: 'Иван Иванов', data: '5 января 2019', rating: 4.3, message: '' },
      {
        id: '2',
        name: 'Иван Иванов',
        data: '20 июня 2018',
        rating: 4.3,
        message: `Учитывая ключевые сценарии поведения, 
        курс на социально-ориентированный национальный проект не 
        оставляет шанса для анализа существующих паттернов поведения. 
        Для современного мира внедрение современных методик предоставляет 
        широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. 
        Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной 
        степени предоставлены сами себе. 
        Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для 
        своевременного выполнения сверхзадачи. 
        И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, 
        превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.`,
      },
    ],
  },
  {
    id: '2',
    image: [book],
    title: 'Грокаем алгоритмы. Иллюстрированное',
    description: 'Адитья Бхаргава, 2019',
    rating: 0,
    booking: { status: 'open', message: 'Забронировать' },
  },
  {
    id: '3',
    image: [book, book],
    title: 'Грокаем алгоритмы.',
    description: 'Адитья Бхаргава, 2019',
    rating: 4.3,
    booking: { status: 'close', message: 'занята до 03.05' },
  },
  {
    id: '4',
    image: [book, '', book, book, ''],
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    description: 'Адитья Бхаргава, 2019',
    rating: 4.3,
    booking: { status: 'open', message: 'Забронировать' },
  },
  {
    id: '5',
    image: [book, '', book, book, ''],
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    description: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    rating: 4.3,
    booking: { status: 'complete', message: 'Забронирована' },
  },
  {
    id: '6',
    image: [''],
    title: 'Грокаем алгоритмы. Иллюстрированное',
    description: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    rating: 4.3,
    booking: { status: 'close', message: 'Занята до 23.04' },
  },
  {
    id: '7',
    image: [book, '', book, book, ''],
    title: 'Грокаем алгоритмы.',
    description: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    rating: 4.3,
    booking: { status: 'open', message: 'Забронировать' },
  },
  {
    id: '8',
    image: [book, '', book, book, ''],
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    description: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    rating: 4.3,
    booking: { status: 'open', message: 'Забронировать' },
  },
  {
    id: '9',
    image: [book, '', book, book, ''],
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    description: 'Адитья Бхаргава, 2019',
    rating: 4.3,
    booking: { status: 'open', message: 'Забронировать' },
  },
  {
    id: '10',
    image: ['', '', book, book, ''],
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    description: 'Адитья Бхаргава, 2019',
    rating: 4.3,
    booking: { status: 'open', message: 'Забронировать' },
  },
];
