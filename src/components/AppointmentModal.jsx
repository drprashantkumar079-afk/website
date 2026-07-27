import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, CheckCircle2, Mail } from 'lucide-react';
import BookingForm from './BookingForm';
import { DOCTOR_INFO } from '../data/doctorData';

export default function AppointmentModal({ isOpen, onClose }) {
  const [sentHint, setSentHint] = useState(false);
  const dialogRef = useRef(null);

  // Trap focus and handle Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeAll();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const waDigits = DOCTOR_INFO.contacts.whatsapp.replace(/[^0-9]/g, '');

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${waDigits}?text=${encodeURIComponent(`Hello ${DOCTOR_INFO.name}, I would like to book an OPD consultation.`)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const closeAll = () => {
    setSentHint(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={closeAll} role="presentation">
      <div
        ref={dialogRef}
        className="modal-panel"
        style={{ maxWidth: 650 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="appt-title"
      >
        <div className="appt-modal-head">
          <div>
            <div className="appt-modal-eyebrow">Direct OPD booking</div>
            <h3 id="appt-title">Book with {DOCTOR_INFO.name}</h3>
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={closeAll}
            aria-label="Close booking dialog"
            style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: '1.75rem' }}>
          {sentHint ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
              <CheckCircle2 size={40} color="#0f766e" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ marginBottom: '0.5rem' }}>WhatsApp opened</h4>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Tap <strong>Send</strong> in WhatsApp to deliver your request to clinic reception.
                If WhatsApp did not open, use the button below again.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button type="button" className="btn btn-whatsapp" onClick={openWhatsApp}>
                  <MessageCircle size={18} /> Open WhatsApp again
                </button>
                <button type="button" className="btn btn-secondary" onClick={closeAll}>Done</button>
              </div>
              <div style={{ marginTop: '1.25rem', padding: '0.85rem 1rem', background: 'var(--bg-light)', borderRadius: '12px', textAlign: 'left' }}>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                  <strong style={{ color: 'var(--primary-navy)' }}>Have X-rays or reports?</strong> Email them to{' '}
                  <a href={`mailto:${DOCTOR_INFO.contacts.email}?subject=Patient Reports - Pre-Visit Review`} style={{ color: 'var(--accent-teal)', fontWeight: 700 }}>
                    {DOCTOR_INFO.contacts.email}
                  </a>{' '}
                  so the doctor can review before your visit.
                </p>
              </div>
            </div>
          ) : (
            <>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Submitting opens WhatsApp with your details pre-filled — nothing is stored as a fake "success."
              </p>
              <BookingForm
                source="website booking modal"
                submitLabel="Send on WhatsApp"
                onSent={() => setSentHint(true)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
