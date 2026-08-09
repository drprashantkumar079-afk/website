/** Route slugs & comprehensive sub-topic mappings aligned with Kossin Care clinical standards */
export const SERVICE_ROUTES = [
  {
    path: '/orthocare',
    dataKey: 'orthocare',
    navLabel: 'Ortho Care',
    shortDesc: 'Non-surgical joint care & diagnostic wellness',
    subTopics: [
      { id: 'oa-wear', name: 'Osteoarthritis & Joint Wear', desc: 'Early diagnosis and joint alignment protection' },
      { id: 'rheuma-gout', name: 'Rheumatoid & Gout Arthritis', desc: 'Medical management of joint inflammation & flares' },
      { id: 'bone-density', name: 'Osteoporosis & Bone Health', desc: 'Bone density evaluation & fracture prevention' },
      { id: 'tendonitis', name: 'Tendonitis & Soft Tissue Care', desc: 'Bursitis, plantar fasciitis & ligament strain therapy' }
    ]
  },
  {
    path: '/regenerative-therapy',
    dataKey: 'regenerativetherapy',
    navLabel: 'Regenerative Therapy',
    shortDesc: 'PRP, BMAC stem cell & viscosupplementation injections',
    subTopics: [
      { id: 'prp-therapy', name: 'Autologous PRP Therapy', desc: 'Platelet-rich plasma growth factor concentrate' },
      { id: 'bmac-cell', name: 'BMAC Stem Cell Therapy', desc: 'Bone marrow aspirate concentrate for cartilage repair' },
      { id: 'visco-inj', name: 'Viscosupplementation Injections', desc: 'Hyaluronic acid joint cushioning for 6–12 months' },
      { id: 'cartilage-repair', name: 'Biological Cartilage Repair', desc: 'Non-surgical joint preservation for knee & shoulder' }
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
