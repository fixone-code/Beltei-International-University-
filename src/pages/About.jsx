import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Target, Compass, Heart, ShieldCheck, 
  CheckCircle2, Users, Building, Globe, BookOpen 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';

export const About = () => {
  const { language, t } = useApp();

  const values = [
    { titleEn: "Quality", titleKh: "គុណភាព", descEn: "Rigorous academic delivery adhering to national and international standards.", descKh: "ការបណ្តុះបណ្តាលស្របតាមស្តង់ដារជាតិ និងអន្តរជាតិ។" },
    { titleEn: "Efficiency", titleKh: "ប្រសិទ្ធភាព", descEn: "Maximizing student learning outcomes through modern pedagogies and technology.", descKh: "លើកកម្ពស់លទ្ធផលសិក្សាតាមរយៈវិធីសាស្ត្រ និងបច្ចេកវិទ្យាទំនើប។" },
    { titleEn: "Excellence", titleKh: "ឧត្តមភាព", descEn: "Striving for peak distinction in teaching, research, and institutional innovation.", descKh: "ឈានឆ្ពោះទៅរកភាពឆ្នើមលើការបង្រៀន ការស្រាវជ្រាវ និងនវានុវត្តន៍។" },
    { titleEn: "Morality", titleKh: "សីលធម៌", descEn: "Instilling deep respect for national culture, civic responsibility, and honesty.", descKh: "បណ្តុះស្មារតីគោរពវប្បធម៌ជាតិ ការទទួលខុសត្រូវ និងសុចរិតភាព។" },
    { titleEn: "Virtue", titleKh: "គុណធម៌", descEn: "Developing empathetic leaders dedicated to societal welfare and peace.", descKh: "កសាងអ្នកដឹកនាំប្រកបដោយមេត្តាធម៌ និងការលះបង់ដើម្បីសង្គម។" }
  ];

  const milestones = [
    { year: "2002", titleEn: "Establishment of BELTEI Education", titleKh: "ការបង្កើតគ្រឹះស្ថានអប់រំប៊ែលធី", descEn: "Foundation of BELTEI educational ecosystem in Phnom Penh by Dr. Ly Chheng.", descKh: "បង្កើតឡើងដោយ ឯកឧត្តមបណ្ឌិត លី ឆេង ក្នុងរាជធានីភ្នំពេញ។" },
    { year: "2012", titleEn: "Elevation to BELTEI International University", titleKh: "ការបង្កើតសាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ", descEn: "Officially recognized by the Royal Government of Cambodia with authorized degree granting authority.", descKh: "ទទួលស្គាល់ដោយរាជរដ្ឋាភិបាលកម្ពុជា ក្នុងការបណ្តុះបណ្តាលថ្នាក់ឧត្តមសិក្សា។" },
    { year: "2016", titleEn: "Campus 2 Chaom Chao Inauguration", titleKh: "សម្ពោធទីតាំងទី២ ស្ពានអាកាសចោមចៅ", descEn: "Grand opening of Campus 2 featuring state-of-the-art facilities and 2,000-seat conference auditorium.", descKh: "បើកដំណើរការអគារសិក្សាថ្មី និងសាលសហសិក្សាខ្នាតធំ ២,០០០នាក់។" },
    { year: "2019", titleEn: "ASAIHL & International Memberships", titleKh: "សមាជិកពេញសិទ្ធិ ASAIHL", descEn: "Admitted into the Association of Southeast Asian Institutions of Higher Learning.", descKh: "ចូលជាសមាជិកសមាគមគ្រឹះស្ថានឧត្តមសិក្សាអាស៊ីអាគ្នេយ៍។" },
    { year: "2023", titleEn: "Monash College Australia Partnership", titleKh: "កិច្ចសហការ Monash College អូស្ត្រាលី", descEn: "Launching the Monash College Foundation Year Standard pathway in Cambodia.", descKh: "បើកដំណើរការកម្មវិធីត្រៀមចូលរៀនស្តង់ដារអន្តរជាតិ Monash College។" },
    { year: "2026", titleEn: "Campus 3 Expansion & Digital Horizons", titleKh: "គម្រោងពង្រីកទីតាំងទី៣ ទួលពង្រ", descEn: "Expanding scientific research, AI laboratories, and sustainable smart campus infrastructure.", descKh: "ពង្រីកមន្ទីរពិសោធន៍ AI និងបរិវេណសិក្សាឆ្លាតវៃទំនើប។" }
  ];

  return (
    <div className="fade-in">
      <Breadcrumb items={[{ label: t('navAbout') }]} />

      {/* Hero Header */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0a1744 0%, #006cb8 100%)', 
        color: '#ffffff', 
        padding: '4.5rem 0 3.5rem 0',
        borderBottom: '4px solid var(--color-gold)'
      }}>
        <div className="app-container">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>
            {language === 'km' ? 'អំពីយើង' : 'Institutional Heritage'}
          </span>
          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
            {language === 'km' ? 'អំពីសាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ' : 'About BELTEI International University'}
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#e2e8f0', maxWidth: '750px', lineHeight: 1.6 }}>
            {language === 'km'
              ? 'គ្រឹះស្ថានឧត្តមសិក្សាឯកជនឈានមុខគេ ដែលប្តេជ្ញាលើកកម្ពស់ធនធានមនុស្សប្រកបដោយចំណេះដឹង សមត្ថភាព សីលធម៌ និងភាពជាអ្នកដឹកនាំសកល។'
              : 'A premier private institution of higher education dedicated to advancing human capital through quality, ethical leadership, cutting-edge technology, and global partnerships.'}
          </p>
        </div>
      </section>

      {/* Leadership Message (Founder & Chairman) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="app-container">
          <SectionTitle 
            eyebrow={language === 'km' ? 'ថ្នាក់ដឹកនាំជាន់ខ្ពស់' : 'Institutional Leadership'}
            title={language === 'km' ? 'សារស្វាគមន៍ ស្ថាបនិក និងជាប្រធានក្រុមប្រឹក្សាភិបាល' : 'Welcome Message from the Founder & Chairman'}
            subtitle={language === 'km' ? 'អ្នកឧកញ៉ា បណ្ឌិត លី ឆេង' : 'H.E. Dr. Ly Chheng, Member of Parliament / Founder & Chairman of BELTEI Group'}
          />

          <div className="academic-card" style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2.5rem', alignItems: 'flex-start' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '210px', 
                height: '220px', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                margin: '0 auto 1.25rem auto',
                boxShadow: 'var(--card-shadow)',
                border: '3px solid var(--color-gold)'
              }}>
                <img 
                  src="/images/leadership/dr_lychheng.jpg" 
                  alt="H.E. Dr. Ly Chheng"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy)', margin: '0 0 0.25rem 0' }}>
                {language === 'km' ? 'អ្នកឧកញ៉ា បណ្ឌិត លី ឆេង' : 'H.E. Dr. Ly Chheng'}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>
                {language === 'km' 
                  ? 'តំណាងរាស្ត្រមណ្ឌលរាជធានីភ្នំពេញ ស្ថាបនិក និងជាប្រធានក្រុមប្រឹក្សាភិបាល' 
                  : 'Member of Parliament, Founder & Chairman of the Board of Directors'}
              </p>
            </div>

            <div>
              <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                {language === 'km'
                  ? 'សូមគោរព និងសូមស្វាគមន៍ សម្តេច ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា និងសិស្ស-និស្សិតទាំងអស់ដែលបានសម្រេចចិត្តបន្តការសិក្សាថ្នាក់ឧត្តមសិក្សានៅសាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ ដើម្បីបង្កើនចំណេះដឹង សមត្ថភាព និងសម្រេចគោលដៅរបស់ខ្លួនទៅថ្ងៃអនាគត។'
                  : 'I warmly welcome all distinguished guests, parents, and students who have chosen to pursue higher education at BELTEI International University to cultivate knowledge, practical capabilities, and achieve their lifelong aspirations.'}
              </p>

              <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                {language === 'km'
                  ? 'សាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ បានបង្កើតឡើងក្នុងគោលបំណងរួមចំណែកអភិវឌ្ឍវិស័យអប់រំថ្នាក់ឧត្តមសិក្សានៅប្រទេសកម្ពុជា និងដើម្បីបង្កើនមូលធនមនុស្សប្រកបដោយ «គុណភាព ប្រសិទ្ធភាព ឧត្តមភាព សីលធម៌ និងគុណធម៌» ស្របតាមយុទ្ធសាស្ត្របញ្ចកោណរបស់រាជរដ្ឋាភិបាលកម្ពុជា។'
                  : 'BELTEI International University was established to elevate higher education in Cambodia, developing human capital enriched with Quality, Efficiency, Excellence, Morality, and Virtue, in harmony with the Royal Government of Cambodia’s Pentagonal Strategy.'}
              </p>

              <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                {language === 'km'
                  ? 'បច្ចុប្បន្នសាកលវិទ្យាល័យកំពុងបណ្តុះបណ្តាលថ្នាក់បរិញ្ញាបត្ររង បរិញ្ញាបត្រ បរិញ្ញាបត្រជាន់ខ្ពស់ និងថ្នាក់បណ្ឌិត លើមហាវិទ្យាល័យទាំង១៣ ជាមួយនឹងសម្ភារៈសិក្សាទំនើប បណ្ណាល័យ KOHA និងកិច្ចសហប្រតិបត្តិការអន្តរជាតិជាមួយសាកលវិទ្យាល័យល្បីៗជាច្រើន។'
                  : 'Today, the university trains students across Associate, Bachelor, Master, and Doctoral degree levels within our 13 faculties, powered by state-of-the-art facilities, automated KOHA libraries, and vibrant international collaborations.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Goals, Values */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="app-container">
          <SectionTitle 
            eyebrow={language === 'km' ? 'ចក្ខុវិស័យ និងបេសកកម្ម' : 'Strategic Foundations'}
            title={language === 'km' ? 'ចក្ខុវិស័យ បេសកកម្ម និងគោលដៅ' : 'Vision, Mission, and Core Goals'}
          />

          <div className="grid-3" style={{ marginBottom: '3.5rem' }}>
            {/* Vision */}
            <div className="academic-card" style={{ padding: '2rem', borderTop: '4px solid var(--color-primary)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--color-primary)' }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                {language === 'km' ? 'ចក្ខុវិស័យ (Vision)' : 'Institutional Vision'}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {language === 'km'
                  ? 'ក្លាយជាសាកលវិទ្យាល័យឈានមុខគេក្នុងការផ្តល់នូវការអប់រំឧត្តមសិក្សាស្របតាមស្តង់ដារជាតិ និងអន្តរជាតិ ដើម្បីបណ្តុះបណ្តាលអ្នកដឹកនាំសកលដែលពោរពេញដោយសមត្ថភាព និងគុណធម៌។'
                  : 'To be a premier higher educational institution recognized nationally and internationally for nurturing transformative global leaders equipped with exceptional knowledge and integrity.'}
              </p>
            </div>

            {/* Mission */}
            <div className="academic-card" style={{ padding: '2rem', borderTop: '4px solid var(--color-gold)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'var(--color-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--color-gold-deep)' }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                {language === 'km' ? 'បេសកកម្ម (Mission)' : 'Institutional Mission'}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {language === 'km'
                  ? 'ផ្តល់នូវកម្មវិធីសិក្សាទាន់សម័យ បង្រៀនដោយសាស្ត្រាចារ្យមានបទពិសោធន៍ខ្ពស់ ជំរុញការស្រាវជ្រាវវិទ្យាសាស្ត្រ និងបំពាក់ជំនាញភាសាអន្តរជាតិ ដើម្បីឆ្លើយតបនឹងតម្រូវការទីផ្សារការងារក្នុងតំបន់ និងពិភពលោក។'
                  : 'To provide innovative curricula delivered by renowned academicians, promote scientific research, and empower graduates with multilingual fluency to excel in regional and global markets.'}
              </p>
            </div>

            {/* Goals */}
            <div className="academic-card" style={{ padding: '2rem', borderTop: '4px solid var(--color-navy)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(15, 34, 99, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--color-navy)' }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                {language === 'km' ? 'គោលដៅ (Goals)' : 'Strategic Goals'}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {language === 'km'
                  ? 'សម្រេចបាននូវការទទួលស្គាល់កម្រិតតំបន់ និងសកលលោក ពង្រីកហេដ្ឋារចនាសម្ព័ន្ធស្រាវជ្រាវ និងបង្កើតបណ្តាញសហប្រតិបត្តិការអន្តរជាតិជាមួយសាកលវិទ្យាល័យលំដាប់ពិភពលោក។'
                  : 'To achieve high regional accreditation, expand advanced laboratory and research infrastructure, and forge enduring academic alliances with world-class universities.'}
              </p>
            </div>
          </div>

          {/* 5 Core Values */}
          <div style={{ background: 'var(--bg-surface)', padding: '2.5rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)', boxShadow: 'var(--card-shadow)' }}>
            <h3 style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--text-primary)' }}>
              {language === 'km' ? 'គុណតម្លៃស្នូលទាំង ៥ របស់ប៊ែលធី' : 'The Five Core Values of BELTEI'}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.25rem' }} className="grid-responsive-5">
              {values.map((v, idx) => (
                <div key={idx} style={{ textAlign: 'center', padding: '1rem' }}>
                  <div style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '50%', 
                    background: 'var(--color-primary-light)', 
                    color: 'var(--color-primary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 0.75rem auto',
                    fontWeight: 800,
                    fontSize: '1.1rem'
                  }}>
                    {idx + 1}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {language === 'km' ? v.titleKh : v.titleEn}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    {language === 'km' ? v.descKh : v.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History and Milestones */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="app-container">
          <SectionTitle 
            eyebrow={language === 'km' ? 'ប្រវត្តិ និងសមិទ្ធផល' : 'Milestones'}
            title={language === 'km' ? 'ដំណើរការរីកចម្រើន និងប្រវត្តិសង្ខេប' : 'History & Institutional Milestones'}
            subtitle={language === 'km'
              ? 'ការវិវឌ្ឍពីគ្រឹះស្ថានអប់រំរហូតក្លាយជាសាកលវិទ្យាល័យអន្តរជាតិខ្នាតធំនៅកម្ពុជា។'
              : 'Our evolutionary pathway from an ambitious educational academy into an accredited international university.'}
          />

          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {milestones.map((m, idx) => (
              <div 
                key={idx}
                style={{ 
                  display: 'flex', 
                  gap: '1.75rem', 
                  padding: '1.5rem', 
                  background: 'var(--bg-surface-subtle)', 
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid var(--color-primary)',
                  boxShadow: 'var(--card-shadow)'
                }}
              >
                <div style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 800, 
                  color: 'var(--color-primary)', 
                  minWidth: '70px',
                  lineHeight: 1
                }}>
                  {m.year}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {language === 'km' ? m.titleKh : m.titleEn}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
                    {language === 'km' ? m.descKh : m.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Collaborations and Accreditation */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="app-container">
          <SectionTitle 
            eyebrow={language === 'km' ? 'កិច្ចសហប្រតិបត្តិការ' : 'Global Network'}
            title={language === 'km' ? 'ការទទួលស្គាល់ និងកិច្ចសហប្រតិបត្តិការអន្តរជាតិ' : 'Accreditation & Global Partnerships'}
          />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="grid-2">
            <div className="academic-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <img 
                src="/images/asaihl_logo.png" 
                alt="ASAIHL Association"
                loading="lazy"
                decoding="async"
                style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
              />
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  {language === 'km' ? 'សមាជិកពេញសិទ្ធិនៃ ASAIHL' : 'Full Member of ASAIHL'}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Association of Southeast Asian Institutions of Higher Learning — participating actively in academic symposiums across Southeast Asia.
                </p>
              </div>
            </div>

            <div className="academic-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <img 
                src="/images/researchjournal.png" 
                alt="BIU Research Journal"
                loading="lazy"
                decoding="async"
                style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
              />
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  {language === 'km' ? 'ទិនានុប្បវត្តិស្រាវជ្រាវអន្តរជាតិ BIU' : 'BIU International Research Journal'}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Publishing scholarly peer-reviewed articles, business case studies, and scientific papers by faculty researchers and doctoral scholars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .grid-responsive-5 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 550px) {
          .grid-responsive-5 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
export default About;
