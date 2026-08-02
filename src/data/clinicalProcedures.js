/** Procedure-level education blocks — ids must match serviceRoutes.js subTopics */

export const PROCEDURE_BLOCKS = {
  orthocare: {
    title: 'Ortho Care Treatments & Joint Preservation',
    intro: 'Structured non-surgical pathways at Vega Curre OPD before any surgery is discussed:',
    theme: 'default',
    items: [
      {
        id: 'oa-wear',
        title: 'Osteoarthritis & Cartilage Degeneration',
        color: '#0284c7',
        body: 'Early knee, hip and shoulder arthritis is managed with weight-bearing X-rays, gait assessment and activity modification. The goal is to slow cartilage wear with targeted quadriceps strengthening, bracing and pain control — not rush to replacement.',
        bullets: ['Grade 1–2 OA: physio + lifestyle', 'Grade 3: injections + structured rehab', 'Grade 4: joint replacement consult']
      },
      {
        id: 'visco-inj',
        title: 'Viscosupplementation Injections',
        color: '#0d9488',
        body: 'Hyaluronic acid is injected into the joint capsule to restore lubrication in knees with moderate osteoarthritis. Most patients notice smoother walking and less morning stiffness for 6–12 months, buying time while strengthening muscles.',
        bullets: ['Single or 3-injection protocols', 'Best for bone-on-bone not yet severe', 'Combined with home exercise plan']
      },
      {
        id: 'prp-therapy',
        title: 'PRP Cartilage Therapy',
        color: '#0284c7',
        body: 'Platelet-rich plasma is prepared from your own blood and injected into inflamed joints or tendons. Growth factors may support tissue healing in early cartilage injury, tennis elbow and partial tendon tears — watch Dr Prashantkumar explain PRP on his YouTube channel.',
        bullets: ['Autologous — no donor tissue', 'Useful for partial meniscus or cuff tears', 'Part of preserve-first plan']
      },
      {
        id: 'rheuma-gout',
        title: 'Rheumatoid & Inflammatory Arthritis',
        color: '#0369a1',
        body: 'Hot, swollen multiple joints — especially hands, knees and feet — need blood tests and coordinated medical management alongside orthopaedic assessment. Gout flares and rheumatoid synovitis are treated with medication, joint protection and timely referral when deformity develops.',
        bullets: ['Uric acid & RA workup when indicated', 'Joint aspiration for crystal arthritis', 'Surgical options only when joints fail medically']
      }
    ]
  },
  spinecare: {
    title: 'Spine & Nerve Care Procedures',
    intro: 'Featured on Asianet Suvarna News — conservative spine care first, surgery only when neurology demands it:',
    theme: 'blue',
    items: [
      {
        id: 'sciatica-nerve',
        title: 'Sciatica & Nerve Root Pain',
        color: '#0284c7',
        body: 'Sharp pain shooting from the lower back through the buttock into the leg usually means a disc is pressing a nerve root. Dr Prashantkumar explained this pathway on Suvarna News “Dear Doctor” — most cases settle with core rehab, posture correction and short medication courses.',
        bullets: ['Red flags: foot drop, bladder change → urgent care', 'MRI only when it changes management', 'Walking and swimming encouraged early']
      },
      {
        id: 'lumbar-disc',
        title: 'Lumbar Slip Disc (L4-L5 / L5-S1)',
        color: '#0d9488',
        body: 'The most common slip-disc levels in desk workers and drivers. Treatment starts with McKenzie-style extension exercises, ergonomic advice and nerve-calming medication. Surgery is discussed only if leg weakness worsens or pain fails 6–8 weeks of dedicated conservative care.',
        bullets: ['Avoid prolonged sitting > 45 minutes', 'Core stabilisation with physiotherapist', 'Epidural injection for severe flares']
      },
      {
        id: 'cervical-spond',
        title: 'Cervical Spondylosis & Neck Pain',
        color: '#0284c7',
        body: 'Neck stiffness with tingling into the arms often comes from worn cervical discs or foraminal narrowing. Cervical traction, chin-tuck postural training and scapular strengthening relieve most symptoms without operation.',
        bullets: ['Differentiate from cardiac or shoulder pain', 'Night pain with arm weakness needs MRI', 'Pillow and workstation ergonomics matter']
      },
      {
        id: 'nerve-blocks',
        title: 'Epidural Nerve Root & Facet Injections',
        color: '#0369a1',
        body: 'Image-guided transforaminal epidural injections deliver anti-inflammatory medication precisely at the compressed nerve root. Used for diagnostic confirmation and therapeutic relief during acute sciatica flares — not as a standalone cure without rehab.',
        bullets: ['Performed at partner hospitals when needed', 'Relief window allows physiotherapy', 'Repeated only with clear benefit']
      }
    ]
  },
  traumacare: {
    title: 'Trauma Fixation & Reconstruction Procedures',
    intro: 'From road-traffic accidents to bones that never healed — modern biological fixation:',
    theme: 'red',
    items: [
      {
        id: 'mipo-plating',
        title: 'Minimally Invasive Plating (MIPO)',
        color: '#dc2626',
        body: 'Titanium plates are slid under the skin through small remote incisions without opening the fracture haematoma. This preserves blood supply to the bone, reduces infection risk and allows earlier joint movement compared to traditional wide exposures.',
        bullets: ['Ideal for tibia, femur and humerus shaft fractures', 'Less scarring, faster soft-tissue recovery', 'Requires precise fluoroscopic guidance']
      },
      {
        id: 'locking-nails',
        title: 'Interlocking Intramedullary Nailing',
        color: '#b91c1c',
        body: 'A hollow titanium rod is inserted inside the marrow canal of long bones and locked with proximal and distal screws. Provides rigid fixation for femur, tibia and humerus fractures so patients can bear weight sooner with crutches.',
        bullets: ['Gold standard for femoral shaft fractures', 'Load-sharing design stimulates union', 'Removable only if symptomatic hardware']
      },
      {
        id: 'non-union',
        title: 'Non-Union & Malunion Reconstruction',
        color: '#dc2626',
        body: 'When a fracture fails to heal after months, revision surgery removes failed implants, refreshes bone ends, adds bone graft or BMP, and re-fixes with stronger constructs. Malunion (healed in wrong angle) may need corrective osteotomy to restore alignment.',
        bullets: ['CT scan maps gap and deformity', 'Biological bone grafting when needed', 'Graduated weight-bearing protocol']
      },
      {
        id: 'pelvic-trauma',
        title: 'Complex Intra-Articular & Pelvic Fractures',
        color: '#991b1b',
        body: 'High-energy pelvic and joint-surface fractures need emergency stabilisation, often with external fixators first, then definitive ORIF to restore articular congruity. Experience includes polytrauma and mass-casualty response recognised during Sabarimala disaster relief.',
        bullets: ['Open fractures: urgent debridement + antibiotics', 'Ankle, knee & elbow articular surface reconstruction', 'Partner hospitals: Manipal, Sparsh, HOSMAT']
      }
    ]
  },
  arthroscopy: {
    title: 'Keyhole Arthroscopy Sub-Specialties & Procedures',
    intro: 'Precision 4mm fiber-optic portal procedures for sports injuries and ligament tears:',
    theme: 'sky',
    items: [
      {
        id: 'acl-pcl',
        title: 'ACL & PCL Knee Ligament Reconstruction',
        color: '#0284c7',
        body: 'Anatomical single-bundle or double-bundle hamstring autografting restores rotatory stability after knee twists. PCL injuries — common in dashboard injuries — are reconstructed when instability affects daily function or sport.',
        bullets: ['MRI + Lachman / posterior drawer testing', 'Criterion-based return to sport 7–9 months', 'PCL video on YouTube channel']
      },
      {
        id: 'meniscus-repair',
        title: 'Meniscus Repair & Cartilage Preservation',
        color: '#0d9488',
        body: 'All-inside suture devices stitch torn meniscus shock-absorbers rather than trimming them away. Preserving meniscus tissue protects long-term cartilage and delays arthritis — preferred over meniscectomy when tear pattern allows.',
        bullets: ['Red-white zone tears most repairable', 'Protected weight-bearing after repair', 'Combined with ACL when needed']
      },
      {
        id: 'rotator-cuff',
        title: 'Shoulder Rotator Cuff & Subacromial Decompression',
        color: '#0284c7',
        body: 'Torn supraspinatus and infraspinatus tendons are re-anchored to the humerus with suture anchors through keyhole portals. Relieves night shoulder pain, overhead weakness and impingement catching in athletes and manual workers.',
        bullets: ['Double-row repair for large tears', 'Organised “Shoulder Key Basics” teaching conference', 'Structured cuff rehabilitation protocol']
      },
      {
        id: 'bankart-repair',
        title: 'Recurrent Shoulder Dislocation (Bankart Suture Repair)',
        color: '#d4a017',
        body: 'Suture-anchor reattachment of the torn glenoid labrum restores joint stability for athletes with popping or dislocating shoulders. May be combined with remplissage for engaging Hill-Sachs lesions.',
        bullets: ['MRI arthrogram when instability recurs', 'Immobilisation then range-of-motion protocol', 'Contact sport clearance after strength tests']
      }
    ],
    extraTitle: 'Additional Knee & Shoulder Keyhole Procedures',
    extraItems: [
      {
        id: 'mcl-lcl',
        title: 'MCL / LCL Collateral Ligament Reconstruction',
        body: 'Side-to-side knee instability from MCL or LCL tears is reconstructed arthroscopically or through mini-open technique when bracing fails — common in contact sports and road accidents.'
      },
      {
        id: 'chondroplasty',
        title: 'Chondroplasty & Mosaicplasty',
        body: 'Damaged cartilage surfaces are smoothed (chondroplasty) or filled with osteochondral plugs (mosaicplasty) to reduce catching, swelling and early arthritis in active patients.'
      },
      {
        id: 'debridement',
        title: 'Arthroscopic Joint Debridement',
        body: 'Loose bodies, inflamed synovium and frayed tissue are removed through keyhole portals to restore smooth joint movement when physiotherapy alone cannot control mechanical symptoms.'
      },
      {
        id: 'shoulder-advanced',
        title: 'Shoulder Adhesiolysis & Remplissage',
        body: 'Stiff frozen shoulders may need arthroscopic adhesiolysis to release tight capsule. Remplissage fills engaging Hill-Sachs defects during Bankart repair to prevent repeat dislocation in throwing athletes.'
      }
    ]
  }
};

/** Map service dataKey → related patient guide article ids */
export const RELATED_GUIDES = {
  orthocare: ['blog-knee-osteoarthritis', 'blog-arthritis-joint', 'blog-frozen-shoulder'],
  jointreplacement: ['blog-knee-osteoarthritis', 'blog-hip-dysplasia-avn'],
  arthroscopy: ['blog-acl-ligament', 'blog-rotator-cuff', 'blog-meniscus-cartilage', 'blog-sports-injury'],
  spinecare: ['blog-sciatica', 'blog-slip-disc'],
  traumacare: ['blog-fractures-trauma', 'blog-ankle-sprain']
};
