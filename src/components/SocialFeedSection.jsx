import React, { useEffect, useRef } from 'react';
import { Youtube, Instagram, Facebook, Linkedin, ExternalLink } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

const INSTAGRAM_USERNAME = 'dr.prashantkumar23';
const FB_PAGE_URL = 'https://www.facebook.com/dr.prashantkumar23';

export default function SocialFeedSection() {
  const fbLoaded = useRef(false);

  useEffect(() => {
    // Load Facebook SDK for Page Plugin
    if (!fbLoaded.current) {
      fbLoaded.current = true;
      window.fbAsyncInit = function () {
        window.FB.init({ xfbml: true, version: 'v18.0' });
      };
      if (!document.getElementById('facebook-jssdk')) {
        const script = document.createElement('script');
        script.id = 'facebook-jssdk';
        script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);
      } else if (window.FB) {
        window.FB.XFBML.parse();
      }
    }
  }, []);

  return (
    <section id="social" className="section-padding social-section">
      <div className="container">
        <header className="section-header">
          <p className="section-kicker">Follow & Watch Live</p>
          <h2>Live from Instagram, Facebook & LinkedIn</h2>
          <p className="section-lead">
            Patient education, surgical highlights, reels, and health tips — directly from Dr Prashantkumar's verified profiles.
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

        {/* Live embed grid */}
        <div className="social-embed-grid">

          {/* Instagram — individual post embeds (scrollable feed style) */}
          <div className="social-embed-card">
            <div className="social-embed-label">
              <Instagram size={18} color="#e1306c" />
              <span>Instagram — Latest Posts</span>
            </div>
            <div className="social-embed-frame social-embed-frame--insta-feed">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '12px',
                  margin: '0 auto',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: 0,
                  width: '100%'
                }}
              >
                <a href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`} target="_blank" rel="noreferrer">
                  View @{INSTAGRAM_USERNAME} on Instagram
                </a>
              </blockquote>
              <script async src="https://www.instagram.com/embed.js"></script>
            </div>
          </div>

          {/* Facebook Page Plugin — timeline feed */}
          <div className="social-embed-card">
            <div className="social-embed-label">
              <Facebook size={18} fill="currentColor" color="#1877f2" />
              <span>Facebook — Page Feed</span>
            </div>
            <div className="social-embed-frame social-embed-frame--fb">
              <div id="fb-root"></div>
              <div
                className="fb-page"
                data-href={FB_PAGE_URL}
                data-tabs="timeline,events"
                data-width="500"
                data-height="600"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote cite={FB_PAGE_URL} className="fb-xfbml-parse-ignore">
                  <a href={FB_PAGE_URL} target="_blank" rel="noreferrer">
                    Dr Prashantkumar — Orthopedic Surgeon
                  </a>
                </blockquote>
              </div>
            </div>
          </div>

        </div>

        {/* LinkedIn Profile Card */}
        <div className="social-embed-linkedin">
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
    </section>
  );
}
