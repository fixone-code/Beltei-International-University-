import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send,
  CheckCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { campuses } from '../data/campuses';

export const Contact = () => {
  const { language, t } = useApp();
  const [selectedCampus, setSelectedCampus] = useState(campuses[0]);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!/^[0-9]{8,15}$/.test(formData.phone.replace(/[\s()+.-]/g, ''))) errs.phone = 'Valid phone number is required';
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fade-in">
      <Breadcrumb items={[{ label: t('navContact') }]} />

      {/* Header Banner */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0f2263 0%, #006cb8 100%)', 
        color: '#ffffff', 
        padding: '4rem 0 3rem 0',
        borderBottom: '4px solid var(--color-gold)'
      }}>
        <div className="app-container">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>
            {language === 'km' ? 'ទំនាក់ទំនង' : 'Contact Directory'}
          </span>
          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
            {language === 'km' ? 'ទំនាក់ទំនងសាកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ' : 'Contact BELTEI International University'}
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#e2e8f0', maxWidth: '780px', lineHeight: 1.6 }}>
            {language === 'km'
              ? 'ពួកយើងរីករាយក្នុងការស្វាគមន៍ និងផ្តល់ព័ត៌មានលម្អិតអំពីកម្មវិធីសិក្សា ទីតាំងសាខា និងការចុះឈ្មោះចូលរៀន។'
              : 'Reach our admissions counseling offices, academic bureaus, and campuses located across Phnom Penh, Cambodia.'}
          </p>
        </div>
      </section>

      {/* Campus Selector & Map */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="app-container">
          <SectionTitle 
            eyebrow={language === 'km' ? 'ទីតាំងសាខា' : 'Campuses in Phnom Penh'}
            title={language === 'km' ? 'ស្វែងរកទីតាំងសាខាដែលនៅជិតអ្នក' : 'Select a Campus Location'}
            subtitle={language === 'km'
              ? 'ចុចលើទីតាំងនីមួយៗដើម្បីមើលព័ត៌មានទំនាក់ទំនង និងផែនទីជាក់ស្តែង។'
              : 'Choose a location below to view verified contact details, photography, and interactive map directions.'}
          />

          {/* Campus Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
            {campuses.map((camp) => (
              <button
                key={camp.id}
                onClick={() => setSelectedCampus(camp)}
                style={{
                  padding: '0.65rem 1.5rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: selectedCampus.id === camp.id ? 'var(--color-primary)' : 'var(--bg-surface)',
                  color: selectedCampus.id === camp.id ? '#ffffff' : 'var(--text-secondary)',
                  border: `1px solid ${selectedCampus.id === camp.id ? 'var(--color-primary)' : 'var(--border-subtle)'}`,
                  boxShadow: 'var(--card-shadow)'
                }}
              >
                {language === 'km' ? camp.nameKh : camp.nameEn}
              </button>
            ))}
          </div>

          {/* Selected Campus Detail Card & Map */}
          <div className="academic-card" style={{ overflow: 'hidden', marginBottom: '4rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.3fr' }} className="grid-2">
              {/* Campus Info & Image */}
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                <span className="badge-blue" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>
                  {language === 'km' ? selectedCampus.nameKh : selectedCampus.nameEn}
                </span>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  {language === 'km' ? selectedCampus.nameKh : selectedCampus.nameEn}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {language === 'km' ? selectedCampus.descriptionKh : selectedCampus.descriptionEn}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <MapPin size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {language === 'km' ? selectedCampus.addressKh : selectedCampus.addressEn}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Phone size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      {selectedCampus.phone}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mail size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {selectedCampus.email}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Clock size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Monday – Sunday: 07:00 AM – 08:30 PM
                    </span>
                  </div>
                </div>

                <div style={{ borderRadius: '8px', overflow: 'hidden', height: '180px', marginTop: 'auto' }}>
                  <img 
                    src={selectedCampus.image} 
                    alt={selectedCampus.nameEn}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Map Embed or Fallback */}
              <div style={{ background: '#e2e8f0', minHeight: '350px', position: 'relative' }}>
                {selectedCampus.mapEmbedUrl ? (
                  <iframe
                    title={selectedCampus.nameEn}
                    src={selectedCampus.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
                    <MapPin size={48} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      {selectedCampus.nameEn}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '300px' }}>
                      {selectedCampus.addressEn}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div className="academic-card" style={{ padding: '2.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>
                  {language === 'km' ? 'ទម្រង់ផ្ញើសារ' : 'Send An Inquiry'}
                </span>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {language === 'km' ? 'ផ្ញើសារមកកាន់យើងខ្ញុំ' : 'Send a Direct Message'}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {language === 'km' 
                    ? 'ទម្រង់នេះសម្រាប់សាកល្បងប៉ុណ្ណោះ ហើយមិនបញ្ជូនសារទៅកាន់សាកលវិទ្យាល័យទេ។ សូមប្រើលេខទូរស័ព្ទ ឬអ៊ីមែលផ្លូវការខាងលើ។'
                    : 'This form is a demo only and does not send messages to the university. Please use the official phone number or email listed above.'}
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
                    <CheckCircle size={32} />
                  </div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {language === 'km' ? 'ការសាកល្បងបានបញ្ចប់ — មិនបានផ្ញើសារទេ' : 'Demo complete — no message was sent'}
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                    {language === 'km'
                      ? `សូមអរគុណ ${formData.name}។ ទិន្នន័យនេះមិនត្រូវបានរក្សាទុក ឬបញ្ជូនទៅសាកលវិទ្យាល័យទេ។`
                      : `Thank you, ${formData.name}. This demonstration did not store or send your message.`}
                  </p>
                  <a className="btn-secondary" href="mailto:biu.admin@beltei.edu.kh">
                    <Mail size={16} />
                    Contact BIU by email
                  </a>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        {t('fullName')} *
                      </label>
                      <input 
                        id="contact-name"
                        type="text"
                        required
                        autoComplete="name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Full Name"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '6px',
                          border: `1px solid ${errors.name ? 'var(--color-red)' : 'var(--border-medium)'}`,
                          background: 'var(--bg-surface-subtle)',
                          color: 'var(--text-primary)'
                        }}
                      />
                      {errors.name && <span id="contact-name-error" role="alert" style={{ color: 'var(--color-red)', fontSize: '0.75rem', marginTop: '3px', display: 'block' }}>{errors.name}</span>}
                    </div>

                    <div>
                      <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        {t('emailAddress')} *
                      </label>
                      <input 
                        id="contact-email"
                        type="email"
                        required
                        autoComplete="email"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '6px',
                          border: `1px solid ${errors.email ? 'var(--color-red)' : 'var(--border-medium)'}`,
                          background: 'var(--bg-surface-subtle)',
                          color: 'var(--text-primary)'
                        }}
                      />
                      {errors.email && <span id="contact-email-error" role="alert" style={{ color: 'var(--color-red)', fontSize: '0.75rem', marginTop: '3px', display: 'block' }}>{errors.email}</span>}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        {t('phoneNumber')} *
                      </label>
                      <input 
                        id="contact-phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="012 345 678"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '6px',
                          border: `1px solid ${errors.phone ? 'var(--color-red)' : 'var(--border-medium)'}`,
                          background: 'var(--bg-surface-subtle)',
                          color: 'var(--text-primary)'
                        }}
                      />
                      {errors.phone && <span id="contact-phone-error" role="alert" style={{ color: 'var(--color-red)', fontSize: '0.75rem', marginTop: '3px', display: 'block' }}>{errors.phone}</span>}
                    </div>

                    <div>
                      <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        Subject
                      </label>
                      <input 
                        id="contact-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Tuition fee inquiry, Transfer request..."
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '6px',
                          border: '1px solid var(--border-medium)',
                          background: 'var(--bg-surface-subtle)',
                          color: 'var(--text-primary)'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      Message *
                    </label>
                    <textarea 
                      id="contact-message"
                      rows={4}
                      required
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '6px',
                        border: `1px solid ${errors.message ? 'var(--color-red)' : 'var(--border-medium)'}`,
                        background: 'var(--bg-surface-subtle)',
                        color: 'var(--text-primary)',
                        resize: 'vertical'
                      }}
                    />
                    {errors.message && <span id="contact-message-error" role="alert" style={{ color: 'var(--color-red)', fontSize: '0.75rem', marginTop: '3px', display: 'block' }}>{errors.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary" 
                    style={{ width: '100%', padding: '0.85rem', fontSize: '1rem' }}
                  >
                    <Send size={18} />
                    <span>{t('submitContact')}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
