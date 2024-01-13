import { HTMLAttributes, ReactElement } from 'react';

import cn from 'clsx';

import s from './book-img.module.scss';

import { DefaultImgBook } from '@/shared/assets';

interface PropsBookImg extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  variant?: 'preview' | 'bookCards' | 'bookList';
}

export const BookImg = ({ image, variant = 'preview', className, ...restProps }: PropsBookImg): ReactElement => {
  const style = cn(s.image, s[variant], className);

  return (
    <div className={style} {...restProps}>
      {image ? <img src={image} alt="book" /> : <DefaultImgBook />}
    </div>
  );
};
