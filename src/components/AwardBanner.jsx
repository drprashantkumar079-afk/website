import React from 'react';
import { Trophy } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AwardBanner() {
  return (
    <section className="award-banner-wrapper">
      <div className="container">
        <ScrollReveal variant="fade-up">
          <div className="award-banner">
            <div className="award-image-col">
              <img src="/Images/lifetime-award-real.jpg" alt="Dr Prashantkumar receiving Lifetime Achievement Award" className="award-image" loading="lazy" />
              <div className="award-badge">
                <Trophy size={28} />
              </div>
            </div>
            <div className="award-text-col">
              <div className="award-kicker">Honoring Excellence • July 29, 2026</div>
              <h2>Lifetime Achievement Award</h2>
              <p>
                Dr Prashantkumar was recently honored with a prestigious Lifetime Achievement Award, recognizing his unwavering dedication, surgical excellence, and outstanding contributions to the field of Orthopedics and Joint Replacement.
              </p>
              <p className="award-sub">
                This milestone reflects over 15 years of compassionate patient care and a commitment to advancing medical standards in Bengaluru.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
