import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Clock, Menu, X, Youtube, Instagram, Facebook } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import { SERVICE_ROUTES } from '../data/serviceRoutes';

const PRIMARY_LINKS = [
  { to: '/doctor', label: 'About' },
  { to: '/#conditions', label: 'What We Treat', hash: true },
  { to: '/articles', label: 'Articles' },
  { to: '/videos', label: 'Videos' },
  { to: '/appointment', label: 'Appointment' }
];

export default function Navbar({ onOpenAppointment }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!servicesOpen) return undefined;
    const onPointerDown = (e) => {
      if (!e.target.closest('.nav-more')) setServicesOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setServicesOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [servicesOpen]);

  const closeServices = () => setServicesOpen(false);

  const goToLocation = (e) => {
    closeServices();
    setMobileOpen(false);
    if (location.pathname === '/' && location.hash === '#contact') {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="site-chrome">
      <div className="topbar">
        <div className="container topbar-inner">
          <p className="topbar-hours">
            <Clock size={14} aria-hidden="true" />
            <span>OPD Mon–Sat · 9AM–1PM &amp; 4:30PM–8PM</span>
          </p>
          <div className="topbar-actions">
            <a href={`tel:${DOCTOR_INFO.contacts.phonePrimary}`} className="topbar-phone">
              <Phone size={14} aria-hidden="true" />
              {DOCTOR_INFO.contacts.phonePrimary}
            </a>
            <span className="topbar-sep" aria-hidden="true" />
            <div className="topbar-social">
              <a
                href={DOCTOR_INFO.socialLinks.youtubeChannel}
                target="_blank"
                rel="noreferrer"
                className="topbar-youtube-btn"
                aria-label="YouTube channel"
              >
                <Youtube size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                <span>YouTube</span>
              </a>
              <a href={DOCTOR_INFO.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="topbar-icon-btn">
                <Instagram size={16} />
              </a>
              <a href={DOCTOR_INFO.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="topbar-icon-btn">
                <Facebook size={16} fill="currentColor" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container site-header-inner">
          <Link to="/" className="brand-mark">
            <span className="brand-mark-badge" aria-hidden="true">PK</span>
            <span className="brand-mark-text">
              <strong>{DOCTOR_INFO.name}</strong>
              <em>Vega Curre · Orthopedics</em>
            </span>
          </Link>

          <nav className="primary-nav" aria-label="Primary">
            {PRIMARY_LINKS.map((link) =>
              link.hash ? (
                <Link key={link.to} to={link.to} className="primary-nav-link">
                  {link.label}
                </Link>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `primary-nav-link${isActive ? ' is-active' : ''}`}
                >
                  {link.label}
                </NavLink>
              )
            )}
            <details
              className="nav-more"
              open={servicesOpen}
              onToggle={(e) => setServicesOpen(e.currentTarget.open)}
            >
              <summary>Services</summary>
              <div className="nav-more-panel">
                {SERVICE_ROUTES.map((route) => (
                  <Link key={route.path} to={route.path} onClick={closeServices}>
                    {route.navLabel}
                  </Link>
                ))}
                <Link to="/gallery" onClick={closeServices}>Gallery</Link>
                <Link to="/faqs" onClick={closeServices}>FAQs</Link>
                <Link to="/#contact" onClick={goToLocation}>Location</Link>
              </div>
            </details>
          </nav>

          <div className="header-cta">
            <button type="button" className="btn btn-primary header-book" onClick={onOpenAppointment}>
              <Calendar size={18} />
              Book
            </button>
            <button
              type="button"
              className="nav-burger"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mobile-drawer">
            <div className="container mobile-drawer-inner">
              <Link to="/doctor">About Doctor</Link>
              {SERVICE_ROUTES.map((route) => (
                <Link key={route.path} to={route.path}>{route.navLabel}</Link>
              ))}
              <Link to="/articles">Articles</Link>
              <Link to="/videos">Videos</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/faqs">FAQs</Link>
              <Link to="/appointment">Appointment</Link>
              <Link to="/#contact" onClick={goToLocation}>Location</Link>
              <button type="button" className="btn btn-primary" onClick={onOpenAppointment}>
                <Calendar size={18} /> Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
