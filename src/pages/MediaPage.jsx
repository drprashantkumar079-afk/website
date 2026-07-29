import React from 'react';
import { useOutletContext } from 'react-router-dom';
import VideosSection from '../components/VideosSection';
import SocialFeedSection from '../components/SocialFeedSection';
import PhotoGallery from '../components/PhotoGallery';
import AwardBanner from '../components/AwardBanner';
import MediaCoverage from '../components/MediaCoverage';
import MedicalCampsSection from '../components/MedicalCampsSection';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function MediaPage() {
  useDocumentTitle('Media & Events - Orthopedic Surgery');
  const { setSelectedVideo } = useOutletContext();
  return (
    <main>
      {/* Featured Award */}
      <div style={{ marginTop: '2rem' }}>
        <AwardBanner />
      </div>

      {/* Community Camps */}
      <MedicalCampsSection />

      {/* Press & Media */}
      <MediaCoverage />

      {/* Videos */}
      <VideosSection onSelectVideo={(v) => setSelectedVideo(v)} />

      {/* Photos */}
      <PhotoGallery />

      {/* Social Feed */}
      <SocialFeedSection />
    </main>
  );
}
