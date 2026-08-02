import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Calendar, ArrowUp, ShieldCheck, Heart, ExternalLink, Youtube, Instagram, Facebook, Linkedin, MessageSquare } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import useOpenNow from '../hooks/useOpenNow';

export default function Footer({ onOpenAppointment }) {
  const { isOpen, statusLabel } = useOpenNow();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" style={{ background: '#0f172a', color: '#f8fafc', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr 1fr 1.1fr',
          gap: '3rem',
          marginBottom: '3.5rem'
        }} className="footer-grid">
          
          {/* Brand & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '1.3rem'
              }}>
                PK
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#ffffff' }}>
                  {DOCTOR_INFO.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: '600', letterSpacing: '0.04em' }}>
                  SENIOR ORTHOPEDIC & JOINT SURGEON
                </div>
              </div>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Director of Vega Curre Multispeciality Clinic & Visiting Senior Consultant at Manipal, Sparsh, and HOSMAT Hospitals. Specializing in TKR, THR, Keyhole Arthroscopy, and Spine Care.
            </p>

            {/* Social Icons Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <a 
                href={DOCTOR_INFO.socialLinks.youtubeChannel} 
                target="_blank" 
                rel="noreferrer"
                aria-label="YouTube Channel"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(239, 68, 68, 0.2)',
                  color: '#ef4444',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
                title="YouTube Channel"
              >
                <Youtube size={20} fill="currentColor" strokeWidth={0} aria-hidden="true" />
              </a>

              <a 
                href={DOCTOR_INFO.socialLinks.instagram} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(236, 72, 153, 0.2)',
                  color: '#fda4af',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title="Instagram @vegacurre"
              >
                <Instagram size={20} />
              </a>

              <a 
                href={DOCTOR_INFO.socialLinks.facebook} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(37, 99, 235, 0.2)',
                  color: '#3b82f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title="Facebook Page"
              >
                <Facebook size={20} fill="currentColor" strokeWidth={0} aria-hidden="true" />
              </a>

              <a 
                href={`https://wa.me/${DOCTOR_INFO.contacts.whatsapp}`} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(37, 211, 102, 0.2)',
                  color: '#25d366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title="WhatsApp Direct Consult"
              >
                <MessageSquare size={20} />
              </a>

              <a 
                href={DOCTOR_INFO.socialLinks.linkedin} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(10, 102, 194, 0.2)',
                  color: '#0a66c2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title="LinkedIn Profile"
              >
                <Linkedin size={20} fill="currentColor" strokeWidth={0} aria-hidden="true" />
              </a>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button onClick={onOpenAppointment} className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.88rem' }}>
                <Calendar size={16} /> Book OPD Visit
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', marginBottom: '1.25rem', borderBottom: '2px solid #0284c7', paddingBottom: '0.4rem', display: 'inline-block' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
              <li><Link to="/" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>About Clinic</Link></li>
              <li><Link to="/doctor" style={{ color: '#cbd5e1', textDecoration: 'none' }}>About the Surgeon</Link></li>
              <li><Link to="/orthocare" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Ortho Care</Link></li>
              <li><Link to="/joint-replacement" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Joint Replacement</Link></li>
              <li><Link to="/arthroscopy" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Arthroscopy</Link></li>
              <li><Link to="/spine-care" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Spine Care</Link></li>
              <li><Link to="/trauma-care" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Trauma Care</Link></li>
              <li><Link to="/articles" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Articles &amp; Guides</Link></li>
              <li><Link to="/appointment" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Book Appointment</Link></li>
              <li><Link to="/faqs" style={{ color: '#cbd5e1', textDecoration: 'none' }}>FAQs</Link></li>
              <li><Link to="/location" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '600' }}>📍 Location &amp; Directions</Link></li>
            </ul>
          </div>

          {/* Clinical Locations */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', marginBottom: '1.25rem', borderBottom: '2px solid #0d9488', paddingBottom: '0.4rem', display: 'inline-block' }}>
              Practicing Facilities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem', color: '#cbd5e1' }}>
              <li><strong>Vega Curre Clinic</strong> (Director)</li>
              <li><strong>Manipal Hospital</strong> (Visiting Consultant)</li>
              <li><strong>Sparsh Hospital</strong> (Visiting Consultant)</li>
              <li><strong>HOSMAT Hospital</strong> (Visiting Consultant)</li>
              <li>Total Knee Replacement (TKR)</li>
              <li>Crowe Type IV Hip Replacement</li>
              <li>ACL & Shoulder Arthroscopy</li>
            </ul>
          </div>

          {/* Contact & Map Location */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', marginBottom: '1.25rem', borderBottom: '2px solid #f59e0b', paddingBottom: '0.4rem', display: 'inline-block' }}>
              OPD Direct Helpline
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="#06b6d4" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>
                  {DOCTOR_INFO.contacts.addressLine1}<br />
                  {DOCTOR_INFO.contacts.addressLine2}<br />
                  {DOCTOR_INFO.contacts.addressLine3}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={18} color="#10b981" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <a href={`tel:${DOCTOR_INFO.contacts.phonePrimary}`} style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '700' }}>
                    {DOCTOR_INFO.contacts.phonePrimary}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={18} color="#f59e0b" />
                <a href={`mailto:${DOCTOR_INFO.contacts.email}`} style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '600' }}>
                  {DOCTOR_INFO.contacts.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Clock size={18} color="#38bdf8" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span>Mon – Sat: 10 AM – 8:30 PM</span>
                  <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Sun: 10 AM – 12 PM (Prior Appt)</span>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    fontSize: '0.78rem', fontWeight: '700',
                    color: isOpen ? '#22c55e' : '#f87171',
                    marginTop: '0.15rem'
                  }}>
                    <span style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: isOpen ? '#22c55e' : '#f87171',
                      display: 'inline-block',
                      animation: isOpen ? 'pulse-dot 2s ease-in-out infinite' : 'none'
                    }} />
                    {statusLabel}
                  </span>
                </div>
              </div>

              <a 
                href={DOCTOR_INFO.contacts.mapsUrl} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#38bdf8',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  marginTop: '0.5rem'
                }}
              >
                Get Directions on Google Maps <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* Google Maps Embed */}
        <div className="footer-map-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d77.5754!3d13.0456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17be10a60e33%3A0x7d5c2e1d6f8a8f5d!2sVega%20Curre%20Multispeciality%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vega Curre Multispeciality Clinic location on Google Maps"
          />
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} Dr Prashantkumar Orthopedics • Vega Curre Clinic. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#ffffff',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div
          className="footer-credit"
          style={{
            marginTop: '1.25rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            textAlign: 'center',
            color: '#64748b',
            fontSize: '0.78rem',
            lineHeight: 1.6
          }}
          aria-label="Website credit: Built with love by D Pradeep Kumar, AuraDigital Services and Solutions"
        >
          Built with <Heart size={12} fill="currentColor" aria-hidden="true" /> by D Pradeep Kumar (AuraDigital Services &amp; Solutions) ·{' '}
          <a href="tel:9148868413" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '700' }}>
            9148868413
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
