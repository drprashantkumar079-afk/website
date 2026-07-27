import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import SpecialtyPillars from '../components/SpecialtyPillars';
import AboutTeaser from '../components/AboutTeaser';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCtaBand from '../components/FinalCtaBand';
import HomepageHighlights from '../components/HomepageHighlights';
import SocialStrip from '../components/SocialStrip';
import ScrollReveal from '../components/ScrollReveal';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { CONDITIONS, CONDITION_ARTICLES } from '../data/conditionBlogs';

const HOME_TREATMENTS = CONDITIONS.slice(0, 8);

export default function HomePage() {
  useDocumentTitle('Joint Replacement, Arthroscopy & Spine Care');
  const { openAppointment, setSelectedArticle, setSelectedVideo } = useOutletContext();

  const openGuide = (articleId) => {
    const article = CONDITION_ARTICLES.find((a) => a.id === articleId);
    if (article) setSelectedArticle(article);
  };

  return (
    <main>
      <Hero onOpenAppointment={openAppointment} />

      {/* Philosophy — the emotional core */}
      <AboutTeaser />

      {/* Expertise — what he does */}
      <ScrollReveal variant="fade-up">
        <SpecialtyPillars />
      </ScrollReveal>

      {/* Editorial education and video showcase */}
      <HomepageHighlights
        onSelectArticle={setSelectedArticle}
        onSelectVideo={setSelectedVideo}
      />

      {/* Conditions — quick access */}
      <ScrollReveal variant="fade-up" delay={100}>
        <section id="conditions" className="section-padding treat-strip">
          <div className="container">
            <header className="section-header">
              <p className="section-kicker">What we treat</p>
              <h2>Common problems we see every week</h2>
              <p className="section-lead">
                Knee pain, back pain, sports injuries, shoulder stiffness, and fractures —
                tap a topic for a simple patient guide.
              </p>
            </header>
            <div className="treat-strip-grid">
              {HOME_TREATMENTS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className="treat-chip"
                  onClick={() => openGuide(c.articleId)}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="treat-strip-footer">
              <Link to="/articles" className="text-link">
                Browse all patient articles <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Social proof */}
      <ScrollReveal variant="fade-up" delay={100}>
        <TestimonialsSection />
      </ScrollReveal>

      {/* Social platforms — short & sweet */}
      <ScrollReveal variant="fade-up" delay={100}>
        <SocialStrip />
      </ScrollReveal>

      {/* Final CTA */}
      <ScrollReveal variant="zoom-in">
        <FinalCtaBand onOpenAppointment={openAppointment} />
      </ScrollReveal>
    </main>
  );
}
