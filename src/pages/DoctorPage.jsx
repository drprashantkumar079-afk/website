import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Calendar, Award, Building2 } from 'lucide-react';
import AboutCredentials from '../components/AboutCredentials';
import MediaCoverage from '../components/MediaCoverage';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { DOCTOR_INFO } from '../data/doctorData';

export default function DoctorPage() {
  useDocumentTitle('About - Senior Orthopedic Surgeon Bengaluru');
  const { openAppointment } = useOutletContext();

  return (
    <main>
      <section className="doctor-page-hero section-padding">
        <div className="container doctor-page-hero-inner">
          <img src={DOCTOR_INFO.images.about} alt={DOCTOR_INFO.name} className="doctor-page-portrait" />
          <div>
            <p className="section-kicker">About the surgeon</p>
            <h1>{DOCTOR_INFO.name}</h1>
            <p className="doctor-page-title">{DOCTOR_INFO.title}</p>
            <p className="doctor-page-quals">{DOCTOR_INFO.qualifications}</p>
            <p className="doctor-page-practice">
              Also performs keyhole arthroscopy &amp; sports injury surgery in clinical practice.
            </p>
            <ul className="doctor-page-roles">
              {DOCTOR_INFO.roles.map((role) => (
                <li key={role}>
                  <Building2 size={16} /> {role}
                </li>
              ))}
            </ul>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary" onClick={openAppointment}>
                <Calendar size={18} /> Book Appointment
              </button>
              <Link to="/appointment" className="btn btn-secondary">Full booking page</Link>
            </div>
            <p className="doctor-page-stat">
              <Award size={16} /> {DOCTOR_INFO.experienceYears}+ years · {DOCTOR_INFO.surgeriesCount} surgeries · {DOCTOR_INFO.satisfactionRate} satisfaction
            </p>
          </div>
        </div>
      </section>
      <AboutCredentials />
      <MediaCoverage />
    </main>
  );
}
