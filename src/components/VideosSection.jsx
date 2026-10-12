import React, { useMemo, useState } from 'react';
import { Play, Clock, Youtube, ExternalLink } from 'lucide-react';
import { VIDEOS, DOCTOR_INFO } from '../data/doctorData';
import { TOPIC_IMAGES } from '../data/clinicalContent';

const CHANNEL_ID = 'UCw9E_H95SrJf4yKK0tag1rw';
const UPLOADS_PLAYLIST = 'UUw9E_H95SrJf4yKK0tag1rw';

/** Topic-matched thumbnails when local assets are generic */
const TOPIC_THUMBS = {
  'Spine Care': TOPIC_IMAGES.spine,
  'Joint Replacement': TOPIC_IMAGES.hip,
  'Sports Medicine': TOPIC_IMAGES.sports,
  'Knee Care': TOPIC_IMAGES.knee,
  'Trauma Care': TOPIC_IMAGES.trauma
};

function handleImageError(event, fallbackSrc) {
  const image = event.currentTarget;
  if (image.dataset.fallback === 'true') return;
  image.dataset.fallback = 'true';
  image.src = fallbackSrc;
}

export default function VideosSection({ onSelectVideo }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeVideoId, setActiveVideoId] = useState(VIDEOS[0]?.youtubeId || 'Wp0qqyQVQxE');
  const activeVideo = VIDEOS.find((v) => v.youtubeId === activeVideoId) || VIDEOS[0];

  const categories = useMemo(
    () => ['All', ...new Set(VIDEOS.map((v) => v.category))],
    []
  );

  const filtered =
    selectedCategory === 'All'
      ? VIDEOS
      : VIDEOS.filter((v) => v.category === selectedCategory);

  const handlePlayVideo = (video, thumb) => {
    setActiveVideoId(video.youtubeId);
    if (onSelectVideo) {
      onSelectVideo({ ...video, thumbnail: thumb });
    }
  };

  return (
    <section id="videos" className="section-padding videos-section">
      <div className="container">
        <header className="section-header">
          <p className="section-kicker">Video Hub</p>
          <h2>Watch on YouTube — {activeVideo.title}</h2>
          <p className="section-lead">
            Real clinic videos — Asianet Suvarna News public health talks, ACL recovery, knee PRP, fractures, hip fixation and more. Click any video below to play.
          </p>
        </header>

        <div className="yt-live-wrap">
          <iframe
            title={activeVideo.title || "Dr Prashantkumar Ortho Care — YouTube"}
            src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem', margin: '1.5rem 0 2.5rem 0' }}>
          <a
            href={activeVideo.youtubeUrl || DOCTOR_INFO.socialLinks.youtubeChannel}
            target="_blank"
            rel="noreferrer"
            className="youtube-banner"
            style={{ margin: 0 }}
          >
            <div className="youtube-banner-icon">
              <Youtube size={28} fill="currentColor" />
            </div>
            <div className="youtube-banner-copy">
              <strong>Dr Prashantkumar Ortho Care</strong>
              <span>Subscribe for surgical lectures &amp; recovery guides</span>
            </div>
            <span className="youtube-banner-cta">
              Open on YouTube <ExternalLink size={16} />
            </span>
          </a>

          <a
            href={DOCTOR_INFO.socialLinks.suvarnaPlaylist}
            target="_blank"
            rel="noreferrer"
            className="youtube-banner"
            style={{
              margin: 0,
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              borderColor: 'rgba(220,38,38,0.4)'
            }}
          >
            <div className="youtube-banner-icon" style={{ background: '#dc2626', color: '#ffffff' }}>
              <Youtube size={28} fill="currentColor" />
            </div>
            <div className="youtube-banner-copy">
              <strong style={{ color: '#ffffff' }}>Asianet Suvarna News Playlist</strong>
              <span style={{ color: '#cbd5e1' }}>Watch "Dear Doctor" nerve &amp; spine public health broadcast</span>
            </div>
            <span className="youtube-banner-cta" style={{ background: '#dc2626', color: '#ffffff' }}>
              Watch Playlist <ExternalLink size={16} />
            </span>
          </a>
        </div>

        <div className="filter-row videos-filters" role="tablist" aria-label="Video categories">
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

        <div className="videos-grid">
          {filtered.map((video) => {
            const thumb = video.thumbnail || TOPIC_THUMBS[video.category];
            const fallbackThumb = TOPIC_THUMBS[video.category] || TOPIC_IMAGES.clinic;
            const isPlaying = activeVideoId === video.youtubeId;
            return (
              <article key={video.id} className={`video-tile ${isPlaying ? 'is-playing' : ''}`}>
                <button
                  type="button"
                  className="video-thumb"
                  onClick={() => handlePlayVideo(video, thumb)}
                  aria-label={`Play ${video.title}`}
                >
                  <img
                    src={thumb}
                    alt={video.title}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src = fallbackThumb;
                      event.currentTarget.dataset.fallback = 'true';
                    }}
                  />
                  <span className="video-play">
                    <Play size={22} fill="currentColor" />
                  </span>
                  <span className="video-duration">
                    <Clock size={12} /> {video.duration}
                  </span>
                  <span
                    className="video-cat"
                    style={video.badge ? { background: '#dc2626', color: '#ffffff', fontWeight: 700 } : {}}
                  >
                    {video.badge || video.category}
                  </span>
                </button>
                <div className="video-body">
                  <h3>
                    <button type="button" onClick={() => onSelectVideo({ ...video, thumbnail: thumb })}>
                      {video.title}
                    </button>
                  </h3>
                  <p>{video.description}</p>
                  <div className="video-footer">
                    <div className="video-author">
                      <img src={video.doctorPic} alt="" />
                      <span>Dr Prashantkumar</span>
                    </div>
                    <a
                      href={video.youtubeUrl || `https://www.youtube.com/channel/${CHANNEL_ID}`}
                      target="_blank"
                      rel="noreferrer"
                      className="youtube-mini"
                      aria-label="Open on YouTube"
                    >
                      <Youtube size={16} fill="currentColor" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
