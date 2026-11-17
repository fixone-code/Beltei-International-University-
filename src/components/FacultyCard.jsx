import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const FacultyCard = ({ faculty }) => {
  const { language, t } = useApp();

  return (
    <div 
      className="academic-card faculty-card" 
      style={{ '--card-accent': faculty.color }}
    >
      <div className="faculty-card-image-wrap">
        <img 
          src={faculty.bookletImage} 
          alt={faculty.nameEn}
          className="faculty-card-img"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            // graceful fallback to campus image if booklet path is not cached
            e.target.onerror = null;
            e.target.src = '/images/campus1_tuolsleng.png';
          }}
        />
        <div 
          className="faculty-badge" 
          style={{ backgroundColor: faculty.color }}
        >
          {faculty.code}
        </div>
      </div>

      <div className="faculty-card-body">
        <span className="faculty-code">
          {language === 'km' ? `មហាវិទ្យាល័យទី ${faculty.id}` : `Faculty #0${faculty.id}`}
        </span>

        <h3 className="faculty-title-khmer font-khmer">
          {faculty.nameKh}
        </h3>

        <h4 className="faculty-title-en">
          {faculty.nameEn}
        </h4>

        <p className="faculty-desc">
          {language === 'km' ? faculty.descriptionKh : faculty.descriptionEn}
        </p>

        {/* Majors Preview */}
        <div style={{ marginBottom: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
            {language === 'km' ? 'ជំនាញឯកទេសសំខាន់ៗ៖' : 'Specialized Majors:'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {faculty.majors.slice(0, 3).map((major, idx) => (
              <span 
                key={idx}
                style={{
                  fontSize: '0.76rem',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                  backgroundColor: 'var(--bg-surface-subtle)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                {language === 'km' ? major.nameKh : major.nameEn}
              </span>
            ))}
          </div>
        </div>

        <Link 
          to={`/faculties/${faculty.slug}`}
          onClick={(event) => event.stopPropagation()}
          className="btn-secondary"
          style={{ 
            marginTop: 'auto', 
            padding: '0.6rem 1rem', 
            fontSize: '0.88rem', 
            borderColor: faculty.color, 
            color: faculty.color 
          }}
        >
          <BookOpen size={16} />
          <span>{language === 'km' ? 'ស្វែងយល់មហាវិទ្យាល័យ' : 'Explore Faculty'}</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};
export default FacultyCard;
