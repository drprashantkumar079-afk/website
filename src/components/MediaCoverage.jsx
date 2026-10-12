import React, { useState } from 'react';
import { Tv, Newspaper, ExternalLink, Mic, Award, Play, ListVideo } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

const mediaCoverage = [
  {
    logo: '📺',
    network: 'Asianet Suvarna News Kannada',
    program: '"Dear Doctor" Public Health Broadcast',
    headline: 'Burning, Tingling, Numbness & Neuropathic Pain Talk',
    description: 'Dr Prashantkumar was invited as a featured orthopedic expert on Asianet Suvarna News "Dear Doctor" program, educating thousands of viewers across Karnataka on neuropathic pain, sciatica, burning sensations, numbness, and non-surgical nerve and spine care.',
    date: 'Asianet Suvarna News',
    type: 'Television Broadcast',
    color: '#dc2626',
    bg: 'rgba(220,38,38,0.08)',
    icon: Tv,
    image: '/Images/kannada-prabha.jpg',
    videoId: 'Wp0qqyQVQxE',
    videoUrl: 'https://www.youtube.com/watch?v=Wp0qqyQVQxE',
    playlistUrl: 'https://youtube.com/playlist?list=PLaHlnUPOMw0Q&si=KVQUmrjfdYuCZlQl'
  },
  {
    logo: '📰',
    network: 'Kerala Regional Newspapers',
    program: 'OASISCON 2018 Surgical Coverage',
    headline: 'OASISCON hip reconstruction case receives regional coverage',
    description: 'A case involving Crowe Type IV Hip Dysplasia and Subtrochanteric Osteotomy was presented at OASISCON 2018 and received regional newspaper coverage, reflecting the complexity of the reconstruction.',
    date: 'OASISCON 2018',
    type: 'Print Media',
    color: '#0284c7',
    bg: 'rgba(2,132,199,0.08)',
    icon: Newspaper,
    image: '/Images/dr-prashant-kumar-profile.jpg',
    link: '#about'
  },
  {
    logo: '🏅',
    network: 'SH Medical Centre, Kottayam',
    program: 'Senior Consultant & Faculty Service',
    headline: 'Eight years of senior consultant and faculty service',
    description: 'Dr Prashantkumar served as Senior Consultant and Faculty at SH Medical Centre, Kottayam from 2015 to 2023. The role combined clinical care with teaching and professional development.',
    date: '2015 – 2023',
    type: 'Award & Recognition',
    color: '#0f766e',
    bg: 'rgba(15,118,110,0.08)',
    icon: Award,
    image: '/Images/conference.jpg',
    link: '#about'
  },
  {
    logo: '🎙️',
    network: 'Madhya Kerala Orthopaedic Society',
    program: '"The Shoulder Key Basics" Conference',
    headline: 'Organizing Chairman for Advanced Arthroscopy Teaching Conference',
    description: 'Dr Prashantkumar organized "The Shoulder Key Basics" — an advanced scientific conference for young arthroscopy surgeons on 10th July 2022 in Kottayam, demonstrating leadership in orthopedic academia.',
    date: '10 July 2022',
    type: 'Academic Conference',
    color: '#0369a1',
    bg: 'rgba(3,105,161,0.08)',
    icon: Mic,
    image: '/Images/arthroscopy-care.jpg',
    link: '#about'
  },
];

export default function MediaCoverage() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section id="media" className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            <Tv size={16} /> In The News & Media
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '1rem' }}>
            Press Coverage &{' '}
            <span style={{ background: 'linear-gradient(135deg,#0284c7,#0d9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Recognition
            </span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Dr Prashantkumar's clinical work, public health education, academic teaching, and professional contributions.
          </p>
        </div>

        {/* Featured TV Appearance - Side-by-side card with live video embed option */}
        <div style={{
          borderRadius: '24px',
          overflow: 'hidden',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          boxShadow: '0 20px 40px rgba(15,23,42,0.08)',
          marginBottom: '3rem',
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 460px) 1fr',
          gap: '0'
        }} className="media-featured-hero">
          <div style={{
            position: 'relative',
            background: '#0f172a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isPlayingVideo ? '0' : '1.5rem',
            minHeight: '380px'
          }}>
            {isPlayingVideo ? (
              <div style={{ width: '100%', height: '100%', minHeight: '380px' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${mediaCoverage[0].videoId}?autoplay=1&rel=0`}
                  title="Dr Prashantkumar — Asianet Suvarna News Dear Doctor"
                  style={{ width: '100%', height: '100%', minHeight: '380px', border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={mediaCoverage[0].image}
                  alt="Dr Prashantkumar Asianet Suvarna News Dear Doctor Interview"
                  style={{
                    width: '100%',
                    maxHeight: '440px',
                    objectFit: 'contain',
                    borderRadius: '16px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setIsPlayingVideo(true)}
                  aria-label="Play Asianet Suvarna News broadcast"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: '#dc2626',
                    color: '#ffffff',
                    border: '3px solid #ffffff',
                    boxShadow: '0 8px 28px rgba(220,38,38,0.6)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.0)'; }}
                >
                  <Play size={28} fill="currentColor" style={{ marginLeft: '4px' }} />
                </button>
                <div style={{
                  position: 'absolute', top: '16px', left: '16px',
                  background: '#dc2626', borderRadius: '8px', padding: '0.35rem 0.85rem',
                  fontSize: '0.75rem', fontWeight: '800', color: '#ffffff',
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                  boxShadow: '0 4px 12px rgba(220,38,38,0.4)',
                  display: 'flex', alignItems: 'center', gap: '0.4rem'
                }}>
                  <Tv size={14} /> LIVE Television Feature
                </div>
              </div>
            )}
          </div>

          <div style={{
            padding: '2.5rem 3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div style={{ color: '#0284c7', fontSize: '0.88rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
              {mediaCoverage[0].network} • {mediaCoverage[0].date}
            </div>
            <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.75rem', lineHeight: 1.25 }}>
              "Dear Doctor" Public Health Broadcast on Asianet Suvarna News
            </h3>
            <p style={{ color: '#dc2626', fontWeight: '700', fontSize: '0.98rem', marginBottom: '0.75rem' }}>
              Topic: Burning, Tingling, Numbness &amp; Neuropathic Pain
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              {mediaCoverage[0].description}
            </p>

            <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setIsPlayingVideo(true)}
                className="btn btn-primary"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.4rem', borderRadius: '12px'
                }}
              >
                <Play size={16} fill="currentColor" /> Play Interview
              </button>
              <a
                href={mediaCoverage[0].videoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.3rem', borderRadius: '12px'
                }}
              >
                <Tv size={16} /> Open on YouTube <ExternalLink size={14} />
              </a>
              <a
                href={mediaCoverage[0].playlistUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.75rem 1.2rem', borderRadius: '12px',
                  background: 'rgba(2,132,199,0.08)', color: '#0284c7', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none'
                }}
              >
                <ListVideo size={16} /> Suvarna Media Playlist <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Other Media & Recognition Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {mediaCoverage.slice(1).map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.link}
                style={{
                  textDecoration: 'none',
                  background: item.bg,
                  borderRadius: '20px',
                  padding: '1.5rem',
                  border: `1.5px solid ${item.color}20`,
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(15,23,42,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '50px', height: '50px', borderRadius: '14px',
                  background: '#ffffff', color: item.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, boxShadow: '0 4px 12px rgba(15,23,42,0.08)'
                }}>
                  <Icon size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: item.color, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                    {item.type} • {item.date}
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--primary-navy)', lineHeight: 1.3, marginBottom: '0.4rem' }}>
                    {item.headline}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    {item.description.substring(0, 120)}...
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .media-top-grid { grid-template-columns: 1fr !important; }
          .media-featured { grid-row: span 1 !important; min-height: 280px !important; }
        }
      `}</style>
    </section>
  );
}
