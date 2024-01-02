import { createBrowserRouter, Navigate } from 'react-router-dom';

import { MainLayout } from '@/app/layout/main-layout.tsx';
import { Books } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Navigate to="/all" /> },
      { path: '/all', element: <Books /> },
    ],
  },
]);
