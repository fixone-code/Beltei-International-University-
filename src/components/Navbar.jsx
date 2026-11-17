import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  Phone, Globe, Moon, Sun, Search, Menu, X, 
  BookOpen, ChevronRight, GraduationCap, MapPin 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar = () => {
  const { language, toggleLanguage, theme, toggleTheme, openSearch, t } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { to: '/', label: t('navHome') },
    { to: '/about', label: t('navAbout') },
    { to: '/faculties', label: t('navFaculties') },
    { to: '/programs', label: t('navPrograms') },
    { to: '/admissions', label: t('navAdmissions') },
    { to: '/campus-life', label: t('navCampusLife') },
    { to: '/news', label: t('navNews') },
    { to: '/contact', label: t('navContact') }
  ];

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header-wrapper">
      {/* Top Institutional Utility Bar */}
      <div className="top-institutional-bar">
        <div className="app-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
              <Phone size={13} style={{ color: 'var(--color-gold)' }} />
              {t('hotline')}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', opacity: 0.9 }}>
              <MapPin size={13} style={{ color: 'var(--color-gold)' }} />
              Phnom Penh, Cambodia
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a 
              href="https://journal.biuelibrary.com/" 
              target="_blank" 
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#ffffff', opacity: 0.9, fontSize: '0.8rem' }}
            >
              <BookOpen size={12} />
              {t('eLibrary')}
            </a>

            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage} 
              className="lang-toggle-btn"
              title="Switch Language / ប្តូរភាសា"
              style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              <Globe size={13} style={{ color: 'var(--color-gold)' }} />
              <span>{language === 'en' ? 'ភាសាខ្មែរ (KH)' : 'English (EN)'}</span>
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className="icon-btn"
              style={{ width: '28px', height: '28px', background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff' }}
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon size={14} /> : <Sun size={14} style={{ color: '#ffd875' }} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="glass-header">
        <div className="app-container nav-container">
          {/* Logo & University Identity */}
          <Link to="/" className="brand-link" title="BELTEI International University">
            <img 
              src="/logo/beltei_logo.png" 
              alt="BELTEI International University Logo" 
              className="brand-logo-img"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'none' }} className="d-lg-block">
            {/* Will be visible on desktop via CSS */}
          </nav>
          <ul className="desktop-nav-links" style={{ display: 'flex' }}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink 
                  to={link.to} 
                  className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Action CTAs */}
          <div className="nav-actions">
            <button 
              onClick={openSearch}
              className="icon-btn"
              title={t('navSearch')}
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            <Link 
              to="/admissions" 
              className="btn-gold"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}
            >
              <GraduationCap size={16} />
              <span>{t('navApplyNow')}</span>
            </Link>

            {/* Mobile Menu Hamburger */}
            <button 
              className="icon-btn mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle menu"
              style={{ display: 'none' }}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="modal-overlay" 
          onClick={() => setMobileMenuOpen(false)}
          style={{ padding: 0 }}
        >
          <div 
            className="mobile-menu-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
              <img 
                src="/logo/beltei_logo.png" 
                alt="BELTEI Logo" 
                style={{ height: '42px', width: 'auto' }}
              />
              <button 
                onClick={() => setMobileMenuOpen(false)} 
                className="icon-btn"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={handleMobileNavClick}
                    className={({ isActive }) => 
                      `nav-link-item ${isActive ? 'active' : ''}`
                    }
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '1.05rem', padding: '0.65rem 0' }}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
                  </NavLink>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <Link 
                to="/admissions" 
                onClick={handleMobileNavClick}
                className="btn-gold" 
                style={{ width: '100%', marginBottom: '1rem' }}
              >
                <GraduationCap size={18} />
                <span>{t('navApplyNow')}</span>
              </Link>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                <button 
                  onClick={toggleLanguage} 
                  className="lang-toggle-btn"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <Globe size={14} />
                  <span>{language === 'en' ? 'ភាសាខ្មែរ' : 'English'}</span>
                </button>

                <button 
                  onClick={toggleTheme} 
                  className="icon-btn"
                  style={{ width: '42px', height: '42px' }}
                >
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Media query helper styles for navbar */}
      <style>{`
        @media (max-width: 1080px) {
          .desktop-nav-links {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
export default Navbar;
