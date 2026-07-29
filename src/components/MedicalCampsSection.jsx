import React from 'react';
import { HeartPulse, CalendarHeart, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const IMPACT_CAMPS = [
  {
    id: 'rachenhalli',
    title: 'Rachenhalli Healthcamp',
    date: 'September 2025',
    location: 'Rachenahalli Lake Entrance, Bengaluru',
    description: 'A comprehensive outreach initiative providing free orthopedic screenings, general health checkups, and diagnostic support to the local community. Hundreds of patients received expert consultations and guidance on managing joint pain and lifestyle diseases.',
    images: [
      { id: 1, src: '/Images/camps/rachenhalli/rach 1.jpg', alt: 'Rachenahalli Free Health Camp Team' },
      { id: 2, src: '/Images/camps/rachenhalli/rach 2.jpg', alt: 'Doctor consulting patient at health camp' },
      { id: 3, src: '/Images/camps/rachenhalli/rach 3.jpg', alt: 'Orthopedic consultation at medical camp' },
      { id: 4, src: '/Images/camps/rachenhalli/rach 4.jpg', alt: 'Free Health Camp at Rachenahalli Lake' },
      { id: 5, src: '/Images/camps/rachenhalli/rach 5.jpg', alt: 'Dr Prashanth Kumar examining a senior patient' },
    ]
  },
  {
    id: 'amruthnagar',
    title: 'Amruthnagar Healthcamp',
    date: '2024',
    location: 'Amruthnagar, Bengaluru',
    description: 'Dedicated community health program offering expert orthopedic consultations, essential vitals monitoring (BP/Sugar), and physiotherapy guidance. This camp focused on making specialized care accessible to the residents of Amruthnagar.',
    images: [
      { id: 6, src: '/Images/camps/amruthahalli/Amrt1.jpg', alt: 'Amruthnagar health camp registration' },
      { id: 7, src: '/Images/camps/amruthahalli/amrt 2.jpg', alt: 'Dr Prashanth Kumar consulting patient' },
      { id: 8, src: '/Images/camps/amruthahalli/amrt3.jpg', alt: 'Camp setup and patient queue' },
      { id: 9, src: '/Images/camps/amruthahalli/amrt4.jpg', alt: 'Physiotherapy consultation desk' },
    ]
  }
];

export default function MedicalCampsSection() {
  return (
    <section className="section-padding bg-slate-50" id="medical-camps">
      <div className="container">
        <header className="section-header text-center mb-16">
          <ScrollReveal variant="fade-up">
            <p className="section-kicker flex items-center justify-center gap-2">
              <HeartPulse size={18} className="text-primary-600" />
              Community Impact
            </p>
            <h2>A Legacy of Giving Back</h2>
            <p className="section-lead mx-auto max-w-2xl mt-4">
              True healthcare goes beyond the clinic walls. Dr. Prashanth Kumar regularly leads free medical camps across Bengaluru, ensuring that expert orthopedic care and essential health screenings are accessible to all sections of society.
            </p>
          </ScrollReveal>
        </header>

        <div className="impact-timeline">
          {IMPACT_CAMPS.map((camp, index) => (
            <ScrollReveal key={camp.id} variant="fade-up" delay={index * 100}>
              <div className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index !== IMPACT_CAMPS.length - 1 && <div className="timeline-line"></div>}
                </div>
                
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="timeline-meta">
                      <span className="timeline-date"><CalendarHeart size={16} /> {camp.date}</span>
                      <span className="timeline-location"><MapPin size={16} /> {camp.location}</span>
                    </div>
                    <h3>{camp.title}</h3>
                    <p className="timeline-desc">{camp.description}</p>
                  </div>

                  <div className={`camps-gallery layout-${camp.images.length}`}>
                    {camp.images.map((img, i) => (
                      <div key={img.id} className={`camp-card camp-card-${i + 1}`}>
                        {/* Note: Amruthnagar images will need to be saved to public/Images/camps/ as amruth1.jpg etc. */}
                        <img src={img.src} alt={img.alt} className="camp-image" loading="lazy" />
                        <div className="camp-overlay">
                          <span>{camp.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
