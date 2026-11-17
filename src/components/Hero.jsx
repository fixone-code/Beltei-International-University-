import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, ShieldCheck, Award, Globe, BookOpen } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Hero = () => {
  const { language, t } = useApp();

  return (
    <section className="hero-wrapper">
      {/* Background Campus Image with Deep Academic Gradient Overlay */}
      <img 
        src="/images/campus1_tuolsleng.png" 
        alt="BELTEI International University Campus 1 Tuol Sleng" 
        className="hero-bg-img"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-bg-overlay" />

      <div className="app-container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div className="hero-content">
          {/* Institutional Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-tag"
          >
            <ShieldCheck size={16} />
            <span>
              {language === 'km' 
                ? 'សាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ • រាជធានីភ្នំពេញ' 
                : 'BELTEI International University • Phnom Penh, Cambodia'}
            </span>
          </motion.div>

          {/* Bilingual Institutional Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-khmer-title"
            style={{ 
              color: 'var(--color-gold)', 
              fontSize: '1.25rem', 
              marginBottom: '0.75rem',
              letterSpacing: '0.03em' 
            }}
          >
            {t('universityNameKh')}
          </motion.p>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-title"
          >
            {language === 'km' 
              ? 'បណ្តុះបណ្តាល និងលើកកម្ពស់ អនាគតនៃអ្នកដឹកនាំសកល'
              : 'Empowering the Next Generation of Global Leaders.'}
          </motion.h1>

          {/* Supporting Text */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-subtitle"
          >
            {language === 'km'
              ? 'បេសកកម្មអប់រំឧត្តមសិក្សាផ្អែកលើ «គុណភាព ប្រសិទ្ធភាព ឧត្តមភាព សីលធម៌ និងគុណធម៌» ជាមួយនឹងមហាវិទ្យាល័យជំនាញទាំង១៣ កម្មវិធីសិក្សាភាសាជាតិ-អន្តរជាតិ និងបណ្ណាល័យអេឡិចត្រូនិក KOHA ទំនើប។'
              : 'BELTEI International University provides premier higher education grounded in Quality, Efficiency, Excellence, Morality, and Virtue. Offering 13 specialized faculties, trilingual curricula, and state-of-the-art academic campuses.'}
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-cta-group"
          >
            <Link to="/programs" className="btn-gold" style={{ padding: '0.9rem 2rem', fontSize: '1.02rem' }}>
              <BookOpen size={18} />
              <span>{t('explorePrograms')}</span>
              <ArrowRight size={18} />
            </Link>

            <Link to="/admissions" className="btn-outline-white" style={{ padding: '0.9rem 2rem', fontSize: '1.02rem' }}>
              <GraduationCap size={18} />
              <span>{t('admissionInfo')}</span>
            </Link>
          </motion.div>

          {/* Institutional Highlights Quick Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.75rem', 
              marginTop: '3.5rem', 
              paddingTop: '2rem', 
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Award size={20} style={{ color: 'var(--color-gold)' }} />
              <div>
                <p style={{ margin: 0, color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}>13 Faculties</p>
                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.78rem' }}>National & International</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <GraduationCap size={20} style={{ color: 'var(--color-gold)' }} />
              <div>
                <p style={{ margin: 0, color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}>5 Degree Levels</p>
                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.78rem' }}>Foundation to Ph.D</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Globe size={20} style={{ color: 'var(--color-gold)' }} />
              <div>
                <p style={{ margin: 0, color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}>Global Pathways</p>
                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.78rem' }}>ASAIHL & Monash Partner</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
