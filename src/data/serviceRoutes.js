/** Route slugs & comprehensive sub-topic mappings aligned with Kossin Care clinical standards */
export const SERVICE_ROUTES = [
  {
    path: '/orthocare',
    dataKey: 'orthocare',
    navLabel: 'Ortho Care',
    shortDesc: 'Non-surgical joint preservation & diagnostic wellness',
    subTopics: [
      { id: 'oa-wear', name: 'Osteoarthritis & Cartilage Degeneration', desc: 'Early diagnosis and joint cartilage preservation' },
      { id: 'visco-inj', name: 'Viscosupplementation Injections', desc: 'Hyaluronic acid joint lubrication for 6–12 months relief' },
      { id: 'prp-therapy', name: 'PRP Cartilage Therapy', desc: 'Autologous platelet-rich plasma growth factor injections' },
      { id: 'rheuma-gout', name: 'Rheumatoid & Inflammatory Arthritis', desc: 'Medical management of joint inflammation & gout flares' }
    ]
  },
  {
    path: '/joint-replacement',
    dataKey: 'jointreplacement',
    navLabel: 'Joint Replacement',
    shortDesc: 'Muscle-sparing TKR, THR & complex hip reconstruction',
    subTopics: [
      { id: 'total-knee', name: 'Total Knee Replacement (TKR)', desc: 'Sub-vastus muscle-sparing knee joint replacement' },
      { id: 'partial-knee', name: 'Partial / Unicondylar Knee Replacement', desc: 'Preserves healthy knee compartments & native ligaments' },
      { id: 'total-hip', name: 'Total Hip Replacement (THR)', desc: 'Uncemented ceramic/titanium hip implants for AVN & dysplasia' },
      { id: 'crowe-hip', name: 'Crowe Type IV Hip Reconstruction', desc: 'Subtrochanteric shortening osteotomy for dislocated hips' },
      { id: 'revision-joint', name: 'Revision Joint Replacement', desc: 'Complex revision for worn or failed knee and hip implants' }
    ]
  },
  {
    path: '/arthroscopy',
    dataKey: 'arthroscopy',
    navLabel: 'Arthroscopy',
    shortDesc: '4mm keyhole ligament repair & sports medicine',
    subTopics: [
      { id: 'acl-pcl', name: 'ACL & PCL Ligament Reconstruction', desc: 'Anatomical single/double bundle keyhole knee repairs' },
      { id: 'meniscus-repair', name: 'Meniscus Repair & Preservation', desc: 'All-inside meniscus stitching over excision' },
      { id: 'rotator-cuff', name: 'Shoulder Rotator Cuff Repair', desc: 'Keyhole tendon re-anchoring for night pain & overhead weakness' },
      { id: 'bankart-repair', name: 'Recurrent Shoulder Dislocation (Bankart)', desc: 'Suture-anchor stabilization for loose shoulder joints' }
    ]
  },
  {
    path: '/spine-care',
    dataKey: 'spinecare',
    navLabel: 'Spine Care',
    shortDesc: 'Non-surgical disc decompression & Suvarna News protocols',
    subTopics: [
      { id: 'sciatica-nerve', name: 'Sciatica & Nerve Root Pain', desc: 'Asianet Suvarna News expert featured non-surgical pathway' },
      { id: 'lumbar-disc', name: 'Lumbar Slip Disc (L4-L5 / L5-S1)', desc: 'Targeted disc decompression & core stabilization' },
      { id: 'cervical-spond', name: 'Cervical Spondylosis & Neck Pain', desc: 'Neck rehab, posture correction & arm numbness relief' },
      { id: 'nerve-blocks', name: 'Epidural Nerve Root & Facet Injections', desc: 'Precision diagnostic & therapeutic pain blocks' }
    ]
  },
  {
    path: '/trauma-care',
    dataKey: 'traumacare',
    navLabel: 'Trauma Care',
    shortDesc: 'MIPO titanium plating & emergency casualty relief',
    subTopics: [
      { id: 'mipo-plating', name: 'Minimally Invasive Plating (MIPO)', desc: 'Biological tissue-sparing fracture fixation' },
      { id: 'locking-nails', name: 'Interlocking Intramedullary Nailing', desc: 'Rigid titanium internal fixation for long bones' },
      { id: 'non-union', name: 'Non-Union & Malunion Reconstruction', desc: 'Revision fixation & bone grafting for unhealed fractures' },
      { id: 'pelvic-trauma', name: 'Complex Intra-Articular & Pelvic Fractures', desc: 'Emergency trauma stabilization & joint surface reconstruction' }
    ]
  }
];

export function getServiceByPath(pathname) {
  return SERVICE_ROUTES.find((r) => r.path === pathname) || null;
}
