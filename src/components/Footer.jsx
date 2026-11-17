import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Globe, Send, 
  ExternalLink, Award, BookOpen, ShieldCheck 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const Footer = () => {
  const { language, t } = useApp();

  return (
    <footer className="university-footer">
      <div className="footer-top">
        <div className="app-container">
          <div className="footer-grid">
            {/* Column 1: University Identity */}
            <div>
              <Link to="/" style={{ display: 'inline-block' }}>
                <img 
                  src="/logo/beltei_logo.png" 
                  alt="BELTEI International University" 
                  className="footer-brand-logo"
                  style={{ filter: 'brightness(1.1)' }}
                />
              </Link>
              <p className="footer-brand-desc">
                {language === 'km' 
                  ? 'សាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ ផ្តល់នូវការអប់រំកម្រិតឧត្តមសិក្សាប្រកបដោយគុណភាពខ្ពស់ ស្របតាមស្តង់ដារជាតិ និងអន្តរជាតិ ដើម្បីបណ្តុះបណ្តាលធនធានមនុស្សឆ្នើមសម្រាប់ប្រទេសកម្ពុជា និងសកលលោក។'
                  : 'BELTEI International University is committed to delivering world-class higher education, fostering future global leaders through academic excellence, cutting-edge technology, and strong moral values.'}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem', color: 'var(--color-gold)', fontSize: '0.85rem', fontWeight: 600 }}>
                <Award size={18} />
                <span>{language === 'km' ? 'គុណភាព • ប្រសិទ្ធភាព • ឧត្តមភាព • សីលធម៌ • គុណធម៌' : 'Quality • Efficiency • Excellence • Morality • Virtue'}</span>
              </div>

              {/* Social Channels */}
              <div className="footer-social-links">
                <a 
                  href="https://www.facebook.com/belteiuniversity" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-social-btn"
                  title="Official Facebook Page"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={18} />
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCV8pvuK4Wu0l-K1o38h5iag" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-social-btn"
                  title="Official YouTube Channel"
                  aria-label="YouTube"
                >
                  <YoutubeIcon size={18} />
                </a>
                <a 
                  href="https://t.me/beltei_iu" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-social-btn"
                  title="Telegram Channel"
                  aria-label="Telegram"
                >
                  <Send size={18} />
                </a>
                <a 
                  href="https://beltei.edu.kh/biu" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-social-btn"
                  title="Official University Portal"
                  aria-label="Website"
                >
                  <Globe size={18} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Navigation */}
            <div>
              <h4 className="footer-heading">{t('quickLinks')}</h4>
              <ul className="footer-links-list">
                <li><Link to="/" className="footer-link-item">{t('navHome')}</Link></li>
                <li><Link to="/about" className="footer-link-item">{t('navAbout')}</Link></li>
                <li><Link to="/faculties" className="footer-link-item">{t('navFaculties')}</Link></li>
                <li><Link to="/programs" className="footer-link-item">{t('navPrograms')}</Link></li>
                <li><Link to="/admissions" className="footer-link-item">{t('navAdmissions')}</Link></li>
                <li><Link to="/campus-life" className="footer-link-item">{t('navCampusLife')}</Link></li>
                <li><Link to="/news" className="footer-link-item">{t('navNews')}</Link></li>
                <li><Link to="/contact" className="footer-link-item">{t('navContact')}</Link></li>
              </ul>
            </div>

            {/* Column 3: Academic Portals & Affiliations */}
            <div>
              <h4 className="footer-heading">
                {language === 'km' ? 'ធនធានសិក្សា' : 'Academic Portals'}
              </h4>
              <ul className="footer-links-list">
                <li>
                  <a href="https://journal.biuelibrary.com/" target="_blank" rel="noreferrer" className="footer-link-item">
                    <BookOpen size={14} style={{ color: 'var(--color-gold)' }} />
                    {language === 'km' ? 'ទិនានុប្បវត្តិស្រាវជ្រាវ BIU' : 'BIU Research Journal'}
                  </a>
                </li>
                <li>
                  <a href="https://beltei.edu.kh/biu/asaihl" target="_blank" rel="noreferrer" className="footer-link-item">
                    <ShieldCheck size={14} style={{ color: 'var(--color-gold)' }} />
                    {language === 'km' ? 'សមាជិក ASAIHL' : 'ASAIHL Member'}
                  </a>
                </li>
                <li>
                  <a href="https://www.monashcollege.edu.au/about-us/our-international-partners/cambodia/beltei-foundation-year-standard" target="_blank" rel="noreferrer" className="footer-link-item">
                    <ExternalLink size={14} style={{ color: 'var(--color-gold)' }} />
                    {language === 'km' ? 'កម្មវិធី Monash College (អូស្ត្រាលី)' : 'Monash College Pathway'}
                  </a>
                </li>
                <li>
                  <Link to="/faculties" className="footer-link-item">
                    {language === 'km' ? 'មហាវិទ្យាល័យទាំង ១៣' : 'All 13 Faculties Directory'}
                  </Link>
                </li>
                <li>
                  <Link to="/admissions" className="footer-link-item">
                    {language === 'km' ? 'ប្រតិទិនបវេសនកាលថ្មី' : 'Academic Calendar & Intake'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Verified Contacts & Campus Addresses */}
            <div>
              <h4 className="footer-heading">{t('contactInfo')}</h4>
              
              <div className="footer-contact-item">
                <MapPin size={18} className="footer-contact-icon" />
                <div>
                  <strong style={{ color: '#ffffff' }}>Campus 1 (Tuol Sleng):</strong>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: '#94a3b8' }}>
                    #37, Street 360, Sangkat Boeng Keng Kang 3, Khan Boeng Keng Kang, Phnom Penh
                  </p>
                </div>
              </div>

              <div className="footer-contact-item">
                <MapPin size={18} className="footer-contact-icon" />
                <div>
                  <strong style={{ color: '#ffffff' }}>Campus 2 (Chaom Chao):</strong>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: '#94a3b8' }}>
                    Russian Federation Blvd., Sangkat Chaom Chao 3, Khan Por Senchey, Phnom Penh
                  </p>
                </div>
              </div>

              <div className="footer-contact-item">
                <Phone size={18} className="footer-contact-icon" />
                <div>
                  <p style={{ margin: 0, color: '#ffffff', fontWeight: 600 }}>(+855) 23 999 926 / 23 999 967</p>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Admissions & General Enquiries</span>
                </div>
              </div>

              <div className="footer-contact-item">
                <Mail size={18} className="footer-contact-icon" />
                <div>
                  <p style={{ margin: 0, color: '#ffffff' }}>biu.admin@beltei.edu.kh</p>
                  <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.8rem' }}>biu.academic@beltei.edu.kh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="app-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>
              {t('copyright')}
            </p>
            <p style={{ color: '#64748b', fontSize: '0.78rem', margin: '0.25rem 0 0 0' }}>
              {t('accreditedBy')}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.82rem', color: '#94a3b8' }}>
            <Link to="/about" style={{ color: '#94a3b8' }}>About BIU</Link>
            <Link to="/admissions" style={{ color: '#94a3b8' }}>Admissions</Link>
            <Link to="/contact" style={{ color: '#94a3b8' }}>Campus Locations</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
