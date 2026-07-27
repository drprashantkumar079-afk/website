import React from 'react';
import PhotoGallery from '../components/PhotoGallery';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function GalleryPage() {
  useDocumentTitle('Photo Gallery - Clinic & Surgeries');
  return (
    <main className="gallery-page">
      <PhotoGallery />
    </main>
  );
}
