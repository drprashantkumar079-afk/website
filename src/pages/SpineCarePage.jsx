import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  CheckCircle2, Calendar, MessageCircle, Phone, MapPin, ArrowLeft,
  ChevronRight, Clock3, Tv, ShieldCheck, Stethoscope, ChevronDown, ChevronUp, FileText
} from 'lucide-react';
import { DOCTOR_INFO, CLINICAL_PAGES_DATA } from '../data/doctorData';
import { CLINICAL_DETAIL } from '../data/clinicalContent';
import { RELATED_GUIDES } from '../data/clinicalProcedures';
import { SPINE_FAQS } from '../data/specialtyFaqs';
import ProcedureBlocks from '../components/ProcedureBlocks';
import RelatedGuides from '../components/RelatedGuides';
import SymptomChecker from '../components/SymptomChecker';
import VideoEmbed from '../components/VideoEmbed';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useSchemaData from '../hooks/useSchemaData';

const spineSymptoms = [
  { label: 'Shooting pain down the leg (Sciatica)', message: 'Radiating pain suggests nerve root compression. Early assessment can prevent nerve damage.', isUrgent: true },
  { label: 'Neck pain with tingling in arms/fingers', message: 'Tingling or numbness in the extremities is a classic sign of cervical nerve involvement requiring clinical review.', isUrgent: true },
  { label: 'Back pain worsening with sitting or coughing', message: 'This is often associated with disc bulges. Conservative protocols are highly effective when started early.', isUrgent: false }
];

export default function SpineCarePage() {
  useDocumentTitle('Spine Care & Nerve Health - Dr Prashantkumar');
  
  useSchemaData({
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Spine Care & Nerve Health",
    "description": "Non-surgical disc decompression, nerve root block injections & evidence-based spine rehabilitation for Sciatica & Cervical Spondylosis.",
    "about": {
      "@type": "MedicalSpecialty",
      "name": "Spine Surgery"
    }
  });

  const { openAppointment, setSelectedArticle } = useOutletContext();
  const [openFaq, setOpenFaq] = useState(0);

  const page = CLINICAL_PAGES_DATA.spinecare;
  const detail = CLINICAL_DETAIL.spinecare;
  const wa = DOCTOR_INFO.contacts.whatsapp.replace(/[^0-9]/g, '');
  const waText = encodeURIComponent("Hello Dr Prashantkumar, I would like an OPD consult regarding Spine & Nerve Health.");

  return (
    <main className="spine-care-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ backgroundImage: `url(${detail.heroImage})` }}>
        <div className="service-hero-veil" />
        <div className="container service-hero-inner">
          <Link to="/" className="service-back">
            <ArrowLeft size={16} /> Home
          </Link>
          <div className="badge badge-cyan" style={{ marginBottom: '1rem', width: 'fit-content' }}>
            <Tv size={15} /> Featured Expert on Asianet Suvarna News "Dear Doctor"
          </div>
          <h1>{page.title}</h1>
          <p className="service-hero-lead">
            Non-surgical disc decompression, nerve root block injections &amp; evidence-based spine rehabilitation for Sciatica &amp; Cervical Spondylosis.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={openAppointment}>
              <Calendar size={18} /> Book Spine Consultation
            </button>
            <a href={`https://wa.me/${wa}?text=${waText}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={18} /> WhatsApp Clinic
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section style={{ background: 'linear-gradient(135deg, #0b1f33 0%, #0369a1 100%)', padding: '1.5rem 0', color: '#fff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', textAlign: 'center' }}>
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#38bdf8' }}>Suvarna News Speaker</div>
            <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>Public education on nerve health</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#38bdf8' }}>85%+ Non-Surgical</div>
            <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>Disc pain resolved without operation</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#38bdf8' }}>Nerve Root Injections</div>
            <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>Targeted pain block protocols</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#38bdf8' }}>Ergonomic Rehab</div>
            <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>Core &amp; posture correction</div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-padding">
        <div className="container service-layout">
          <div className="service-main">
            <h2>Clinical Overview &amp; Suvarna News TV Feature</h2>
            <p className="service-overview">{detail.detailedOverview}</p>

            {/* Clinical Imagery */}
            <div className="service-photo-row">
              {detail.galleryImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Spine Care Clinical Image ${index + 1}`}
                  width="320"
                  height="140"
                  loading="lazy"
                  style={{ borderRadius: '14px', objectFit: 'cover' }}
                />
              ))}
            </div>

            <VideoEmbed 
              videoId="PLACEHOLDER" 
              title="Watch: Asianet Suvarna News Feature" 
              description="Dr Prashantkumar discusses non-surgical interventions for sciatica and nerve health on national television."
            />

            <ProcedureBlocks serviceKey="spinecare" />

            <h3>Who Needs Spine &amp; Nerve Evaluation?</h3>
            <ul className="service-list">
              {detail.whoNeeds.map((item) => (
                <li key={item}><CheckCircle2 size={18} color="#0284c7" /> {item}</li>
              ))}
            </ul>

            <h3>Your Step-by-Step Spine Pathway</h3>
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

            <h3>Non-Surgical Spine Protocols</h3>
            <ul className="service-list">
              {page.nonSurgicalTechniques ? page.nonSurgicalTechniques.map((item) => (
                <li key={item}><ShieldCheck size={18} color="#0d9488" /> {item}</li>
              )) : (
                <li><ShieldCheck size={18} color="#0d9488" /> Targeted Transforaminal Nerve Root Blocks</li>
              )}
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
                <strong>Recovery &amp; Sciatica Relief Expectations</strong>
                <p>{detail.recovery}</p>
              </div>
            </div>

            <RelatedGuides
              articleIds={RELATED_GUIDES.spinecare}
              onOpenArticle={setSelectedArticle}
            />

            {/* Department Specific FAQs */}
            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ marginBottom: '1.25rem' }}>Frequently Asked Questions — Spine Care</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {SPINE_FAQS.map((faq, idx) => (
                  <div key={idx} style={{ background: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                    <button
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

            {/* Consultation CTA */}
            <div className="service-inline-cta" style={{ marginTop: '2.5rem' }}>
              <p>Experiencing radiating sciatica or neck pain? Get an expert spine opinion.</p>
              <button type="button" className="btn btn-primary" onClick={openAppointment}>
                <Calendar size={18} /> Schedule Spine Consult
              </button>
              <Link to="/media" className="btn btn-secondary">Watch Suvarna News Broadcast</Link>
            </div>
          </div>

          {/* Aside Card */}
          <aside className="service-aside">
            <div className="service-card">
              <h4>Spine &amp; Nerve Clinic</h4>
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
                <Calendar size={18} /> Book Spine Consult
              </button>
              <a href={`https://wa.me/${wa}?text=${waText}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ width: '100%', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                <MessageCircle size={18} /> WhatsApp Reception
              </a>
            </div>
            
            <div className="service-card service-card--muted" style={{ marginBottom: '1.5rem' }}>
              <h4>Patient Resources</h4>
              <button 
                type="button" 
                className="btn btn-secondary" 
                style={{ width: '100%', marginTop: '0.5rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
                onClick={() => alert('The Posture & Ergonomics Guide PDF is being prepared and will be available for download soon.')}
              >
                <FileText size={16} /> Posture &amp; Ergonomics Guide
              </button>
            </div>
            
            <SymptomChecker title="Spine & Nerve Checker" symptoms={spineSymptoms} />
          </aside>
        </div>
      </section>
    </main>
  );
}
