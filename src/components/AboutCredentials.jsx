import React from 'react';
import { GraduationCap, Award, Building, FileCheck, Tv, HeartPulse, Sparkles, Youtube, Newspaper, Users } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

export default function AboutCredentials() {
  return (
    <section id="about" className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <div className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
            <GraduationCap size={16} /> Professional Achievements & Academic Standing
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            Credentials & Proven Excellence
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Director of Vega Curre Multispeciality Clinic & Visiting Consultant at Manipal, Sparsh, and HOSMAT Hospitals. Recognized for surgical innovation, academic teaching, and media leadership.
          </p>
        </div>

        {/* Roles & Hospital Affiliations Banner */}
        <div style={{
          padding: '2rem',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
          color: '#ffffff',
          marginBottom: '4rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#38bdf8', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            <Building size={18} /> Leadership Roles & Hospital Appointments
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem'
          }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#38bdf8' }}>Vega Curre Multispeciality Clinic</div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.25rem' }}>Founder & Director (Nov 2024 - Present)</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#34d399' }}>Manipal Hospital, Bengaluru</div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.25rem' }}>Visiting Senior Consultant Specialist</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fbbf24' }}>Sparsh & HOSMAT Hospitals</div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.25rem' }}>Visiting Consultant Joint & Trauma Surgeon</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#7dd3fc' }}>Madhya Kerala Orthopedic Society</div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.25rem' }}>Elected IT Secretary & Academic Lead</div>
            </div>
          </div>
        </div>

        {/* Highlights & Achievements Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>

          {/* DNB Thesis & Research */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px', background: '#ffffff' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              background: 'rgba(2, 132, 199, 0.1)',
              color: '#0284c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <FileCheck size={26} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
              Academic DNB Thesis (2013)
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Accepted thesis on <em>“Functional Outcome of Hemiarthroplasty with Bipolar Prosthesis for Fracture Neck of Femur in the Elderly – Lateral (Hardinge) Approach”</em>, demonstrating commitment to evidence-based research.
            </p>
          </div>

          {/* OASISCON 2018 Paper & Press Coverage */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px', background: '#ffffff' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              background: 'rgba(13, 148, 136, 0.1)',
              color: '#0d9488',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <Newspaper size={26} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
              OASISCON 2018 & Press Recognition
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Presented a scientific case on Crowe Type IV Hip Dysplasia using Uncemented THR with Subtrochanteric Osteotomy. The case received regional newspaper coverage in Kerala.
            </p>
          </div>

          {/* Suvarna News Public Health Speaker */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px', background: '#ffffff' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              background: 'rgba(239, 68, 68, 0.1)',
              color: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <Tv size={26} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
              Asianet Suvarna News Speaker (2026)
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Invited expert speaker on 'Dear Doctor' program on Asianet Suvarna News Kannada, delivering public health talks on nerve health, spine care, and joint safety.
            </p>
          </div>

          {/* Award for Excellence & SH Medical Centre */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px', background: '#ffffff' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              background: 'rgba(245, 158, 11, 0.1)',
              color: '#d97706',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <Award size={26} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
              Lifetime Achievement Award (2026)
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Honored with the prestigious Lifetime Achievement Award for over 15 years of exceptional patient care, surgical excellence, and contributions to the field of Orthopedics in Bengaluru.
            </p>
          </div>

          {/* Sabarimala Mass Casualty & Disaster Service */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px', background: '#ffffff' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              background: 'rgba(16, 185, 129, 0.1)',
              color: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <HeartPulse size={26} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
              Sabarimala Disaster Relief Service
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Recognized for exemplary medical leadership during the Sabarimala Mass Casualty Management, earning official appreciation and press recognition.
            </p>
          </div>

          {/* YouTube & Surgical Education */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px', background: '#ffffff' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              background: 'rgba(239, 68, 68, 0.1)',
              color: '#dc2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <Youtube size={26} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
              Dr Prashantkumar Ortho Care YouTube
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Educates thousands of young orthopedic surgeons and healthcare professionals through surgical lectures and patient care guides on YouTube.
            </p>
          </div>

        </div>

        {/* Community Camps Bar */}
        <div style={{
          padding: '1.75rem 2rem',
          borderRadius: '20px',
          background: 'rgba(6, 182, 212, 0.08)',
          border: '1px solid rgba(6, 182, 212, 0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          flexWrap: 'wrap'
        }}>
          <Users size={32} color="#0284c7" style={{ flexShrink: 0 }} />
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-navy)' }}>
              Dedicated Community Service & Free Health Camps
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              Organized free orthopedic health and joint mobility camps in <strong>Amruthnagar, Kempapura, and Rachenahalli Lake</strong> for local community members.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
