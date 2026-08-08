import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  CheckCircle2, Calendar, MessageCircle, Phone, MapPin, ArrowLeft,
  ChevronRight, Clock3, Award, ShieldCheck, ChevronDown, ChevronUp, Bone, FileText
} from 'lucide-react';
import { DOCTOR_INFO, CLINICAL_PAGES_DATA } from '../data/doctorData';
import { CLINICAL_DETAIL, JOINT_REPLACEMENT_PROCEDURES } from '../data/clinicalContent';
import { RELATED_GUIDES } from '../data/clinicalProcedures';
import RelatedGuides from '../components/RelatedGuides';
import SymptomChecker from '../components/SymptomChecker';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useSchemaData from '../hooks/useSchemaData';

const JOINT_FAQS = [
  { q: 'Is total knee replacement permanent?', a: 'Modern implants are designed to last 20+ years. Longevity depends on alignment, activity levels, and bone quality. High-crosslinked polyethylene inserts dramatically reduce wear over time.' },
  { q: 'How long is the hospital stay?', a: 'Most patients are walking with support by the evening of surgery. Discharge typically occurs within 2–4 days. The sub-vastus technique means less muscle damage and faster return to mobility.' },
  { q: 'When can I walk without support?', a: 'Most patients wean off the walking frame by 2–3 weeks and walk independently by 4–6 weeks, depending on fitness and whether surgery was bilateral or unilateral.' },
  { q: 'Can I return to sports after TKR?', a: 'Low-impact activities like swimming, cycling, and walking are highly encouraged. High-impact sports are generally discouraged to protect implant longevity. Most patients return to temple walks and daily activities within 3 months.' },
  { q: 'Is TKR painful?', a: 'With multimodal pain management including nerve blocks, spinal anaesthesia, and oral medications, post-operative pain is well-controlled. The sub-vastus approach contributes significantly to less muscular pain than traditional techniques.' }
];

const jointSymptoms = [
  { label: 'Severe knee/hip pain that wakes me at night', message: 'Night pain is a hallmark of advanced osteoarthritis where bone-on-bone contact occurs. Standing X-rays are the first step for a proper evaluation.', isUrgent: true },
  { label: 'Limping or inability to walk long distances', message: 'Significant mobility loss affects your overall health. Modern joint replacement can restore pain-free walking and quality of life.', isUrgent: false },
  { label: 'Previous treatments (injections/physio) failed', message: 'When conservative measures are exhausted, joint replacement is often the most reliable path to regaining quality of life with implants lasting 20+ years.', isUrgent: false }
];

// Matched X-ray cases: pre-op and post-op from real patient images
const XRAY_CASES = [
  {
    src: '/Images/knee-replacement-patient-4.jpeg',
    label: 'Pre-Op X-Ray — Severe Bilateral OA',
    sub: 'Grade 4 Osteoarthritis · Complete joint space loss',
    dotColor: '#ef4444',
    tag: 'Before Surgery',
    tagColor: '#fee2e2',
    tagText: '#991b1b',
  },
  {
    src: '/Images/knee-replacement-patient-3.jpeg',
    label: 'Post-Op X-Ray — TKR Implant in Place',
    sub: 'Bilateral knee implants · Restored mechanical axis',
    dotColor: '#22c55e',
    tag: 'After Surgery',
    tagColor: '#dcfce7',
    tagText: '#166534',
  },
];

export default function JointReplacementPage() {
  useDocumentTitle('Total Knee & Complex Hip Replacement (TKR / THR) - Dr Prashantkumar');

  useSchemaData({
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Total Knee & Complex Hip Replacement — Dr Prashantkumar",
    "description": "Dr Prashantkumar (MBBS D-Ortho DNB FIJR) has performed 1,000+ knee replacements using the muscle-sparing sub-vastus approach at Manipal, Sparsh and HOSMAT hospitals, Bengaluru.",
    "about": {
      "@type": "MedicalProcedure",
      "name": "Total Knee Replacement",
      "bodyLocation": "Knee Joint",
      "procedureType": "Surgical"
    }
  });

  const { openAppointment, setSelectedArticle } = useOutletContext();
  const [openFaq, setOpenFaq] = useState(0);

  const page = CLINICAL_PAGES_DATA.jointreplacement;
  const detail = CLINICAL_DETAIL.jointreplacement;
  const wa = DOCTOR_INFO.contacts.whatsapp.replace(/[^0-9]/g, '');
  const waText = encodeURIComponent('Hello Dr Prashantkumar, I would like an OPD consult regarding Joint Replacement (TKR / THR).');

  return (
    <main className="joint-replacement-page">

      {/* ===== HERO ===== */}
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
                <Award size={15} /> FIJR · OASISCON 2018 Crowe Type IV Hip Specialist
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
                  <Calendar size={18} /> Book TKR / THR Consultation
                </button>
                <a href={`https://wa.me/${wa}?text=${waText}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                  <MessageCircle size={18} /> WhatsApp Clinic
                </a>
              </div>
            </div>

            <aside className="service-hero-rich-aside">
              <h2>Surgical portfolio</h2>
              <ul className="joint-hero-stats">
                <li><strong>1,000+</strong> knee replacements performed</li>
                <li><strong>15+ years</strong> orthopaedic surgical experience</li>
                <li><strong>FIJR</strong> — Fellowship in Joint Replacement</li>
                <li><strong>3 hospitals</strong> — Manipal, Sparsh, HOSMAT</li>
              </ul>
              <div className="service-hero-proc-group">
                <strong>Procedures offered</strong>
                <ul>
                  {JOINT_REPLACEMENT_PROCEDURES.map((p) => (
                    <li key={p.id}>
                      <a href={`#${p.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {p.title.split('—')[0].trim()}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="joint-stats-bar">
        <div className="container arthro-stats-grid">
          <div>
            <div className="arthro-stat-value">Sub-Vastus TKR</div>
            <div className="arthro-stat-label">Quadriceps tendon preserved</div>
          </div>
          <div>
            <div className="arthro-stat-value">1,000+ Knees</div>
            <div className="arthro-stat-label">High-volume replacement experience</div>
          </div>
          <div>
            <div className="arthro-stat-value">Crowe Type IV</div>
            <div className="arthro-stat-label">OASISCON 2018 presentation</div>
          </div>
          <div>
            <div className="arthro-stat-value">Day 1 Walk</div>
            <div className="arthro-stat-label">Rapid recovery when clinically safe</div>
          </div>
        </div>
      </section>

      {/* ===== INTRO BAND ===== */}
      <section className="section-padding arthro-intro-band">
        <div className="container" style={{ maxWidth: '860px' }}>
          <p className="section-kicker">Joint replacement at Vega Curre</p>
          <h2>Planned Reconstructive Surgery — Not a One-Size-Fits-All Operation</h2>
          <p className="service-overview" style={{ marginBottom: 0 }}>
            Modern joint replacement is precision engineering applied to human anatomy. Implant size, bearing surface,
            leg alignment and soft-tissue balance are planned before entering the operating theatre. Dr Prashantkumar
            discusses <strong>cruciate-retaining vs posterior-stabilised knees</strong>, <strong>unicondylar vs total
            replacement</strong>, and <strong>when hip dysplasia needs osteotomy</strong> — so families understand the
            operation, hospital stay and walking timeline before giving consent.
          </p>
        </div>
      </section>

      {/* ===== MAIN LAYOUT ===== */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container service-layout">
          <div className="service-main">

            {/* ===== OXINIUM IMPLANT FEATURED SHOWCASE ===== */}
            <div style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              borderRadius: '24px',
              color: '#ffffff',
              padding: '2rem',
              marginBottom: '3rem',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.25)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              alignItems: 'center'
            }} className="oxinium-card">
              <div>
                <span style={{
                  background: 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)',
                  color: '#ffffff',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  padding: '0.3rem 0.85rem',
                  borderRadius: '20px',
                  letterSpacing: '0.04em',
                  display: 'inline-block',
                  marginBottom: '0.75rem'
                }}>
                  ADVANCED IMPLANT TECHNOLOGY
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.85rem', lineHeight: 1.25 }}>
                  Oxinium™ Total Knee Replacement (Oxidized Zirconium)
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Actual intraoperative view of an <strong>Oxinium Total Knee Implant</strong> placed by Dr Prashantkumar. Oxinium combines the strength of metal with the smooth, wear-resistant surface of ceramic — engineered for younger active adults and long-term implant longevity.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: '#e2e8f0' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ color: '#38bdf8', fontWeight: 800 }}>✓</span>
                    <span><strong>30+ Year Expected Durability:</strong> 4,900x smoother than cobalt-chrome to minimize poly wear.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ color: '#38bdf8', fontWeight: 800 }}>✓</span>
                    <span><strong>Hypoallergenic Ceramic Surface:</strong> Zero nickel release — safe for metal-sensitive patients.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ color: '#38bdf8', fontWeight: 800 }}>✓</span>
                    <span><strong>Sub-Vastus Muscle Preservation:</strong> Preserves quadriceps tendon for faster recovery.</span>
                  </li>
                </ul>
              </div>

              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', border: '3px solid rgba(255,255,255,0.15)' }}>
                <img
                  src="/Images/oxinium-tkr-implant.jpg"
                  alt="Actual intraoperative surgical photo of Oxinium Total Knee Replacement by Dr Prashantkumar"
                  style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(15,23,42,0.95), transparent)',
                  padding: '1rem',
                  fontSize: '0.82rem',
                  color: '#f1f5f9'
                }}>
                  <strong style={{ display: 'block', color: '#38bdf8' }}>Intraoperative Photo — Dr Prashantkumar Surgery</strong>
                  <span>Oxinium Knee Implant with Polyethylene Insert in Position</span>
                </div>
              </div>
            </div>

            {/* ===== SURGERY IN ACTION — OR GALLERY ===== */}
            <div className="or-gallery-section">
              <h3>Surgery in Action — Inside the Operating Room</h3>
              <p>Real photographs from Dr Prashantkumar's active surgical sessions at Manipal, Sparsh &amp; HOSMAT hospitals.</p>
              <div className="or-gallery-grid">
                {/* Main large image: surgical team */}
                <div className="or-gallery-main">
                  <img
                    src="/Images/knee-replacement-patient-2.jpeg"
                    alt="Surgical team performing total knee replacement at partner hospital"
                    loading="lazy"
                  />
                  <div className="or-gallery-main-caption">
                    <strong>Total Knee Replacement — Live OR Session</strong>
                    <span>Sub-Vastus Muscle-Sparing Approach · Preserves Quadriceps Tendon</span>
                  </div>
                </div>
                {/* Secondary: close-up intra-op and joint-care */}
                <div className="or-gallery-secondary">
                  <div className="or-gallery-thumb">
                    <img
                      src="/Images/knee-replacement-patient-1.jpeg"
                      alt="Intra-operative close-up view of knee joint during replacement surgery"
                      loading="lazy"
                    />
                    <div className="or-gallery-thumb-label">Intra-Op View</div>
                  </div>
                  <div className="or-gallery-thumb">
                    <img
                      src="/Images/joint-care.jpg"
                      alt="Joint care clinical consultation at Vega Curre"
                      loading="lazy"
                    />
                    <div className="or-gallery-thumb-label">Joint Consultation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== BEFORE / AFTER X-RAY SHOWCASE ===== */}
            <div className="xray-showcase">
              <div className="xray-showcase-header">
                <p className="kicker">Clinical Outcomes — Real Patient Cases</p>
                <h3>Pre-Op vs Post-Op X-Rays</h3>
                <p>
                  These are actual radiographs from patients treated at Vega Curre Multispeciality Ortho Clinic.
                  They document the progression from severe osteoarthritis to a well-aligned implant.
                </p>
              </div>
              <div className="xray-cases-grid">
                {XRAY_CASES.map((c) => (
                  <div key={c.src} className="xray-case-pair">
                    <div className="xray-case-label">
                      <span className="dot" style={{ background: c.dotColor }} />
                      <div>
                        <span style={{ display: 'block' }}>{c.label}</span>
                        <small style={{ marginLeft: 0 }}>{c.sub}</small>
                      </div>
                      <span style={{
                        marginLeft: 'auto', fontSize: '0.7rem', fontWeight: 700,
                        background: c.tagColor, color: c.tagText,
                        padding: '0.2rem 0.6rem', borderRadius: '20px', whiteSpace: 'nowrap'
                      }}>
                        {c.tag}
                      </span>
                    </div>
                    <img
                      src={c.src}
                      alt={c.label}
                      className="xray-case-img"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ===== PROCEDURE CARDS ===== */}
            <div className="arthro-proc-section">
              <div className="arthro-proc-section-head">
                <Bone size={22} color="#0284c7" />
                <h2>Joint Replacement Procedures — Clinical Detail</h2>
              </div>
              <p className="arthro-proc-section-intro">
                Each procedure below includes indications, surgical approach and recovery milestones —
                written for patients who want professional clarity, not marketing copy.
              </p>

              <div className="joint-proc-stack">
                {JOINT_REPLACEMENT_PROCEDURES.map((proc, index) => (
                  <article key={proc.id} id={proc.id} className="joint-proc-card">
                    <div className="joint-proc-card-head">
                      <span className="arthro-proc-num" style={{ color: proc.color }}>
                        Procedure {index + 1}
                      </span>
                      <h3 style={{ color: proc.color }}>{proc.title}</h3>
                    </div>

                    <div className="joint-proc-detail-grid">
                      <div>
                        <strong>Indications</strong>
                        <p>{proc.indication}</p>
                      </div>
                      <div>
                        <strong>Surgical approach</strong>
                        <p>{proc.technique}</p>
                      </div>
                      <div>
                        <strong>Recovery milestones</strong>
                        <p>{proc.recovery}</p>
                      </div>
                    </div>

                    <ul className="joint-proc-bullets">
                      {proc.bullets.map((b) => (
                        <li key={b}><CheckCircle2 size={14} color={proc.color} /> {b}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            {/* ===== SURGEON'S APPROACH ===== */}
            <h2>Surgeon&apos;s Clinical Approach</h2>
            <p className="service-overview">{detail.detailedOverview}</p>

            {/* ===== WHO NEEDS EVALUATION ===== */}
            <h3>Who Needs Joint Replacement Evaluation?</h3>
            <ul className="service-list">
              {detail.whoNeeds.map((item) => (
                <li key={item}><CheckCircle2 size={18} color="#0284c7" /> {item}</li>
              ))}
            </ul>

            {/* ===== PATIENT PATHWAY ===== */}
            <h3>Pre-Operative to Discharge Pathway</h3>
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

            {/* ===== SURGICAL TECHNIQUES ===== */}
            <h3>Operative Techniques &amp; Implant Philosophy</h3>
            <ul className="service-list">
              {page.surgicalTechniques.map((item) => (
                <li key={item}><ShieldCheck size={18} color="#0d9488" /> {item}</li>
              ))}
            </ul>

            {/* ===== CONDITIONS ===== */}
            <h3>Conditions Treated</h3>
            <ul className="service-list">
              {page.conditions.map((item) => (
                <li key={item}><ChevronRight size={16} color="#0284c7" /> {item}</li>
              ))}
            </ul>

            {/* ===== RECOVERY ===== */}
            <div className="service-recovery">
              <Clock3 size={20} color="#0891b2" />
              <div>
                <strong>Typical Recovery Timelines</strong>
                <p>{detail.recovery}</p>
              </div>
            </div>

            <div className="arthro-closing-note">
              <p>
                Implant longevity depends on patient age, activity level, body weight and surgical alignment.
                Over 90% of modern TKR and THR implants function well beyond 20 years with appropriate bearing
                surfaces. Book a consultation to review your X-rays and receive a personalised surgical plan.
              </p>
            </div>

            <RelatedGuides
              articleIds={RELATED_GUIDES.jointreplacement}
              onOpenArticle={setSelectedArticle}
            />

            {/* ===== FAQ ===== */}
            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ marginBottom: '1.25rem' }}>Frequently Asked Questions — Joint Replacement</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {JOINT_FAQS.map((faq, idx) => (
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

            {/* ===== FINAL CTA ===== */}
            <div className="service-inline-cta" style={{ marginTop: '2.5rem' }}>
              <p>Bring your weight-bearing X-rays for a joint replacement opinion at Vega Curre OPD.</p>
              <button type="button" className="btn btn-primary" onClick={openAppointment}>
                <Calendar size={18} /> Schedule OPD Consultation
              </button>
              <Link to="/doctor" className="btn btn-secondary">Surgeon Credentials</Link>
            </div>
          </div>

          {/* ===== ASIDE ===== */}
          <aside className="service-aside">
            <div className="service-card">
              <h4>Consultation &amp; Surgery</h4>
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
                <Calendar size={18} /> Schedule Consult
              </button>
              <a href={`https://wa.me/${wa}?text=${waText}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ width: '100%', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                <MessageCircle size={18} /> WhatsApp Reception
              </a>
            </div>

            <SymptomChecker title="Joint Pain Checker" symptoms={jointSymptoms} />

            <div className="service-card service-card--muted">
              <h4>Procedure quick index</h4>
              <ul className="arthro-aside-links">
                {JOINT_REPLACEMENT_PROCEDURES.map((p) => (
                  <li key={p.id}><a href={`#${p.id}`}>{p.title.split('—')[0].trim()}</a></li>
                ))}
              </ul>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: '100%', marginTop: '1.5rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
                onClick={() => alert('The Pre-Op & Post-Op Checklist PDF is being prepared and will be available for download soon.')}
              >
                <FileText size={16} /> Pre-Op &amp; Post-Op Checklist
              </button>
            </div>

            <div className="service-card service-card--muted">
              <h4>What to bring</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>✓ Standing AP &amp; lateral knee/hip X-rays</li>
                <li>✓ Previous surgery records &amp; implant cards</li>
                <li>✓ Blood sugar &amp; medication list</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
