import React, { useState } from 'react';
import { CLINICAL_PAGES_DATA, DOCTOR_INFO } from '../data/doctorData';
import { Stethoscope, CheckCircle2, ShieldCheck, Calendar, ArrowRight, Activity, Clock, ChevronRight } from 'lucide-react';

export default function ClinicalPagesExplore({ onOpenAppointment }) {
  const [activePageKey, setActivePageKey] = useState('jointreplacement');

  const currentPage = CLINICAL_PAGES_DATA[activePageKey];

  return (
    <section id="clinical-explorer" className="section-padding" style={{ background: '#f8fafc' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
            <Stethoscope size={16} /> Clinical Services & Multi-Specialty Department Hub
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            Detailed Specialty Pages
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Explore full clinical guides matching Dr Prashantkumar's hospital practices at Vega Curre Clinic, Manipal, Sparsh, and HOSMAT Hospitals.
          </p>
        </div>

        {/* Page Switcher Navigation Strip */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {Object.keys(CLINICAL_PAGES_DATA).map(key => {
            const page = CLINICAL_PAGES_DATA[key];
            const isActive = activePageKey === key;
            const route =
              key === 'orthocare' ? '/orthocare'
              : key === 'jointreplacement' ? '/joint-replacement'
              : key === 'arthroscopy' ? '/arthroscopy'
              : key === 'traumacare' ? '/trauma-care'
              : '/spine-care';

            return (
              <button
                key={key}
                onClick={() => setActivePageKey(key)}
                style={{
                  padding: '0.85rem 1.4rem',
                  borderRadius: '16px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'var(--transition)',
                  background: isActive ? 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)' : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--primary-navy)',
                  boxShadow: isActive ? '0 8px 20px rgba(2, 132, 199, 0.3)' : 'var(--shadow-sm)'
                }}
                data-route={route}
              >
                {page.title.split('(')[0]}
              </button>
            );
          })}
        </div>

        {/* Active Page Card Showcase */}
        <div className="glass-card" style={{
          background: '#ffffff',
          borderRadius: '28px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {/* Header Hero Banner */}
          <div style={{
            position: 'relative',
            height: '320px',
            background: '#0f172a',
            overflow: 'hidden'
          }}>
            <img 
              src={currentPage.heroImage} 
              alt={currentPage.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.65
              }} 
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.3) 100%)',
              padding: '3rem 3rem 2rem 3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              color: '#ffffff'
            }}>
              <span className="badge badge-cyan" style={{ width: 'max-content', marginBottom: '0.75rem', background: 'rgba(255, 255, 255, 0.95)' }}>
                {currentPage.tagline}
              </span>
              <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
                {currentPage.title}
              </h1>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', maxWidth: '750px' }}>
                Under the lead direction of <strong>{DOCTOR_INFO.name}</strong> • Vega Curre Clinic & Visiting Consultant
              </p>
            </div>
          </div>

          {/* Deep Content Body */}
          <div style={{ padding: '3rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '3.5rem'
            }} className="clinical-grid">
              
              {/* Left Column Overview & Procedures */}
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                  Clinical Overview & Approach
                </h3>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {currentPage.overview}
                </p>

                {/* Surgical / Non-Surgical Techniques Box */}
                <div style={{
                  padding: '1.75rem',
                  background: 'rgba(6, 182, 212, 0.06)',
                  borderRadius: '20px',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                  marginBottom: '2rem'
                }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ShieldCheck size={20} color="#0284c7" /> Advanced Protocols & Surgical Precision:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {(currentPage.surgicalTechniques || currentPage.nonSurgicalOptions || currentPage.nonSurgicalTechniques || []).map((tech, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.98rem', color: 'var(--primary-navy)', fontWeight: '600' }}>
                        <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <button onClick={onOpenAppointment} className="btn btn-primary" style={{ padding: '0.9rem 1.8rem', fontSize: '1rem' }}>
                    <Calendar size={18} /> Schedule Consultation
                  </button>
                  <a
                    href={
                      activePageKey === 'orthocare' ? '/orthocare'
                      : activePageKey === 'jointreplacement' ? '/joint-replacement'
                      : activePageKey === 'arthroscopy' ? '/arthroscopy'
                      : activePageKey === 'traumacare' ? '/trauma-care'
                      : '/spine-care'
                    }
                    className="btn btn-secondary"
                    style={{ padding: '0.9rem 1.4rem', fontSize: '1rem' }}
                  >
                    Open full service page <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Right Column Conditions & OPD Helpline */}
              <div>
                <div style={{
                  padding: '2rem',
                  background: 'var(--bg-light)',
                  borderRadius: '24px',
                  border: '1px solid var(--border-light)',
                  marginBottom: '2rem'
                }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Activity size={20} color="#0d9488" /> Primary Conditions Treated:
                  </h4>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {currentPage.conditions.map((cond, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--primary-navy)', fontWeight: '600' }}>
                        <ChevronRight size={16} color="#0284c7" />
                        <span>{cond}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Hospital & Helpline Card */}
                <div style={{
                  padding: '1.75rem',
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
                  color: '#ffffff',
                  borderRadius: '24px'
                }}>
                  <div style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Direct OPD Appointment Lines
                  </div>
                  <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.75rem' }}>
                    +91 63641 23431
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', marginBottom: '1.25rem' }}>
                    Consult Dr Prashantkumar at Vega Curre Clinic or leading visiting hospital centers (Manipal, Sparsh, HOSMAT).
                  </p>
                  <a
                    href={`https://wa.me/${DOCTOR_INFO.contacts.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello Dr Prashantkumar, I would like to book an OPD consultation for ${currentPage.title}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: '100%', padding: '0.8rem', textDecoration: 'none' }}
                  >
                    WhatsApp OPD Booking
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .clinical-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
