import React, { useState } from 'react';
import { Stethoscope, CheckCircle2, Calendar, ArrowRight, Clock, Activity, ShieldAlert } from 'lucide-react';
import { SPECIALTIES } from '../data/doctorData';

export default function Specialties({ onOpenAppointment }) {
  const [activeTab, setActiveTab] = useState(SPECIALTIES[0].id);

  const selectedSpecialty = SPECIALTIES.find(s => s.id === activeTab) || SPECIALTIES[0];

  return (
    <section id="specialties" className="section-padding" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            <Stethoscope size={16} /> Clinical & Surgical Expertise
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            Specialized Orthopedic Treatments
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Each specialty combines evidence-based surgical procedures, advanced implant technologies, and dedicated post-operative care protocols.
          </p>
        </div>

        {/* Specialty Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {SPECIALTIES.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                padding: '0.9rem 1.6rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'var(--transition)',
                border: 'none',
                background: activeTab === item.id 
                  ? 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)' 
                  : '#ffffff',
                color: activeTab === item.id ? '#ffffff' : 'var(--primary-navy)',
                boxShadow: activeTab === item.id ? '0 8px 20px rgba(2, 132, 199, 0.3)' : 'var(--shadow-sm)'
              }}
            >
              {item.title.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Selected Specialty Detail Showcase Card */}
        <div className="glass-card" style={{
          background: '#ffffff',
          borderRadius: '24px',
          padding: '3rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }} className="specialty-card-grid">

            {/* Left Image Box with Doctor Context */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                height: '420px'
              }}>
                <img 
                  src={selectedSpecialty.image} 
                  alt={selectedSpecialty.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Inset Doctor Thumbnail */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '20px',
                background: '#ffffff',
                padding: '0.6rem 1rem 0.6rem 0.6rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-light)'
              }}>
                <img 
                  src={selectedSpecialty.doctorPic} 
                  alt="Dr Prashantkumar in procedure" 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary-navy)' }}>
                    Led by Dr Prashantkumar
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-teal)', fontWeight: '600' }}>
                    Specialist Lead
                  </div>
                </div>
              </div>
            </div>

            {/* Right Specialty Details */}
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
                {selectedSpecialty.badge}
              </div>

              <h3 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                {selectedSpecialty.title}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                {selectedSpecialty.fullDesc}
              </p>

              {/* Key Feature Bullet Points */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--primary-navy)', marginBottom: '0.85rem' }}>
                  Procedure Highlights:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }} className="highlights-grid">
                  {selectedSpecialty.highlights.map((point, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--primary-navy)' }}>
                      <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recovery & Conditions Info Boxes */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '2rem'
              }} className="info-boxes-grid">
                <div style={{
                  padding: '1rem',
                  borderRadius: '14px',
                  background: 'rgba(6, 182, 212, 0.08)',
                  border: '1px solid rgba(6, 182, 212, 0.2)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0284c7', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.2rem' }}>
                    <Clock size={16} /> Recovery Protocol:
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--primary-navy)', fontWeight: '600' }}>
                    {selectedSpecialty.recoveryTimeline}
                  </div>
                </div>

                <div style={{
                  padding: '1rem',
                  borderRadius: '14px',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#059669', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.2rem' }}>
                    <Activity size={16} /> Suitable For:
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--primary-navy)' }}>
                    {selectedSpecialty.suitableFor.join(' • ')}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button onClick={onOpenAppointment} className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                <Calendar size={18} /> Schedule Consultation for {selectedSpecialty.title.split('(')[0]}
              </button>

            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .specialty-card-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .highlights-grid, .info-boxes-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
