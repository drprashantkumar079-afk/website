import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  CheckCircle2, Calendar, MessageCircle, Phone, MapPin, ArrowLeft,
  ChevronRight, Clock3, ShieldCheck, ChevronDown, ChevronUp, Mic, Activity, FileText
} from 'lucide-react';
import { DOCTOR_INFO, CLINICAL_PAGES_DATA } from '../data/doctorData';
import {
  CLINICAL_DETAIL,
  ARTHROSCOPY_KNEE_PROCEDURES,
  ARTHROSCOPY_SHOULDER_PROCEDURES
} from '../data/clinicalContent';
import { RELATED_GUIDES } from '../data/clinicalProcedures';
import { ARTHROSCOPY_FAQS } from '../data/specialtyFaqs';
import ProcedureBlocks from '../components/ProcedureBlocks';
import RelatedGuides from '../components/RelatedGuides';
import ServiceTestimonial from '../components/ServiceTestimonial';
import VideoEmbed from '../components/VideoEmbed';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useSchemaData from '../hooks/useSchemaData';

export default function ArthroscopyPage() {
  useDocumentTitle('Keyhole Arthroscopy & Sports Medicine - Dr Prashantkumar');
  
  useSchemaData({
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Keyhole Arthroscopy & Sports Medicine",
    "description": "Minimally invasive knee & shoulder keyhole surgery for athletes and active adults.",
    "about": {
      "@type": "MedicalSpecialty",
      "name": "Sports Medicine"
    }
  });

  const { openAppointment, setSelectedArticle } = useOutletContext();
  const [openFaq, setOpenFaq] = useState(0);

  const page = CLINICAL_PAGES_DATA.arthroscopy;
  const detail = CLINICAL_DETAIL.arthroscopy;
  const wa = DOCTOR_INFO.contacts.whatsapp.replace(/[^0-9]/g, '');
  const waText = encodeURIComponent('Hello Dr Prashantkumar, I would like an OPD consult regarding Keyhole Arthroscopy & Sports Injuries.');

  return (
    <main className="arthroscopy-page">
      {/* Informative hero — Kossin-style what is arthroscopy */}
      <section
        className="service-hero service-hero--rich"
        style={{ backgroundImage: `url(${detail.heroImage})` }}
      >
        <div className="service-hero-veil" />
        <div className="container service-hero-inner service-hero-inner--rich">
          <Link to="/" className="service-back">
            <ArrowLeft size={16} /> Home
          </Link>

          <div className="service-hero-rich-grid">
            <div className="service-hero-rich-main">
              <div className="badge badge-cyan" style={{ marginBottom: '1rem', width: 'fit-content' }}>
                <Mic size={15} /> Minimally Invasive · Knee &amp; Shoulder Keyhole Surgery
              </div>
              <h1>{page.title}</h1>
              <p className="service-hero-lead service-hero-lead--wide">
                {detail.heroIntro}
              </p>
              <ul className="service-hero-benefits">
                {detail.heroBenefits.map((benefit) => (
                  <li key={benefit}>
                    <CheckCircle2 size={16} />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="hero-actions">
                <button type="button" className="btn btn-primary" onClick={openAppointment}>
                  <Calendar size={18} /> Book Keyhole Consult
                </button>
                <a href={`https://wa.me/${wa}?text=${waText}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                  <MessageCircle size={18} /> WhatsApp Clinic
                </a>
              </div>
            </div>

            <aside className="service-hero-rich-aside">
              <h2>Procedures we perform</h2>
              <div className="service-hero-proc-group">
                <strong>Knee arthroscopy</strong>
                <ul>
                  {ARTHROSCOPY_KNEE_PROCEDURES.map((p) => (
                    <li key={p.id}>{p.title}</li>
                  ))}
                </ul>
              </div>
              <div className="service-hero-proc-group">
                <strong>Shoulder arthroscopy</strong>
                <ul>
                  {ARTHROSCOPY_SHOULDER_PROCEDURES.map((p) => (
                    <li key={p.id}>{p.title}</li>
                  ))}
                </ul>
              </div>
              <p className="service-hero-aside-note">
                Organizer of &ldquo;The Shoulder Key Basics&rdquo; — academic training in shoulder keyhole repair.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="arthro-stats-bar">
        <div className="container arthro-stats-grid">
          <div>
            <div className="arthro-stat-value">4mm Portals</div>
            <div className="arthro-stat-label">Keyhole camera &amp; instruments</div>
          </div>
          <div>
            <div className="arthro-stat-value">Real-Time View</div>
            <div className="arthro-stat-label">Joint seen live on HD monitor</div>
          </div>
          <div>
            <div className="arthro-stat-value">Meniscus Save</div>
            <div className="arthro-stat-label">Repair preferred over removal</div>
          </div>
          <div>
            <div className="arthro-stat-value">Day-Care Option</div>
            <div className="arthro-stat-label">Same-day home return when suitable</div>
          </div>
        </div>
      </section>

      <section className="section-padding arthro-intro-band">
        <div className="container" style={{ maxWidth: '860px' }}>
          <p className="section-kicker">Arthroscopy at Vega Curre</p>
          <h2>Arthroscopic Procedures: A Window into Modern Orthopedics</h2>
          <p className="service-overview" style={{ marginBottom: 0 }}>
            Arthroscopy has revolutionized orthopedics — offering precise interventions with minimal tissue damage
            and faster recovery. Among joints treated keyhole, the <strong>knee and shoulder</strong> are the most
            common. Surgeons visualize cartilage, ligaments and tendons directly, then repair torn ACL/PCL ligaments,
            meniscus cartilage, rotator cuff tendons and unstable shoulder labrum through portals instead of open cuts.
            Dr Prashantkumar counsels each patient after examination and MRI: the goal is less pain, faster healing,
            and a quicker return to daily life and sport when surgery is truly indicated.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container service-layout">
          <div className="service-main">
            <div className="arthro-proc-section">
              <div className="arthro-proc-section-head">
                <Activity size={22} color="#0284c7" />
                <h2>Knee Arthroscopy — Procedures Explained</h2>
              </div>
              <p className="arthro-proc-section-intro">
                The knee is the most common joint for arthroscopy. Each procedure targets a specific structure —
                meniscus, cruciate ligaments, collateral ligaments or cartilage surface.
              </p>
              <div className="arthro-proc-grid">
                {ARTHROSCOPY_KNEE_PROCEDURES.map((proc, index) => (
                  <article key={proc.id} id={proc.id} className="arthro-proc-card">
                    <span className="arthro-proc-num">{index + 1}</span>
                    <h3>{proc.title}</h3>
                    <p>{proc.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="arthro-proc-section">
              <div className="arthro-proc-section-head">
                <Activity size={22} color="#0d9488" />
                <h2>Shoulder Arthroscopy — Procedures Explained</h2>
              </div>
              <p className="arthro-proc-section-intro">
                Shoulder keyhole surgery treats instability, rotator cuff tears and stiffness — with smaller scars
                and structured rehabilitation for overhead athletes and manual workers.
              </p>
              <div className="arthro-proc-grid arthro-proc-grid--shoulder">
                {ARTHROSCOPY_SHOULDER_PROCEDURES.map((proc, index) => (
                  <article key={proc.id} id={proc.id} className="arthro-proc-card">
                    <span className="arthro-proc-num">{index + 1}</span>
                    <h3>{proc.title}</h3>
                    <p>{proc.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <h2>Clinical Overview &amp; Sports Medicine Leadership</h2>
            <p className="service-overview">{detail.detailedOverview}</p>

            <div className="service-photo-row">
              {detail.galleryImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Keyhole arthroscopy — ${index === 0 ? 'surgical technology' : index === 1 ? 'clinical care' : 'shoulder conference'}`}
                  width="320"
                  height="140"
                  loading="lazy"
                  style={{ borderRadius: '14px', objectFit: 'cover' }}
                />
              ))}
            </div>

            <ServiceTestimonial 
              text="After tearing my ACL during a football match, I was devastated. Dr. Prashantkumar performed a keyhole reconstruction and guided my rehab perfectly. I was back on the field in 7 months feeling stronger than ever."
              author="Arjun R."
              procedure="ACL Reconstruction (Sports Injury)"
            />

            <VideoEmbed 
              videoId="PLACEHOLDER" 
              title="Watch: Understanding Keyhole Surgery" 
              description="Dr Prashantkumar explains the benefits of arthroscopic repair for athletes and active adults."
            />

            <ProcedureBlocks serviceKey="arthroscopy" />

            <h3>Who Needs Arthroscopic Evaluation?</h3>
            <ul className="service-list">
              {detail.whoNeeds.map((item) => (
                <li key={item}><CheckCircle2 size={18} color="#0284c7" /> {item}</li>
              ))}
            </ul>

            <h3>Your Keyhole Surgical &amp; Rehab Journey</h3>
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

            <h3>Advanced Arthroscopic Techniques</h3>
            <ul className="service-list">
              {page.surgicalTechniques.map((item) => (
                <li key={item}><ShieldCheck size={18} color="#0d9488" /> {item}</li>
              ))}
            </ul>

            <h3>Conditions Treated</h3>
            <ul className="service-list">
              {page.conditions.map((item) => (
                <li key={item}><ChevronRight size={16} color="#0284c7" /> {item}</li>
              ))}
            </ul>

            <div className="service-recovery">
              <Clock3 size={20} color="#0891b2" />
              <div>
                <strong>Recovery &amp; Sports Clearance Expectation</strong>
                <p>{detail.recovery}</p>
              </div>
            </div>

            <div className="arthro-closing-note">
              <p>
                Arthroscopic procedures offer a less invasive alternative to traditional open surgery — smaller
                incisions, reduced postoperative pain, and quicker recovery. Consult with Dr Prashantkumar to
                determine the most suitable plan based on your injury, activity goals and MRI findings.
              </p>
            </div>

            <RelatedGuides
              articleIds={RELATED_GUIDES.arthroscopy}
              onOpenArticle={setSelectedArticle}
            />

            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ marginBottom: '1.25rem' }}>Frequently Asked Questions — Arthroscopy</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {ARTHROSCOPY_FAQS.map((faq, idx) => (
                  <div key={idx} style={{ background: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      style={{
                        width: '100%', padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between',
                        alignItems: 'center', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer',
                        fontWeight: '700', color: 'var(--primary-navy)', fontSize: '0.98rem'
                      }}
                    >
                      <span>{faq.q}</span>
                      {openFaq === idx ? <ChevronUp size={18} color="#0284c7" /> : <ChevronDown size={18} color="#64748b" />}
                    </button>
                    {openFaq === idx && (
                      <div style={{ padding: '0 1.25rem 1rem 1.25rem', color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="service-inline-cta" style={{ marginTop: '2.5rem' }}>
              <p>Got a knee twist, meniscus tear, or shoulder pain? Consult Dr Prashantkumar.</p>
              <button type="button" className="btn btn-primary" onClick={openAppointment}>
                <Calendar size={18} /> Schedule OPD Evaluation
              </button>
              <Link to="/media" className="btn btn-secondary">Media &amp; Conference Highlights</Link>
            </div>
          </div>

          <aside className="service-aside">
            <div className="service-card">
              <h4>Sports Medicine OPD</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                OPD: Vega Curre Clinic, Hebbal<br />
                Mon – Sat: 10:00 AM – 8:30 PM
              </p>
              <a href={`tel:${DOCTOR_INFO.contacts.phonePrimary}`} className="service-aside-link">
                <Phone size={16} /> {DOCTOR_INFO.contacts.phonePrimary}
              </a>
              <Link to="/location" className="service-aside-link">
                <MapPin size={16} /> Vega Curre Clinic Location
              </Link>
              <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '0.75rem' }} onClick={openAppointment}>
                <Calendar size={18} /> Book Keyhole Consult
              </button>
              <a href={`https://wa.me/${wa}?text=${waText}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ width: '100%', marginTop: '0.5rem' }}>
                <MessageCircle size={18} /> WhatsApp Reception
              </a>
            </div>

            <div className="service-card service-card--muted">
              <h4>Quick procedure index</h4>
              <ul className="arthro-aside-links">
                {ARTHROSCOPY_KNEE_PROCEDURES.slice(0, 4).map((p) => (
                  <li key={p.id}><a href={`#${p.id}`}>{p.title}</a></li>
                ))}
                {ARTHROSCOPY_SHOULDER_PROCEDURES.slice(0, 2).map((p) => (
                  <li key={p.id}><a href={`#${p.id}`}>{p.title}</a></li>
                ))}
              </ul>
              
              <button 
                type="button" 
                className="btn btn-secondary" 
                style={{ width: '100%', marginTop: '1.5rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
                onClick={() => alert('The Sports Rehab Protocol PDF is being prepared and will be available for download soon.')}
              >
                <FileText size={16} /> Sports Rehab Protocol
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
