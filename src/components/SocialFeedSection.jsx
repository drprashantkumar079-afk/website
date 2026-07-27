import React, { useEffect, useRef } from 'react';
import { Youtube, Instagram, Facebook, ExternalLink } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

const INSTAGRAM_URL = DOCTOR_INFO.socialLinks.instagram;
const FACEBOOK_URL = DOCTOR_INFO.socialLinks.facebook;
const YOUTUBE_CHANNEL = DOCTOR_INFO.socialLinks.youtubeChannel;
const UPLOADS_PLAYLIST = 'UUw9E_H95SrJf4yKK0tag1rw';

export default function SocialFeedSection() {
  const fbRef = useRef(false);
  const instaRef = useRef(false);

  useEffect(() => {
    // Load Facebook SDK once
    if (!fbRef.current) {
      fbRef.current = true;
      if (!document.getElementById('facebook-jssdk')) {
        const script = document.createElement('script');
        script.id = 'facebook-jssdk';
        script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);
      }
    }

    // Load Instagram embed script once
    if (!instaRef.current) {
      instaRef.current = true;
      if (!document.getElementById('instagram-embed-js')) {
        const script = document.createElement('script');
        script.id = 'instagram-embed-js';
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
      } else if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  }, []);

  return (
    <section id="social" className="section-padding social-section">
      <div className="container">
        <header className="section-header">
          <p className="section-kicker">Follow & Watch Live</p>
          <h2>Live feeds from YouTube, Instagram & Facebook</h2>
          <p className="section-lead">
            Watch real patient education, surgical highlights, and health tips — directly from Dr Prashantkumar's official channels.
          </p>
        </header>

        {/* Channel follow buttons */}
        <div className="social-channels">
          <a href={YOUTUBE_CHANNEL} target="_blank" rel="noreferrer" className="social-channel social-channel--youtube">
            <Youtube size={28} fill="currentColor" />
            <div>
              <strong>YouTube</strong>
              <span>Dr Prashantkumar Ortho Care</span>
            </div>
            <ExternalLink size={18} />
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="social-channel social-channel--instagram">
            <Instagram size={28} />
            <div>
              <strong>Instagram</strong>
              <span>@dr.prashantkumar23</span>
            </div>
            <ExternalLink size={18} />
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="social-channel social-channel--facebook">
            <Facebook size={28} fill="currentColor" />
            <div>
              <strong>Facebook</strong>
              <span>Dr Prashantkumar Orthopedics</span>
            </div>
            <ExternalLink size={18} />
          </a>
        </div>

        {/* Live embed grid */}
        <div className="social-embed-grid">

          {/* YouTube Live Playlist */}
          <div className="social-embed-card">
            <div className="social-embed-label">
              <Youtube size={18} fill="currentColor" color="#c4302b" />
              <span>YouTube — Latest Videos</span>
            </div>
            <div className="social-embed-frame social-embed-frame--yt">
              <iframe
                title="Dr Prashantkumar YouTube Playlist"
                src={`https://www.youtube.com/embed/videoseries?list=${UPLOADS_PLAYLIST}&rel=0`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Instagram Embed */}
          <div className="social-embed-card">
            <div className="social-embed-label">
              <Instagram size={18} color="#e1306c" />
              <span>Instagram — Posts & Reels</span>
            </div>
            <div className="social-embed-frame social-embed-frame--insta">
              <iframe
                title="Dr Prashantkumar Instagram Feed"
                src={`https://www.instagram.com/dr.prashantkumar23/embed`}
                loading="lazy"
                allowTransparency="true"
                allow="encrypted-media"
                style={{ border: 0, width: '100%', height: '100%', minHeight: '480px' }}
              />
            </div>
          </div>

          {/* Facebook Page Plugin */}
          <div className="social-embed-card social-embed-card--fb">
            <div className="social-embed-label">
              <Facebook size={18} fill="currentColor" color="#1877f2" />
              <span>Facebook — Page Feed</span>
            </div>
            <div className="social-embed-frame social-embed-frame--fb">
              <div id="fb-root"></div>
              <div
                className="fb-page"
                data-href="https://www.facebook.com/share/1C22HRDbm8/"
                data-tabs="timeline"
                data-width=""
                data-height="500"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote cite="https://www.facebook.com/share/1C22HRDbm8/" className="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/share/1C22HRDbm8/" target="_blank" rel="noreferrer">
                    Dr Prashantkumar Orthopedics
                  </a>
                </blockquote>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
