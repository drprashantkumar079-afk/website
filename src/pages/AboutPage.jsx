import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  Calendar, MapPin, Heart, Target, Eye, Building2, ArrowRight,
  Stethoscope, Bone, Activity, Brain, Shield
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import { SERVICE_ROUTES } from '../data/serviceRoutes';
import useDocumentTitle from '../hooks/useDocumentTitle';
import MedicalCampsSection from '../components/MedicalCampsSection';

const DEPT_ICONS = {
  orthocare: Stethoscope,
  jointreplacement: Bone,
  arthroscopy: Activity,
  spinecare: Brain,
  traumacare: Shield
};

export default function AboutPage() {
  useDocumentTitle('About Vega Curre Clinic & Our Philosophy');
  const { openAppointment } = useOutletContext();

  return (
    <main className="about-page">
      <section className="about-hero section-padding">
        <div className="container about-hero-inner">
          <p className="section-kicker">About us</p>
          <h1>Vega Curre Multispeciality Clinic</h1>
          <p className="about-hero-lead">
            Patient-centred orthopedic care in Hebbal Kempapura — led by {DOCTOR_INFO.name},{' '}
            {DOCTOR_INFO.qualifications}. Joint replacement, keyhole arthroscopy, spine &amp; trauma under one ethical roof.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={openAppointment}>
              <Calendar size={18} /> Book OPD Visit
            </button>
            <Link to="/doctor" className="btn btn-secondary">
              Meet the Surgeon <ArrowRight size={16} />
            </Link>
            <Link to="/location" className="btn btn-secondary">
              <MapPin size={16} /> Directions
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="about-vision-grid">
            <div className="about-vision-card">
              <div className="about-vision-icon" style={{ background: 'rgba(2, 132, 199, 0.12)', color: '#0284c7' }}>
                <Eye size={24} />
              </div>
              <h2>Our Vision</h2>
              <p>
                To make world-class orthopedic diagnosis and treatment accessible to every family in North Bengaluru —
                with honest counselling, conservative-first care, and surgery only when it truly improves life.
              </p>
            </div>
            <div className="about-vision-card">
              <div className="about-vision-icon" style={{ background: 'rgba(13, 148, 136, 0.12)', color: '#0d9488' }}>
                <Target size={24} />
              </div>
              <h2>Our Mission</h2>
              <p>
                Listen carefully, explain clearly, preserve joints whenever possible, and deliver precise surgery
                — muscle-sparing knee replacement, complex hip reconstruction, keyhole sports repairs, and trauma fixation —
                with the same standards at OPD and partner hospitals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container about-clinic-grid">
          <div>
            <p className="section-kicker">The clinic</p>
            <h2>Why Vega Curre?</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Founded in November 2024 by {DOCTOR_INFO.name}, Vega Curre Multispeciality Clinic brings 15+ years of
              hospital experience into a neighbourhood OPD where patients are not rushed. Every consultation includes
              time to understand your scans, fears, and family expectations.
            </p>
            <ul className="about-clinic-list">
              <li><Building2 size={18} /> 2nd Floor, Bhuvaneswari Nagar — Hebbal Kempapura</li>
              <li><Heart size={18} /> Preserve joints first — 80%+ managed without surgery</li>
              <li><Stethoscope size={18} /> Same surgeon from OPD consult to operation at Manipal, Sparsh &amp; HOSMAT</li>
            </ul>
            <Link to="/location" className="philosophy-link" style={{ marginTop: '1.25rem' }}>
              Clinic hours &amp; map <ArrowRight size={16} />
            </Link>
          </div>
          <div className="about-clinic-visual">
            <img
              src={DOCTOR_INFO.images.clinical}
              alt="Vega Curre Multispeciality Clinic OPD"
              loading="lazy"
              className="about-clinic-photo"
            />
            <img
              src={DOCTOR_INFO.images.portrait}
              alt={DOCTOR_INFO.name}
              loading="lazy"
              className="about-clinic-photo about-clinic-photo--secondary"
            />
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="container">
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
              <p className="philosophy-kicker">Our philosophy</p>
              <h2 className="philosophy-heading">We treat the person, not just the joint.</h2>
              <div className="philosophy-values">
                <div className="philosophy-value">
                  <span className="philosophy-value-num">01</span>
                  <div>
                    <strong>Clarity over complexity</strong>
                    <p>Conditions explained in simple language — with drawings, scans, and honest timelines.</p>
                  </div>
                </div>
                <div className="philosophy-value">
                  <span className="philosophy-value-num">02</span>
                  <div>
                    <strong>Conservative first</strong>
                    <p>Physiotherapy, injections, lifestyle changes — everything before recommending surgery.</p>
                  </div>
                </div>
                <div className="philosophy-value">
                  <span className="philosophy-value-num">03</span>
                  <div>
                    <strong>Precision when it matters</strong>
                    <p>Muscle-sparing TKR, Crowe hip reconstruction, keyhole ACL &amp; cuff repair when surgery is needed.</p>
                  </div>
                </div>
              </div>
              <Link to="/doctor" className="philosophy-link">
                Surgeon credentials &amp; achievements <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem' }}>
            <p className="section-kicker">Clinical departments</p>
            <h2>Five Specialty Areas Under One Roof</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Each department has its own informative page with procedure details — like a hospital subspecialty menu, tailored to Dr Prashantkumar&apos;s practice.
            </p>
          </div>
          <div className="about-dept-grid">
            {SERVICE_ROUTES.map((route) => {
              const Icon = DEPT_ICONS[route.dataKey] || Stethoscope;
              return (
                <Link key={route.path} to={route.path} className="about-dept-card">
                  <div className="about-dept-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{route.navLabel}</h3>
                  <p>{route.shortDesc}</p>
                  <span className="about-dept-link">
                    {route.subTopics.length} procedures <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <MedicalCampsSection />

      <section className="section-padding about-cta-band">
        <div className="container" style={{ textAlign: 'center', maxWidth: '560px' }}>
          <h2>Ready to visit Vega Curre?</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '1.5rem' }}>
            Mon – Sat 10 AM – 8:30 PM · Sun 10 AM – 12 PM (prior appointment)
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <button type="button" className="btn btn-primary" onClick={openAppointment}>
              <Calendar size={18} /> Book Appointment
            </button>
            <Link to="/faqs" className="btn btn-secondary">Patient FAQs</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
