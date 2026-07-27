import React from 'react';
import { X, Calendar, Clock, BookOpen, Share2, CheckCircle2, UserCheck, ThumbsUp } from 'lucide-react';

export default function ArticleModal({ article, onClose, onOpenAppointment }) {
  if (!article) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      overflowY: 'auto'
    }}>
      <div className="glass-card" style={{
        background: '#ffffff',
        width: '100%',
        maxWidth: '850px',
        maxHeight: '90vh',
        borderRadius: '24px',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
      }}>
        
        {/* Header Sticky Control Bar */}
        <div style={{
          position: 'sticky',
          top: 0,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '1.25rem 2rem',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10
        }}>
          <div className="badge badge-cyan">
            <BookOpen size={14} /> Medical Article & Insights
          </div>

          <button 
            onClick={onClose}
            style={{
              background: '#f1f5f9',
              border: 'none',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--primary-navy)'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Article Body */}
        <div style={{ padding: '2rem 2.5rem' }}>
          
          {/* Category & Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-teal)', textTransform: 'uppercase' }}>
              {article.category}
            </span>
            <span style={{ color: 'var(--text-light)' }}>•</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Clock size={14} /> {article.readTime}
            </span>
            <span style={{ color: 'var(--text-light)' }}>•</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Calendar size={14} /> {article.date}
            </span>
          </div>

          <h1 id="article-modal-title" style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '1.5rem', lineHeight: 1.25 }}>
            {article.title}
          </h1>

          {article.coverImage && (
            <div style={{
              marginBottom: '1.75rem',
              borderRadius: '16px',
              overflow: 'hidden',
              aspectRatio: '16 / 9',
              background: '#e2e8f0'
            }}>
              <img
                src={article.coverImage}
                alt={article.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 70%',
                  display: 'block'
                }}
              />
            </div>
          )}

          {article.flow && (
            <div style={{
              marginBottom: '1.5rem',
              padding: '1rem 1.15rem',
              background: 'var(--bg-light)',
              borderRadius: '12px',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ fontWeight: 800, marginBottom: '0.5rem', color: 'var(--primary-navy)' }}>Guide flow</div>
              <ol style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                {article.flow.map((s) => <li key={s} style={{ marginBottom: '0.25rem' }}>{s}</li>)}
              </ol>
            </div>
          )}

          {/* Doctor Author Card */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.25rem',
            background: 'var(--bg-light)',
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            marginBottom: '2rem'
          }}>
            <img 
              src={article.doctorPic} 
              alt={article.author} 
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                {article.author} <UserCheck size={16} color="#0284c7" />
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Senior Orthopedic & Joint Replacement Surgeon
              </div>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div style={{
            padding: '1.5rem',
            background: 'rgba(6, 182, 212, 0.08)',
            borderLeft: '4px solid #06b6d4',
            borderRadius: '12px',
            marginBottom: '2rem'
          }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ThumbsUp size={18} color="#0284c7" /> Key Medical Insights:
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--primary-navy)' }}>
                  <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            marginBottom: '2rem',
            padding: '1rem 1.15rem',
            background: '#fff7ed',
            border: '1px solid #fed7aa',
            borderRadius: '12px',
            color: '#7c2d12',
            fontSize: '0.88rem',
            lineHeight: 1.6
          }}>
            <strong>Educational information only.</strong> This guide is not an individualized diagnosis or treatment plan. Outcomes and recovery timelines vary. Seek urgent care for progressive weakness, bladder or bowel changes, saddle numbness, major trauma or an open fracture.
          </div>

          {/* Article Main Text Content */}
          <div 
            className="article-html"
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: '#334155'
            }}
            dangerouslySetInnerHTML={{
              __html: article.content
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/^### (.*)$/gm, '<h3 style="font-size:1.35rem;font-weight:700;color:#0b1f33;margin:1.4rem 0 0.6rem;">$1</h3>')
                .replace(/^#### (.*)$/gm, '<h4 style="font-size:1.1rem;font-weight:700;color:#0c4a6e;margin:1.1rem 0 0.45rem;">$1</h4>')
                .replace(/^\* (.*)$/gm, '<div style="display:flex;gap:0.4rem;margin:0.35rem 0;"><span>•</span><span>$1</span></div>')
                .replace(/^\d+\. (.*)$/gm, '<div style="display:flex;gap:0.4rem;margin:0.35rem 0;"><span style="font-weight:700;color:#0c4a6e;">•</span><span>$1</span></div>')
                .replace(/\n\n/g, '<br/><br/>')
            }}
          />

          {/* Footer Callout */}
          <div style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-navy)' }}>Have Questions About Your Symptoms?</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Discuss your case directly with Dr Prashantkumar in OPD consultation.</p>
            </div>
            
            <button 
              onClick={() => {
                onClose();
                onOpenAppointment();
              }}
              className="btn btn-primary"
            >
              Book Direct Consultation
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
