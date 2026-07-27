import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, Calendar } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { DOCTOR_INFO } from '../data/doctorData';

const testimonials = [
  {
    name: 'Ramesh Nair',
    initials: 'RN',
    age: 67,
    location: 'Jayanagar, Bengaluru',
    treatment: 'Knee replacement',
    rating: 5,
    date: 'March 2026',
    review:
      'Three doctors said I needed surgery immediately. Dr Prashantkumar sat with me for 45 minutes and explained every option. After muscle-sparing knee replacement I walked with support on Day 1. Today I climb stairs without pain.',
    highlight: 'Walking on Day 1'
  },
  {
    name: 'Sunitha Krishnamurthy',
    initials: 'SK',
    age: 54,
    location: 'Malleshwaram, Bengaluru',
    treatment: 'Shoulder keyhole repair',
    rating: 5,
    date: 'January 2026',
    review:
      'After a fall at work I could not lift my arm. Dr Prashantkumar found a full rotator cuff tear and repaired it with keyhole surgery. Recovery was steady — I was back to normal activities in about 3 months. The Vega Curre team was kind throughout.',
    highlight: 'Back to daily life in 3 months'
  },
  {
    name: 'Anand Padmanabhan',
    initials: 'AP',
    age: 32,
    location: 'Whitefield, Bengaluru',
    treatment: 'ACL reconstruction',
    rating: 5,
    date: 'April 2026',
    review:
      'I tore my ACL playing football and thought my sports days were over. Anatomical keyhole ACL reconstruction plus a clear rehab plan got me back on the field in 6 months — stronger than before.',
    highlight: 'Back to football in 6 months'
  },
  {
    name: 'Lalitha Devi',
    initials: 'LD',
    age: 72,
    location: 'Kottayam, Kerala',
    treatment: 'Complex hip replacement',
    rating: 5,
    date: 'November 2025',
    review:
      'I was born with a hip problem that was never fixed. At 72 the pain was unbearable and other hospitals called surgery too risky. Dr Prashantkumar took the case, rebuilt the hip, and gave me my life back.',
    highlight: 'Complex hip others declined'
  },
  {
    name: 'Priya Venkatesh',
    initials: 'PV',
    age: 45,
    location: 'HSR Layout, Bengaluru',
    treatment: 'Sciatica — no surgery',
    rating: 5,
    date: 'May 2026',
    review:
      'Severe sciatica from a slip disc made me fear spine surgery. A nerve root block and physio under Dr Prashantkumar settled the pain in about 6 weeks. He focuses on quality of life — not rushing to operate.',
    highlight: 'Improved without spine surgery'
  }
];

function StarRating({ rating }) {
  return (
    <div className="testimonial-stars" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < rating ? '#f59e0b' : 'none'}
          color={i < rating ? '#f59e0b' : '#d1d5db'}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section id="testimonials" className="section-padding testimonials-section">
      <div className="container">
        <header className="section-header">
          <p className="section-kicker">
            <Star size={14} fill="currentColor" aria-hidden="true" /> Patient stories
          </p>
          <h2>What patients say after recovery</h2>
          <p className="section-lead">
            Over 3,800 procedures — these are typical recovery stories patients share after care at Vega Curre and affiliated hospitals.
          </p>
        </header>

        <div className="testimonial-card">
          <div className="testimonial-inner">
            <div className="testimonial-identity">
              <div className="testimonial-avatar" aria-hidden="true">
                {t.initials}
              </div>
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-meta">Age {t.age}</div>
              <div className="testimonial-meta testimonial-meta--loc">
                <MapPin size={13} aria-hidden="true" /> {t.location}
              </div>
              <div className="testimonial-treatment">{t.treatment}</div>
              <div className="testimonial-meta">
                <Calendar size={13} aria-hidden="true" /> {t.date}
              </div>
            </div>

            <div className="testimonial-body">
              <Quote size={36} className="testimonial-quote" aria-hidden="true" />
              <StarRating rating={t.rating} />
              <p className="testimonial-highlight">{t.highlight}</p>
              <p className="testimonial-review">&ldquo;{t.review}&rdquo;</p>

              <div className="testimonial-nav">
                <div className="testimonial-dots">
                  {testimonials.map((item, i) => (
                    <button
                      key={item.name}
                      type="button"
                      aria-label={`Show story from ${item.name}`}
                      aria-current={i === active}
                      className={i === active ? 'is-active' : ''}
                      onClick={() => setActive(i)}
                    />
                  ))}
                </div>
                <div className="testimonial-arrows">
                  <button type="button" onClick={prev} aria-label="Previous story">
                    <ChevronLeft size={18} />
                  </button>
                  <button type="button" className="is-primary" onClick={next} aria-label="Next story">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-stats">
          {[
            { val: 3800, suffix: '+', label: 'Surgeries performed' },
            { val: 99.4, suffix: '%', label: 'Patient satisfaction', decimals: 1 },
            { val: DOCTOR_INFO.experienceYears, suffix: '+ yrs', label: 'Clinical experience' }
          ].map((s) => (
            <div key={s.label}>
              <strong>
                <AnimatedCounter end={s.val} suffix={s.suffix} decimals={s.decimals || 0} duration={2200} />
              </strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
