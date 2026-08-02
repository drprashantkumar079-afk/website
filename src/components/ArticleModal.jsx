import React from 'react';
import { X, Calendar, Clock, BookOpen, CheckCircle2, UserCheck, ThumbsUp } from 'lucide-react';

export default function ArticleModal({ article, onClose, onOpenAppointment }) {
  if (!article) return null;

  return (
    <div className="article-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="article-modal-title">
      <div className="article-modal-panel glass-card">
        <div className="article-modal-header">
          <div className="badge badge-cyan">
            <BookOpen size={14} aria-hidden="true" /> Medical Article &amp; Insights
          </div>

          <button type="button" onClick={onClose} className="article-modal-close" aria-label="Close article">
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="article-modal-body">
          <div className="article-modal-meta">
            <span className="article-modal-meta-category">{article.category}</span>
            <span className="article-modal-meta-item" aria-hidden="true">•</span>
            <span className="article-modal-meta-item">
              <Clock size={14} aria-hidden="true" /> {article.readTime}
            </span>
            <span className="article-modal-meta-item" aria-hidden="true">•</span>
            <span className="article-modal-meta-item">
              <Calendar size={14} aria-hidden="true" /> {article.date}
            </span>
          </div>

          <h1 id="article-modal-title" className="article-modal-title">
            {article.title}
          </h1>

          {article.coverImage && (
            <div className="article-modal-cover">
              <img src={article.coverImage} alt={article.title} loading="lazy" />
            </div>
          )}

          {article.flow && (
            <div className="article-modal-flow">
              <h4>Guide flow</h4>
              <ol>
                {article.flow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          <div className="article-modal-author">
            <img src={article.doctorPic} alt={article.author} />
            <div>
              <div className="article-modal-author-name">
                {article.author} <UserCheck size={16} color="#0284c7" aria-hidden="true" />
              </div>
              <div className="article-modal-author-role">
                Senior Orthopedic &amp; Joint Replacement Surgeon
              </div>
            </div>
          </div>

          <div className="article-modal-takeaways">
            <h4>
              <ThumbsUp size={18} color="#0284c7" aria-hidden="true" /> Key Medical Insights:
            </h4>
            <ul>
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} color="#10b981" aria-hidden="true" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="article-modal-disclaimer">
            <strong>Educational information only.</strong> This guide is not an individualized diagnosis or treatment plan. Outcomes and recovery timelines vary. Seek urgent care for progressive weakness, bladder or bowel changes, saddle numbness, major trauma or an open fracture.
          </div>

          <div
            className="article-modal-content article-html"
            dangerouslySetInnerHTML={{
              __html: article.content
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/^### (.*)$/gm, '<h3 style="font-size:1.35rem;font-weight:700;color:#0b1f33;margin:1.4rem 0 0.6rem;">$1</h3>')
                .replace(/^#### (.*)$/gm, '<h4 style="font-size:1.1rem;font-weight:700;color:#0c4a6e;margin:1.1rem 0 0.45rem;">$1</h4>')
                .replace(/^\* (.*)$/gm, '<div style="display:flex;gap:0.4rem;margin:0.35rem 0;"><span>•</span><span>$1</span></div>')
                .replace(/^\d+\. (.*)$/gm, '<div style="display:flex;gap:0.4rem;margin:0.35rem 0;"><span style="font-weight:700;color:#0c4a6e;">•</span><span>$1</span></div>')
                .replace(/\n\n/g, '<br/><br/>'),
            }}
          />

          <div className="article-modal-footer">
            <div>
              <h4>Have Questions About Your Symptoms?</h4>
              <p>Discuss your case directly with Dr Prashantkumar in OPD consultation.</p>
            </div>

            <button
              type="button"
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
