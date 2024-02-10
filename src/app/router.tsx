import { createBrowserRouter, Navigate } from 'react-router-dom';

import { BookInfoLayout, BooksLayout, MainLayout } from '@/app/layout';
import { BookInfo, Books, NodeFound } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <BooksLayout />,
        children: [
          { path: '/', element: <Navigate to="/books/all" /> },
          { path: '/books/all', element: <Books /> },
        ],
      },
      {
        path: '/',
        element: <BookInfoLayout />,
        children: [
          { path: '/', element: <Navigate to="/bookInfo/:id" /> },
          { path: '/bookInfo/:id', element: <BookInfo /> },
        ],
      },
      {
        path: '*',
        element: <NodeFound />,
      },
    ],
  },
]);
