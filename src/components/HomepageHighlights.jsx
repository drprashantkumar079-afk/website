import React from 'react';
import { ArrowRight, BookOpen, Clock, Play, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ARTICLES, VIDEOS } from '../data/doctorData';
import { CONDITION_ARTICLES } from '../data/conditionBlogs';
import ScrollReveal from './ScrollReveal';

const FEATURED_ARTICLE_IDS = [
  'blog-knee-osteoarthritis',
  'tkr-trust-and-recovery',
  'nerve-health-suvarna-news',
];

const FEATURED_VIDEO_IDS = [
  'video-acl-recovery',
  'video-prp-knee',
  'video-hip-fracture',
];

function getFeaturedArticles() {
  const articles = [...CONDITION_ARTICLES, ...ARTICLES];
  return FEATURED_ARTICLE_IDS
    .map((id) => articles.find((article) => article.id === id))
    .filter(Boolean);
}

function getFeaturedVideos() {
  return FEATURED_VIDEO_IDS
    .map((id) => VIDEOS.find((video) => video.id === id))
    .filter(Boolean);
}

function handleImageError(event, fallbackSrc) {
  const image = event.currentTarget;
  if (image.dataset.fallback === 'true') return;
  image.dataset.fallback = 'true';
  image.src = fallbackSrc;
}

export default function HomepageHighlights({ onSelectArticle, onSelectVideo }) {
  const articles = getFeaturedArticles();
  const videos = getFeaturedVideos();

  return (
    <>
      <section className="home-education section-padding" aria-labelledby="home-education-title">
        <div className="container">
          <ScrollReveal variant="fade-up">
            <header className="home-section-heading">
              <div>
                <p className="section-kicker"><BookOpen size={14} /> Learn before you decide</p>
                <h2 id="home-education-title">Clear answers for important decisions</h2>
                <p className="section-lead">
                  Short, practical guides written by {articles[0]?.author || 'Dr Prashantkumar'} — so you know what to ask before your consultation.
                </p>
              </div>
              <Link to="/articles" className="home-section-link">
                Explore all guides <ArrowRight size={16} />
              </Link>
            </header>
          </ScrollReveal>

          <div className="home-article-grid">
            {articles.map((article, index) => (
              <ScrollReveal key={article.id} variant="fade-up" delay={index * 100}>
                <article className={`home-article-card${index === 0 ? ' home-article-card--featured' : ''}`}>
                  <button
                    type="button"
                    className="home-article-image-button"
                    onClick={() => onSelectArticle(article)}
                    aria-label={`Read ${article.title}`}
                  >
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      loading="lazy"
                      onError={(event) => handleImageError(event, '/Images/community-care.jpg')}
                    />
                    <span className="home-card-category">{article.category}</span>
                  </button>
                  <div className="home-article-card-body">
                    <div className="home-card-meta"><Clock size={13} /> {article.readTime}</div>
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                    <button type="button" className="home-card-read" onClick={() => onSelectArticle(article)}>
                      Read guide <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-watch section-padding" aria-labelledby="home-watch-title">
        <div className="container">
          <ScrollReveal variant="fade-up">
            <header className="home-section-heading home-section-heading--light">
              <div>
                <p className="section-kicker"><Youtube size={14} /> Watch &amp; understand</p>
                <h2 id="home-watch-title">Real explanations. Real recovery journeys.</h2>
                <p className="section-lead">
                  See how Dr Prashantkumar explains treatment, rehabilitation, and the road back to everyday life.
                </p>
              </div>
              <Link to="/videos" className="home-section-link">
                Visit video hub <ArrowRight size={16} />
              </Link>
            </header>
          </ScrollReveal>

          <div className="home-video-grid">
            {videos.map((video, index) => (
              <ScrollReveal key={video.id} variant="fade-up" delay={index * 100}>
                <article className="home-video-card">
                  <button
                    type="button"
                    className="home-video-thumb"
                    onClick={() => onSelectVideo(video)}
                    aria-label={`Watch ${video.title}`}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      onError={(event) => handleImageError(event, '/Images/doctor-clinical-team.jpg')}
                    />
                    <span className="home-video-play"><Play size={20} fill="currentColor" /></span>
                    <span className="home-card-category">{video.category}</span>
                  </button>
                  <div className="home-video-card-body">
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                    <button type="button" className="home-card-read home-card-read--light" onClick={() => onSelectVideo(video)}>
                      Watch video <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
