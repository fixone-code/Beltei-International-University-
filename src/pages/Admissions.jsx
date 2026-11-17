import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  CheckCircle, FileText, Phone, Send, ChevronDown, ChevronUp, Check 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { programs } from '../data/programs';

export const Admissions = () => {
  const { language, t } = useApp();
  const [searchParams] = useSearchParams();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: searchParams.get('program') || '',
    campus: 'Campus 1 (Tuol Sleng)',
    shift: 'Morning (07:30 - 10:45 AM)',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  const steps = [
    {
      num: "01",
      titleEn: "Submit Online Inquiry / Application",
      titleKh: "បំពេញពាក្យស្នើសុំចូលរៀន",
      descEn: "Select your desired major, study shift, and preferred campus location online or in-person.",
      descKh: "ជ្រើសរើសមហាវិទ្យាល័យ មុខជំនាញ វេនសិក្សា និងទីតាំងសាខាដែលអ្នកពេញចិត្ត។"
    },
    {
      num: "02",
      titleEn: "Document Verification",
      titleKh: "ផ្ទៀងផ្ទាត់ឯកសារចុះឈ្មោះ",
      descEn: "Present your Upper Secondary School Certificate (Bac II) or recognized equivalent at the Admissions counter.",
      descKh: "ភ្ជាប់មកជាមួយនូវសញ្ញាបត្របាក់ឌុប ឬលិខិតបញ្ជាក់ការសិក្សាសមមូល និងអត្តសញ្ញាណប័ណ្ណ។"
    },
    {
      num: "03",
      titleEn: "Placement & English Assessment",
      titleKh: "ការធ្វើតេស្តវាស់កម្រិតភាសាអង់គ្លេស",
      descEn: "Undertake a complimentary diagnostic test to determine appropriate foundation language leveling.",
      descKh: "ធ្វើតេស្តវាស់ស្ទង់សមត្ថភាពភាសាអង់គ្លេស និងកុំព្យូទ័រ ដើម្បីតម្រង់ទិសចូលរៀន។"
    },
    {
      num: "04",
      titleEn: "Enrollment & Student ID Card",
      titleKh: "ការចុះឈ្មោះជាផ្លូវការ និងទទួលកាតនិស្សិត",
      descEn: "Complete semester enrollment formalities, receive your official BIU student ID, and attend campus orientation.",
      descKh: "បង់ថ្លៃសិក្សា ទទួលកាតសម្គាល់ខ្លួននិស្សិតផ្លូវការ និងចូលរួមកម្មវិធីតម្រង់ទិស។"
    }
  ];

  const requiredDocuments = [
    { textEn: "Original High School Diploma (Bac II) or Temporary Certificate", textKh: "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប) ឬលិខិតបញ្ជាក់បណ្តោះអាសន្ន" },
    { textEn: "High School Academic Transcripts", textKh: "ព្រឹត្តិបត្រពិន្ទុថ្នាក់ទី ១២" },
    { textEn: "Copy of National Identification Card or Birth Certificate", textKh: "ច្បាប់ចម្លងអត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ ឬសំបុត្រកំណើត" },
    { textEn: "4 Recent Passport-Sized Photographs (4x6 cm, white background)", textKh: "រូបថត ៤x៦ ផ្ទៃខាងក្រោយពណ៌ស ចំនួន ៤ សន្លឹក" },
    { textEn: "Transfer Certificate (if transferring from another university)", textKh: "លិខិតផ្ទេរការសិក្សា (សម្រាប់និស្សិតផ្ទេរពីសាកលវិទ្យាល័យផ្សេង)" }
  ];

  const faqs = [
    {
      qEn: "Are degrees from BELTEI International University recognized officially?",
      qKh: "តើសញ្ញាបត្រពីសាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ ត្រូវបានទទួលស្គាល់ជាផ្លូវការដែរឬទេ?",
      aEn: "Yes. BELTEI International University is fully accredited by the Royal Government of Cambodia, the Ministry of Education, Youth and Sport (MoEYS), and the Accreditation Committee of Cambodia (ACC). Furthermore, BIU is a full member of ASAIHL.",
      aKh: "បាទ/ចាស! សាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ ត្រូវបានទទួលស្គាល់ពេញលេញដោយរាជរដ្ឋាភិបាលកម្ពុជា ក្រសួងអប់រំ យុវជន និងកីឡា និងគណៈកម្មាធិការទទួលស្គាល់គុណភាពអប់រំនៃកម្ពុជា (ACC) ព្រមទាំងជាសមាជិកពេញសិទ្ធិនៃ ASAIHL។"
    },
    {
      qEn: "Can I transfer credits to international universities overseas?",
      qKh: "តើខ្ញុំអាចផ្ទេរក្រេឌីតទៅសិក្សានៅសាកលវិទ្យាល័យក្រៅប្រទេសបានដែរឬទេ?",
      aEn: "Yes. BIU offers international dual pathways, notably through partnerships like Monash College (Australia) and partner universities in the UK, USA, China, and ASEAN.",
      aKh: "បាន! សាកលវិទ្យាល័យមានកិច្ចសហការផ្ទេរការសិក្សាអន្តរជាតិ ជាពិសេសតាមរយៈកម្មវិធី Monash College (អូស្ត្រាលី) និងសាកលវិទ្យាល័យដៃគូនានាក្នុងប្រទេសចក្រភពអង់គ្លេស ចិន និងអាស៊ាន។"
    },
    {
      qEn: "What study shifts are available for working professionals?",
      qKh: "តើមានវេនសិក្សាអ្វីខ្លះសម្រាប់អ្នកដែលកំពុងបំពេញការងារ?",
      aEn: "BIU provides flexible Evening Shifts (05:30 - 08:30 PM, Monday through Friday) and Weekend Shifts (Saturday and Sunday) specifically designed for employed adults.",
      aKh: "សាកលវិទ្យាល័យមានវេនយប់ (០៥:៣០ - ០៨:៣០ យប់ ច័ន្ទដល់សុក្រ) និងវេនថ្ងៃចុងសប្តាហ៍ (សៅរ៍ និងអាទិត្យ) យ៉ាងងាយស្រួលសម្រាប់បុគ្គលិកបម្រើការងារ។"
    },
    {
      qEn: "How do I apply for academic scholarship discounts?",
      qKh: "តើខ្ញុំអាចស្នើសុំអាហារូបករណ៍ ឬការបញ្ចុះតម្លៃសិក្សាដោយរបៀបណា?",
      aEn: "Merit-based scholarships are awarded to students holding Grade A, B, and C on their Bac II examination. Institutional promotional discounts are also available for early registrants during official intake periods.",
      aKh: "សាកលវិទ្យាល័យមានការលើកទឹកចិត្តអាហារូបករណ៍សម្រាប់សិស្សនិទ្ទេស A, B និង C នៃការប្រឡងបាក់ឌុប ព្រមទាំងការបញ្ចុះតម្លៃពិសេសសម្រាប់អ្នកចុះឈ្មោះក្នុងឱកាសបវេសនកាលថ្មី។"
    }
  ];

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errors.phone = 'Valid phone number is required';
    if (!formData.program) errors.program = 'Please select a program of interest';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 700);
    }
  };

  return (
    <div className="fade-in">
      <Breadcrumb items={[{ label: t('navAdmissions') }]} />

      {/* Header Banner */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0f2263 0%, #006cb8 100%)', 
        color: '#ffffff', 
        padding: '4rem 0 3rem 0',
        borderBottom: '4px solid var(--color-gold)'
      }}>
        <div className="app-container">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>
            {language === 'km' ? 'ការចុះឈ្មោះចូលរៀន' : 'Enrollment & Admissions'}
          </span>
          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
            {language === 'km' ? 'ព័ត៌មាន និងការចុះឈ្មោះចូលរៀន' : 'Admissions & Enrollment Guide'}
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#e2e8f0', maxWidth: '780px', lineHeight: 1.6 }}>
            {language === 'km'
              ? 'សូមស្វាគមន៍មកកាន់សាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ! ស្វែងយល់ពីជំហាននៃការដាក់ពាក្យ ឯកសារតម្រូវ និងបំពេញទម្រង់ចុះឈ្មោះចូលរៀនសាកល្បងខាងក្រោម។'
              : 'Join a premier academic community in Phnom Penh. Discover our transparent 4-step admission process, document criteria, and submit an online inquiry.'}
          </p>
        </div>
      </section>

      {/* 4-Step Application Flow */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="app-container">
          <SectionTitle 
            eyebrow={language === 'km' ? 'ដំណាក់កាលចុះឈ្មោះ' : 'Application Process'}
            title={language === 'km' ? 'ជំហានងាយៗទាំង ៤ ក្នុងការចុះឈ្មោះ' : '4 Easy Steps to Becoming a BIU Student'}
            subtitle={language === 'km'
              ? 'ដំណើរការចុះឈ្មោះរហ័ស ទាន់ចិត្ត និងមានការណែនាំពីបុគ្គលិកប្រឹក្សាយោបល់ជំនាញ។'
              : 'Our straightforward enrollment procedure ensures you transition smoothly into university life.'}
          />

          <div className="grid-4" style={{ marginBottom: '4rem' }}>
            {steps.map((s, idx) => (
              <div 
                key={idx}
                className="academic-card"
                style={{ 
                  padding: '2rem 1.5rem', 
                  position: 'relative',
                  borderTop: '4px solid var(--color-gold)'
                }}
              >
                <div style={{ 
                  fontSize: '2.25rem', 
                  fontWeight: 800, 
                  color: 'var(--color-primary)', 
                  opacity: 0.8,
                  marginBottom: '0.5rem',
                  lineHeight: 1
                }}>
                  {s.num}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {language === 'km' ? s.titleKh : s.titleEn}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {language === 'km' ? s.descKh : s.descEn}
                </p>
              </div>
            ))}
          </div>

          {/* Two-Column: Requirements & Interactive Application Form */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: '3rem', alignItems: 'flex-start' }} className="grid-2">
            {/* Left: Required Documents & Contacts */}
            <div>
              <div className="academic-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={22} style={{ color: 'var(--color-primary)' }} />
                  {language === 'km' ? 'ឯកសារចាំបាច់សម្រាប់ចុះឈ្មោះ' : 'Required Documents Checklist'}
                </h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {requiredDocuments.map((doc, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle size={18} style={{ color: 'var(--color-green)', flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {language === 'km' ? doc.textKh : doc.textEn}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Admissions Contact Card */}
              <div className="academic-card" style={{ padding: '2rem', background: 'var(--color-primary-light)', borderColor: 'rgba(0, 108, 184, 0.3)' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={18} style={{ color: 'var(--color-primary)' }} />
                  {language === 'km' ? 'ត្រូវការជំនួយក្នុងការចុះឈ្មោះ?' : 'Need Admission Assistance?'}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  {language === 'km'
                    ? 'សូមទំនាក់ទំនងមកកាន់ការិយាល័យចុះឈ្មោះ និងបុគ្គលិកសិក្សារបស់យើងតាមរយៈលេខទូរស័ព្ទខាងក្រោម៖'
                    : 'Our dedicated academic counselors are ready to help you navigate program options and enrollment fees.'}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <strong style={{ color: 'var(--color-primary)' }}>Hotline: (+855) 23 999 926 / 23 999 967</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>Email: biu.admin@beltei.edu.kh</span>
                  <span style={{ color: 'var(--text-secondary)' }}>Campus 1: #37 Street 360, BKK3, Phnom Penh</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Application Form (Frontend Demonstration) */}
            <div className="academic-card" style={{ padding: '2.5rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>
                  {language === 'km' ? 'ទម្រង់ដាក់ពាក្យអនឡាញ' : 'Online Application Form'}
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0.25rem 0' }}>
                  {language === 'km' ? 'ដាក់ពាក្យស្នើសុំចូលរៀនសាកល្បង' : 'Apply for Academic Admission'}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {language === 'km'
                    ? 'ចំណាំ៖ នេះជាទម្រង់បង្ហាញសាកល្បង (Frontend Demo) មិនបញ្ជូនទិន្នន័យពិតប្រាកដទៅកាន់ម៉ាស៊ីនមេឡើយ។'
                    : 'Notice: This form serves as a frontend demonstration and does not submit an actual university application.'}
                </p>
              </div>

              {isSubmitted ? (
                <div style={{ 
                  background: 'var(--bg-surface-subtle)', 
                  border: '2px solid var(--color-green)', 
                  borderRadius: '0.75rem', 
                  padding: '2.5rem 1.5rem', 
                  textAlign: 'center' 
                }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                    <Check size={32} />
                  </div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {language === 'km' ? 'ការដាក់ពាក្យសាកល្បងជោគជ័យ!' : 'Demonstration Application Received!'}
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                    {language === 'km'
                      ? `សូមអរគុណ ${formData.fullName} ព័ត៌មានរបស់អ្នកត្រូវបានផ្ទៀងផ្ទាត់ដោយជោគជ័យក្នុងកម្មវិធីគំរូនេះ។`
                      : `Thank you, ${formData.fullName}. Your demonstration submission has been simulated successfully.`}
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        program: '',
                        campus: 'Campus 1 (Tuol Sleng)',
                        shift: 'Morning (07:30 - 10:45 AM)',
                        message: ''
                      });
                    }}
                    className="btn-primary"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Full Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      {t('fullName')} *
                    </label>
                    <input 
                      type="text" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sok Vannak / John Smith"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '6px',
                        border: `1px solid ${formErrors.fullName ? 'var(--color-red)' : 'var(--border-medium)'}`,
                        background: 'var(--bg-surface-subtle)',
                        color: 'var(--text-primary)'
                      }}
                    />
                    {formErrors.fullName && <span style={{ color: 'var(--color-red)', fontSize: '0.75rem', marginTop: '3px', display: 'block' }}>{formErrors.fullName}</span>}
                  </div>

                  {/* Email & Phone Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        {t('emailAddress')} *
                      </label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="student@example.com"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '6px',
                          border: `1px solid ${formErrors.email ? 'var(--color-red)' : 'var(--border-medium)'}`,
                          background: 'var(--bg-surface-subtle)',
                          color: 'var(--text-primary)'
                        }}
                      />
                      {formErrors.email && <span style={{ color: 'var(--color-red)', fontSize: '0.75rem', marginTop: '3px', display: 'block' }}>{formErrors.email}</span>}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        {t('phoneNumber')} *
                      </label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="012 345 678"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '6px',
                          border: `1px solid ${formErrors.phone ? 'var(--color-red)' : 'var(--border-medium)'}`,
                          background: 'var(--bg-surface-subtle)',
                          color: 'var(--text-primary)'
                        }}
                      />
                      {formErrors.phone && <span style={{ color: 'var(--color-red)', fontSize: '0.75rem', marginTop: '3px', display: 'block' }}>{formErrors.phone}</span>}
                    </div>
                  </div>

                  {/* Program of Interest Selection */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      {t('selectProgram')} *
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '6px',
                        border: `1px solid ${formErrors.program ? 'var(--color-red)' : 'var(--border-medium)'}`,
                        background: 'var(--bg-surface-subtle)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <option value="">-- Choose Academic Program --</option>
                      {programs.map((p) => (
                        <option key={p.id} value={p.titleEn}>
                          [{p.level.toUpperCase()}] {p.titleEn}
                        </option>
                      ))}
                    </select>
                    {formErrors.program && <span style={{ color: 'var(--color-red)', fontSize: '0.75rem', marginTop: '3px', display: 'block' }}>{formErrors.program}</span>}
                  </div>

                  {/* Campus & Shift Selection */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        {t('selectCampus')}
                      </label>
                      <select
                        value={formData.campus}
                        onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '6px',
                          border: '1px solid var(--border-medium)',
                          background: 'var(--bg-surface-subtle)',
                          color: 'var(--text-primary)'
                        }}
                      >
                        <option value="Campus 1 (Tuol Sleng)">Campus 1 (Tuol Sleng)</option>
                        <option value="Campus 2 (Chaom Chao)">Campus 2 (Chaom Chao)</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        {t('preferredShift')}
                      </label>
                      <select
                        value={formData.shift}
                        onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '6px',
                          border: '1px solid var(--border-medium)',
                          background: 'var(--bg-surface-subtle)',
                          color: 'var(--text-primary)'
                        }}
                      >
                        <option value="Morning (07:30 - 10:45 AM)">Morning (07:30 - 10:45 AM)</option>
                        <option value="Afternoon (01:30 - 04:45 PM)">Afternoon (01:30 - 04:45 PM)</option>
                        <option value="Evening (05:30 - 08:30 PM)">Evening (05:30 - 08:30 PM)</option>
                        <option value="Weekend (Sat & Sun)">Weekend (Sat & Sun)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      {t('message')}
                    </label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any specific questions regarding scholarships, transfers or schedules..."
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '6px',
                        border: '1px solid var(--border-medium)',
                        background: 'var(--bg-surface-subtle)',
                        color: 'var(--text-primary)',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-gold" 
                    style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', marginTop: '0.5rem' }}
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? t('sending') : t('submitApplication')}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (Accordion) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="app-container" style={{ maxWidth: '820px' }}>
          <SectionTitle 
            eyebrow={language === 'km' ? 'សំណួរដែលសួរញឹកញាប់' : 'Got Questions?'}
            title={language === 'km' ? 'សំណួរ និងចម្លើយស្តីពីការចុះឈ្មោះ' : 'Frequently Asked Questions (Admissions)'}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="academic-card"
                  style={{ overflow: 'hidden' }}
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      background: 'transparent',
                      color: 'var(--text-primary)',
                      fontWeight: 700,
                      fontSize: '1rem'
                    }}
                  >
                    <span>{language === 'km' ? faq.qKh : faq.qEn}</span>
                    {isOpen ? <ChevronUp size={20} style={{ color: 'var(--color-primary)' }} /> : <ChevronDown size={20} style={{ color: 'var(--text-muted)' }} />}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65, borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                      {language === 'km' ? faq.aKh : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Admissions;
