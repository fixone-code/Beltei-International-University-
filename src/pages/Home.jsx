import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Award, BookOpen, GraduationCap, Users, Building, ShieldCheck, 
  ArrowRight, CheckCircle2, Sparkles, Globe2, Compass, Layers 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Hero } from '../components/Hero';
import { SectionTitle } from '../components/SectionTitle';
import { FacultyCard } from '../components/FacultyCard';
import { ProgramCard } from '../components/ProgramCard';
import { NewsCard } from '../components/NewsCard';
import { faculties } from '../data/faculties';
import { programs } from '../data/programs';
import { newsArticles } from '../data/news';
import { facilities } from '../data/campuses';

export const Home = () => {
  const { language, t } = useApp();

  // Featured 6 faculties for Home preview
  const featuredFaculties = faculties.slice(0, 6);
  // Featured programs
  const featuredPrograms = programs.filter(p => p.level === 'bachelor' || p.level === 'master').slice(0, 3);
  // Latest 3 news articles
  const latestNews = newsArticles.slice(0, 3);

  const stats = [
    { number: "13", labelEn: "Academic Faculties", labelKh: "មហាវិទ្យាល័យជំនាញ", icon: <Building size={26} /> },
    { number: "5", labelEn: "Degree Levels", labelKh: "កម្រិតសញ្ញាបត្រ (បំប៉ន-បណ្ឌិត)", icon: <GraduationCap size={26} /> },
    { number: "3", labelEn: "Campuses in Capital", labelKh: "ទីតាំងសាខាក្នុងរាជធានី", icon: <Layers size={26} /> },
    { number: "100%", labelEn: "MoEYS Accredited", labelKh: "ទទួលស្គាល់ដោយរាជរដ្ឋាភិបាល", icon: <ShieldCheck size={26} /> }
  ];

  const whyChooseUs = [
    {
      titleEn: "Institutional Prestigious Heritage",
      titleKh: "កេរ្តិ៍ឈ្មោះ និងបទពិសោធន៍រឹងមាំ",
      descEn: "Over two decades of proven educational leadership under BELTEI Group with thousands of successful alumni across public and private sectors.",
      descKh: "បទពិសោធន៍ជាង ២០ឆ្នាំ ក្នុងការអប់រំក្រោមការដឹកនាំរបស់ប៊ែលធីគ្រុប ជាមួយអតីតនិស្សិតឆ្នើមរាប់ពាន់នាក់។",
      icon: <Award size={24} style={{ color: 'var(--color-gold)' }} />
    },
    {
      titleEn: "Trilingual Curricula (KH, EN, CN)",
      titleKh: "កម្មវិធីសិក្សា ៣ ភាសា (ខ្មែរ-អង់គ្លេស-ចិន)",
      descEn: "National and international programs delivered with high English fluency and Mandarin options to ensure global competitiveness.",
      descKh: "កម្មវិធីសិក្សាជាភាសាជាតិ និងអន្តរជាតិ បំពាក់ជំនាញភាសាអង់គ្លេស និងចិន ដើម្បីប្រកួតប្រជែងលើឆាកអន្តរជាតិ។",
      icon: <Globe2 size={24} style={{ color: 'var(--color-primary)' }} />
    },
    {
      titleEn: "Integrated KOHA Digital Library",
      titleKh: "បណ្ណាល័យស្វ័យប្រវត្តិ KOHA System",
      descEn: "Comprehensive physical collections, research databases, international journals, and e-learning facilities at all campuses.",
      descKh: "បណ្ណាល័យធំទូលាយ បំពាក់ប្រព័ន្ធអន្តរជាតិ KOHA ទិន្នន័យស្រាវជ្រាវអេឡិចត្រូនិក និងទស្សនាវដ្តីវិទ្យាសាស្ត្រ។",
      icon: <BookOpen size={24} style={{ color: 'var(--color-green)' }} />
    },
    {
      titleEn: "Global Academic Partnerships",
      titleKh: "កិច្ចសហប្រតិបត្តិការអន្តរជាតិ (ASAIHL, Monash)",
      descEn: "Member of ASAIHL and direct credit articulation pathways with premier universities in Australia, the UK, China, and ASEAN.",
      descKh: "សមាជិកពេញសិទ្ធិនៃ ASAIHL និងកិច្ចសហការផ្ទេរការសិក្សាជាមួយស្ថាប័នល្បីៗនៅប្រទេសអូស្ត្រាលី ចក្រភពអង់គ្លេស និងអាស៊ាន។",
      icon: <Sparkles size={24} style={{ color: 'var(--color-red)' }} />
    }
  ];

  return (
    <div className="fade-in">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Key Stats Ribbon */}
      <section className="stats-ribbon">
        <div className="app-container">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-icon-wrapper">
                  {stat.icon}
                </div>
                <div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">
                    {language === 'km' ? stat.labelKh : stat.labelEn}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. University Introduction & Academic Highlights */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="app-container">
          <div style={{ gap: '3.5rem', alignItems: 'center' }} className="grid-2">
            <div>
              <span className="badge-gold" style={{ marginBottom: '1rem' }}>
                <ShieldCheck size={14} />
                {language === 'km' ? 'អំពីសាកលវិទ្យាល័យ' : 'About The University'}
              </span>

              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                {language === 'km'
                  ? 'ស្ថាប័នឧត្តមសិក្សាឈានមុខគេ ប្រកបដោយគុណភាព និងឧត្តមភាព'
                  : 'Cambodia\'s Leading Institution for Academic Excellence & Global Leadership'}
              </h2>

              <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                {language === 'km'
                  ? 'សាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ ត្រូវបានបង្កើតឡើងក្នុងគោលបំណងរួមចំណែកអភិវឌ្ឍវិស័យអប់រំថ្នាក់ឧត្តមសិក្សានៅកម្ពុជា និងដើម្បីបង្កើនមូលធនមនុស្សប្រកបដោយ «គុណភាព ប្រសិទ្ធភាព ឧត្តមភាព សីលធម៌ និងគុណធម៌» ក្រោមការដឹកនាំរបស់ ឯកឧត្តមបណ្ឌិត លី ឆេង ស្ថាបនិក និងជាប្រធានក្រុមប្រឹក្សាភិបាល។'
                  : 'BELTEI International University (BIU) is dedicated to advancing higher education standards in Cambodia by nurturing highly skilled human capital. Under the leadership of Founder H.E. Dr. Ly Chheng, the university fosters an inspiring academic atmosphere across 13 comprehensive faculties.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  language === 'km' ? 'កម្មវិធីសិក្សាស្របតាមយុទ្ធសាស្ត្របញ្ចកោណរបស់រាជរដ្ឋាភិបាលកម្ពុជា' : 'Curricula aligned with national and regional developmental frameworks',
                  language === 'km' ? 'មហាវិទ្យាល័យទាំង១៣ គ្របដណ្តប់លើវិទ្យាសាស្ត្រ បច្ចេកវិទ្យា ច្បាប់ និងពាណិជ្ជកម្ម' : '13 faculties encompassing sciences, engineering, law, aviation, and commerce',
                  language === 'km' ? 'ការបណ្តុះបណ្តាលការនិយាយជាសាធារណៈ (NP & IP) និងការប្រកួតជជែកដេញដោល' : 'Flagship national debate and public speaking programs in Khmer and English'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn-primary">
                  <span>{language === 'km' ? 'ស្វែងយល់បន្ថែមអំពីប៊ែលធី' : 'Discover Our Heritage'}</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/faculties" className="btn-secondary">
                  <span>{t('viewAllFaculties')}</span>
                </Link>
              </div>
            </div>

            {/* Visual Showcase Box */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--card-shadow-hover)', border: '1px solid var(--border-subtle)' }}>
                <img 
                  src="/images/campus2_chaomchao.png" 
                  alt="BELTEI International University Campus 2" 
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                />
              </div>

              {/* Floating Floating Accreditation Badge */}
              <div 
                className="academic-card"
                style={{ 
                  position: 'absolute', 
                  bottom: '-25px', 
                  left: '25px', 
                  padding: '1.25rem 1.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  maxWidth: '320px',
                  borderLeft: '4px solid var(--color-gold)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
                }}
              >
                <Award size={36} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '0.92rem', margin: 0, fontWeight: 700, color: 'var(--text-primary)' }}>
                    {language === 'km' ? 'ទទួលស្គាល់ផ្លូវការ' : 'Officially Accredited'}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    {language === 'km' ? 'ដោយរាជរដ្ឋាភិបាល និងក្រសួងអប់រំ' : 'By Royal Government & MoEYS'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Academic Faculties */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="app-container">
          <SectionTitle 
            eyebrow={language === 'km' ? 'មហាវិទ្យាល័យទាំង១៣' : 'Academic Faculties'}
            title={language === 'km' ? 'ជ្រើសរើសមហាវិទ្យាល័យដែលស័ក្តិសមនឹងអ្នក' : 'Explore Our 13 Academic Faculties'}
            subtitle={language === 'km' 
              ? 'កម្មវិធីបណ្តុះបណ្តាលដែលត្រូវបានរៀបចំយ៉ាងសម្រិតសម្រាំងដើម្បីផ្តល់នូវជំនាញពិតប្រាកដ និងឱកាសការងារខ្ពស់។'
              : 'Designed with rigorous academic curricula, modern laboratory facilities, and real-world internships.'}
          />

          <div className="grid-3" style={{ marginBottom: '3rem' }}>
            {featuredFaculties.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/faculties" className="btn-primary" style={{ padding: '0.85rem 2.25rem' }}>
              <Layers size={18} />
              <span>{t('viewAllFaculties')}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Study at BELTEI Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-navy-dark)', color: '#ffffff' }}>
        <div className="app-container">
          <SectionTitle 
            light
            eyebrow={language === 'km' ? 'គុណតម្លៃស្នូល' : 'Core Values & Advantages'}
            title={language === 'km' ? 'ហេតុអ្វីជ្រើសរើសសិក្សានៅ ប៊ែលធី អន្តរជាតិ?' : 'Why Study at BELTEI International University?'}
            subtitle={language === 'km'
              ? 'បាវចនា «គុណភាព ប្រសិទ្ធភាព ឧត្តមភាព សីលធម៌ គុណធម៌» ជាត្រីវិស័យដឹកនាំការបណ្តុះបណ្តាល។'
              : 'Our five pillars ensure that graduates excel not only in technical proficiency, but also in ethical character and global acumen.'}
          />

          <div className="grid-4">
            {whyChooseUs.map((item, idx) => (
              <div 
                key={idx}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  borderRadius: '0.75rem', 
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ 
                  width: '52px', 
                  height: '52px', 
                  borderRadius: '10px', 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 700 }}>
                  {language === 'km' ? item.titleKh : item.titleEn}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                  {language === 'km' ? item.descKh : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Campus Facilities Showcase */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="app-container">
          <SectionTitle 
            eyebrow={language === 'km' ? 'បរិក្ខារសិក្សា' : 'World-Class Infrastructure'}
            title={language === 'km' ? 'សម្ភារៈសិក្សា និងបរិក្ខារទំនើបៗ' : 'State-of-the-Art Campus Facilities'}
            subtitle={language === 'km'
              ? 'បរិយាកាសសិក្សាប្រកបដោយផាសុកភាព បណ្ណាល័យធំទូលាយ បន្ទប់ពិសោធន៍បច្ចេកវិទ្យា និងសាលសហសិក្សាខ្នាតអន្តរជាតិ។'
              : 'Providing students with the physical and digital infrastructure essential for academic success and groundbreaking research.'}
          />

          <div className="grid-2">
            {facilities.map((facility) => (
              <div key={facility.id} className="academic-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img 
                    src={facility.image} 
                    alt={facility.titleEn}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 className="font-khmer" style={{ fontSize: '1.18rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {facility.titleKh}
                  </h3>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.85rem' }}>
                    {facility.titleEn}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {language === 'km' ? facility.descriptionKh : facility.descriptionEn}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                    {facility.highlights.map((h, i) => (
                      <span key={i} className="badge-blue" style={{ fontSize: '0.75rem' }}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/campus-life" className="btn-secondary">
              <span>{language === 'km' ? 'ទស្សនាជីវិតនិស្សិត និងបរិក្ខារទាំងអស់' : 'Explore All Campus Facilities'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Latest University News & Announcements */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="app-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-eyebrow">
                {language === 'km' ? 'ព័ត៌មានផ្លូវការ' : 'Institutional Updates'}
              </span>
              <h2 className="section-main-title" style={{ margin: 0 }}>
                {language === 'km' ? 'ព័ត៌មាន និងព្រឹត្តិការណ៍ថ្មីៗ' : 'Latest News & Official Announcements'}
              </h2>
            </div>
            <Link to="/news" className="btn-secondary" style={{ padding: '0.65rem 1.25rem' }}>
              <span>{language === 'km' ? 'មើលព័ត៌មានទាំងអស់' : 'View All News'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-3">
            {latestNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Admissions Call-To-Action Banner */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0f2263 0%, #006cb8 100%)', 
        color: '#ffffff', 
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="app-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '820px' }}>
          <span className="badge-gold" style={{ marginBottom: '1.25rem' }}>
            <GraduationCap size={16} />
            {language === 'km' ? 'បវេសនកាលថ្មី ២០២៦-២០២៧' : 'New Academic Intake 2026-2027'}
          </span>

          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.2 }}>
            {t('readyToJoin')}
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#e2e8f0', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            {t('joinBelteiSub')}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/admissions" className="btn-gold" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem' }}>
              <GraduationCap size={18} />
              <span>{t('applyOnline')}</span>
            </Link>

            <Link to="/contact" className="btn-outline-white" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem' }}>
              <span>{t('navContact')}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
