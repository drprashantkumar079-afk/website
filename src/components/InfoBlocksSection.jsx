import React from 'react';
import { ShieldCheck, Activity, Award, HeartPulse, CheckCircle2, Phone, Calendar, ArrowRight, UserCheck, Stethoscope, Clock, MapPin, Sparkles, Tv, Newspaper, Users } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

export default function InfoBlocksSection({ onOpenAppointment }) {
  return (
    <section id="info-blocks" className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            <Sparkles size={16} /> Evidence-Based Patient Care Framework
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            Why Patients Choose Dr Prashantkumar
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Combining high-precision surgical techniques, muscle-sparing approaches, transparent patient counseling, and comprehensive post-op rehabilitation.
          </p>
        </div>

        {/* 4-Step Patient Care Journey Blocks */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem',
          marginBottom: '5rem'
        }}>
          
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '24px', background: 'var(--bg-light)' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '1.3rem',
              marginBottom: '1.25rem'
            }}>
              01
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '0.6rem' }}>
              Precision Diagnosis & Imaging
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Thorough physical evaluation, weight-bearing X-rays, and MRI scans to pinpoint exact cartilage loss, ligament tears, or nerve impingement.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderRadius: '24px', background: 'var(--bg-light)' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '1.3rem',
              marginBottom: '1.25rem'
            }}>
              02
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '0.6rem' }}>
              Non-Surgical Preservation First
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Prioritizing viscosupplementation, PRP injections for selected patients, targeted nerve root blocks, and core physiotherapy before surgical consideration.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderRadius: '24px', background: 'var(--bg-light)' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '1.3rem',
              marginBottom: '1.25rem'
            }}>
              03
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '0.6rem' }}>
              Muscle-Sparing Surgical Precision
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Sub-vastus TKR cuts and 4mm keyhole arthroscopy preserve quadriceps strength, minimizing blood loss and surgical tissue trauma.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderRadius: '24px', background: 'var(--bg-light)' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '1.3rem',
              marginBottom: '1.25rem'
            }}>
              04
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '0.6rem' }}>
              Early mobilisation when clinically appropriate
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Selected patients may stand and walk with support on Day 1 after assessment. Recovery timing and home milestones vary by procedure, health, rehabilitation, and individual response.
            </p>
          </div>

        </div>

        {/* Clinical Practice Locations & Direct Helpline Banner */}
        <div style={{
          padding: '3rem',
          borderRadius: '28px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
          color: '#ffffff',
          marginBottom: '5rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }} className="facilities-grid">
            
            <div>
              <div style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Practice Locations & Hospital Facilities
              </div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', marginBottom: '1rem' }}>
                Consult Dr Prashantkumar in Bengaluru
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Patients can consult Dr Prashantkumar at his main clinic, <strong>Vega Curre Multispeciality Clinic</strong>, or at affiliated hospital facilities across Bengaluru.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1rem', borderRadius: '14px' }}>
                  <div style={{ fontWeight: '800', color: '#38bdf8' }}>Vega Curre Clinic</div>
                  <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Founder & Director</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1rem', borderRadius: '14px' }}>
                  <div style={{ fontWeight: '800', color: '#34d399' }}>Manipal Hospital</div>
                  <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Visiting Specialist</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1rem', borderRadius: '14px' }}>
                  <div style={{ fontWeight: '800', color: '#fbbf24' }}>Sparsh Hospital</div>
                  <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Joint Replacement</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1rem', borderRadius: '14px' }}>
                  <div style={{ fontWeight: '800', color: '#7dd3fc' }}>HOSMAT Hospital</div>
                  <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Trauma & Orthopedics</div>
                </div>
              </div>
            </div>

            {/* Helpline Box */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(12px)',
              padding: '2.5rem',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'center'
            }}>
              <Phone size={42} color="#06b6d4" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
                OPD Direct Helplines
              </h4>
              <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#38bdf8', marginBottom: '0.2rem' }}>
                +91 63641 23431
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#34d399', marginBottom: '1.25rem' }}>
                +91 63641 23431
              </div>

              <button onClick={onOpenAppointment} className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                <Calendar size={18} /> Schedule OPD Consultation
              </button>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .facilities-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
