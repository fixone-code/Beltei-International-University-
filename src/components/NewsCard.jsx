import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Tag, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const NewsCard = ({ article }) => {
  const { language, t } = useApp();

  return (
    <article className="academic-card news-card">
      <div className="news-card-img-wrap">
        <img 
          src={article.image} 
          alt={article.titleEn}
          className="news-card-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/news/news_debate_2026.jpg';
          }}
        />
        <div className="news-card-date">
          <Calendar size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
          {article.date}
        </div>
      </div>

      <div className="news-card-body">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span className="news-card-category">
            {language === 'km' ? article.categoryLabelKh : article.categoryLabelEn}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
            <Clock size={11} />
            {article.readTime}
          </span>
        </div>

        <h3 className="news-card-title">
          <Link to={`/news/${article.id}`}>
            {language === 'km' ? article.titleKh : article.titleEn}
          </Link>
        </h3>

        <p className="news-card-snippet">
          {language === 'km' ? article.summaryKh : article.summaryEn}
        </p>

        <Link 
          to={`/news/${article.id}`}
          style={{ 
            marginTop: 'auto', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.4rem', 
            fontSize: '0.88rem', 
            fontWeight: 700, 
            color: 'var(--color-primary)' 
          }}
        >
          <span>{t('readMore')}</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
};
export default NewsCard;
