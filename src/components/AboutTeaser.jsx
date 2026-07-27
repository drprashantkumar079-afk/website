import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import ScrollReveal from './ScrollReveal';

export default function AboutTeaser() {
  return (
    <section id="philosophy" className="philosophy-section">
      <div className="container">
        <ScrollReveal variant="fade-up">
          <div className="philosophy-grid">
            <div className="philosophy-visual">
              <img
                src={DOCTOR_INFO.images.portrait}
                alt={`${DOCTOR_INFO.name} in consultation`}
                loading="lazy"
                className="philosophy-photo"
              />
              <div className="philosophy-experience-badge">
                <strong>{DOCTOR_INFO.experienceYears}+</strong>
                <span>years in<br />orthopedics</span>
              </div>
            </div>

            <div className="philosophy-content">
              <p className="philosophy-kicker">My philosophy</p>

              <h2 className="philosophy-heading">
                I treat the person,<br />not just the joint.
              </h2>

              <div className="philosophy-quote">
                <Quote size={28} className="philosophy-quote-icon" />
                <blockquote>
                  Every patient who walks in with a knee problem also carries fear, 
                  questions, and family expectations. My job begins with listening — 
                  surgery is always the last chapter, never the first.
                </blockquote>
              </div>

              <div className="philosophy-values">
                <div className="philosophy-value">
                  <span className="philosophy-value-num">01</span>
                  <div>
                    <strong>Clarity over complexity</strong>
                    <p>I explain your condition in simple language — with drawings, scans, and honest timelines.</p>
                  </div>
                </div>
                <div className="philosophy-value">
                  <span className="philosophy-value-num">02</span>
                  <div>
                    <strong>Conservative first</strong>
                    <p>Physiotherapy, injections, lifestyle changes — I try everything before recommending surgery.</p>
                  </div>
                </div>
                <div className="philosophy-value">
                  <span className="philosophy-value-num">03</span>
                  <div>
                    <strong>Precision when it matters</strong>
                    <p>When surgery is needed, I use muscle-sparing techniques for faster recovery and less pain.</p>
                  </div>
                </div>
              </div>

              <Link to="/doctor" className="philosophy-link">
                Read full story &amp; credentials <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
