import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Breadcrumb = ({ items = [] }) => {
  const { t } = useApp();

  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <div className="app-container">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <Home size={14} />
              <span>{t('navHome')}</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                <ChevronRight size={13} style={{ color: 'var(--text-muted)' }} />
                {item.to && !isLast ? (
                  <Link to={item.to}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
export default Breadcrumb;
