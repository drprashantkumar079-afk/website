import React, { useMemo, useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/doctorData';
import { CONDITION_ARTICLES } from '../data/conditionBlogs';
import { TOPIC_IMAGES } from '../data/clinicalContent';

const COVER_BY_CATEGORY = {
  'Knee Care': TOPIC_IMAGES.knee,
  'Knee Replacement': TOPIC_IMAGES.knee,
  'Joint Replacement': TOPIC_IMAGES.hip,
  'Spine Care': TOPIC_IMAGES.spine,
  'Sports Medicine': TOPIC_IMAGES.sports,
  'Trauma Care': TOPIC_IMAGES.trauma,
  'General Orthopedics': TOPIC_IMAGES.clinic
};

export default function ArticlesSection({ onSelectArticle }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const allArticles = useMemo(() => {
    const merged = [...CONDITION_ARTICLES, ...ARTICLES].map((a) => ({
      ...a,
      coverImage: a.coverImage || COVER_BY_CATEGORY[a.category] || TOPIC_IMAGES.consult,
      flow: a.flow || ['Understand the problem', 'When to see a specialist', 'Treatment options', 'Recovery expectations']
    }));
    return merged.sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title));
  }, []);

  const categories = ['All', ...new Set(allArticles.map((a) => a.category))];

  const filteredArticles = allArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      article.title.toLowerCase().includes(q) ||
      article.summary.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const [featured, ...rest] = filteredArticles;

  return (
    <section id="articles" className="section-padding articles-section">
      <div className="container">
        <header className="section-header">
          <p className="section-kicker">Patient Education</p>
          <h2>Medical articles &amp; condition guides</h2>
          <p className="section-lead">
            Organised by specialty — each guide follows a clear flow: problem → red flags → options → recovery.
          </p>
        </header>

        <div className="articles-toolbar">
          <div className="filter-row" role="tablist" aria-label="Article categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`filter-chip ${selectedCategory === cat ? 'is-active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <label className="search-field">
            <span className="sr-only">Search articles</span>
            <input
              type="search"
              placeholder="Search knee, spine, ACL…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
        </div>

        {featured ? (
          <article
            className="article-featured"
            role="button"
            tabIndex={0}
            aria-label={`Read ${featured.title}`}
            onClick={() => onSelectArticle(featured)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onSelectArticle(featured);
              }
            }}
          >
            <div className="article-featured-media">
              <img src={featured.coverImage} alt={featured.title} loading="lazy" />
            </div>
            <div className="article-featured-body">
              <div className="article-meta">
                <span className="article-cat">{featured.category}</span>
                <span className="article-read">
                  <Clock size={14} /> {featured.readTime}
                </span>
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.summary}</p>
              <ol className="article-flow">
                {featured.flow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className="article-author-row">
                <img src={featured.doctorPic} alt="" />
                <div>
                  <strong>{featured.author}</strong>
                  <span>{featured.date}</span>
                </div>
                <span className="article-cta">
                  Read full guide <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </article>
        ) : (
          <p className="empty-state">No articles match your search.</p>
        )}

        {rest.length > 0 && (
          <div className="articles-grid">
            {rest.map((article) => (
              <article
                key={article.id}
                className="article-tile"
                role="button"
                tabIndex={0}
                aria-label={`Read ${article.title}`}
                onClick={() => onSelectArticle(article)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelectArticle(article);
                  }
                }}
              >
                <div className="article-tile-media">
                  <img src={article.coverImage} alt={article.title} loading="lazy" />
                  <span className="article-cat">{article.category}</span>
                </div>
                <div className="article-tile-body">
                  <div className="article-meta">
                    <span className="article-read">
                      <Clock size={14} /> {article.readTime}
                    </span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <div className="article-author-row compact">
                    <img src={article.doctorPic} alt="" />
                    <strong>{article.author}</strong>
                    <span className="article-cta">
                      Read <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
