import type { RouteRecord } from 'vite-react-ssg';
import RootLayout from './RootLayout';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
    ],
  },
];
