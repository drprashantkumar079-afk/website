import { useState, useEffect } from 'react';

/**
 * Checks if the clinic is currently open based on IST (UTC+5:30).
 * Returns { isOpen, statusLabel, dayType }
 *
 * Schedule:
 *   Mon–Sat: 10:00 AM – 8:30 PM
 *   Sun:     10:00 AM – 12:00 PM (Prior Appointment Only)
 */
function getOpenStatus() {
  // Always compute in IST regardless of user timezone
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
  const istMs = utcMs + 5.5 * 3600000;
  const ist = new Date(istMs);

  const day = ist.getDay(); // 0 = Sunday
  const hours = ist.getHours();
  const minutes = ist.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  if (day === 0) {
    // Sunday: 10:00 – 12:00
    const open = 10 * 60;  // 600
    const close = 12 * 60; // 720
    const isOpen = currentMinutes >= open && currentMinutes < close;
    return {
      isOpen,
      statusLabel: isOpen ? 'Open Now' : 'Closed',
      dayType: 'sunday',
      scheduleLabel: 'Sun: 10 AM – 12 PM (Prior Appt)'
    };
  }

  // Mon–Sat: 10:00 – 20:30
  const open = 10 * 60;      // 600
  const close = 20 * 60 + 30; // 1230
  const isOpen = currentMinutes >= open && currentMinutes < close;
  return {
    isOpen,
    statusLabel: isOpen ? 'Open Now' : 'Closed',
    dayType: 'weekday',
    scheduleLabel: 'Mon – Sat: 10 AM – 8:30 PM'
  };
}

export default function useOpenNow() {
  const [status, setStatus] = useState(getOpenStatus);

  useEffect(() => {
    // Re-check every 60 seconds
    const interval = setInterval(() => {
      setStatus(getOpenStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return status;
}
