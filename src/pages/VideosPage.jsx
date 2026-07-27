import React from 'react';
import { useOutletContext } from 'react-router-dom';
import VideosSection from '../components/VideosSection';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function VideosPage() {
  useDocumentTitle('Patient Education Videos - Orthopedic Surgery');
  const { setSelectedVideo } = useOutletContext();
  return (
    <main>
      <VideosSection onSelectVideo={(v) => setSelectedVideo(v)} />
    </main>
  );
}
