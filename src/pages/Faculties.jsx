import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, BookOpen, GraduationCap, 
  Layers, ArrowRight, X, CheckCircle 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { FacultyCard } from '../components/FacultyCard';
import { faculties } from '../data/faculties';

const categories = [
  { id: 'all', labelEn: 'All 13 Faculties', labelKh: 'មហាវិទ្យាល័យទាំង១៣' },
  { id: 'business', labelEn: 'Business & Finance', labelKh: 'ពាណិជ្ជកម្ម និងហិរញ្ញវត្ថុ', codes: ['BBA', 'BFB', 'BEco'] },
  { id: 'tech', labelEn: 'Technology & Engineering', labelKh: 'បច្ចេកវិទ្យា និងវិស្វកម្ម', codes: ['BIT', 'BDT', 'BEng', 'BArch'] },
  { id: 'law-humanities', labelEn: 'Law, Education & Diplomacy', labelKh: 'ច្បាប់ អប់រំ និងការទូត', codes: ['BLaw', 'BEdu', 'BIR', 'BCHN'] },
  { id: 'aviation-tourism', labelEn: 'Aviation & Hospitality', labelKh: 'អាកាសចរណ៍ និងទេសចរណ៍', codes: ['BCA', 'BTh'] }
];

export const Faculties = () => {
  const { language, t } = useApp();
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get('selected');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedFaculty, setSelectedFaculty] = useState(() => {
    if (selectedId) {
      return faculties.find(f => f.id === parseInt(selectedId)) || null;
    }
    return null;
  });

  const filteredFaculties = useMemo(() => {
    return faculties.filter(faculty => {
      // Search term filter
      const matchesSearch = 
        faculty.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faculty.nameKh.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faculty.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faculty.majors.some(m => 
          m.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
          m.nameKh.toLowerCase().includes(searchTerm.toLowerCase())
        );

      // Category filter
      if (activeCategory === 'all') return matchesSearch;
      const categoryObj = categories.find(c => c.id === activeCategory);
      const matchesCat = categoryObj?.codes?.includes(faculty.code);

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="fade-in">
      <Breadcrumb items={[{ label: t('navFaculties') }]} />

      {/* Header Banner */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0f2263 0%, #006cb8 100%)', 
        color: '#ffffff', 
        padding: '4rem 0 3rem 0',
        borderBottom: '4px solid var(--color-gold)'
      }}>
        <div className="app-container">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>
            {language === 'km' ? 'កម្មវិធីសិក្សាឧត្តម' : 'Academic Excellence'}
          </span>
          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
            {language === 'km' ? 'មហាវិទ្យាល័យទាំង ១៣ នៃសាកលវិទ្យាល័យ' : 'The 13 Academic Faculties of BIU'}
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#e2e8f0', maxWidth: '750px', lineHeight: 1.6 }}>
            {language === 'km'
              ? 'រៀបចំឡើងស្របតាមស្តង់ដារជាតិ និងតំបន់ ដើម្បីបណ្តុះបណ្តាលនិស្សិតឱ្យមានជំនាញវិជ្ជាជីវៈរឹងមាំ សីលធម៌ និងភាពជាអ្នកដឹកនាំក្នុងយុគសម័យឌីជីថល។'
              : 'Officially established with comprehensive curricula, modern laboratory facilities, experienced faculty members, and national and international accreditation.'}
          </p>
        </div>
      </section>

      {/* Directory Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="app-container">
          {/* Search & Filter Controls */}
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
                placeholder={language === 'km' ? 'ស្វែងរកមហាវិទ្យាល័យតាមឈ្មោះ កូដ (BBA, BIT...) ឬមុខជំនាញ...' : 'Search faculties by name, code (BBA, BIT...) or major...'}
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  width: '100%',
                  fontSize: '1rem',
                  color: 'var(--text-primary)'
                }}
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} style={{ color: 'var(--text-muted)' }}>
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.5rem 1.15rem',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: activeCategory === cat.id ? 'var(--color-primary)' : 'var(--bg-surface-subtle)',
                    color: activeCategory === cat.id ? '#ffffff' : 'var(--text-secondary)',
                    border: `1px solid ${activeCategory === cat.id ? 'var(--color-primary)' : 'var(--border-subtle)'}`
                  }}
                >
                  {language === 'km' ? cat.labelKh : cat.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              {language === 'km' 
                ? `បង្ហាញ ${filteredFaculties.length} ក្នុងចំណោម ១៣ មហាវិទ្យាល័យ` 
                : `Showing ${filteredFaculties.length} of 13 Faculties`}
            </p>
          </div>

          {/* Faculties Grid */}
          {filteredFaculties.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--bg-surface)', borderRadius: '1rem', border: '1px solid var(--border-subtle)' }}>
              <Layers size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {language === 'km' ? 'រកមិនឃើញមហាវិទ្យាល័យដែលត្រូវនឹងការស្វែងរកទេ' : 'No faculties matched your criteria'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                {language === 'km' ? 'សូមសាកល្បងសម្អាតតម្រងស្វែងរករបស់អ្នក។' : 'Try clearing your search query or selecting a different category.'}
              </p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
                className="btn-secondary"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid-3">
              {filteredFaculties.map((faculty) => (
                <div key={faculty.id} onClick={() => setSelectedFaculty(faculty)}>
                  <FacultyCard faculty={faculty} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Faculty Detail Modal */}
      {selectedFaculty && (
        <div className="modal-overlay" onClick={() => setSelectedFaculty(null)}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '780px', maxHeight: '90vh' }}
          >
            {/* Modal Header */}
            <div style={{ 
              padding: '1.5rem', 
              borderBottom: '1px solid var(--border-subtle)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              borderTop: `5px solid ${selectedFaculty.color}`
            }}>
              <div>
                <span className="badge-blue" style={{ marginBottom: '0.35rem' }}>
                  {selectedFaculty.code} • {language === 'km' ? `មហាវិទ្យាល័យទី ${selectedFaculty.id}` : `Faculty #0${selectedFaculty.id}`}
                </span>
                <h3 className="font-khmer" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: 0 }}>
                  {selectedFaculty.nameKh}
                </h3>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-navy)', margin: '0.25rem 0 0 0' }}>
                  {selectedFaculty.nameEn}
                </h4>
              </div>
              <button 
                onClick={() => setSelectedFaculty(null)}
                className="icon-btn"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2rem', overflowY: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '2rem', marginBottom: '2rem' }} className="grid-modal-resp">
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-subtle)', boxShadow: 'var(--card-shadow)' }}>
                  <img 
                    src={selectedFaculty.bookletImage} 
                    alt={selectedFaculty.nameEn} 
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/campus1_tuolsleng.png';
                    }}
                  />
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {language === 'km' ? 'ទិដ្ឋភាពទូទៅនៃមហាវិទ្យាល័យ' : 'Faculty Overview'}
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    {language === 'km' ? selectedFaculty.descriptionKh : selectedFaculty.descriptionEn}
                  </p>

                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {language === 'km' ? 'កម្រិតសញ្ញាបត្រដែលបណ្តុះបណ្តាល' : 'Offered Degree Levels'}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    {selectedFaculty.degreeLevels.map((lvl, idx) => (
                      <span key={idx} className="badge-gold">
                        <GraduationCap size={13} />
                        {lvl}
                      </span>
                    ))}
                  </div>

                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {language === 'km' ? 'ឱកាសការងារទៅថ្ងៃអនាគត' : 'Career Opportunities'}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {language === 'km' ? selectedFaculty.careerOpportunitiesKh : selectedFaculty.careerOpportunitiesEn}
                  </p>
                </div>
              </div>

              {/* Majors List */}
              <div style={{ background: 'var(--bg-surface-subtle)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <BookOpen size={18} style={{ color: selectedFaculty.color }} />
                  {language === 'km' ? 'មុខជំនាញឯកទេសក្នុងមហាវិទ្យាល័យនេះ' : 'Specialized Majors Offered'}
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
                  {selectedFaculty.majors.map((m, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle size={16} style={{ color: selectedFaculty.color, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                        {language === 'km' ? m.nameKh : m.nameEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface-subtle)', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button onClick={() => setSelectedFaculty(null)} className="btn-secondary" style={{ padding: '0.6rem 1.25rem' }}>
                Close
              </button>
              <a 
                href={`/admissions?faculty=${selectedFaculty.code}`} 
                className="btn-gold" 
                style={{ padding: '0.6rem 1.5rem' }}
              >
                <span>{t('applyOnline')}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 650px) {
          .grid-modal-resp {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
export default Faculties;
