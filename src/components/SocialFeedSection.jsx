import React from 'react';
import { Youtube, Instagram, Facebook, Linkedin, ExternalLink, Play, Heart, Users, ArrowRight } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

const UPLOADS_PLAYLIST = 'UUw9E_H95SrJf4yKK0tag1rw';

const INSTA_POSTS = [
  { id: 1, image: '/Images/doctor-portrait-coat.jpg', type: 'post', caption: 'Orthopedic Health Education' },
  { id: 2, image: '/Images/doctor-clinical-team.jpg', type: 'reel', caption: 'Patient Recovery Updates' },
  { id: 3, image: '/Images/clinic-opd.jpg', type: 'post', caption: 'Vega Curre Clinic OPD' },
  { id: 4, image: '/Images/surgery-reconstruct.jpg', type: 'reel', caption: 'Surgical Procedures' },
  { id: 5, image: '/Images/health-camp.jpg', type: 'post', caption: 'Community Health Camps' },
  { id: 6, image: '/Images/conference.jpg', type: 'post', caption: 'Academic Conferences' },
];

export default function SocialFeedSection() {
  return (
    <section id="social" className="section-padding social-section">
      <div className="container">
        <header className="section-header">
          <p className="section-kicker">Follow & Watch Live</p>
          <h2>Live from YouTube, Instagram, Facebook & LinkedIn</h2>
          <p className="section-lead">
            Patient education, surgical highlights, and health tips — directly from Dr Prashantkumar's official channels.
          </p>
        </header>

        {/* Channel follow buttons */}
        <div className="social-channels social-channels--4">
          <a href={DOCTOR_INFO.socialLinks.youtubeChannel} target="_blank" rel="noreferrer" className="social-channel social-channel--youtube">
            <Youtube size={24} fill="currentColor" />
            <div>
              <strong>YouTube</strong>
              <span>Ortho Care</span>
            </div>
            <ExternalLink size={16} />
          </a>
          <a href={DOCTOR_INFO.socialLinks.instagram} target="_blank" rel="noreferrer" className="social-channel social-channel--instagram">
            <Instagram size={24} />
            <div>
              <strong>Instagram</strong>
              <span>@dr.prashantkumar23</span>
            </div>
            <ExternalLink size={16} />
          </a>
          <a href={DOCTOR_INFO.socialLinks.facebook} target="_blank" rel="noreferrer" className="social-channel social-channel--facebook">
            <Facebook size={24} fill="currentColor" />
            <div>
              <strong>Facebook</strong>
              <span>Dr Prashantkumar</span>
            </div>
            <ExternalLink size={16} />
          </a>
          <a href={DOCTOR_INFO.socialLinks.linkedin} target="_blank" rel="noreferrer" className="social-channel social-channel--linkedin">
            <Linkedin size={24} fill="currentColor" />
            <div>
              <strong>LinkedIn</strong>
              <span>Professional Profile</span>
            </div>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* YouTube Live Player */}
        <div className="social-feed-youtube">
          <div className="social-embed-label">
            <Youtube size={18} fill="currentColor" color="#c4302b" />
            <span>YouTube — Latest Videos</span>
          </div>
          <div className="social-feed-yt-wrap">
            <iframe
              title="Dr Prashantkumar Ortho Care — Latest Videos"
              src={`https://www.youtube.com/embed/videoseries?list=${UPLOADS_PLAYLIST}&rel=0`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Instagram Feed Grid */}
        <div className="social-feed-insta">
          <div className="social-embed-label">
            <Instagram size={18} color="#e1306c" />
            <span>Instagram — @dr.prashantkumar23</span>
            <a href={DOCTOR_INFO.socialLinks.instagram} target="_blank" rel="noreferrer" className="social-embed-follow">
              <Users size={14} /> 380 followers
            </a>
          </div>
          <div className="insta-grid">
            {INSTA_POSTS.map((post) => (
              <a
                key={post.id}
                href={DOCTOR_INFO.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="insta-grid-item"
                aria-label={post.caption}
              >
                <img src={post.image} alt={post.caption} loading="lazy" />
                {post.type === 'reel' && (
                  <span className="insta-reel-badge"><Play size={12} fill="currentColor" /> Reel</span>
                )}
                <div className="insta-grid-overlay">
                  <Heart size={16} fill="currentColor" />
                </div>
              </a>
            ))}
          </div>
          <a href={DOCTOR_INFO.socialLinks.instagram} target="_blank" rel="noreferrer" className="social-feed-more">
            View all posts on Instagram <ArrowRight size={15} />
          </a>
        </div>

        {/* Facebook + LinkedIn row */}
        <div className="social-feed-bottom">
          {/* Facebook Card */}
          <div className="social-feed-fb-card">
            <div className="social-embed-label">
              <Facebook size={18} fill="currentColor" color="#1877f2" />
              <span>Facebook Page</span>
            </div>
            <div className="fb-card-body">
              <img src={DOCTOR_INFO.images.hero} alt="Dr Prashantkumar" className="fb-card-cover" />
              <div className="fb-card-info">
                <strong>Dr Prashantkumar — Orthopedic Surgeon</strong>
                <p>Joint Replacement · Arthroscopy · Spine Care · Trauma</p>
                <p className="fb-card-meta">Health posts, patient stories & clinic updates</p>
                <a
                  href={DOCTOR_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary fb-card-btn"
                >
                  <Facebook size={16} fill="currentColor" /> Visit Facebook Page
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="social-feed-linkedin-card">
            <div className="social-embed-label">
              <Linkedin size={18} fill="currentColor" color="#0a66c2" />
              <span>LinkedIn — Professional Profile</span>
            </div>
            <div className="linkedin-card">
              <div className="linkedin-card-inner">
                <img
                  src={DOCTOR_INFO.images.portrait}
                  alt={`${DOCTOR_INFO.name} on LinkedIn`}
                  className="linkedin-card-photo"
                />
                <div className="linkedin-card-info">
                  <h3>Dr.Prashantkumar N.D</h3>
                  <p>Senior Consultant Orthopedic Surgeon</p>
                  <p className="linkedin-card-org">Aster Hospitals, Bengaluru · Vega Curre Clinic</p>
                  <a
                    href={DOCTOR_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary linkedin-card-btn"
                  >
                    <Linkedin size={16} fill="currentColor" /> View LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
