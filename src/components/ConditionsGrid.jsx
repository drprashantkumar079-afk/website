import React from 'react';
import { Activity, ArrowRight, BookOpen } from 'lucide-react';
import { CONDITIONS, CONDITION_ARTICLES } from '../data/conditionBlogs';

export default function ConditionsGrid({ onSelectArticle }) {
  const openBlog = (articleId) => {
    const article = CONDITION_ARTICLES.find((a) => a.id === articleId);
    if (article && onSelectArticle) onSelectArticle(article);
  };

  return (
    <section id="conditions" className="section-padding conditions-section">
      <div className="container">
        <header className="section-header">
          <p className="section-kicker">
            <Activity size={14} aria-hidden="true" /> Patient Care
          </p>
          <h2>What we treat</h2>
          <p className="section-lead">
            Knee pain, hip pain, back pain, shoulder problems, sports injuries, and fractures —
            tap any topic for a clear guide from Dr Prashantkumar.
          </p>
        </header>

        <div className="conditions-grid">
          {CONDITIONS.map((cond) => {
            const Icon = cond.icon;
            return (
              <button
                key={cond.id}
                type="button"
                className="condition-tile"
                onClick={() => openBlog(cond.articleId)}
              >
                <span className="condition-tile-icon" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <span className="condition-tile-copy">
                  <strong>{cond.label}</strong>
                  <em>Read guide</em>
                </span>
                <ArrowRight size={16} className="condition-tile-arrow" aria-hidden="true" />
              </button>
            );
          })}
        </div>

        <div className="conditions-footer">
          <p>Prefer browsing all articles together?</p>
          <a href="#articles" className="conditions-footer-link">
            <BookOpen size={16} /> Open Articles Hub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
