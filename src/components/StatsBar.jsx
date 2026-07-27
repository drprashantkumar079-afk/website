import React, { useEffect, useRef, useState } from 'react';
import { Activity, Users, Building2, Award, Star, TrendingUp } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

const stats = [
  { icon: Activity, value: 3800, suffix: '+', label: 'Surgeries performed', color: '#0284c7', bg: 'rgba(2,132,199,0.1)' },
  { icon: Award, value: DOCTOR_INFO.experienceYears, suffix: '+', label: 'Years in orthopedics', color: '#0d9488', bg: 'rgba(13,148,136,0.1)' },
  { icon: Building2, value: 4, suffix: '', label: 'Hospital Affiliations', color: '#0ea5e9', bg: 'rgba(14,165,233,0.12)' },
  { icon: Users, value: 1000, suffix: '+', label: 'Knee Replacements', color: '#0d9488', bg: 'rgba(13,148,136,0.12)' },
  { icon: Star, value: 99, suffix: '.4%', label: 'Patient Satisfaction', color: '#0284c7', bg: 'rgba(2,132,199,0.12)' },
  { icon: TrendingUp, value: 8, suffix: ' Yrs', label: 'Senior Consultant Experience', color: '#0369a1', bg: 'rgba(3,105,161,0.12)' },
];

function CountUp({ target, suffix, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span>{count}{suffix}</span>
  );
}

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="stats"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
        padding: '3.5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* decorative glow blobs */}
      <div style={{
        position: 'absolute', top: '-60px', left: '10%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', right: '10%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(13,148,136,0.12) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.5rem'
        }} className="stats-grid">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} style={{
                textAlign: 'center',
                padding: '1.75rem 1rem',
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
                transition: 'transform 0.3s ease, background 0.3s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.09)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }}
              >
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: stat.bg, color: stat.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 0.85rem auto'
                }}>
                  <Icon size={24} />
                </div>
                <div style={{
                  fontSize: '2.1rem',
                  fontWeight: '900',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginBottom: '0.4rem'
                }}>
                  <CountUp target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: '600', lineHeight: 1.3 }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
