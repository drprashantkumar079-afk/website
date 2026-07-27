import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_TITLE = 'Dr Prashantkumar | Orthopedic Surgeon Bengaluru';
const SITE_URL = 'https://vegacurre.com';

const ROUTE_DESCRIPTIONS = {
  '/': 'Official site of Dr Prashantkumar, Senior Orthopedic Surgeon with 15+ years of experience at Vega Curre Multispeciality Clinic, Bengaluru.',
  '/doctor': 'Meet Dr Prashantkumar, Senior Orthopedic Surgeon with 15+ years of experience in joint replacement, arthroscopy, trauma and spine care.',
  '/appointment': 'Book an OPD consultation with Dr Prashantkumar at Vega Curre Multispeciality Clinic, Bengaluru.',
  '/articles': 'Patient-friendly orthopedic articles covering knee pain, hip replacement, ACL injuries, spine care, fractures and rehabilitation.',
  '/videos': 'Watch orthopedic surgery, injury recovery and patient education videos from Dr Prashantkumar.',
  '/gallery': 'View clinic, surgical, academic and community-care photographs from Dr Prashantkumar and Vega Curre.',
  '/faqs': 'Answers to common questions about knee replacement, hip replacement, arthroscopy, spine care and orthopedic consultations.',
  '/orthocare': 'General orthopedic care, joint wellness and conservative treatment options at Vega Curre Clinic.',
  '/joint-replacement': 'Total knee and total hip replacement care, including complex hip reconstruction planning at Vega Curre Clinic.',
  '/arthroscopy': 'Keyhole arthroscopy and sports medicine care for ACL, meniscus, shoulder and ligament injuries.',
  '/spine-care': 'Spine and nerve care for sciatica, slip disc, cervical spondylosis and related conditions.',
  '/trauma-care': 'Complex fracture, trauma and non-union reconstruction care in Bengaluru.',
};

function setMeta(attribute, key, content) {
  let tag = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
  return tag;
}

export default function useDocumentTitle(title) {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = title ? `${title} | Dr Prashantkumar` : BASE_TITLE;
    const description = ROUTE_DESCRIPTIONS[location.pathname] || ROUTE_DESCRIPTIONS['/'];
    const canonicalUrl = `${SITE_URL}${location.pathname === '/' ? '/' : location.pathname}`;
    const trackedTags = [
      ['name', 'description', description],
      ['property', 'og:title', pageTitle],
      ['property', 'og:description', description],
      ['property', 'og:url', canonicalUrl],
      ['name', 'twitter:title', pageTitle],
      ['name', 'twitter:description', description],
    ];
    const previous = trackedTags.map(([attribute, key]) => ({
      attribute,
      key,
      tag: document.querySelector(`meta[${attribute}="${key}"]`),
      content: document.querySelector(`meta[${attribute}="${key}"]`)?.getAttribute('content'),
    }));
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute('href');

    document.title = pageTitle;
    trackedTags.forEach(([attribute, key, content]) => setMeta(attribute, key, content));
    if (canonical) canonical.href = canonicalUrl;

    return () => {
      document.title = BASE_TITLE;
      previous.forEach(({ attribute, key, tag, content }) => {
        if (tag && content !== null) tag.setAttribute('content', content);
      });
      if (canonical && previousCanonical) canonical.href = previousCanonical;
    };
  }, [location.pathname, title]);
}
