import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bone, Activity, Hand, AlignCenter, Shield } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const PILLARS = [
  {
    to: '/joint-replacement',
    icon: Bone,
    title: 'Knee & hip replacement',
    text: 'Muscle-sparing knee replacement and complex hip rebuilds — including difficult congenital cases.'
  },
  {
    to: '/arthroscopy',
    icon: Hand,
    title: 'Keyhole sports surgery',
    text: 'ACL, meniscus and shoulder repair through small cuts for a faster return to activity.'
  },
  {
    to: '/spine-care',
    icon: AlignCenter,
    title: 'Back pain & nerve care',
    text: 'Sciatica and slip disc care with physio and injections first — surgery only when needed.'
  },
  {
    to: '/trauma-care',
    icon: Shield,
    title: 'Fractures & accidents',
    text: 'Broken bones, complex fractures and non-healing injuries with careful fixation planning.'
  },
  {
    to: '/orthocare',
    icon: Activity,
    title: 'Everyday joint care',
    text: 'Early arthritis care, PRP, injections and plans that try to protect your natural joint.'
  }
];

export default function SpecialtyPillars() {
  return (
    <section id="specialties" className="section-padding pillars-section">
      <div className="container">
        <header className="section-header">
          <p className="section-kicker">Clinical focus</p>
          <h2>Care for knees, hips, back & sports injuries</h2>
          <p className="section-lead">
            Clear care paths for knee, hip, spine, sports injuries, and fractures —
            explained in plain language before you decide on treatment.
          </p>
        </header>

        <div className="pillars-grid">
          {PILLARS.map(({ to, icon: Icon, title, text }, idx) => (
            <ScrollReveal key={to} variant="fade-up" delay={idx * 100}>
              <Link to={to} className="pillar-card">
                <span className="pillar-icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="pillar-link">
                  View specialty <ArrowRight size={15} />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
