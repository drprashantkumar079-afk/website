import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import { trackEvent } from '../utils/analytics';

const SPECIALTIES = [
  'Total Knee Replacement (TKR)',
  'Total Hip Replacement (THR)',
  'Arthroscopy & ACL Ligament Surgery',
  'Complex Trauma & Fracture Care',
  'Cervical Spondylosis & Spine Rehab',
  'General Joint Pain Consultation',
];

const TIME_SLOTS = [
  'Morning (10 AM – 1 PM)',
  'Afternoon (1 PM – 5 PM)',
  'Evening (5 PM – 8:30 PM)',
  'Sunday (10 AM – 12 PM, Prior Appt)',
];

/**
 * Reusable booking form component.
 * @param {Object} props
 * @param {string} props.source - Source identifier for WhatsApp message
 * @param {Function} [props.onSent] - Callback after WhatsApp opens
 * @param {string} [props.submitLabel] - Custom submit button text
 */
export default function BookingForm({ source = 'website', onSent, submitLabel }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    specialty: SPECIALTIES[0],
    preferredDate: '',
    preferredTime: TIME_SLOTS[0],
    notes: '',
  });

  const waDigits = DOCTOR_INFO.contacts.whatsapp.replace(/[^0-9]/g, '');

  const buildMessage = () =>
    [
      `Hello ${DOCTOR_INFO.name},`,
      '',
      'I would like to book an OPD consultation:',
      '',
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Specialty/Issue:* ${formData.specialty}`,
      `*Preferred Date:* ${formData.preferredDate || 'Flexible'}`,
      `*Preferred Time:* ${formData.preferredTime}`,
      `*Notes:* ${formData.notes || '—'}`,
      '',
      `Sent from ${source}`,
    ].join('\n');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    trackEvent('generate_lead', {
      method: 'whatsapp',
      form_name: 'appointment_booking',
      specialty: formData.specialty || 'general_orthopedic_consultation',
    });
    window.open(
      `https://wa.me/${waDigits}?text=${encodeURIComponent(buildMessage())}`,
      '_blank',
      'noopener,noreferrer'
    );
    if (onSent) onSent();
  };

  const update = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <label>
        Patient full name *
        <input
          required
          value={formData.name}
          onChange={update('name')}
          placeholder="Enter full name"
          autoComplete="name"
        />
      </label>
      <label>
        Mobile / WhatsApp *
        <input
          required
          type="tel"
          value={formData.phone}
          onChange={update('phone')}
          placeholder="10-digit mobile"
          autoComplete="tel"
          pattern="[0-9]{10}"
          title="Enter a valid 10-digit mobile number"
        />
      </label>
      <label>
        Specialty / concern *
        <select value={formData.specialty} onChange={update('specialty')}>
          {SPECIALTIES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <div className="appointment-row">
        <label>
          Preferred date
          <input
            type="date"
            value={formData.preferredDate}
            onChange={update('preferredDate')}
            min={new Date().toISOString().split('T')[0]}
          />
        </label>
        <label>
          OPD slot
          <select value={formData.preferredTime} onChange={update('preferredTime')}>
            {TIME_SLOTS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Symptoms / notes (optional)
        <textarea
          rows={3}
          value={formData.notes}
          onChange={update('notes')}
          placeholder="Duration of pain, X-ray findings, previous surgeries…"
        />
      </label>
      <button type="submit" className="btn btn-whatsapp" style={{ width: '100%' }}>
        <MessageCircle size={18} /> {submitLabel || 'Send booking on WhatsApp'}
      </button>
      <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', textAlign: 'center', margin: '0.5rem 0 0' }}>
        Or email us at <a href={`mailto:${DOCTOR_INFO.contacts.email}?subject=OPD Appointment Request`} style={{ color: 'var(--accent-teal)', fontWeight: 650 }}>{DOCTOR_INFO.contacts.email}</a>
      </p>
    </form>
  );
}
