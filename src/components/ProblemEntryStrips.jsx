import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bone, Dumbbell, Brain, Shield, Phone } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import ScrollReveal from './ScrollReveal';

const PROBLEM_ENTRIES = [
  {
    to: '/joint-replacement',
    icon: Bone,
    title: 'Knee or hip pain?',
    text: 'Stiffness, night pain, or limping — muscle-sparing knee replacement and complex hip rebuild options explained in plain language.',
    cta: 'Joint replacement care',
    accent: '#0284c7',
    bg: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    border: '#bae6fd'
  },
  {
    to: '/arthroscopy',
    icon: Dumbbell,
    title: 'Sports injury or ligament tear?',
    text: 'ACL, meniscus, shoulder dislocation — 4mm keyhole repair with criterion-based return-to-sport rehabilitation.',
    cta: 'Keyhole arthroscopy',
    accent: '#0d9488',
    bg: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
    border: '#99f6e4'
  },
  {
    to: '/spine-care',
    icon: Brain,
    title: 'Back pain or sciatica?',
    text: 'Slip disc, leg shooting pain, neck numbness — physio and nerve blocks first. Featured on Suvarna News Dear Doctor.',
    cta: 'Spine & nerve care',
    accent: '#0369a1',
    bg: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
    border: '#bfdbfe'
  },
  {
    to: '/trauma-care',
    icon: Shield,
    title: 'Fracture or road accident?',
    text: 'Broken bones, open injuries, bones that never healed — MIPO plating, interlocking nails and emergency trauma pathways.',
    cta: 'Trauma & fracture care',
    accent: '#dc2626',
    bg: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
    border: '#fecdd3',
    emergency: true
  }
];

export default function ProblemEntryStrips() {
  return (
    <section id="find-care" className="section-padding problem-entry-section">
      <div className="container">
        <header className="section-header">
          <p className="section-kicker">Find the right care</p>
          <h2>What brings you in today?</h2>
          <p className="section-lead">
            Start with the problem that matches your symptoms — each path links to detailed procedure information and patient guides.
          </p>
        </header>

        <div className="problem-entry-grid">
          {PROBLEM_ENTRIES.map((entry, idx) => {
            const Icon = entry.icon;
            return (
              <ScrollReveal key={entry.to} variant="fade-up" delay={idx * 80}>
                <article
                  className={`problem-entry-card${entry.emergency ? ' problem-entry-card--emergency' : ''}`}
                  style={{
                    background: entry.bg,
                    borderColor: entry.border
                  }}
                >
                  <div className="problem-entry-icon" style={{ color: entry.accent, background: `${entry.accent}18` }}>
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3>{entry.title}</h3>
                  <p>{entry.text}</p>
                  <div className="problem-entry-actions">
                    <Link to={entry.to} className="problem-entry-link" style={{ color: entry.accent }}>
                      {entry.cta} <ArrowRight size={15} />
                    </Link>
                    {entry.emergency && (
                      <a href={`tel:${DOCTOR_INFO.contacts.phonePrimary}`} className="problem-entry-phone">
                        <Phone size={14} />
                        Call clinic now
                      </a>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
