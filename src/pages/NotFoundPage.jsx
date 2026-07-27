import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, Phone, Search } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { DOCTOR_INFO } from '../data/doctorData';

export default function NotFoundPage() {
  useDocumentTitle('Page Not Found');

  return (
    <main className="section-padding" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'rgba(12, 74, 110, 0.08)',
            display: 'grid',
            placeItems: 'center',
            margin: '0 auto 1.5rem',
            color: 'var(--accent-teal)',
          }}>
            <Search size={36} />
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '0.75rem' }}>
            Page not found
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '38ch', margin: '0 auto 2rem' }}>
            The page you're looking for doesn't exist or has been moved.
            You can book an appointment or go back to the homepage.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary">
              <Home size={18} /> Go Home
            </Link>
            <Link to="/appointment" className="btn btn-secondary">
              <Calendar size={18} /> Book Appointment
            </Link>
            <a href={`tel:${DOCTOR_INFO.contacts.phonePrimary}`} className="btn btn-secondary">
              <Phone size={18} /> Call Clinic
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
