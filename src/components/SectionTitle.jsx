import React from 'react';

export const SectionTitle = ({ eyebrow, title, subtitle, align = 'center', light = false }) => {
  return (
    <div 
      className="section-header" 
      style={{ 
        textAlign: align,
        marginLeft: align === 'center' ? 'auto' : 0,
        marginRight: align === 'center' ? 'auto' : 0
      }}
    >
      {eyebrow && (
        <span className="section-eyebrow" style={{ color: light ? 'var(--color-gold)' : 'var(--color-primary)' }}>
          {eyebrow}
        </span>
      )}
      <h2 
        className="section-main-title"
        style={{ color: light ? '#ffffff' : 'var(--text-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className="section-subtitle"
          style={{ color: light ? '#cbd5e1' : 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
      <div 
        className="gold-accent-line"
        style={{ 
          marginLeft: align === 'center' ? 'auto' : 0,
          marginRight: align === 'center' ? 'auto' : 0
        }}
      />
    </div>
  );
};
export default SectionTitle;
