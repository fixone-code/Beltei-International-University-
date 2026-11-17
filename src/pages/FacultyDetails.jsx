import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Info,
  Layers,
  Lightbulb,
  MapPin,
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { useApp } from '../context/AppContext';
import { faculties } from '../data/faculties';
import { programs, degreeLevels } from '../data/programs';

const levelLabels = {
  foundation: { en: 'Foundation', km: 'ថ្នាក់មូលដ្ឋាន' },
  associate: { en: 'Associate degree', km: 'បរិញ្ញាបត្ររង' },
  bachelor: { en: "Bachelor's degree", km: 'បរិញ្ញាបត្រ' },
  master: { en: "Master's degree", km: 'បរិញ្ញាបត្រជាន់ខ្ពស់' },
  doctorate: { en: 'Doctorate', km: 'បណ្ឌិត' },
};

function ProgramLink({ program, faculty, language, children }) {
  return (
    <Link
      className="btn-secondary faculty-program-link"
      to={`/programs?facultyCode=${encodeURIComponent(faculty.code)}#program-${program.id}`}
    >
      <span>{children || (language === 'km' ? 'មើលព័ត៌មានលម្អិត' : 'View Details')}</span>
      <ArrowRight size={16} />
    </Link>
  );
}

function FacultyNotFound({ language }) {
  return (
    <section className="faculty-not-found section-padding">
      <div className="app-container">
        <div className="academic-card faculty-not-found-card">
          <Info size={36} aria-hidden="true" />
          <h1>{language === 'km' ? 'រកមិនឃើញមហាវិទ្យាល័យទេ' : 'Faculty not found'}</h1>
          <p>
            {language === 'km'
              ? 'សូមជ្រើសរើសមហាវិទ្យាល័យពីបញ្ជីមហាវិទ្យាល័យរបស់សាកលវិទ្យាល័យ។'
              : 'The faculty address may be incorrect. Browse the faculty directory to find the faculty you want.'}
          </p>
          <Link to="/faculties" className="btn-primary">
            <Layers size={17} />
            {language === 'km' ? 'ត្រឡប់ទៅមហាវិទ្យាល័យ' : 'Browse Faculties'}
          </Link>
        </div>
      </div>
    </section>
  );
}

export const FacultyDetails = () => {
  const { slug } = useParams();
  const { language, t } = useApp();
  const isKhmer = language === 'km';
  const faculty = faculties.find((item) => item.slug === slug);

  if (!faculty) {
    return <FacultyNotFound language={language} />;
  }

  const facultyPrograms = programs.filter((program) => program.facultyCode === faculty.code);
  const featuredPrograms = facultyPrograms.slice(0, 2);
  const relatedPrograms = facultyPrograms.slice(2);
  const experientialPrograms = facultyPrograms.filter((program) =>
    /\b(hands-on|laboratory|lab|internship|intern|field study|practicum|project|research)\b/i.test(program.descriptionEn)
  );
  const careers = (isKhmer ? faculty.careerOpportunitiesKh : faculty.careerOpportunitiesEn)
    .split(',')
    .map((career) => career.trim())
    .filter(Boolean);

  const catalogUrl = `/programs?facultyCode=${encodeURIComponent(faculty.code)}`;
  const imageDescription = isKhmer ? faculty.nameKh : faculty.nameEn;

  return (
    <div className="fade-in faculty-detail-page" style={{ '--faculty-accent': faculty.color }}>
      <Breadcrumb
        items={[
          { label: t('navFaculties'), to: '/faculties' },
          { label: imageDescription },
        ]}
      />

      <header className="faculty-detail-hero" style={{ '--faculty-accent': faculty.color }}>
        <img
          className="faculty-detail-hero-image"
          src={faculty.bookletImage}
          alt=""
          fetchPriority="high"
          decoding="async"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = '/images/campus1_tuolsleng.png';
          }}
        />
        <div className="faculty-detail-hero-overlay" />
        <div className="app-container faculty-detail-hero-content">
          <span className="faculty-detail-eyebrow">
            <GraduationCap size={17} />
            {faculty.code}
          </span>
          <h1 className={isKhmer ? 'font-khmer' : ''}>
            {isKhmer ? faculty.nameKh : faculty.nameEn}
          </h1>
          {!isKhmer && <p className="faculty-detail-khmer font-khmer">{faculty.nameKh}</p>}
          <p className="faculty-detail-intro">
            {isKhmer ? faculty.descriptionKh : faculty.descriptionEn}
          </p>
          <div className="faculty-detail-actions">
            <a className="btn-gold" href="#faculty-programs">
              <BookOpen size={17} />
              {isKhmer ? 'មើលកម្មវិធីសិក្សា' : 'Explore Programs'}
            </a>
            <Link className="btn-secondary faculty-admission-hero-link" to="/admissions">
              {isKhmer ? 'ព័ត៌មានចូលរៀន' : 'Admission Information'}
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </header>

      <section className="section-padding faculty-detail-section">
        <div className="app-container">
          <div className="faculty-detail-about">
            <div>
              <span className="section-eyebrow">
                <BookOpen size={16} />
                {isKhmer ? 'ស្វែងយល់អំពីមហាវិទ្យាល័យ' : 'About this Faculty'}
              </span>
              <h2>{isKhmer ? 'ចំណេះដឹងសម្រាប់អនាគតរបស់អ្នក' : 'Build knowledge for what comes next'}</h2>
              <p>{isKhmer ? faculty.descriptionKh : faculty.descriptionEn}</p>
            </div>
            <div className="faculty-detail-about-card academic-card">
              <GraduationCap size={28} aria-hidden="true" />
              <span>{isKhmer ? 'លេខសម្គាល់មហាវិទ្យាល័យ' : 'Faculty code'}</span>
              <strong>{faculty.code}</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="faculty-programs" className="section-padding faculty-detail-section faculty-detail-section-muted">
        <div className="app-container">
          <div className="faculty-detail-section-heading">
            <div>
              <span className="section-eyebrow">
                <Layers size={16} />
                {isKhmer ? 'កម្មវិធីសិក្សា' : 'Study Options'}
              </span>
              <h2>{isKhmer ? 'ជំនាញ និងកម្មវិធីដែលមានក្នុងបញ្ជី' : 'Majors and Available Programs'}</h2>
              <p>
                {isKhmer
                  ? 'ព័ត៌មានថ្នាក់ និងរយៈពេលខាងក្រោមយោងតាមកាតាឡុកកម្មវិធីដែលមានក្នុងគេហទំព័រនេះ។'
                  : 'Degree levels and durations below come from the program records currently listed on this website.'}
              </p>
            </div>
            <Link className="btn-secondary" to={catalogUrl}>
              {isKhmer ? 'មើលកម្មវិធីទាំងអស់' : 'View Full Program Catalog'}
              <ArrowRight size={16} />
            </Link>
          </div>

          {featuredPrograms.length > 0 ? (
            <div className="grid-2 faculty-program-grid">
              {featuredPrograms.map((program) => {
                const level = levelLabels[program.level];
                const degreeType = degreeLevels.find((item) => item.id === program.level);
                return (
                  <article className="academic-card faculty-program-card" key={program.id}>
                    <div className="faculty-program-meta">
                      <span className="badge-blue">
                        {isKhmer ? level?.km || degreeType?.labelKh : level?.en || degreeType?.labelEn}
                      </span>
                      {program.durationEn && (
                        <span className="faculty-program-duration">
                          {isKhmer ? program.durationKh : program.durationEn}
                        </span>
                      )}
                    </div>
                    <h3 className={isKhmer ? 'font-khmer' : ''}>
                      {isKhmer ? program.titleKh : program.titleEn}
                    </h3>
                    {isKhmer && <p className="faculty-program-title-en">{program.titleEn}</p>}
                    <p className="faculty-program-description">
                      {isKhmer ? program.descriptionKh : program.descriptionEn}
                    </p>
                    <ProgramLink program={program} faculty={faculty} language={language} />
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="faculty-detail-notice" role="status">
              <Info size={20} />
              <p>
                {isKhmer
                  ? 'កម្មវិធីសិក្សាដែលបានផ្ទៀងផ្ទាត់មិនទាន់មានក្នុងកាតាឡុកគេហទំព័រនេះទេ។ សូមទាក់ទងការិយាល័យចូលរៀនដើម្បីបញ្ជាក់កម្មវិធីដែលមានបច្ចុប្បន្ន។'
                  : 'No program records for this faculty are currently listed in this website’s catalog. Contact Admissions to confirm current offerings; no degree or duration is assumed here.'}
              </p>
            </div>
          )}

          {faculty.majors.length > 0 && (
            <div className="faculty-study-areas">
              <h3>{isKhmer ? 'ផ្នែកសិក្សាក្នុងប្រវត្តិរូបមហាវិទ្យាល័យ' : 'Subject areas in the faculty profile'}</h3>
              <p className="faculty-study-areas-note">
                {isKhmer
                  ? 'ចំណុចទាំងនេះជាប្រធានបទសិក្សា មិនមែនជាការបញ្ជាក់ថាមានសញ្ញាបត្រដាច់ដោយឡែកនោះទេ។ សូមបញ្ជាក់ពីការផ្តល់ជូនបច្ចុប្បន្នជាមួយសាកលវិទ្យាល័យ។'
                  : 'These are subject areas from the faculty profile, not confirmation that each is a separately offered degree. Confirm current availability with the university.'}
              </p>
              <div className="faculty-study-area-list">
                {faculty.majors.map((major) => (
                  <span key={major.nameEn}>
                    <CheckCircle2 size={16} />
                    {isKhmer ? major.nameKh : major.nameEn}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding faculty-detail-section">
        <div className="app-container faculty-detail-two-column">
          <div>
            <span className="section-eyebrow">
              <Lightbulb size={16} />
              {isKhmer ? 'ចំណេះដឹង និងជំនាញ' : 'Knowledge and Skills'}
            </span>
            <h2>{isKhmer ? 'អ្វីដែលនិស្សិតនឹងសិក្សា' : 'What students will learn'}</h2>
            <p className="faculty-detail-section-lead">
              {isKhmer
                ? 'ប្រធានបទខាងក្រោមសង្ខេបពីផ្នែកសិក្សាដែលបានរាយក្នុងប្រវត្តិរូបមហាវិទ្យាល័យ។ មុខវិជ្ជាលម្អិតអាចខុសគ្នាតាមកម្មវិធី។'
                : 'The focus areas below summarize topics listed in this faculty profile. Specific subjects and learning outcomes depend on the selected program.'}
            </p>
            <div className="faculty-learning-list">
              {faculty.majors.map((major) => (
                <article key={major.nameEn}>
                  <CheckCircle2 size={19} />
                  <div>
                    <h3>{isKhmer ? major.nameKh : major.nameEn}</h3>
                    <p>
                      {isKhmer
                        ? `ស្វែងយល់ពីគោលគំនិត និងវិធីសាស្ត្រដែលពាក់ព័ន្ធនឹង ${major.nameKh}។`
                        : `Explore concepts and methods related to ${major.nameEn}.`}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="faculty-experience-card">
            <span className="section-eyebrow">
              <MapPin size={16} />
              {isKhmer ? 'បទពិសោធន៍សិក្សា' : 'Learning Experience'}
            </span>
            <h2>{isKhmer ? 'ស្វែងយល់ពីកម្មវិធីជាក់លាក់' : 'Check the program details'}</h2>
            {experientialPrograms.length > 0 ? (
              <>
                <p>
                  {isKhmer
                    ? 'ការពិពណ៌នាកម្មវិធីខាងក្រោមបានរៀបរាប់ពីបទពិសោធន៍អនុវត្តជាក់ស្តែង៖'
                    : 'The following currently listed program descriptions mention practical or research-based learning:'}
                </p>
                <ul>
                  {experientialPrograms.map((program) => (
                    <li key={program.id}>{isKhmer ? program.descriptionKh : program.descriptionEn}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p>
                {isKhmer
                  ? 'ព័ត៌មានលម្អិតអំពីមន្ទីរពិសោធន៍ កម្មសិក្សា គម្រោង ឬការស្រាវជ្រាវមិនមានក្នុងកំណត់ត្រាកម្មវិធីបច្ចុប្បន្នទេ។ សូមទាក់ទងសាកលវិទ្យាល័យដើម្បីបញ្ជាក់។'
                  : 'The current program records do not specify laboratories, internships, projects, or research experiences for this faculty. Contact the university to confirm available learning activities.'}
              </p>
            )}
          </aside>
        </div>
      </section>

      <section className="section-padding faculty-detail-section faculty-detail-section-muted">
        <div className="app-container">
          <div className="faculty-detail-section-heading">
            <div>
              <span className="section-eyebrow">
                <BriefcaseBusiness size={16} />
                {isKhmer ? 'ផ្លូវអាជីព' : 'Career Paths'}
              </span>
              <h2>{isKhmer ? 'ឱកាសការងារដែលអាចទៅរួច' : 'Potential career opportunities'}</h2>
              <p>
                {isKhmer
                  ? 'ផ្លូវអាជីពខាងក្រោមជាឧទាហរណ៍ដែលអាចទៅរួច មិនមែនជាការធានាការងារទេ។'
                  : 'These are potential career paths, not promises or guarantees of employment.'}
              </p>
            </div>
          </div>
          <div className="grid-3 faculty-career-grid">
            {careers.map((career) => (
              <article className="academic-card faculty-career-card" key={career}>
                <BriefcaseBusiness size={20} />
                <h3>{career}</h3>
                <p>
                  {isKhmer
                    ? 'ផ្លូវអាជីពដែលអាចទៅរួចក្នុងវិស័យនេះ អាស្រ័យលើគុណវុឌ្ឍិ និងឱកាសការងារ។'
                    : 'A potential career path in this field; employment depends on qualifications and opportunities.'}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {facultyPrograms.length > 0 && (
        <section className="section-padding faculty-detail-section">
          <div className="app-container">
            <div className="faculty-detail-section-heading">
              <div>
                <span className="section-eyebrow">
                  <ArrowRight size={16} />
                  {isKhmer ? 'កម្មវិធីពាក់ព័ន្ធ' : 'Related Programs'}
                </span>
                <h2>{isKhmer ? 'កម្មវិធីផ្សេងទៀតក្នុងមហាវិទ្យាល័យនេះ' : 'More programs in this faculty'}</h2>
              </div>
            </div>
            {relatedPrograms.length > 0 ? (
              <div className="faculty-related-programs">
                {relatedPrograms.map((program) => (
                  <article className="faculty-related-program" key={program.id}>
                    <div>
                      <span>{levelLabels[program.level]?.[isKhmer ? 'km' : 'en'] || program.level}</span>
                      <h3>{isKhmer ? program.titleKh : program.titleEn}</h3>
                      <p>{isKhmer ? program.durationKh : program.durationEn}</p>
                    </div>
                    <ProgramLink program={program} faculty={faculty} language={language} />
                  </article>
                ))}
              </div>
            ) : (
              <div className="faculty-detail-notice">
                <Info size={20} />
                <p>
                  {isKhmer
                    ? 'កាតាឡុកបច្ចុប្បន្នមានកម្មវិធីមួយសម្រាប់មហាវិទ្យាល័យនេះ។ សូមពិនិត្យមើលកាតាឡុកម្ដងទៀត ឬទាក់ទងការិយាល័យចូលរៀនសម្រាប់ការធ្វើបច្ចុប្បន្នភាព។'
                    : 'The current catalog lists one program for this faculty. Check the catalog or contact Admissions for updates.'}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="section-padding faculty-admission-section">
        <div className="app-container faculty-admission-content">
          <div>
            <span className="section-eyebrow">
              <GraduationCap size={16} />
              {isKhmer ? 'ការចូលរៀន' : 'Admissions'}
            </span>
            <h2>{isKhmer ? 'ត្រៀមខ្លួនសម្រាប់ជំហានបន្ទាប់' : 'Take the next step'}</h2>
            <p>
              {isKhmer
                ? 'ព័ត៌មានទូទៅ និងជំហាននៃការចុះឈ្មោះមាននៅទំព័រចូលរៀន។ សូមផ្ទៀងផ្ទាត់លក្ខខណ្ឌ និងឯកសារតាមកម្មវិធីជាមួយការិយាល័យសាកលវិទ្យាល័យ។'
                : 'Find general enrollment guidance on the Admissions page. Confirm current program requirements and required documents directly with the university.'}
            </p>
          </div>
          <div className="faculty-admission-actions">
            <Link className="btn-gold" to="/admissions">
              {isKhmer ? 'ទៅកាន់ព័ត៌មានចូលរៀន' : 'Visit Admissions'}
              <ArrowRight size={17} />
            </Link>
            <Link className="btn-secondary" to="/contact">
              {isKhmer ? 'ទាក់ទងសាកលវិទ្យាល័យ' : 'Contact the University'}
            </Link>
            <Link className="faculty-directory-link" to="/faculties">
              {isKhmer ? 'ត្រឡប់ទៅបញ្ជីមហាវិទ្យាល័យ' : 'Back to Faculty Directory'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyDetails;
