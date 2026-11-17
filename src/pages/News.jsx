import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar, Search, ArrowRight, Newspaper, Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { NewsCard } from '../components/NewsCard';
import { newsArticles, newsCategories } from '../data/news';

export const News = () => {
  const { language, t } = useApp();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  // Featured article is the first featured article
  const featuredArticle = newsArticles.find(n => n.isFeatured) || newsArticles[0];

  const filteredArticles = useMemo(() => {
    return newsArticles.filter((article) => {
      const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
      const matchesSearch =
        article.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.titleKh.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summaryEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summaryKh.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const displayedArticles = filteredArticles.slice(0, visibleCount);

  return (
    <div className="fade-in">
      <Breadcrumb items={[{ label: t('navNews') }]} />

      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0a1744 0%, #006cb8 100%)',
        color: '#ffffff',
        padding: '4rem 0 3rem 0',
        borderBottom: '4px solid var(--color-gold)'
      }}>
        <div className="app-container">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>
            {language === 'km' ? 'ព័ត៌មាន និងព្រឹត្តិការណ៍' : 'News & Announcements'}
          </span>
          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
            {language === 'km' ? 'ព័ត៌មាន និងព្រឹត្តិការណ៍សាកលវិទ្យាល័យ' : 'University News & Events'}
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#e2e8f0', maxWidth: '780px', lineHeight: 1.6 }}>
            {language === 'km'
              ? 'តាមដានសេចក្តីជូនដំណឹងផ្លូវការ បវេសនកាលថ្មី កម្មវិធីជជែកដេញដោល និងព្រឹត្តិការណ៍សំខាន់ៗប្រចាំថ្ងៃរបស់សាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ។'
              : 'Stay up to date with official university developments, academic calendar announcements, championship debates, and symposiums.'}
          </p>
        </div>
      </section>

      {/* Featured News Spotlight */}
      {featuredArticle && (
        <section style={{ backgroundColor: 'var(--bg-surface)', padding: '3.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="app-container">
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '1rem' }}>
              <Sparkles size={16} style={{ color: 'var(--color-gold)' }} />
              {language === 'km' ? 'ព្រឹត្តិការណ៍លេចធ្លោប្រចាំឆ្នាំ' : 'Featured Institutional Event'}
            </span>

            <div className="academic-card grid-2" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', overflow: 'hidden' }}>
              <div style={{ height: '380px', overflow: 'hidden' }}>
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.titleEn}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span className="badge-gold">
                    {language === 'km' ? featuredArticle.categoryLabelKh : featuredArticle.categoryLabelEn}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={13} />
                    {featuredArticle.date}
                  </span>
                </div>

                <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.3 }}>
                  <Link to={`/news/${featuredArticle.id}`}>
                    {language === 'km' ? featuredArticle.titleKh : featuredArticle.titleEn}
                  </Link>
                </h2>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                  {language === 'km' ? featuredArticle.summaryKh : featuredArticle.summaryEn}
                </p>

                <div>
                  <Link to={`/news/${featuredArticle.id}`} className="btn-primary">
                    <span>{t('readMore')}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Articles Listing */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="app-container">
          {/* Search & Categories Bar */}
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
                placeholder={language === 'km' ? 'ស្វែងរកព័ត៌មាន ឬសេចក្តីប្រកាស...' : 'Search articles by headline or keyword...'}
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

            {/* Category Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {newsCategories.map((cat) => (
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

          {/* News Grid */}
          {displayedArticles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--bg-surface)', borderRadius: '1rem', border: '1px solid var(--border-subtle)' }}>
              <Newspaper size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {language === 'km' ? 'រកមិនឃើញព័ត៌មានដែលត្រូវនឹងការស្វែងរកទេ' : 'No news found matching your search'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                {language === 'km' ? 'សូមសាកល្បងជ្រើសរើសប្រភេទផ្សេងទៀត ឬសម្អាតពាក្យស្វែងរក។' : 'Try selecting another category or clearing your query.'}
              </p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchTerm(''); }}
                className="btn-secondary"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid-3" style={{ marginBottom: '3rem' }}>
              {displayedArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredArticles.length > visibleCount && (
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => setVisibleCount(prev => prev + 3)}
                className="btn-secondary"
                style={{ padding: '0.75rem 2rem' }}
              >
                <span>{language === 'km' ? 'មើលព័ត៌មានបន្ថែមទៀត' : 'Load More Announcements'}</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default News;
