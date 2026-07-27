import React from 'react';
import { useOutletContext } from 'react-router-dom';
import FaqSection from '../components/FaqSection';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function FaqsPage() {
  useDocumentTitle('FAQs - Knee, Hip & Spine Surgery Questions');
  const { openAppointment } = useOutletContext();
  return (
    <main className="faqs-page">
      <FaqSection onOpenAppointment={openAppointment} />
    </main>
  );
}
