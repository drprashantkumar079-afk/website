import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import AppointmentPage from './pages/AppointmentPage';
import DoctorPage from './pages/DoctorPage';
import ArticlesPage from './pages/ArticlesPage';
import MediaPage from './pages/MediaPage';
import LocationPage from './pages/LocationPage';
import OrthoCarePage from './pages/OrthoCarePage';
import JointReplacementPage from './pages/JointReplacementPage';
import ArthroscopyPage from './pages/ArthroscopyPage';
import SpineCarePage from './pages/SpineCarePage';
import TraumaCarePage from './pages/TraumaCarePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<Navigate to="/doctor" replace />} />
          <Route path="doctor" element={<DoctorPage />} />
          <Route path="appointment" element={<AppointmentPage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="media" element={<MediaPage />} />
          <Route path="faqs" element={<Navigate to="/" replace />} />
          <Route path="location" element={<LocationPage />} />
          <Route path="orthocare" element={<OrthoCarePage />} />
          <Route path="joint-replacement" element={<JointReplacementPage />} />
          <Route path="arthroscopy" element={<ArthroscopyPage />} />
          <Route path="spine-care" element={<SpineCarePage />} />
          <Route path="trauma-care" element={<TraumaCarePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
