import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, BookOpen, GraduationCap, Phone } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const NotFound = () => {
  const { language, t } = useApp();

  return (
    <div className="fade-in section-padding" style={{ backgroundColor: 'var(--bg-page)', textAlign: 'center', minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
      <div className="app-container" style={{ maxWidth: '650px' }}>
        <div style={{ 
          fontSize: '6rem', 
          fontWeight: 900, 
          color: 'var(--color-primary)', 
          lineHeight: 1, 
          marginBottom: '1rem',
          letterSpacing: '-0.03em' 
        }}>
          404
        </div>

        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
          {language === 'km' ? 'រកមិនឃើញទំព័រដែលអ្នកស្នើសុំឡើយ' : 'Page Not Found'}
        </h1>

        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          {language === 'km'
            ? 'ទំព័រដែលអ្នកកំពុងព្យាយាមស្វែងរកប្រហែលជាត្រូវបានផ្លាស់ប្តូរទីតាំង ឬលុបចេញពីគេហទំព័រ។ សូមជ្រើសរើសតំណភ្ជាប់មានប្រយោជន៍ខាងក្រោម។'
            : 'The university webpage you requested might have been relocated, deleted, or is temporarily unavailable.'}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <Link to="/" className="btn-primary">
            <Home size={18} />
            <span>{t('navHome')}</span>
          </Link>
          <Link to="/faculties" className="btn-secondary">
            <BookOpen size={18} />
            <span>{t('navFaculties')}</span>
          </Link>
          <Link to="/contact" className="btn-secondary">
            <Phone size={18} />
            <span>{t('navContact')}</span>
          </Link>
        </div>

        <div style={{ 
          background: 'var(--bg-surface)', 
          padding: '1.5rem', 
          borderRadius: '0.75rem', 
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--card-shadow)'
        }}>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Need direct help? Call BIU Admissions Hotline: <strong>(+855) 23 999 926 / 23 999 967</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
