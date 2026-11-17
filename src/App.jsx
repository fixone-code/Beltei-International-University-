import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import BackToTop from './components/BackToTop';
import RouteMetadata from './components/RouteMetadata';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Faculties = lazy(() => import('./pages/Faculties'));
const FacultyDetails = lazy(() => import('./pages/FacultyDetails'));
const Programs = lazy(() => import('./pages/Programs'));
const Admissions = lazy(() => import('./pages/Admissions'));
const News = lazy(() => import('./pages/News'));
const NewsDetails = lazy(() => import('./pages/NewsDetails'));
const CampusLife = lazy(() => import('./pages/CampusLife'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
        <RouteMetadata />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <SearchBar />
          
          <main style={{ flex: 1 }}>
            <Suspense fallback={<div className="app-container section-padding" role="status">Loading page…</div>}>
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
            </Suspense>
          </main>

          <Footer />
          <BackToTop />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;