import React from 'react';

export default function VideoEmbed({ videoId, title, description }) {
  if (!videoId) return null;
  
  const isPlaceholder = videoId === 'PLACEHOLDER';
  
  return (
    <div className="video-embed-container" style={{ marginBottom: '2.5rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
      <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary-navy)' }}>{title}</h3>
      {description && <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>{description}</p>}
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', background: '#000', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {isPlaceholder ? (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', background: '#1e293b' }}>
            <span style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Video Placeholder</span>
            <span style={{ fontSize: '0.9rem' }}>Insert YouTube Video ID in Code</span>
          </div>
        ) : (
          <iframe 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            src={`https://www.youtube.com/embed/${videoId}?rel=0`} 
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
