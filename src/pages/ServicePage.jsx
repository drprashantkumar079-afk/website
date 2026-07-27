import React from 'react';
import { Link, useOutletContext, useParams, Navigate } from 'react-router-dom';
import {
  CheckCircle2, Calendar, MessageCircle, Phone, MapPin, ArrowLeft, ChevronRight, Clock3
} from 'lucide-react';
import { CLINICAL_PAGES_DATA, DOCTOR_INFO } from '../data/doctorData';
import { CLINICAL_DETAIL } from '../data/clinicalContent';
import { SERVICE_ROUTES } from '../data/serviceRoutes';
import useDocumentTitle from '../hooks/useDocumentTitle';

const SLUG_TO_KEY = {
  orthocare: 'orthocare',
  'joint-replacement': 'jointreplacement',
  arthroscopy: 'arthroscopy',
  'trauma-care': 'traumacare',
  'spine-care': 'spinecare'
};

export default function ServicePage() {
  const { slug } = useParams();
  const { openAppointment } = useOutletContext();
  const dataKey = SLUG_TO_KEY[slug];
  const page = dataKey ? CLINICAL_PAGES_DATA[dataKey] : null;
  const detail = dataKey ? CLINICAL_DETAIL[dataKey] : null;

  useDocumentTitle(page ? `${page.title} - Specialist Care` : null);

  if (!page || !detail) return <Navigate to="/" replace />;

  const techniques =
    page.surgicalTechniques || page.nonSurgicalOptions || page.nonSurgicalTechniques || [];
  const wa = DOCTOR_INFO.contacts.whatsapp.replace(/[^0-9]/g, '');
  const waText = encodeURIComponent(
    `Hello Dr Prashantkumar, I would like an OPD consult regarding ${page.title}.`
  );
  const heroImage = detail.heroImage || page.heroImage;

  return (
    <main className="service-page">
      <section className="service-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="service-hero-veil" />
        <div className="container service-hero-inner">
          <Link to="/" className="service-back">
            <ArrowLeft size={16} /> Home
          </Link>
          <p className="section-kicker" style={{ color: '#7dd3fc' }}>{page.tagline}</p>
          <h1>{page.title}</h1>
          <p className="service-hero-lead">
            Led by {DOCTOR_INFO.name} at Vega Curre Multispeciality Clinic &amp; visiting hospitals (Manipal, Sparsh, HOSMAT).
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={openAppointment}>
              <Calendar size={18} /> Book Appointment
            </button>
            <a href={`https://wa.me/${wa}?text=${waText}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container service-layout">
          <div className="service-main">
            <h2>Clinical overview</h2>
            <p className="service-overview">{detail.detailedOverview || page.overview}</p>

            <div className="service-photo-row">
              {detail.galleryImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`${page.title} clinical image ${index + 1}`}
                  width="320"
                  height="140"
                  loading="lazy"
                />
              ))}
            </div>

            <h3>Who typically needs this care?</h3>
            <ul className="service-list">
              {detail.whoNeeds.map((item) => (
                <li key={item}><CheckCircle2 size={18} /> {item}</li>
              ))}
            </ul>

            <h3>Your care journey with Dr Prashantkumar</h3>
            <ol className="service-journey">
              {detail.journey.map((step, i) => (
                <li key={step.title}>
                  <span className="service-journey-num">{i + 1}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h3>Protocols &amp; techniques</h3>
            <ul className="service-list">
              {techniques.map((item) => (
                <li key={item}><CheckCircle2 size={18} /> {item}</li>
              ))}
            </ul>

            <h3>Conditions treated</h3>
            <ul className="service-list">
              {page.conditions.map((item) => (
                <li key={item}><ChevronRight size={16} /> {item}</li>
              ))}
            </ul>

            <div className="service-recovery">
              <Clock3 size={20} />
              <div>
                <strong>Recovery expectation</strong>
                <p>{detail.recovery}</p>
              </div>
            </div>

            <div className="service-inline-cta">
              <p>Questions about whether you need this specialty?</p>
              <button type="button" className="btn btn-primary" onClick={openAppointment}>
                <Calendar size={18} /> Discuss in OPD
              </button>
              <Link to="/articles" className="btn btn-secondary">Read patient articles</Link>
            </div>
          </div>

          <aside className="service-aside">
            <div className="service-card">
              <h4>Book this specialty</h4>
              <p>OPD: {DOCTOR_INFO.contacts.opdHours}</p>
              <a href={`tel:${DOCTOR_INFO.contacts.phonePrimary}`} className="service-aside-link">
                <Phone size={16} /> {DOCTOR_INFO.contacts.phonePrimary}
              </a>
              <a href={DOCTOR_INFO.contacts.mapsUrl} target="_blank" rel="noreferrer" className="service-aside-link">
                <MapPin size={16} /> {DOCTOR_INFO.contacts.location}
              </a>
              <button type="button" className="btn btn-primary" style={{ width: '100%' }} onClick={openAppointment}>
                <Calendar size={18} /> Schedule consult
              </button>
              <a href={`https://wa.me/${wa}?text=${waText}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ width: '100%' }}>
                <MessageCircle size={18} /> WhatsApp booking
              </a>
            </div>

            <div className="service-card service-card--muted">
              <h4>All services</h4>
              <nav className="service-sibling-nav">
                {SERVICE_ROUTES.map((route) => (
                  <Link key={route.path} to={route.path} className={route.path === `/${slug}` ? 'is-active' : ''}>
                    {route.navLabel}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
