import { Outlet } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/Footer';
import HeavenlyAtmosphere from './components/HeavenlyAtmosphere';
import SiteHead from './components/SiteHead';

export default function RootLayout() {
  return (
    <>
      <SiteHead />
      <HeavenlyAtmosphere />
      <div className="flex flex-col min-h-screen relative z-10">
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
      <Analytics />
    </>
  );
}
