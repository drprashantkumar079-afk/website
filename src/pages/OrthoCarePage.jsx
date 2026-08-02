import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  CheckCircle2, Calendar, MessageCircle, Phone, MapPin, ArrowLeft,
  ChevronRight, Clock3, Activity, ShieldCheck, Stethoscope, Award,
  HelpCircle, ChevronDown, ChevronUp, FileText
} from 'lucide-react';
import { DOCTOR_INFO, CLINICAL_PAGES_DATA } from '../data/doctorData';
import { CLINICAL_DETAIL } from '../data/clinicalContent';
import { RELATED_GUIDES } from '../data/clinicalProcedures';
import { ORTHO_FAQS } from '../data/specialtyFaqs';
import ProcedureBlocks from '../components/ProcedureBlocks';
import RelatedGuides from '../components/RelatedGuides';
import SymptomChecker from '../components/SymptomChecker';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useSchemaData from '../hooks/useSchemaData';

const orthoSymptoms = [
  { label: 'Morning joint stiffness lasting > 30 mins', message: 'Persistent morning stiffness can be an early sign of osteoarthritis. Evaluation is recommended to preserve the joint.', isUrgent: false },
  { label: 'Clicking or locking in the knee', message: 'Mechanical symptoms like locking often indicate a meniscus tear or loose body. Avoid forceful movements and seek evaluation.', isUrgent: true },
  { label: 'Pain during daily activities (walking/stairs)', message: 'When joint pain limits daily activities, conservative treatments like physiotherapy or injections can offer significant relief.', isUrgent: false }
];

export default function OrthoCarePage() {
  useDocumentTitle('General Ortho Care & Joint Wellness - Dr Prashantkumar');
  
  useSchemaData({
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "General Ortho Care & Joint Wellness",
    "description": "Preserving natural joints through accurate diagnosis, evidence-based physiotherapy, viscosupplementation & minimal intervention at Vega Curre Clinic.",
    "about": {
      "@type": "MedicalSpecialty",
      "name": "Orthopedics"
    }
  });

  const { openAppointment, setSelectedArticle } = useOutletContext();
  const [openFaq, setOpenFaq] = useState(0);

  const page = CLINICAL_PAGES_DATA.orthocare;
  const detail = CLINICAL_DETAIL.orthocare;
  const wa = DOCTOR_INFO.contacts.whatsapp.replace(/[^0-9]/g, '');
  const waText = encodeURIComponent("Hello Dr Prashantkumar, I would like an OPD consult regarding General Ortho Care & Joint Wellness.");

  return (
    <main className="ortho-care-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ backgroundImage: `url(${detail.heroImage})` }}>
        <div className="service-hero-veil" />
        <div className="container service-hero-inner">
          <Link to="/" className="service-back">
            <ArrowLeft size={16} /> Home
          </Link>
          <div className="badge badge-cyan" style={{ marginBottom: '1rem', width: 'fit-content' }}>
            <Stethoscope size={15} /> General Orthopedics & Joint Preservation
          </div>
          <h1>{page.title}</h1>
          <p className="service-hero-lead">
            Preserving natural joints through accurate diagnosis, evidence-based physiotherapy, viscosupplementation &amp; minimal intervention.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={openAppointment}>
              <Calendar size={18} /> Book OPD Consultation
            </button>
            <a href={`https://wa.me/${wa}?text=${waText}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={18} /> WhatsApp Clinic
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar specific to Ortho Care */}
      <section style={{ background: 'var(--primary-navy)', padding: '1.5rem 0', color: '#fff' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1.5rem', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#38bdf8' }}>15+ Years</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Clinical Experience</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#38bdf8' }}>80%+ Saved</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Managed Non-Surgically</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#38bdf8' }}>Vega Curre</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Hebbal Kempapura OPD</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#38bdf8' }}>99.4%</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Patient Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-padding">
        <div className="container service-layout">
          <div className="service-main">
            <h2>Clinical Overview &amp; Philosophy</h2>
            <p className="service-overview">{detail.detailedOverview}</p>

            {/* Clinical Imagery */}
            <div className="service-photo-row">
              {detail.galleryImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`General Ortho Care Clinical Image ${index + 1}`}
                  width="320"
                  height="140"
                  loading="lazy"
                  style={{ borderRadius: '14px', objectFit: 'cover' }}
                />
              ))}
            </div>

            <ProcedureBlocks serviceKey="orthocare" />

            <h3>Who Should Seek General Ortho Evaluation?</h3>
            <ul className="service-list">
              {detail.whoNeeds.map((item) => (
                <li key={item}><CheckCircle2 size={18} color="#0284c7" /> {item}</li>
              ))}
            </ul>

            <h3>Your 4-Step Care Journey</h3>
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

            <h3>Non-Surgical Preservation Protocols</h3>
            <ul className="service-list">
              {page.nonSurgicalOptions.map((item) => (
                <li key={item}><ShieldCheck size={18} color="#0d9488" /> {item}</li>
              ))}
            </ul>

            <h3>Common Conditions Treated</h3>
            <ul className="service-list">
              {page.conditions.map((item) => (
                <li key={item}><ChevronRight size={16} color="#0284c7" /> {item}</li>
              ))}
            </ul>

            <div className="service-recovery">
              <Clock3 size={20} color="#0891b2" />
              <div>
                <strong>Recovery &amp; Relief Expectation</strong>
                <p>{detail.recovery}</p>
              </div>
            </div>

            <RelatedGuides
              articleIds={RELATED_GUIDES.orthocare}
              onOpenArticle={setSelectedArticle}
            />

            {/* Department Specific FAQs */}
            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ marginBottom: '1.25rem' }}>Frequently Asked Questions — Ortho Care</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {ORTHO_FAQS.map((faq, idx) => (
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
              <p>Experience early joint relief with personalized ortho care.</p>
              <button type="button" className="btn btn-primary" onClick={openAppointment}>
                <Calendar size={18} /> Book OPD Visit
              </button>
              <Link to="/location" className="btn btn-secondary">Get Clinic Directions</Link>
            </div>
          </div>

          {/* Aside Card */}
          <aside className="service-aside">
            <div className="service-card">
              <h4>OPD Consultation</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                Mon – Sat: 10:00 AM – 8:30 PM<br />
                Sun: 10:00 AM – 12:00 PM (Prior Appt)
              </p>
              <a href={`tel:${DOCTOR_INFO.contacts.phonePrimary}`} className="service-aside-link">
                <Phone size={16} /> {DOCTOR_INFO.contacts.phonePrimary}
              </a>
              <Link to="/location" className="service-aside-link">
                <MapPin size={16} /> Vega Curre Clinic, Hebbal
              </Link>
              <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '0.75rem' }} onClick={openAppointment}>
                <Calendar size={18} /> Schedule Consult
              </button>
              <a href={`https://wa.me/${wa}?text=${waText}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ width: '100%', marginTop: '0.5rem' }}>
                <MessageCircle size={18} /> WhatsApp Reception
              </a>
            </div>

            <div className="service-card service-card--muted" style={{ marginBottom: '1.5rem' }}>
              <h4>What to Bring to Consultation</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <li><FileText size={14} style={{ verticalAlign: '-2px', color: '#0284c7' }} /> Prior X-rays / MRI scans</li>
                <li><FileText size={14} style={{ verticalAlign: '-2px', color: '#0284c7' }} /> Blood test reports (if any)</li>
                <li><FileText size={14} style={{ verticalAlign: '-2px', color: '#0284c7' }} /> Current medication list</li>
              </ul>
              
              <button 
                type="button" 
                className="btn btn-secondary" 
                style={{ width: '100%', marginTop: '1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
                onClick={() => alert('The Joint Care Guide PDF is being prepared and will be available for download soon.')}
              >
                <FileText size={16} /> Download Joint Care Guide
              </button>
            </div>

            <SymptomChecker title="Joint Pain Checker" symptoms={orthoSymptoms} />
          </aside>
        </div>
      </section>
    </main>
  );
}
