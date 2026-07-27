import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Calendar, Phone, MapPin, Clock, CheckCircle2, FileText, Stethoscope, Mail, Paperclip } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { DOCTOR_INFO } from '../data/doctorData';

export default function AppointmentPage() {
  useDocumentTitle('Book OPD Appointment - Vega Curre Clinic');
  const { openAppointment } = useOutletContext();

  return (
    <main className="appointment-page section-padding">
      <div className="container appointment-layout">
        <div>
          <p className="section-kicker">Appointments</p>
          <h1>Book an OPD visit with {DOCTOR_INFO.name}</h1>
          <p className="section-lead" style={{ textAlign: 'left', margin: '0.75rem 0 1.5rem' }}>
            Fill the form and send directly on WhatsApp to the clinic reception. No fake "request received" — your message opens WhatsApp so it actually reaches the team.
          </p>

          <BookingForm source="vegacurre.com appointment page" />
        </div>

        <aside className="service-aside">
          <div className="service-card">
            <h4>Clinic &amp; hours</h4>
            <p className="service-aside-line">
              <Clock size={16} /> {DOCTOR_INFO.contacts.opdHours}
            </p>
            <p className="service-aside-line">
              <MapPin size={16} />
              <span>
                {DOCTOR_INFO.contacts.addressLine1}<br />
                {DOCTOR_INFO.contacts.addressLine2}<br />
                {DOCTOR_INFO.contacts.addressLine3}
              </span>
            </p>
            <a href={`tel:${DOCTOR_INFO.contacts.phonePrimary}`} className="service-aside-link">
              <Phone size={16} /> {DOCTOR_INFO.contacts.phonePrimary}
            </a>
            <a href={`tel:${DOCTOR_INFO.contacts.phoneSecondary}`} className="service-aside-link">
              <Phone size={16} /> {DOCTOR_INFO.contacts.phoneSecondary}
            </a>
            <a href={`mailto:${DOCTOR_INFO.contacts.email}?subject=OPD Appointment Enquiry`} className="service-aside-link">
              <Mail size={16} /> {DOCTOR_INFO.contacts.email}
            </a>
            <a href={DOCTOR_INFO.contacts.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ width: '100%' }}>
              Open in Google Maps
            </a>
          </div>

          {/* Send Reports via Email */}
          <div className="service-card" style={{ background: 'rgba(8, 145, 178, 0.04)', borderColor: 'rgba(8, 145, 178, 0.2)' }}>
            <h4><Paperclip size={16} style={{ verticalAlign: '-2px' }} /> Send reports before visit</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.75rem', lineHeight: 1.5 }}>
              Have X-rays, MRI, or lab reports? Email them before your appointment so the doctor can review in advance.
            </p>
            <a
              href={`mailto:${DOCTOR_INFO.contacts.email}?subject=Patient Reports - Pre-Visit Review&body=Dear Dr Prashantkumar,%0A%0APlease find attached my reports for review before my upcoming appointment.%0A%0APatient Name: %0APhone: %0AAppointment Date: %0A%0AThank you.`}
              className="btn btn-secondary"
              style={{ width: '100%', fontSize: '0.88rem' }}
            >
              <Mail size={16} /> Email Reports to Clinic
            </a>
          </div>

          {/* Before You Visit — prep guide */}
          <div className="service-card service-card--muted">
            <h4><FileText size={16} style={{ verticalAlign: '-2px' }} /> Before you visit</h4>
            <ul className="before-visit-list">
              <li>Bring any previous X-rays, MRI scans, or reports</li>
              <li>List current medications and allergies</li>
              <li>Wear comfortable clothing for examination</li>
              <li>Arrive 10 min early for first-time registration</li>
              <li>Carry a valid photo ID</li>
            </ul>
          </div>

          <div className="service-card">
            <h4><Stethoscope size={16} style={{ verticalAlign: '-2px' }} /> Also available at</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Visiting consultant at Manipal, Sparsh &amp; HOSMAT Hospitals, Bengaluru.
            </p>
            <Link to="/doctor" className="service-aside-link">Meet {DOCTOR_INFO.name} →</Link>
          </div>

          <ul className="appointment-trust">
            <li><CheckCircle2 size={16} /> WhatsApp reaches clinic reception directly</li>
            <li><CheckCircle2 size={16} /> Clinic team responds during weekday hours</li>
            <li><CheckCircle2 size={16} /> Bring prior X-rays / MRI if available</li>
            <li><CheckCircle2 size={16} /> No registration fee for WhatsApp bookings</li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
