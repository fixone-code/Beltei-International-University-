import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, Clock, User, ArrowLeft,
  Share2, ArrowRight, Newspaper, Building 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { newsArticles } from '../data/news';

export const NewsDetails = () => {
  const { id } = useParams();
  const { language, t } = useApp();
  const article = newsArticles.find(n => n.id === id);

  if (!article) {
    return (
      <div className="app-container section-padding" style={{ textAlign: 'center' }}>
        <Newspaper size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 1rem auto' }} />
        <h1>Article Not Found</h1>
        <p style={{ marginBottom: '1.5rem' }}>The requested article could not be located.</p>
        <Link to="/news" className="btn-primary">Back to News</Link>
      </div>
    );
  }

  const relatedArticles = newsArticles.filter(n => n.id !== article.id).slice(0, 3);

  return (
    <div className="fade-in">
      <Breadcrumb 
        items={[
          { label: t('navNews'), to: '/news' },
          { label: language === 'km' ? article.titleKh : article.titleEn }
        ]} 
      />

      <article className="section-padding" style={{ backgroundColor: 'var(--bg-page)', paddingTop: '2.5rem' }}>
        <div className="app-container" style={{ maxWidth: '880px' }}>
          {/* Back button */}
          <Link 
            to="/news"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              color: 'var(--color-primary)', 
              fontWeight: 600, 
              fontSize: '0.9rem',
              marginBottom: '1.5rem'
            }}
          >
            <ArrowLeft size={16} />
            <span>{language === 'km' ? 'ត្រឡប់ទៅកាន់ព័ត៌មានទាំងអស់' : 'Back to All Announcements'}</span>
          </Link>

          {/* Meta Tag & Title */}
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>
              {language === 'km' ? article.categoryLabelKh : article.categoryLabelEn}
            </span>

            <h1 style={{ fontSize: '2.35rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: '1rem' }}>
              {language === 'km' ? article.titleKh : article.titleEn}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Calendar size={15} style={{ color: 'var(--color-primary)' }} />
                {article.date}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <User size={15} />
                {article.author}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Clock size={15} />
                {article.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--card-shadow)', marginBottom: '2.5rem', border: '1px solid var(--border-subtle)' }}>
            <img 
              src={article.image} 
              alt={article.titleEn}
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Article Body Content */}
          <div 
            className="academic-card" 
            style={{ 
              padding: '2.5rem', 
              fontSize: '1.05rem', 
              lineHeight: 1.85, 
              color: 'var(--text-secondary)',
              marginBottom: '3.5rem'
            }}
          >
            <div style={{ whiteSpace: 'pre-line' }}>
              {language === 'km' ? article.contentKh : article.contentEn}
            </div>

            {/* Institutional Signoff */}
            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-navy)', fontWeight: 700, fontSize: '0.9rem' }}>
                <Building size={18} style={{ color: 'var(--color-gold)' }} />
                <span>BELTEI International University • Official Press Release</span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(window.location.href);
                      window.alert('Link copied to clipboard!');
                    } catch (error) {
                      console.error('Unable to copy the article link:', error);
                      window.alert('Unable to copy the link. Copy the page address from your browser.');
                    }
                  }}
                  className="icon-btn" 
                  title="Share Article"
                  aria-label="Copy article link"
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              {language === 'km' ? 'ព័ត៌មានពាក់ព័ន្ធផ្សេងទៀត' : 'More University Announcements'}
            </h3>
            <div className="grid-3">
              {relatedArticles.map((rel) => (
                <div key={rel.id} className="academic-card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.35rem' }}>
                    {rel.date}
                  </span>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.4, marginBottom: '0.75rem', flexGrow: 1 }}>
                    <Link to={`/news/${rel.id}`}>
                      {language === 'km' ? rel.titleKh : rel.titleEn}
                    </Link>
                  </h4>
                  <Link 
                    to={`/news/${rel.id}`}
                    style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
                  >
                    <span>Read</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
export default NewsDetails;
