/** Route slugs aligned with Kossin Care–style clinical pages */
export const SERVICE_ROUTES = [
  {
    path: '/orthocare',
    dataKey: 'orthocare',
    navLabel: 'Ortho Care'
  },
  {
    path: '/joint-replacement',
    dataKey: 'jointreplacement',
    navLabel: 'Joint Replacement'
  },
  {
    path: '/arthroscopy',
    dataKey: 'arthroscopy',
    navLabel: 'Arthroscopy'
  },
  {
    path: '/trauma-care',
    dataKey: 'traumacare',
    navLabel: 'Trauma Care'
  },
  {
    path: '/spine-care',
    dataKey: 'spinecare',
    navLabel: 'Spine Care'
  }
];

export function getServiceByPath(pathname) {
  return SERVICE_ROUTES.find((r) => r.path === pathname) || null;
}
