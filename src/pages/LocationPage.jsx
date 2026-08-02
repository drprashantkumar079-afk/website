import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  MapPin, Clock, Phone, Mail, Navigation, Calendar,
  Car, Train, Bus, ExternalLink, MessageCircle, CheckCircle2
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import useOpenNow from '../hooks/useOpenNow';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function LocationPage() {
  useDocumentTitle('Location & Directions - Vega Curre Clinic Bengaluru');
  const { openAppointment } = useOutletContext();
  const { isOpen, statusLabel, dayType } = useOpenNow();

  const wa = DOCTOR_INFO.contacts.whatsapp.replace(/[^0-9]/g, '');

  return (
    <main className="location-page">
      {/* ─── Hero Header ─── */}
      <section className="loc-hero">
        <div className="loc-hero-bg" aria-hidden="true" />
        <div className="container loc-hero-inner">
          <div className="loc-hero-content">
            <p className="section-kicker" style={{ color: '#38bdf8' }}>Find Us</p>
            <h1 className="loc-hero-title">
              Visit <span className="loc-hero-accent">Vega Curre</span> Clinic
            </h1>
            <p className="loc-hero-subtitle">
              Your journey to pain-free living starts here. Walk in during OPD hours
              or book a priority appointment.
            </p>

            {/* Live Status Badge */}
            <div className="loc-status-badge-wrap">
              <div className={`loc-status-badge ${isOpen ? 'is-open' : 'is-closed'}`}>
                <span className="loc-status-dot" />
                <span>{statusLabel}</span>
              </div>
              <span className="loc-status-schedule">
                {dayType === 'sunday'
                  ? 'Sunday: 10 AM – 12 PM (Prior Appt)'
                  : 'Mon – Sat: 10 AM – 8:30 PM'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pin-to-Address Connector + Map ─── */}
      <section className="loc-map-section">
        <div className="container">

          {/* Address with Pin Connector */}
          <div className="loc-pin-connector">
            <div className="loc-pin-icon" aria-hidden="true">
              <MapPin size={32} />
            </div>
            <div className="loc-pin-line" aria-hidden="true" />
            <div className="loc-address-card">
              <h2 className="loc-address-name">Vega Curre Multispeciality Clinic</h2>
              <p className="loc-address-text">
                {DOCTOR_INFO.contacts.addressLine1}<br />
                {DOCTOR_INFO.contacts.addressLine2}<br />
                {DOCTOR_INFO.contacts.addressLine3}
              </p>
              <a
                href={DOCTOR_INFO.contacts.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="loc-directions-link"
              >
                <Navigation size={16} />
                Get Directions on Google Maps
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Full-Width Map Embed */}
          <div className="loc-map-embed">
            <iframe
              src={DOCTOR_INFO.contacts.mapsEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vega Curre Multispeciality Clinic on Google Maps"
            />
          </div>
        </div>
      </section>

      {/* ─── Info Grid: Hours, Contact, How to Reach ─── */}
      <section className="loc-info-section section-padding">
        <div className="container">
          <div className="loc-info-grid">

            {/* Clinic Hours Card */}
            <div className="loc-card loc-card--hours">
              <div className="loc-card-header">
                <Clock size={22} />
                <h3>Clinic Hours</h3>
              </div>
              <div className="loc-hours-table">
                <div className="loc-hours-row">
                  <div className="loc-hours-day">
                    <span className="loc-hours-dot loc-hours-dot--weekday" />
                    Monday – Saturday
                  </div>
                  <div className="loc-hours-time">10:00 AM – 8:30 PM</div>
                </div>
                <div className="loc-hours-row loc-hours-row--sun">
                  <div className="loc-hours-day">
                    <span className="loc-hours-dot loc-hours-dot--sunday" />
                    Sunday
                  </div>
                  <div className="loc-hours-time">
                    10:00 AM – 12:00 PM
                    <span className="loc-hours-note">Prior Appt Only</span>
                  </div>
                </div>
              </div>
              <div className={`loc-live-status ${isOpen ? 'is-open' : 'is-closed'}`}>
                <span className="loc-status-dot" />
                <span>
                  {isOpen
                    ? 'We are currently open — walk in or call ahead!'
                    : 'Currently closed — book for the next available slot.'}
                </span>
              </div>
            </div>

            {/* Contact Quick Actions */}
            <div className="loc-card loc-card--contact">
              <div className="loc-card-header">
                <Phone size={22} />
                <h3>Quick Contact</h3>
              </div>
              <div className="loc-contact-actions">
                <a href={`tel:${DOCTOR_INFO.contacts.phonePrimary}`} className="loc-action-btn loc-action-btn--call">
                  <Phone size={20} />
                  <div>
                    <span className="loc-action-label">Call Clinic</span>
                    <span className="loc-action-value">{DOCTOR_INFO.contacts.phonePrimary}</span>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${wa}?text=${encodeURIComponent('Hello, I would like to book an OPD consultation at Vega Curre Clinic.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="loc-action-btn loc-action-btn--wa"
                >
                  <MessageCircle size={20} />
                  <div>
                    <span className="loc-action-label">WhatsApp</span>
                    <span className="loc-action-value">Quick OPD Booking</span>
                  </div>
                </a>
                <a href={`mailto:${DOCTOR_INFO.contacts.email}`} className="loc-action-btn loc-action-btn--email">
                  <Mail size={20} />
                  <div>
                    <span className="loc-action-label">Email</span>
                    <span className="loc-action-value">{DOCTOR_INFO.contacts.email}</span>
                  </div>
                </a>
                <button type="button" onClick={openAppointment} className="loc-action-btn loc-action-btn--book">
                  <Calendar size={20} />
                  <div>
                    <span className="loc-action-label">Book Appointment</span>
                    <span className="loc-action-value">Schedule your OPD visit</span>
                  </div>
                </button>
              </div>
            </div>

            {/* How to Reach Us */}
            <div className="loc-card loc-card--reach">
              <div className="loc-card-header">
                <Navigation size={22} />
                <h3>How to Reach Us</h3>
              </div>
              <div className="loc-reach-items">
                <div className="loc-reach-item">
                  <div className="loc-reach-icon">
                    <Car size={20} />
                  </div>
                  <div>
                    <strong>By Car</strong>
                    <p>Located near Hebbal Flyover on Outer Ring Road. Parking available on-premises.</p>
                  </div>
                </div>
                <div className="loc-reach-item">
                  <div className="loc-reach-icon">
                    <Bus size={20} />
                  </div>
                  <div>
                    <strong>By Bus</strong>
                    <p>BMTC buses via Dasarahalli Main Road. Alight at Kempapura Bus Stop.</p>
                  </div>
                </div>
                <div className="loc-reach-item">
                  <div className="loc-reach-icon">
                    <Train size={20} />
                  </div>
                  <div>
                    <strong>By Metro</strong>
                    <p>Nearest metro: Hebbal / Kempapura (Namma Metro). Short auto-ride from station.</p>
                  </div>
                </div>
              </div>

              <div className="loc-landmarks">
                <h4>Nearby Landmarks</h4>
                <ul>
                  {DOCTOR_INFO.contacts.nearbyLandmarks.map((lm, i) => (
                    <li key={i}>
                      <CheckCircle2 size={14} />
                      {lm}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CTA Band ─── */}
      <section className="loc-cta-band">
        <div className="container loc-cta-inner">
          <div>
            <h2>Ready to Visit?</h2>
            <p>Book your consultation and take the first step toward expert orthopedic care.</p>
          </div>
          <div className="loc-cta-actions">
            <button type="button" className="btn btn-primary" onClick={openAppointment}>
              <Calendar size={18} />
              Book Appointment
            </button>
            <a href={DOCTOR_INFO.contacts.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <Navigation size={18} />
              Open in Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
