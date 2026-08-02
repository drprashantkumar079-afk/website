import React from 'react';
import { Quote } from 'lucide-react';

export default function ServiceTestimonial({ text, author, procedure }) {
  return (
    <div style={{ marginBottom: '2.5rem', background: 'linear-gradient(135deg, #0c4a6e 0%, #082f49 100%)', color: '#fff', padding: '2rem', borderRadius: '16px', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
      <Quote size={80} color="rgba(255, 255, 255, 0.05)" style={{ position: 'absolute', top: '-10px', left: '-10px', transform: 'rotate(180deg)' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: 300 }}>"{text}"</p>
        <div>
          <strong style={{ display: 'block', color: '#38bdf8', fontSize: '1.05rem', marginBottom: '0.2rem' }}>{author}</strong>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{procedure}</span>
        </div>
      </div>
    </div>
  );
}
