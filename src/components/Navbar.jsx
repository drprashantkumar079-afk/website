import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Clock, Menu, X, Youtube, Instagram, Facebook, MapPin, Navigation, ChevronDown } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import { SERVICE_ROUTES } from '../data/serviceRoutes';
import useOpenNow from '../hooks/useOpenNow';

export default function Navbar({ onOpenAppointment }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { isOpen, statusLabel } = useOpenNow();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!activeDropdown) return undefined;
    const onPointerDown = (e) => {
      if (!e.target.closest('.nav-dept-dropdown') && !e.target.closest('.nav-more')) {
        setActiveDropdown(null);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveDropdown(null);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [activeDropdown]);

  const isServiceActive = SERVICE_ROUTES.some((route) => location.pathname === route.path);

  return (
    <div className="site-chrome">
      {/* ── Topbar — Location Pin + Live Schedule + Contact ── */}
      <div className="topbar">
        <div className="container topbar-inner">
          <Link to="/location" className="topbar-location-pin">
            <MapPin size={13} />
            <span className="topbar-location-text">Hebbal Kempapura, Bengaluru</span>
            <Navigation size={10} className="topbar-location-arrow" />
          </Link>

          <p className="topbar-hours">
            <Clock size={13} aria-hidden="true" />
            <span>Mon–Sat: 10 AM – 8:30 PM</span>
            <span className="topbar-sep-inline" aria-hidden="true">·</span>
            <span className={`topbar-open-status ${isOpen ? 'is-open' : 'is-closed'}`}>
              <span className="topbar-open-dot" />
              {statusLabel}
            </span>
            <span className="topbar-sep-inline topbar-sun-sep" aria-hidden="true">|</span>
            <span className="topbar-sun-hours">Sun: 10 AM – 12 PM (Prior Appt)</span>
          </p>

          <div className="topbar-actions">
            <a href={`tel:${DOCTOR_INFO.contacts.phonePrimary}`} className="topbar-phone">
              <Phone size={13} aria-hidden="true" />
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
                <Youtube size={15} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                <span>YouTube</span>
              </a>
              <a href={DOCTOR_INFO.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="topbar-icon-btn">
                <Instagram size={15} />
              </a>
              <a href={DOCTOR_INFO.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="topbar-icon-btn">
                <Facebook size={15} fill="currentColor" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Header & Mega Nav ── */}
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container site-header-inner">
          <Link to="/" className="brand-mark">
            <span className="brand-mark-badge" aria-hidden="true">
              <img src="/favicon.png" alt="Dr Prashantkumar" className="brand-mark-avatar-img" />
            </span>
            <span className="brand-mark-text">
              <strong>{DOCTOR_INFO.name}</strong>
              <em>Vega Curre · Orthopedics</em>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="primary-nav" aria-label="Primary">
            <Link
              to="/doctor"
              className={`primary-nav-link${location.pathname === '/doctor' || location.pathname === '/about' ? ' is-active' : ''}`}
            >
              Dr Prashantkumar
            </Link>

            {/* All clinical departments — Services mega menu */}
            <div
              className="nav-dept-dropdown"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span
                className={`primary-nav-link${isServiceActive ? ' is-active' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                Services <ChevronDown size={12} className="nav-caret" />
              </span>

              {activeDropdown === 'services' && (
                <div className="mega-menu-panel mega-menu-panel--services">
                  <div className="mega-menu-header">
                    <strong>Clinical Departments &amp; Procedures</strong>
                    <p>Six specialty areas — with detailed procedure &amp; biological therapy information</p>
                  </div>
                  <div className="mega-services-grid">
                    {SERVICE_ROUTES.map((route) => (
                      <div key={route.path} className="mega-service-col">
                        <Link
                          to={route.path}
                          className="mega-service-title"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {route.navLabel}
                        </Link>
                        <p className="mega-service-desc">{route.shortDesc}</p>
                        <ul className="mega-service-topics">
                          {route.subTopics.map((topic) => (
                            <li key={topic.id}>
                              <Link
                                to={`${route.path}#${topic.id}`}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {topic.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={route.path}
                          className="mega-service-all"
                          onClick={() => setActiveDropdown(null)}
                        >
                          View {route.navLabel} →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/media"
              className={`primary-nav-link${location.pathname === '/media' ? ' is-active' : ''}`}
            >
              Media
            </Link>

            <Link
              to="/articles"
              className={`primary-nav-link${location.pathname === '/articles' ? ' is-active' : ''}`}
            >
              Articles
            </Link>

            <Link
              to="/location"
              className={`primary-nav-link${location.pathname === '/location' ? ' is-active' : ''}`}
            >
              Location
            </Link>
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

        {/* ── Mobile Drawer ── */}
        {mobileOpen && (
          <div className="mobile-drawer">
            <div className="container mobile-drawer-inner">
              <Link to="/doctor" className="mobile-drawer-section-label" style={{ display: 'block', fontSize: '1.1rem', color: '#0369a1', fontWeight: 600, padding: '0.5rem 0' }}>
                Dr Prashant Kumar (Profile &amp; Credentials)
              </Link>

              <p className="mobile-drawer-section-label">Departments &amp; Procedures</p>
              {SERVICE_ROUTES.map((route) => (
                <div key={route.path} className="mobile-dept-group">
                  <Link to={route.path} className="mobile-dept-title">
                    {route.navLabel}
                  </Link>
                  <div className="mobile-subtopics-list">
                    {route.subTopics.map((topic) => (
                      <Link key={topic.id} to={`${route.path}#${topic.id}`} className="mobile-subtopic-link">
                        • {topic.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <p className="mobile-drawer-section-label">Media, Articles &amp; Directions</p>
              <Link to="/media">Media &amp; Events</Link>
              <Link to="/articles">Articles &amp; Guides</Link>
              <Link to="/location" className="mobile-drawer-location">
                <MapPin size={15} /> Location &amp; Directions
              </Link>

              <button type="button" className="btn btn-primary mobile-drawer-cta" onClick={onOpenAppointment}>
                <Calendar size={18} /> Book OPD Appointment Now
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
