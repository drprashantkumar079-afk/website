import React from 'react';
import { Calendar, MessageCircle, Phone, MapPin, Clock, Star } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import AnimatedCounter from './AnimatedCounter';

export default function FinalCtaBand({ onOpenAppointment }) {
  const wa = DOCTOR_INFO.contacts.whatsapp.replace(/[^0-9]/g, '');

  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <div>
          <p className="final-cta-kicker">
            <Star size={14} fill="currentColor" /> Ready for relief?
          </p>
          <h2>Walk with less pain, live with more confidence</h2>
          <p>
            Book a direct OPD visit at Vega Curre Clinic. Bring prior X-rays or MRI if you have them —
            reception confirms slots on WhatsApp the same day for most weekday requests.
          </p>
          <div className="final-cta-stats">
            <div>
              <strong><AnimatedCounter end={3800} suffix="+" duration={2000} /></strong>
              <span>Surgeries</span>
            </div>
            <div>
              <strong><AnimatedCounter end={99.4} suffix="%" decimals={1} duration={2000} /></strong>
              <span>Satisfaction</span>
            </div>
            <div>
              <strong><AnimatedCounter end={DOCTOR_INFO.experienceYears} suffix="+" duration={1500} /></strong>
              <span>Years</span>
            </div>
          </div>
          <p className="final-cta-address">
            <MapPin size={16} />
            {DOCTOR_INFO.contacts.addressLine1}, {DOCTOR_INFO.contacts.addressLine3}
          </p>
          <p className="final-cta-hours">
            <Clock size={14} /> {DOCTOR_INFO.contacts.opdHours}
          </p>
        </div>
        <div className="final-cta-actions">
          <button type="button" className="btn btn-primary" onClick={onOpenAppointment} style={{ background: '#fff', color: 'var(--primary-navy)', boxShadow: 'var(--shadow-md)' }}>
            <Calendar size={18} /> Book now
          </button>
          <a
            href={`https://wa.me/${wa}?text=${encodeURIComponent(`Hello ${DOCTOR_INFO.name}, I would like to book an OPD consultation.`)}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={18} /> WhatsApp Clinic
          </a>
          <a href={`tel:${DOCTOR_INFO.contacts.phonePrimary}`} className="btn btn-ghost-light">
            <Phone size={18} /> {DOCTOR_INFO.contacts.phonePrimary}
          </a>
        </div>
      </div>
    </section>
  );
}
