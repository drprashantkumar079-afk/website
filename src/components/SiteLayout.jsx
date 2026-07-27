import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyBottomBar from './StickyBottomBar';
import WhatsAppFloat from './WhatsAppFloat';
import AppointmentModal from './AppointmentModal';
import ArticleModal from './ArticleModal';
import VideoModal from './VideoModal';
import GoogleServices from './GoogleServices';

export default function SiteLayout() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return undefined;
    window.scrollTo({ top: 0, behavior: 'auto' });
    return undefined;
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!location.hash) return undefined;
    const id = location.hash.replace('#', '');
    let cancelled = false;

    const scrollToHash = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    // Wait for route content + sticky chrome to settle
    const t1 = window.setTimeout(scrollToHash, 50);
    const t2 = window.setTimeout(scrollToHash, 250);
    return () => {
      cancelled = true;
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [location.hash, location.pathname]);

  const openAppointment = () => setIsAppointmentOpen(true);
  const closeAppointment = () => setIsAppointmentOpen(false);

  return (
    <div className="app-root">
      <GoogleServices />
      <Navbar onOpenAppointment={openAppointment} />

      <Outlet
        context={{
          openAppointment,
          selectedArticle,
          setSelectedArticle,
          selectedVideo,
          setSelectedVideo
        }}
      />

      <Footer onOpenAppointment={openAppointment} />
      <StickyBottomBar onOpenAppointment={openAppointment} />
      <WhatsAppFloat />

      <AppointmentModal isOpen={isAppointmentOpen} onClose={closeAppointment} />
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenAppointment={openAppointment}
      />
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onOpenAppointment={openAppointment}
      />
    </div>
  );
}
