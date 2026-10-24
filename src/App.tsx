import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from './components/Footer';
import HeavenlyAtmosphere from './components/HeavenlyAtmosphere';

function App() {
  return (
    <Router>
      <HeavenlyAtmosphere />
      <div className="flex flex-col min-h-screen relative z-10">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <Analytics />
    </Router>
  );
}

export default App;