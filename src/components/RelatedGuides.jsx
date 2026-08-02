import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import { CONDITION_ARTICLES } from '../data/conditionBlogs';

export default function RelatedGuides({ articleIds, onOpenArticle }) {
  const articles = articleIds
    .map((id) => CONDITION_ARTICLES.find((a) => a.id === id))
    .filter(Boolean);

  if (articles.length === 0) return null;

  return (
    <div className="related-guides" style={{ marginTop: '2.5rem' }}>
      <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <FileText size={20} color="#0284c7" />
        Related Patient Guides
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
        {articles.map((article) => (
          <button
            key={article.id}
            type="button"
            onClick={() => onOpenArticle(article)}
            className="related-guide-card"
            style={{
              textAlign: 'left',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '14px',
              padding: '1rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              transition: 'border-color 0.2s, box-shadow 0.2s'
            }}
          >
            <img
              src={article.coverImage}
              alt=""
              width="280"
              height="120"
              loading="lazy"
              style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '10px' }}
            />
            <strong style={{ fontSize: '0.92rem', color: 'var(--primary-navy)', lineHeight: 1.4 }}>
              {article.title}
            </strong>
            <span style={{ fontSize: '0.8rem', color: '#0284c7', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              Read full guide <ArrowRight size={14} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
