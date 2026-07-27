import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  const wa = DOCTOR_INFO.contacts.whatsapp.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${wa}?text=${encodeURIComponent('Hello Dr Prashantkumar, I would like to book an OPD consultation.')}`;

  useEffect(() => {
    // Show the button after 2s delay for premium feel
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    // Auto-show tooltip after 5s
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 5000);
    // Auto-hide after 12s
    const hideTimer = setTimeout(() => setShowTooltip(false), 12000);
    return () => {
      clearTimeout(tooltipTimer);
      clearTimeout(hideTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="wa-float" aria-label="WhatsApp quick connect">
      {showTooltip && (
        <div className="wa-float-tooltip">
          <button
            type="button"
            className="wa-float-tooltip-close"
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
          >
            <X size={12} />
          </button>
          <p><strong>Need help?</strong></p>
          <p>Chat with us on WhatsApp for quick OPD booking</p>
        </div>
      )}
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        className="wa-float-btn"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
