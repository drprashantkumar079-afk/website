import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  CheckCircle2, Calendar, MessageCircle, Phone, MapPin, ArrowLeft,
  ChevronRight, Clock3, Award, ShieldCheck, Stethoscope, ChevronDown, ChevronUp, Activity, FileText
} from 'lucide-react';
import { DOCTOR_INFO, CLINICAL_PAGES_DATA } from '../data/doctorData';
import { CLINICAL_DETAIL } from '../data/clinicalContent';
import { RELATED_GUIDES } from '../data/clinicalProcedures';
import { TRAUMA_FAQS } from '../data/specialtyFaqs';
import ProcedureBlocks from '../components/ProcedureBlocks';
import RelatedGuides from '../components/RelatedGuides';
import ServiceTestimonial from '../components/ServiceTestimonial';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useSchemaData from '../hooks/useSchemaData';

export default function TraumaCarePage() {
  useDocumentTitle('Complex Trauma & Polytrauma Management - Dr Prashantkumar');
  
  useSchemaData({
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Complex Trauma & Polytrauma Management",
    "description": "High-energy road accident trauma, open compound fracture stabilization, and non-union bone reconstruction.",
    "about": {
      "@type": "MedicalSpecialty",
      "name": "Trauma Surgery"
    }
  });

  const { openAppointment, setSelectedArticle } = useOutletContext();
  const [openFaq, setOpenFaq] = useState(0);

  const page = CLINICAL_PAGES_DATA.traumacare;
  const detail = CLINICAL_DETAIL.traumacare;
  const wa = DOCTOR_INFO.contacts.whatsapp.replace(/[^0-9]/g, '');
  const waText = encodeURIComponent("Hello Dr Prashantkumar, I would like an urgent consult regarding Fracture / Trauma Care.");

  return (
    <main className="trauma-care-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ backgroundImage: `url(${detail.heroImage})` }}>
        <div className="service-hero-veil" />
        <div className="container service-hero-inner">
          <Link to="/" className="service-back">
            <ArrowLeft size={16} /> Home
          </Link>
          <div className="badge badge-cyan" style={{ marginBottom: '1rem', width: 'fit-content' }}>
            <Award size={15} /> Sabarimala Mass Casualty Relief Commendation
          </div>
          <h1>{page.title}</h1>
          <p className="service-hero-lead">
            High-energy road accident trauma, open compound fracture stabilization, MIPO titanium plating &amp; non-union bone reconstruction.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={openAppointment}>
              <Calendar size={18} /> Urgent Trauma Consult
            </button>
            <a href={`https://wa.me/${wa}?text=${waText}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={18} /> WhatsApp Emergency
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section style={{ background: 'linear-gradient(135deg, #0b1f33 0%, #dc2626 100%)', padding: '1.5rem 0', color: '#fff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', textAlign: 'center' }}>
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '800' }}>Polytrauma Expert</div>
            <div style={{ fontSize: '0.82rem', color: '#fecdd3' }}>Complex multi-bone injuries</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '800' }}>MIPO Technique</div>
            <div style={{ fontSize: '0.82rem', color: '#fecdd3' }}>Biological tissue-sparing plating</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '800' }}>Non-Union Surgery</div>
            <div style={{ fontSize: '0.82rem', color: '#fecdd3' }}>Revision &amp; bone grafting</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '800' }}>Mass Casualty Relief</div>
            <div style={{ fontSize: '0.82rem', color: '#fecdd3' }}>Sabarimala disaster honors</div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-padding">
        <div className="container service-layout">
          <div className="service-main">
            <h2>Clinical Overview &amp; Emergency Trauma Service</h2>
            <p className="service-overview">{detail.detailedOverview}</p>

            {/* Clinical Imagery */}
            <div className="service-photo-row">
              {detail.galleryImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Trauma Care Clinical Image ${index + 1}`}
                  width="320"
                  height="140"
                  loading="lazy"
                  style={{ borderRadius: '14px', objectFit: 'cover' }}
                />
              ))}
            </div>

            <ServiceTestimonial 
              text="My father had a terrible fall and suffered a compound fracture. Dr. Prashantkumar handled the emergency with such calm expertise. The surgery was successful, and seeing my father walk again after the trauma is a true blessing. We are forever grateful."
              author="Sunita M."
              procedure="Complex Fracture Fixation"
            />

            <ProcedureBlocks serviceKey="traumacare" />

            <h3>Who Needs Emergency Trauma Evaluation?</h3>
            <ul className="service-list">
              {detail.whoNeeds.map((item) => (
                <li key={item}><CheckCircle2 size={18} color="#dc2626" /> {item}</li>
              ))}
            </ul>

            <h3>Trauma Management Pathway</h3>
            <ol className="service-journey">
              {detail.journey.map((step, i) => (
                <li key={step.title}>
                  <span className="service-journey-num" style={{ background: '#dc2626' }}>{i + 1}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h3>Surgical Fixation Techniques</h3>
            <ul className="service-list">
              {page.surgicalTechniques.map((item) => (
                <li key={item}><ShieldCheck size={18} color="#0d9488" /> {item}</li>
              ))}
            </ul>

            <h3>Fracture &amp; Injury Types Treated</h3>
            <ul className="service-list">
              {page.conditions.map((item) => (
                <li key={item}><ChevronRight size={16} color="#dc2626" /> {item}</li>
              ))}
            </ul>

            <div className="service-recovery">
              <Clock3 size={20} color="#dc2626" />
              <div>
                <strong>Bone Union &amp; Rehabilitation Expectation</strong>
                <p>{detail.recovery}</p>
              </div>
            </div>

            <RelatedGuides
              articleIds={RELATED_GUIDES.traumacare}
              onOpenArticle={setSelectedArticle}
            />

            {/* Department Specific FAQs */}
            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ marginBottom: '1.25rem' }}>Frequently Asked Questions — Trauma Care</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {TRAUMA_FAQS.map((faq, idx) => (
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
                      {openFaq === idx ? <ChevronUp size={18} color="#dc2626" /> : <ChevronDown size={18} color="#64748b" />}
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

            {/* Emergency CTA */}
            <div className="service-inline-cta" style={{ marginTop: '2.5rem', background: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)', border: '1px solid #fecdd3' }}>
              <p style={{ color: '#9f1239' }}>Need urgent fracture advice or non-union revision consultation?</p>
              <button type="button" className="btn btn-primary" style={{ background: '#dc2626', borderColor: '#dc2626' }} onClick={openAppointment}>
                <Calendar size={18} /> Schedule Emergency OPD
              </button>
              <a href={`tel:${DOCTOR_INFO.contacts.phonePrimary}`} className="btn btn-secondary">Call Clinic Directly</a>
            </div>
          </div>

          {/* Aside Card */}
          <aside className="service-aside">
            <div className="service-card">
              <h4>Trauma OPD &amp; Emergency</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                OPD: Vega Curre Clinic, Hebbal<br />
                Surgery: Manipal, Sparsh &amp; HOSMAT
              </p>
              <a href={`tel:${DOCTOR_INFO.contacts.phonePrimary}`} className="service-aside-link">
                <Phone size={16} /> {DOCTOR_INFO.contacts.phonePrimary}
              </a>
              <Link to="/location" className="service-aside-link">
                <MapPin size={16} /> Vega Curre Clinic Location
              </Link>
              <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '0.75rem' }} onClick={openAppointment}>
                <Calendar size={18} /> Book Trauma Consult
              </button>
              <a href={`https://wa.me/${wa}?text=${waText}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ width: '100%', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                <MessageCircle size={18} /> WhatsApp Emergency
              </a>
            </div>
            
            <div className="service-card service-card--muted" style={{ marginBottom: '1.5rem' }}>
              <h4>Patient Resources</h4>
              <button 
                type="button" 
                className="btn btn-secondary" 
                style={{ width: '100%', marginTop: '0.5rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
                onClick={() => alert('The Fracture Care Guide PDF is being prepared and will be available for download soon.')}
              >
                <FileText size={16} /> Fracture Care Guide
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
