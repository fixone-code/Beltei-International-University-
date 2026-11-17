import React, { useState } from 'react';
import {
  Building, BookOpen, Users, Award,
  Sparkles, Camera, MapPin, CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';

export const CampusLife = () => {
  const { language, t } = useApp();
  const [activeTab, setActiveTab] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'facilities',
      titleEn: "Central KOHA Library Reading Hall",
      titleKh: "សាលអានបណ្ណាល័យកណ្តាល KOHA System",
      image: "/images/facilities/library_1.png",
      tag: "Library & Research"
    },
    {
      id: 2,
      category: 'facilities',
      titleEn: "High-Tech Computer & Software Engineering Lab",
      titleKh: "បន្ទប់ពិសោធន៍កុំព្យូទ័រ និងវិស្វកម្មសូហ្វវែរ",
      image: "/images/facilities/lab_1.jpg",
      tag: "Technology Labs"
    },
    {
      id: 3,
      category: 'facilities',
      titleEn: "2,000-Seat Grand Conference Hall (Campus 2)",
      titleKh: "សាលសហសិក្សាខ្នាតធំ (ចំណុះ ២,០០០នាក់)",
      image: "/images/facilities/hall_1.jpg",
      tag: "Auditorium & Events"
    },
    {
      id: 4,
      category: 'facilities',
      titleEn: "Multimedia Air-Conditioned Lecture Theater",
      titleKh: "ថ្នាក់រៀនបំពាក់ប្រព័ន្ធពហុព័ត៌មានទំនើប",
      image: "/images/facilities/classroom_1.jpg",
      tag: "Learning Spaces"
    },
    {
      id: 5,
      category: 'activities',
      titleEn: "Annual University Debate Championship Season 4",
      titleKh: "ការប្រកួតជជែកដេញដោលប្រចាំឆ្នាំ រដូវកាលទី៤",
      image: "/images/news/news_debate_2026.jpg",
      tag: "Debates & Competitions"
    },
    {
      id: 6,
      category: 'activities',
      titleEn: "International Youth Day & Peace Symposium",
      titleKh: "ទិវាអន្តរជាតិសម្រាប់យុវជន និងសិក្ខាសាលាសន្តិភាព",
      image: "/images/news/news_peace_day.jpg",
      tag: "Youth Leadership"
    },
    {
      id: 7,
      category: 'facilities',
      titleEn: "KOHA Digital Reference Archive",
      titleKh: "ឯកសារពិគ្រោះស្រាវជ្រាវអេឡិចត្រូនិក",
      image: "/images/facilities/library_2.png",
      tag: "Library & Research"
    },
    {
      id: 8,
      category: 'campus',
      titleEn: "Campus 1 Landmark (Tuol Sleng)",
      titleKh: "អគារសិក្សាទីតាំងទី១ ទួលស្លែង",
      image: "/images/campus1_tuolsleng.png",
      tag: "Campus Architecture"
    },
    {
      id: 9,
      category: 'campus',
      titleEn: "Campus 2 Panoramic View (Chaom Chao)",
      titleKh: "អគារសិក្សាទីតាំងទី២ ស្ពានអាកាសចោមចៅ",
      image: "/images/campus2_chaomchao.png",
      tag: "Campus Architecture"
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <div className="fade-in">
      <Breadcrumb items={[{ label: t('navCampusLife') }]} />

      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0a1744 0%, #006cb8 100%)',
        color: '#ffffff',
        padding: '4rem 0 3rem 0',
        borderBottom: '4px solid var(--color-gold)'
      }}>
        <div className="app-container">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>
            {language === 'km' ? 'ជីវិតនិស្សិត និងបរិវេណសិក្សា' : 'Vibrant Student Community'}
          </span>
          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
            {language === 'km' ? 'ជីវិតនិស្សិត និងសកម្មភាពក្នុងបរិវេណសាលា' : 'Campus Life & Student Experience'}
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#e2e8f0', maxWidth: '780px', lineHeight: 1.6 }}>
            {language === 'km'
              ? 'ជីវិតនិស្សិតនៅសាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ ពោរពេញដោយសកម្មភាពសិក្សាស្រាវជ្រាវ ការប្រកួតជជែកដេញដោល ការនិយាយជាសាធារណៈ និងទស្សនកិច្ចសិក្សាទាំងក្នុង និងក្រៅប្រទេស។'
              : 'Discover an inspiring collegiate atmosphere uniting academic rigor with active student organizations, national debates, speech contests, and world-class facilities.'}
          </p>
        </div>
      </section>

      {/* Signature Programs Highlight: Public Speaking & Debates */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="app-container">
          <SectionTitle
            eyebrow={language === 'km' ? 'កម្មវិធីពិសេសប្រចាំសាកលវិទ្យាល័យ' : 'Signature University Traditions'}
            title={language === 'km' ? 'ការនិយាយជាសាធារណៈ និងការប្រកួតជជែកដេញដោល' : 'Flagship Debates & Public Speaking Programs'}
            subtitle={language === 'km'
              ? 'កម្មវិធីបណ្តុះបណ្តាលភាពក្លាហាន និងវោហាសាស្ត្រសម្រាប់និស្សិតគ្រប់ឆ្នាំសិក្សា។'
              : 'Developing eloquent, persuasive speakers equipped to represent Cambodia on international platforms.'}
          />

          <div className="grid-3" style={{ marginBottom: '3rem' }}>
            <div className="academic-card" style={{ padding: '2rem', borderTop: '4px solid var(--color-primary)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {language === 'km' ? 'ការប្រកួតជជែកដេញដោលប្រចាំឆ្នាំ' : 'Annual University Debate Championship'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {language === 'km'
                  ? 'រៀបចំឡើងជារៀងរាល់ឆ្នាំ សម្រាប់និស្សិតគ្រប់មហាវិទ្យាល័យ ក្រោមប្រធានបទសេដ្ឋកិច្ច បច្ចេកវិទ្យា និងការអភិវឌ្ឍសង្គម ដើម្បីពង្រឹងការគិតបែបស៊ីជម្រៅ។'
                  : 'An annual campus-wide intellectual tournament challenging students on complex geopolitical, business, and educational propositions.'}
              </p>
            </div>

            <div className="academic-card" style={{ padding: '2rem', borderTop: '4px solid var(--color-gold)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'var(--color-gold-light)', color: 'var(--color-gold-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {language === 'km' ? 'ការនិយាយជាសាធារណៈ (NP & IP)' : 'National & International Public Speaking'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {language === 'km'
                  ? 'ការបណ្តុះបណ្តាលពីឆ្នាំទី១ ដល់ឆ្នាំទី៤ ទាំងភាសាជាតិ (National Program) និងភាសាអង់គ្លេស (International Program) ដោយមានការផ្សាយផ្ទាល់លើទូរទស្សន៍ និងបណ្តាញសង្គម។'
                  : 'Multi-tiered public speaking courses running across all four years in both Khmer and English, fostering fearless professional communicators.'}
              </p>
            </div>

            <div className="academic-card" style={{ padding: '2rem', borderTop: '4px solid var(--color-green)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {language === 'km' ? 'ទស្សនកិច្ចសិក្សា និងកម្មសិក្សា' : 'Study Tours & Practicum Field Trips'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {language === 'km'
                  ? 'ទស្សនកិច្ចសិក្សានៅតាមតំបន់បេតិកភណ្ឌប្រវត្តិសាស្ត្រ អាកាសយានដ្ឋានអន្តរជាតិ សហគ្រាសធំៗ និងដំណើរទស្សនកិច្ចផ្លាស់ប្តូរការសិក្សាក្រៅប្រទេស។'
                  : 'Hands-on domestic and overseas educational tours visiting international airports, commercial hubs, historical sites, and partner universities.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="app-container">
          <SectionTitle
            eyebrow={language === 'km' ? 'វិចិត្រសាលរូបថត' : 'Visual Showcase'}
            title={language === 'km' ? 'ទិដ្ឋភាពជាក់ស្តែងនៃបរិវេណសាលា' : 'Authentic Campus & Student Gallery'}
          />

          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
            {[
              { id: 'all', labelEn: 'All Photos', labelKh: 'រូបថតទាំងអស់' },
              { id: 'facilities', labelEn: 'Facilities & Labs', labelKh: 'សម្ភារៈសិក្សា និងបន្ទប់ពិសោធន៍' },
              { id: 'activities', labelEn: 'Student Activities', labelKh: 'សកម្មភាពនិស្សិត' },
              { id: 'campus', labelEn: 'Campus Buildings', labelKh: 'អគារសាកលវិទ្យាល័យ' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.55rem 1.35rem',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: activeTab === tab.id ? 'var(--color-primary)' : 'var(--bg-surface)',
                  color: activeTab === tab.id ? '#ffffff' : 'var(--text-secondary)',
                  border: `1px solid ${activeTab === tab.id ? 'var(--color-primary)' : 'var(--border-subtle)'}`,
                  boxShadow: 'var(--card-shadow)'
                }}
              >
                {language === 'km' ? tab.labelKh : tab.labelEn}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="grid-3">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="academic-card"
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.image}
                    alt={item.titleEn}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(15, 34, 99, 0.85)',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    backdropFilter: 'blur(4px)'
                  }}>
                    {item.tag}
                  </span>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h4 className="font-khmer" style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {item.titleKh}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-navy)', fontWeight: 600 }}>
                    {item.titleEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default CampusLife;
