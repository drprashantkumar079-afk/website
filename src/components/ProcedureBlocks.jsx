import React from 'react';
import { PROCEDURE_BLOCKS } from '../data/clinicalProcedures';

const THEME_BG = {
  default: { section: '#f8fafc', border: '#e2e8f0' },
  blue: { section: '#f0f9ff', border: '#bae6fd' },
  red: { section: '#fff1f2', border: '#fecdd3' },
  sky: { section: '#f0f9ff', border: '#bae6fd' }
};

export default function ProcedureBlocks({ serviceKey }) {
  const block = PROCEDURE_BLOCKS[serviceKey];
  if (!block) return null;

  const theme = THEME_BG[block.theme] || THEME_BG.default;

  return (
    <div
      className="procedure-blocks-section"
      style={{
        margin: '2.5rem 0',
        background: theme.section,
        padding: '2rem',
        borderRadius: '20px',
        border: `1px solid ${theme.border}`
      }}
    >
      <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
        {block.title}
      </h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
        {block.intro}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {block.items.map((item, index) => (
          <div
            key={item.id}
            id={item.id}
            className="procedure-block-card"
            style={{
              background: '#ffffff',
              padding: '1.25rem 1.5rem',
              borderRadius: '14px',
              border: '1px solid #cbd5e1'
            }}
          >
            <h4 style={{ color: item.color, fontSize: '1.1rem', marginBottom: '0.3rem' }}>
              {index + 1}. {item.title}
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: item.bullets ? '0.75rem' : 0 }}>
              {item.body}
            </p>
            {item.bullets && (
              <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {block.extraItems && block.extraItems.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-navy)', marginBottom: '1rem' }}>
            {block.extraTitle}
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {block.extraItems.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="procedure-block-card procedure-block-card--compact"
                style={{
                  background: '#ffffff',
                  padding: '1rem 1.15rem',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0'
                }}
              >
                <strong style={{ display: 'block', color: '#0369a1', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                  {item.title}
                </strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function ProcedureBlocksPlaceholder() {
  return null;
}
