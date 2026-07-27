import React from 'react';
import { Youtube, Instagram, Facebook, Linkedin, ExternalLink } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

const PLATFORMS = [
  {
    key: 'youtube',
    Icon: Youtube,
    label: 'YouTube',
    handle: 'Dr Prashantkumar Ortho Care',
    stat: 'Surgical videos & patient education',
    href: DOCTOR_INFO.socialLinks.youtubeChannel,
    color: '#c4302b',
    bg: 'linear-gradient(135deg, #dc2626, #991b1b)',
  },
  {
    key: 'instagram',
    Icon: Instagram,
    label: 'Instagram',
    handle: '@dr.prashantkumar23',
    stat: '380+ followers · Reels & live updates',
    href: DOCTOR_INFO.socialLinks.instagram,
    color: '#e1306c',
    bg: 'linear-gradient(135deg, #e1306c, #833ab4)',
  },
  {
    key: 'facebook',
    Icon: Facebook,
    label: 'Facebook',
    handle: 'Dr Prashantkumar',
    stat: 'Health posts & clinic updates',
    href: DOCTOR_INFO.socialLinks.facebook,
    color: '#1877f2',
    bg: 'linear-gradient(135deg, #1877f2, #0a4da6)',
  },
  {
    key: 'linkedin',
    Icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Dr.Prashantkumar N.D',
    stat: 'Professional profile & achievements',
    href: DOCTOR_INFO.socialLinks.linkedin,
    color: '#0a66c2',
    bg: 'linear-gradient(135deg, #0a66c2, #004182)',
  },
];

export default function SocialStrip() {
  return (
    <section className="section-padding social-strip-section">
      <div className="container">
        <header className="section-header">
          <p className="section-kicker">Connect with Dr Prashantkumar</p>
          <h2>Follow for daily health tips & updates</h2>
        </header>

        <div className="social-strip-grid">
          {PLATFORMS.map(({ key, Icon, label, handle, stat, href, bg }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="social-strip-card"
              style={{ background: bg }}
            >
              <div className="social-strip-icon">
                <Icon size={28} fill={key !== 'instagram' ? 'currentColor' : 'none'} />
              </div>
              <div className="social-strip-info">
                <strong>{label}</strong>
                <span className="social-strip-handle">{handle}</span>
                <span className="social-strip-stat">{stat}</span>
              </div>
              <ExternalLink size={16} className="social-strip-ext" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
