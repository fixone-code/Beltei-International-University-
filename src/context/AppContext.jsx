import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Language State: 'en' (English) or 'km' (Khmer)
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('biu_language') || 'en';
  });

  // Theme State: 'light' or 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('biu_theme') || 'light';
  });

  // Search Modal State
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('biu_theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', language === 'km' ? 'km' : 'en');
    localStorage.setItem('biu_language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'km' : 'en'));
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  // Translation helper
  const t = (key) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        theme,
        toggleTheme,
        isSearchOpen,
        openSearch,
        closeSearch,
        t
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
