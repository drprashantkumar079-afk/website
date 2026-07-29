import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import AppointmentPage from './pages/AppointmentPage';
import DoctorPage from './pages/DoctorPage';
import ArticlesPage from './pages/ArticlesPage';
import MediaPage from './pages/MediaPage';
import FaqsPage from './pages/FaqsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="doctor" element={<DoctorPage />} />
          <Route path="appointment" element={<AppointmentPage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="media" element={<MediaPage />} />
          <Route path="faqs" element={<FaqsPage />} />
          <Route path="orthocare" element={<ServicePage />} />
          <Route path="joint-replacement" element={<ServicePage />} />
          <Route path="arthroscopy" element={<ServicePage />} />
          <Route path="spine-care" element={<ServicePage />} />
          <Route path="trauma-care" element={<ServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
