import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import BackToTop from './components/BackToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Faculties from './pages/Faculties';
import FacultyDetails from './pages/FacultyDetails';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import CampusLife from './pages/CampusLife';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './App.css';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <SearchBar />
          
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/faculties" element={<Faculties />} />
              <Route path="/faculties/:slug" element={<FacultyDetails />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/campus-life" element={<CampusLife />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
          <BackToTop />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;