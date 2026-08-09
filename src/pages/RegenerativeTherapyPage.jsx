import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  CheckCircle2, Calendar, MessageCircle, Phone, MapPin, ArrowLeft,
  ChevronRight, Stethoscope, Sparkles, Activity, ShieldCheck, Award
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import SymptomChecker from '../components/SymptomChecker';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useSchemaData from '../hooks/useSchemaData';

const regenSymptoms = [
  { label: 'Persistent knee pain despite painkillers and rest', message: 'Regenerative therapy (PRP/BMAC) provides autologous growth factors to heal joint lining without surgery.', isUrgent: false },
  { label: 'Early-stage osteoarthritis (Grade 1-2 cartilage wear)', message: 'PRP and hyaluronic acid injections are most effective in early-to-moderate cartilage loss to delay surgery.', isUrgent: false },
  { label: 'Chronic tendonitis or partial ligament strain (Achilles / Patellar)', message: 'Targeted PRP injections accelerate collagen repair in recalcitrant tendon and ligament injuries.', isUrgent: true }
];

export default function RegenerativeTherapyPage() {
  useDocumentTitle('Regenerative Therapy & Biological Joint Preservation - Dr Prashantkumar');

  useSchemaData({
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Regenerative Therapy & Biological Joint Preservation",
    "description": "Advanced PRP therapy, BMAC stem cell injections, viscosupplementation and cartilage preservation at Vega Curre Clinic by Dr Prashantkumar.",
    "about": {
      "@type": "MedicalSpecialty",
      "name": "Orthopedics"
    }
  });

  const { openAppointment } = useOutletContext();
  const wa = DOCTOR_INFO.contacts.whatsapp.replace(/[^0-9]/g, '');
  const waText = encodeURIComponent("Hello Dr Prashantkumar, I would like an OPD consult regarding Regenerative Therapy (PRP / BMAC / Injections).");

  return (
    <main className="regenerative-therapy-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ backgroundImage: `url(/Images/dr-prashant-kumar-profile.jpg)`, backgroundPosition: 'center top' }}>
        <div className="service-hero-veil" />
        <div className="container service-hero-inner">
          <Link to="/" className="service-back">
            <ArrowLeft size={16} /> Home
          </Link>
          <div className="badge badge-cyan" style={{ marginBottom: '1rem', width: 'fit-content' }}>
            <Sparkles size={15} /> Biological Joint Preservation &amp; Healing
          </div>
          <h1>Regenerative Orthopedic Therapy</h1>
          <p className="service-hero-lead">
            Autologous PRP (Platelet-Rich Plasma), BMAC (Bone Marrow Concentrate), Viscosupplementation &amp; Cartilage Preservation — targeted biological treatments to restore joint function without major surgery.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={openAppointment}>
              <Calendar size={18} /> Book PRP / Biological Consult
            </button>
            <a href={`https://wa.me/${wa}?text=${waText}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={18} /> WhatsApp Clinic
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: 'var(--primary-navy)', padding: '1.5rem 0', color: '#fff' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1.5rem', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#38bdf8' }}>PRP &amp; BMAC</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Autologous Cellular Therapy</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#38bdf8' }}>Day Care</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>30-Minute OPD Procedure</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#38bdf8' }}>Zero Surgery</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Natural Tissue Regeneration</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#38bdf8' }}>Vega Curre</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Hebbal Kempapura Bengaluru</div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-padding">
        <div className="container service-layout">
          <div className="service-main">
            <h2>Clinical Overview &amp; Biological Healing</h2>
            <p className="service-overview">
              Regenerative orthopedics harnesses the body's own concentrated growth factors and cellular precursors to promote cartilage repair, reduce chronic joint inflammation, and lubricate damaged articular surfaces. Dr Prashantkumar uses high-yield double-spin PRP, viscosupplementation (hyaluronic acid), and BMAC (Bone Marrow Aspirate Concentrate) under strict sterile conditions for knee osteoarthritis, tendonitis, and shoulder cuff strains.
            </p>

            {/* Key Procedures Grid */}
            <div style={{ marginTop: '2.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1.5rem' }}>
                Regenerative Treatment Modalities
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="regen-grid">
                
                {/* PRP */}
                <div id="prp-therapy" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0369a1', marginBottom: '0.5rem' }}>
                    1. Autologous PRP Therapy (Platelet-Rich Plasma)
                  </div>
                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
                    High-concentration blood platelets containing PDGF, TGF-beta, and VEGF growth factors are injected directly into damaged cartilage or tendons, accelerating cellular repair and suppressing inflammatory cytokines.
                  </p>
                  <ul style={{ fontSize: '0.85rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <li>✓ Ideal for Grade 1–2 Knee Osteoarthritis</li>
                    <li>✓ Tennis Elbow &amp; Achilles Tendonitis</li>
                    <li>✓ Patellar Tendon Strain &amp; Plantar Fasciitis</li>
                  </ul>
                </div>

                {/* BMAC */}
                <div id="bmac-cell" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0369a1', marginBottom: '0.5rem' }}>
                    2. BMAC Stem Cell Therapy (Bone Marrow Concentrate)
                  </div>
                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
                    Aspirated bone marrow rich in mesenchymal stem cells (MSCs) and progenitor cells processed to provide powerful regenerative potential for focal cartilage defects and avascular necrosis.
                  </p>
                  <ul style={{ fontSize: '0.85rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <li>✓ Deep Cartilage &amp; Osteochondral Lesions</li>
                    <li>✓ Early Stage AVN of Hip &amp; Femoral Head</li>
                    <li>✓ Combined with Keyhole Arthroscopy</li>
                  </ul>
                </div>

                {/* Viscosupplementation */}
                <div id="visco-inj" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0369a1', marginBottom: '0.5rem' }}>
                    3. Viscosupplementation (Hyaluronic Acid Injections)
                  </div>
                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
                    High molecular weight synthetic synovial fluid injected into the joint to restore shock absorption, reduce bone-on-bone friction, and provide smooth gliding for 6 to 12 months.
                  </p>
                  <ul style={{ fontSize: '0.85rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <li>✓ Instant Knee Joint Cushioning</li>
                    <li>✓ Delays Need for Joint Replacement</li>
                    <li>✓ Safe, OPD Procedure with Zero Down Time</li>
                  </ul>
                </div>

                {/* Biological Cartilage Repair */}
                <div id="cartilage-repair" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0369a1', marginBottom: '0.5rem' }}>
                    4. Biological Cartilage Preservation
                  </div>
                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
                    Multi-disciplinary joint preservation protocols combining alignment correction, weight management, micro-fracture drilling, and targeted biological injections.
                  </p>
                  <ul style={{ fontSize: '0.85rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <li>✓ Protects Native Knee &amp; Shoulder Joints</li>
                    <li>✓ Tailored Treatment Plan per MRI Scans</li>
                    <li>✓ Active Rehabilitation Guidance</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Symptom Checker Widget */}
            <div style={{ marginTop: '3rem' }}>
              <SymptomChecker title="Regenerative Therapy Readiness Check" symptoms={regenSymptoms} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="service-aside">
            <div className="service-aside-card">
              <h3>Consultation &amp; OPD</h3>
              <p>Vega Curre Multispeciality Clinic<br />Hebbal Kempapura, Bengaluru</p>
              <div style={{ margin: '1.25rem 0' }}>
                <strong><Phone size={16} /> Direct Helpline:</strong><br />
                <a href={`tel:${DOCTOR_INFO.contacts.phonePrimary}`} style={{ color: 'var(--primary-navy)', fontWeight: 800 }}>
                  {DOCTOR_INFO.contacts.phonePrimary}
                </a>
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%' }} onClick={openAppointment}>
                <Calendar size={18} /> Schedule OPD Visit
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
