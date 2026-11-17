import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Award, CheckCircle, ArrowRight, Calendar, Info } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProgramCard = ({ program }) => {
  const { language, t } = useApp();

  return (
    <div id={`program-${program.id}`} className="academic-card program-detail-anchor" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '1.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <span className="badge-blue">
          <Award size={13} />
          {program.level.toUpperCase()}
        </span>

        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
          <Clock size={14} />
          {language === 'km' ? program.durationKh : program.durationEn}
        </span>
      </div>

      <h3 className="font-khmer" style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.35rem', lineHeight: 1.4 }}>
        {program.titleKh}
      </h3>

      <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '1rem', lineHeight: 1.35 }}>
        {program.titleEn}
      </h4>

      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.55 }}>
        {language === 'km' ? program.descriptionKh : program.descriptionEn}
      </p>

      {/* Available Study Shifts */}
      <div style={{ marginBottom: '1.25rem' }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
          {language === 'km' ? 'វេនសិក្សាដែលមាន៖' : 'Available Shifts:'}
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {program.shifts.map((shift, idx) => (
            <span 
              key={idx}
              style={{
                fontSize: '0.75rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                background: 'var(--bg-surface-subtle)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {shift}
            </span>
          ))}
        </div>
      </div>

      {/* Requirements Box */}
      <div style={{ 
        background: 'var(--bg-surface-subtle)', 
        padding: '0.85rem 1rem', 
        borderRadius: '6px', 
        borderLeft: '3px solid var(--color-gold)', 
        marginBottom: '1.25rem',
        fontSize: '0.82rem'
      }}>
        <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.25rem' }}>
          {language === 'km' ? 'លក្ខខណ្ឌចូលរៀន៖' : 'Admission Requirements:'}
        </strong>
        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          {language === 'km' ? program.admissionReqKh : program.admissionReqEn}
        </p>
      </div>

      {/* Tuition Transparency Note */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', marginBottom: '1.5rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
        <Info size={14} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--color-primary)' }} />
        <span>{language === 'km' ? program.tuitionKh : program.tuitionEn}</span>
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <Link 
          to={`/admissions?program=${encodeURIComponent(program.titleEn)}`}
          className="btn-gold" 
          style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.88rem' }}
        >
          <span>{t('applyOnline')}</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};
export default ProgramCard;
