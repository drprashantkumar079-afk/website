import React, { useState } from 'react';
import { Camera, Maximize2, X, Tag } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', ...new Set(DOCTOR_INFO.images.gallery.map((g) => g.category))];

  const filteredGallery = selectedCategory === 'All'
    ? DOCTOR_INFO.images.gallery
    : DOCTOR_INFO.images.gallery.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
            <Camera size={16} /> Visual Gallery & Clinical Moments
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            Dr Prashantkumar in Action
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Explore high-resolution photographs documenting surgical procedures, OPD consultations, academic keynote speeches, and patient recovery milestones.
          </p>
        </div>

        {/* Gallery Categories */}
        <div style={{
          display: 'flex',
          gap: '0.6rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: 'pointer',
                border: 'none',
                transition: 'var(--transition)',
                background: selectedCategory === cat ? 'var(--primary-navy)' : 'var(--bg-light)',
                color: selectedCategory === cat ? '#ffffff' : 'var(--text-muted)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredGallery.map(img => (
            <div 
              key={img.id}
              onClick={() => setActiveImage(img)}
              style={{
                position: 'relative',
                height: '260px',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border-light)'
              }}
              className="gallery-item"
            >
              <img 
                src={img.src} 
                alt={img.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'var(--transition)'
                }}
              />

              {/* Hover Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)',
                opacity: 0,
                transition: 'var(--transition)',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#ffffff'
              }} className="gallery-overlay">
                
                <div style={{ alignSelf: 'flex-end' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Maximize2 size={18} color="#ffffff" />
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#38bdf8', textTransform: 'uppercase' }}>
                    {img.category}
                  </span>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#ffffff', marginTop: '0.2rem' }}>
                    {img.title}
                  </h4>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          background: 'rgba(15, 23, 42, 0.92)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div style={{ position: 'relative', maxWidth: '900px', width: '100%' }}>
            
            <button 
              onClick={() => setActiveImage(null)}
              style={{
                position: 'absolute',
                top: '-50px',
                right: '0',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              <X size={32} />
            </button>

            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#000000',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
              <img 
                src={activeImage.src} 
                alt={activeImage.title}
                style={{
                  width: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  display: 'block'
                }} 
              />
              
              <div style={{
                padding: '1.25rem 2rem',
                background: 'rgba(15, 23, 42, 0.95)',
                color: '#ffffff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '800' }}>{activeImage.title}</div>
                  <div style={{ fontSize: '0.85rem', color: '#38bdf8' }}>Category: {activeImage.category} • Dr Prashantkumar Portfolio</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      <style>{`
        .gallery-item:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-item:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
