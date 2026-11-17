import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  GraduationCap, Search, Filter, Clock, Award, 
  Calendar, CheckCircle, Info, ArrowRight, Layers 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { ProgramCard } from '../components/ProgramCard';
import { programs, degreeLevels } from '../data/programs';

export const Programs = () => {
  const { language, t } = useApp();
  const [searchParams] = useSearchParams();
  const [activeLevel, setActiveLevel] = useState(() => {
    return searchParams.get('filter') || 'all';
  });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrograms = useMemo(() => {
    return programs.filter((p) => {
      const facultyCode = searchParams.get('facultyCode');
      const matchesFaculty = !facultyCode || p.facultyCode === facultyCode;

      // Level filter
      const matchesLevel = activeLevel === 'all' || p.level === activeLevel;

      // Search term filter
      const matchesSearch = 
        p.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.titleKh.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.facultyCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.descriptionEn.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesFaculty && matchesLevel && matchesSearch;
    });
  }, [activeLevel, searchTerm, searchParams]);

  useEffect(() => {
    const programId = window.location.hash.slice(1);
    if (programId) {
      document.getElementById(programId)?.scrollIntoView({ block: 'start' });
    }
  }, [filteredPrograms]);

  return (
    <div className="fade-in">
      <Breadcrumb items={[{ label: t('navPrograms') }]} />

      {/* Header Banner */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0a1744 0%, #006cb8 100%)', 
        color: '#ffffff', 
        padding: '4rem 0 3rem 0',
        borderBottom: '4px solid var(--color-gold)'
      }}>
        <div className="app-container">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>
            {language === 'km' ? 'កម្រិតសញ្ញាបត្រ' : 'Degree Qualifications'}
          </span>
          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
            {language === 'km' ? 'កម្មវិធីសិក្សា និងកម្រិតសញ្ញាបត្រ' : 'Academic Programs & Qualifications'}
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#e2e8f0', maxWidth: '780px', lineHeight: 1.6 }}>
            {language === 'km'
              ? 'សាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ ផ្តល់នូវកម្មវិធីសិក្សាធំៗ ៥ កម្រិត ចាប់ពីថ្នាក់បំប៉ន បរិញ្ញាបត្ររង បរិញ្ញាបត្រ បរិញ្ញាបត្រជាន់ខ្ពស់ រហូតដល់ថ្នាក់បណ្ឌិត ជាមួយនឹងវេនសិក្សាយ៉ាងបត់បែន។'
              : 'Offering 5 major qualification pathways from Foundation Year through Associate, Bachelor\'s, Master\'s, and Ph.D. degrees, with full-time, evening, and weekend study schedules.'}
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="app-container">
          <div style={{ 
            background: 'var(--bg-surface)', 
            padding: '1.5rem', 
            borderRadius: '1rem', 
            boxShadow: 'var(--card-shadow)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '3rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            {/* Search Input */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              background: 'var(--bg-surface-subtle)', 
              padding: '0.75rem 1.25rem', 
              borderRadius: '0.5rem',
              border: '1px solid var(--border-subtle)'
            }}>
              <Search size={20} style={{ color: 'var(--color-primary)' }} />
              <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={language === 'km' ? 'ស្វែងរកកម្មវិធីសិក្សា ឬមុខជំនាញ...' : 'Search programs by qualification, major or faculty...'}
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  width: '100%',
                  fontSize: '1rem',
                  color: 'var(--text-primary)'
                }}
              />
            </div>

            {/* Degree Qualification Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {degreeLevels.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setActiveLevel(lvl.id)}
                  style={{
                    padding: '0.55rem 1.25rem',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: activeLevel === lvl.id ? 'var(--color-primary)' : 'var(--bg-surface-subtle)',
                    color: activeLevel === lvl.id ? '#ffffff' : 'var(--text-secondary)',
                    border: `1px solid ${activeLevel === lvl.id ? 'var(--color-primary)' : 'var(--border-subtle)'}`
                  }}
                >
                  {language === 'km' ? lvl.labelKh : lvl.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Academic Shift Schedule Info Banner */}
          <div style={{ 
            background: 'var(--bg-surface)', 
            border: '1px solid var(--border-subtle)', 
            borderRadius: '0.75rem', 
            padding: '1.25rem 1.5rem', 
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Clock size={22} style={{ color: 'var(--color-gold)' }} />
              <div>
                <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)', display: 'block' }}>
                  {language === 'km' ? 'កាលវិភាគវេនសិក្សាផ្លូវការ៖' : 'Official Class Shift Schedules:'}
                </strong>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Morning: 07:30 - 10:45 AM • Afternoon: 01:30 - 04:45 PM • Evening: 05:30 - 08:30 PM • Weekend: Sat & Sun
                </p>
              </div>
            </div>

            <span className="badge-gold">
              {language === 'km' ? 'ទទួលស្គាល់ដោយ MoEYS' : 'MoEYS Accredited'}
            </span>
          </div>

          {/* Programs Grid */}
          {filteredPrograms.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--bg-surface)', borderRadius: '1rem', border: '1px solid var(--border-subtle)' }}>
              <GraduationCap size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {language === 'km' ? 'រកមិនឃើញកម្មវិធីសិក្សាដែលត្រូវនឹងការស្វែងរកទេ' : 'No academic programs matched your criteria'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                {language === 'km' ? 'សូមសាកល្បងជ្រើសរើសកម្រិតសញ្ញាបត្រទាំងអស់ ឬសម្អាតពាក្យស្វែងរក។' : 'Try selecting "All Programs" or adjusting your search keywords.'}
              </p>
              <button 
                onClick={() => { setActiveLevel('all'); setSearchTerm(''); }}
                className="btn-secondary"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid-2">
              {filteredPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default Programs;
