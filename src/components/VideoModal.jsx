import React from 'react';
import { X, Play, CheckCircle2, Youtube, Calendar } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

/** Channel uploads playlist = UC… → UU… */
const UPLOADS_PLAYLIST = 'UUw9E_H95SrJf4yKK0tag1rw';

export default function VideoModal({ video, onClose, onOpenAppointment }) {
  if (!video) return null;

  const youtubeUrl = video.youtubeUrl || DOCTOR_INFO.socialLinks.youtubeChannel;
  const embedSrc = video.youtubeId
    ? `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`
    : `https://www.youtube.com/embed/videoseries?list=${UPLOADS_PLAYLIST}&rel=0`;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal-panel video-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
      >
        <header className="modal-head">
          <div className="modal-head-label">
            <span className="youtube-dot">
              <Play size={14} fill="currentColor" />
            </span>
            Orthopedic Video Guide
          </div>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </header>

        <div className="video-modal-stage video-modal-stage--embed">
          <iframe
            title={video.title}
            src={embedSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="video-modal-body">
          <h3 id="video-modal-title" style={{ marginBottom: '0.5rem' }}>{video.title}</h3>
          <p>{video.description}</p>

          <ul className="video-modal-points">
            {video.highlights.map((point) => (
              <li key={point}>
                <CheckCircle2 size={16} />
                {point}
              </li>
            ))}
          </ul>

          <div className="video-modal-actions">
            <div className="video-author">
              <img src={video.doctorPic} alt="" />
              <div>
                <strong>{DOCTOR_INFO.name}</strong>
                <span>Senior Orthopedic Surgeon · Vega Curre</span>
              </div>
            </div>
            <div className="video-modal-btns">
              <a href={youtubeUrl} target="_blank" rel="noreferrer" className="btn btn-youtube">
                <Youtube size={18} fill="currentColor" />
                {video.youtubeId ? 'Watch on YouTube' : 'Channel'}
              </a>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  onClose();
                  onOpenAppointment();
                }}
              >
                <Calendar size={18} /> Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
