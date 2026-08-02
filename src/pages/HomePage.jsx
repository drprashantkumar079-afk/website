import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import AwardBanner from '../components/AwardBanner';
import MediaCoverage from '../components/MediaCoverage';
import SpecialtyPillars from '../components/SpecialtyPillars';
import AboutTeaser from '../components/AboutTeaser';
import ProblemEntryStrips from '../components/ProblemEntryStrips';
import ConditionsGrid from '../components/ConditionsGrid';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCtaBand from '../components/FinalCtaBand';
import HomepageHighlights from '../components/HomepageHighlights';
import SocialStrip from '../components/SocialStrip';
import ScrollReveal from '../components/ScrollReveal';
import MedicalCampsSection from '../components/MedicalCampsSection';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function HomePage() {
  useDocumentTitle('Joint Replacement, Arthroscopy & Spine Care');
  const { openAppointment, setSelectedArticle, setSelectedVideo } = useOutletContext();

  return (
    <main>
      <Hero onOpenAppointment={openAppointment} />

      {/* Award Banner */}
      <AwardBanner />

      {/* Media & TV Feature (Kannada Prabha / Suvarna News) */}
      <MediaCoverage />

      {/* Philosophy — the emotional core */}
      <AboutTeaser />

      {/* Problem-based care routing */}
      <ScrollReveal variant="fade-up">
        <ProblemEntryStrips />
      </ScrollReveal>

      {/* Expertise — what he does */}
      <ScrollReveal variant="fade-up">
        <SpecialtyPillars />
      </ScrollReveal>

      {/* Editorial education and video showcase */}
      <HomepageHighlights
        onSelectArticle={setSelectedArticle}
        onSelectVideo={setSelectedVideo}
      />

      {/* All 12 conditions — patient guides */}
      <ScrollReveal variant="fade-up" delay={100}>
        <ConditionsGrid onSelectArticle={setSelectedArticle} />
      </ScrollReveal>

      {/* Social proof */}
      <ScrollReveal variant="fade-up" delay={100}>
        <TestimonialsSection />
      </ScrollReveal>

      {/* Social platforms — short & sweet */}
      <ScrollReveal variant="fade-up" delay={100}>
        <SocialStrip />
      </ScrollReveal>

      {/* Community Outreach / Camps */}
      <ScrollReveal variant="fade-up" delay={100}>
        <MedicalCampsSection />
      </ScrollReveal>

      {/* Final CTA */}
      <ScrollReveal variant="zoom-in">
        <FinalCtaBand onOpenAppointment={openAppointment} />
      </ScrollReveal>
    </main>
  );
}
