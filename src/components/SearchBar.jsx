import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, GraduationCap, Newspaper, Compass, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { faculties } from '../data/faculties';
import { programs } from '../data/programs';
import { newsArticles } from '../data/news';

export const SearchBar = () => {
  const { isSearchOpen, closeSearch, language, t } = useApp();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    // Search faculties
    const matchedFaculties = faculties.filter(f => 
      f.nameEn.toLowerCase().includes(q) ||
      f.nameKh.toLowerCase().includes(q) ||
      f.code.toLowerCase().includes(q) ||
      f.majors.some(m => m.nameEn.toLowerCase().includes(q) || m.nameKh.toLowerCase().includes(q))
    );

    // Search programs
    const matchedPrograms = programs.filter(p => 
      p.titleEn.toLowerCase().includes(q) ||
      p.titleKh.toLowerCase().includes(q) ||
      p.level.toLowerCase().includes(q)
    );

    // Search news
    const matchedNews = newsArticles.filter(n => 
      n.titleEn.toLowerCase().includes(q) ||
      n.titleKh.toLowerCase().includes(q) ||
      n.category.toLowerCase().includes(q)
    );

    return {
      faculties: matchedFaculties,
      programs: matchedPrograms,
      news: matchedNews,
      total: matchedFaculties.length + matchedPrograms.length + matchedNews.length
    };
  }, [query]);

  const handleSelect = (url) => {
    closeSearch();
    setQuery('');
    navigate(url);
  };

  if (!isSearchOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeSearch}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-subtle)', gap: '0.75rem' }}>
          <Search size={22} style={{ color: 'var(--color-primary)' }} />
          <input 
            type="text" 
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('searchPlaceholder')}
            style={{ 
              flex: 1, 
              border: 'none', 
              outline: 'none', 
              fontSize: '1.1rem', 
              background: 'transparent', 
              color: 'var(--text-primary)' 
            }}
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              style={{ color: 'var(--text-muted)', padding: '4px' }}
            >
              <X size={18} />
            </button>
          )}
          <button 
            onClick={closeSearch}
            className="icon-btn"
            style={{ width: '32px', height: '32px' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Results Area */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}>
          {!query && (
            <div>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                {language === 'km' ? 'ពាក្យគន្លឹះពេញនិយម' : 'Popular Search Topics'}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Business Administration', 'Software Engineering', 'Law', 'Civil Aviation', 'Monash College', 'Debate 2026', 'Master MBA', 'Scholarships'].map((tag) => (
                  <button 
                    key={tag}
                    onClick={() => setQuery(tag)}
                    style={{
                      padding: '0.4rem 0.85rem',
                      borderRadius: '9999px',
                      background: 'var(--bg-surface-subtle)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {searchResults && searchResults.total === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <Compass size={44} style={{ color: 'var(--text-muted)', margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {language === 'km' ? 'រកមិនឃើញលទ្ធផលដែលត្រូវគ្នាទេ' : 'No results found for your search'}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto' }}>
                {language === 'km' 
                  ? 'សូមសាកល្បងស្វែងរកដោយប្រើពាក្យគន្លឹះទូទៅ ដូចជា «ច្បាប់», «IT», «ពាណិជ្ជកម្ម» ឬ «អាហារូបករណ៍»។' 
                  : 'Try searching with general keywords such as "Law", "IT", "Business", "Management", or "Admissions".'}
              </p>
            </div>
          )}

          {searchResults && searchResults.total > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Faculties Results */}
              {searchResults.faculties.length > 0 && (
                <div>
                  <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <BookOpen size={14} style={{ color: 'var(--color-primary)' }} />
                    {language === 'km' ? `មហាវិទ្យាល័យ (${searchResults.faculties.length})` : `Faculties (${searchResults.faculties.length})`}
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {searchResults.faculties.map((f) => (
                      <div 
                        key={f.id}
                        onClick={() => handleSelect(`/faculties?selected=${f.id}`)}
                        style={{
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          background: 'var(--bg-surface-subtle)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderLeft: `4px solid ${f.color}`
                        }}
                      >
                        <div>
                          <p style={{ margin: 0, fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                            {language === 'km' ? f.nameKh : f.nameEn}
                          </p>
                          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Code: {f.code}</span>
                        </div>
                        <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Programs Results */}
              {searchResults.programs.length > 0 && (
                <div>
                  <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <GraduationCap size={14} style={{ color: 'var(--color-gold)' }} />
                    {language === 'km' ? `កម្មវិធីសិក្សា (${searchResults.programs.length})` : `Academic Programs (${searchResults.programs.length})`}
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {searchResults.programs.map((p) => (
                      <div 
                        key={p.id}
                        onClick={() => handleSelect(`/programs?filter=${p.level}`)}
                        style={{
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          background: 'var(--bg-surface-subtle)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <p style={{ margin: 0, fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                            {language === 'km' ? p.titleKh : p.titleEn}
                          </p>
                          <span style={{ fontSize: '0.78rem', color: 'var(--color-primary)' }}>Level: {p.level.toUpperCase()}</span>
                        </div>
                        <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* News Results */}
              {searchResults.news.length > 0 && (
                <div>
                  <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Newspaper size={14} style={{ color: 'var(--color-red)' }} />
                    {language === 'km' ? `ព័ត៌មាន និងសេចក្តីជូនដំណឹង (${searchResults.news.length})` : `News & Announcements (${searchResults.news.length})`}
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {searchResults.news.map((n) => (
                      <div 
                        key={n.id}
                        onClick={() => handleSelect(`/news/${n.id}`)}
                        style={{
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          background: 'var(--bg-surface-subtle)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <p style={{ margin: 0, fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                            {language === 'km' ? n.titleKh : n.titleEn}
                          </p>
                          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{n.date}</span>
                        </div>
                        <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
