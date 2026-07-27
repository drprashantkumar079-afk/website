import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Play, ChevronDown } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import AnimatedCounter from './AnimatedCounter';

export default function Hero({ onOpenAppointment }) {
  const scrollToNext = () => {
    document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="premium-hero">
      {/* Background layers */}
      <div className="premium-hero-bg" aria-hidden="true">
        <div className="premium-hero-gradient" />
        <div className="premium-hero-noise" />
      </div>

      <div className="premium-hero-inner">
        {/* Left: Story */}
        <div className="premium-hero-story">
          <div className="premium-hero-badge">
            <span className="premium-hero-badge-dot" />
            Available for OPD · Bengaluru
          </div>

          <h1 className="premium-hero-title">
            Precision in<br />
            <span className="premium-hero-accent">every joint.</span>
          </h1>

          <p className="premium-hero-subtitle">
            Compassion in every conversation.
          </p>

          <p className="premium-hero-desc">
            I'm {DOCTOR_INFO.name} — a surgeon who believes the best operation 
            is the one you understand completely before you agree to it.
            {' '}{DOCTOR_INFO.experienceYears}+ years, {DOCTOR_INFO.surgeriesCount} surgeries, one principle: <em>clarity first, scalpel second.</em>
          </p>

          {/* Stats row */}
          <div className="premium-hero-stats">
            <div>
              <strong><AnimatedCounter end={3800} suffix="+" duration={2200} /></strong>
              <span>Surgeries</span>
            </div>
            <div className="premium-hero-stats-divider" />
            <div>
              <strong><AnimatedCounter end={99.4} suffix="%" decimals={1} duration={2200} /></strong>
              <span>Satisfaction</span>
            </div>
            <div className="premium-hero-stats-divider" />
            <div>
              <strong><AnimatedCounter end={DOCTOR_INFO.experienceYears} suffix="+" duration={1800} /></strong>
              <span>Years</span>
            </div>
          </div>

          <div className="premium-hero-actions">
            <button type="button" className="premium-hero-cta" onClick={onOpenAppointment}>
              <Calendar size={20} />
              Book Consultation
            </button>
            <a
              href={DOCTOR_INFO.socialLinks.youtubeChannel}
              target="_blank"
              rel="noreferrer"
              className="premium-hero-video-btn"
            >
              <span className="premium-hero-play-ring">
                <Play size={16} fill="currentColor" />
              </span>
              Watch my approach
            </a>
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="premium-hero-portrait-wrap">
          <div className="premium-hero-portrait-glow" aria-hidden="true" />
          <img
            src={DOCTOR_INFO.images.hero}
            alt={`${DOCTOR_INFO.name}, Senior Orthopedic Surgeon`}
            className="premium-hero-portrait"
            width={480}
            height={600}
            fetchPriority="high"
          />
          {/* Floating credentials card */}
          <div className="premium-hero-credential">
            <strong>{DOCTOR_INFO.qualifications}</strong>
            <span>FIJR · Joint Replacement Fellowship</span>
          </div>
          {/* Hospital badge */}
          <div className="premium-hero-hospital-badge">
            <span>Director</span>
            <strong>Vega Curre Clinic</strong>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        className="premium-hero-scroll"
        onClick={scrollToNext}
        aria-label="Scroll to learn more"
      >
        <ChevronDown size={20} />
      </button>

      {/* Hospital trust bar integrated into hero */}
      <div className="premium-hero-trust">
        <span>Manipal Hospital</span>
        <span className="premium-hero-trust-sep">·</span>
        <span>Sparsh Hospital</span>
        <span className="premium-hero-trust-sep">·</span>
        <span>HOSMAT Hospital</span>
        <span className="premium-hero-trust-sep">·</span>
        <span>Vega Curre Clinic</span>
      </div>
    </section>
  );
}
