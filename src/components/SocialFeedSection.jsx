import React from 'react';
import { Youtube, Instagram, Facebook, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { DOCTOR_INFO, SOCIAL_POSTERS } from '../data/doctorData';

const CHANNELS = [
  {
    key: 'youtube',
    href: DOCTOR_INFO.socialLinks.youtubeChannel,
    label: 'YouTube Channel',
    handle: 'Dr Prashantkumar Ortho Care',
    Icon: Youtube,
    tone: 'youtube'
  },
  {
    key: 'instagram',
    href: DOCTOR_INFO.socialLinks.instagram,
    label: 'Instagram',
    handle: '@vegacurre',
    Icon: Instagram,
    tone: 'instagram'
  },
  {
    key: 'facebook',
    href: DOCTOR_INFO.socialLinks.facebook,
    label: 'Facebook',
    handle: 'Dr Prashantkumar Ortho',
    Icon: Facebook,
    tone: 'facebook'
  }
];

export default function SocialFeedSection() {
  return (
    <section id="social" className="section-padding social-section">
      <div className="container">
        <header className="section-header">
          <p className="section-kicker">Official Channels</p>
          <h2>Health education across YouTube, Instagram & Facebook</h2>
          <p className="section-lead">
            Follow Dr Prashantkumar for recovery updates, clinic posters, and live patient education.
          </p>
        </header>

        <div className="social-channels">
          {CHANNELS.map(({ key, href, label, handle, Icon, tone }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`social-channel social-channel--${tone}`}
            >
              <Icon size={28} fill={tone === 'youtube' || tone === 'facebook' ? 'currentColor' : 'none'} />
              <div>
                <strong>{label}</strong>
                <span>{handle}</span>
              </div>
              <ExternalLink size={18} />
            </a>
          ))}
        </div>

        <div className="social-grid">
          {SOCIAL_POSTERS.map((poster) => (
            <article key={poster.id} className="social-post">
              <header className="social-post-head">
                <div className={`social-avatar social-avatar--${poster.platformIcon}`}>
                  {poster.platformIcon === 'instagram' && <Instagram size={16} />}
                  {poster.platformIcon === 'youtube' && <Youtube size={16} fill="currentColor" />}
                  {poster.platformIcon === 'facebook' && <Facebook size={16} fill="currentColor" />}
                </div>
                <div>
                  <strong>{poster.handle}</strong>
                  <span>{poster.platform}</span>
                </div>
                <a href={poster.link} target="_blank" rel="noreferrer" aria-label="Open post">
                  <ExternalLink size={16} />
                </a>
              </header>

              <div className="social-post-media">
                <img src={poster.image} alt={poster.title} />
              </div>

              <div className="social-post-body">
                <h3>{poster.title}</h3>
                <p>{poster.caption}</p>
              </div>

              <footer className="social-post-foot">
                <span>
                  <Heart size={15} fill="currentColor" /> {poster.likes}
                </span>
                <span>
                  <MessageCircle size={15} /> {poster.comments}
                </span>
                <a href={poster.link} target="_blank" rel="noreferrer">
                  View post <ExternalLink size={13} />
                </a>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
