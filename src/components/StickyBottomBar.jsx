import React, { useEffect, useState } from 'react';
import { Phone, Calendar, MessageCircle, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DOCTOR_INFO } from '../data/doctorData';

export default function StickyBottomBar({ onOpenAppointment }) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window === 'undefined' ? true : window.innerWidth < 700
  );
  const wa = DOCTOR_INFO.contacts.whatsapp.replace(/[^0-9]/g, '');

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  if (!isMobile) return null;

  return (
    <nav id="sticky-bottom-bar" className="action-dock" aria-label="Quick actions">
      <div className="container action-dock-inner">
        <a
          href={`tel:${DOCTOR_INFO.contacts.phonePrimary}`}
          className="dock-btn dock-btn--call"
        >
          <Phone size={18} aria-hidden="true" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${wa}?text=${encodeURIComponent('Hello Dr Prashantkumar, I would like to book an OPD consultation.')}`}
          target="_blank"
          rel="noreferrer"
          className="dock-btn dock-btn--wa"
        >
          <MessageCircle size={18} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>

        <a
          href={DOCTOR_INFO.contacts.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="dock-btn dock-btn--directions"
        >
          <Navigation size={18} aria-hidden="true" />
          <span>Directions</span>
        </a>

        <Link to="/appointment" className="dock-btn dock-btn--book">
          <Calendar size={18} aria-hidden="true" />
          <span>Book OPD</span>
        </Link>
      </div>
    </nav>
  );
}
