/** Topic imagery — local verified clinical photos (not posters / mismatched stock) */

export const TOPIC_IMAGES = {
  knee: '/Images/article-covers/knee-oa.jpg',
  hip: '/Images/article-covers/hip-joint.jpg',
  arthroscopy: '/Images/article-covers/surgery-or.jpg',
  spine: '/Images/article-covers/spine-exam.jpg',
  trauma: '/Images/article-covers/trauma-ems.jpg',
  clinic: '/Images/article-covers/rehab-physio.jpg',
  consult: '/Images/article-covers/spine-exam.jpg',
  sports: '/Images/article-covers/sports-injury.jpg',
  xray: '/Images/article-covers/meniscus-knee.jpg',
  rehab: '/Images/article-covers/rehab-physio.jpg'
};

/** One distinct cover per article topic — visually verified against title */
export const ARTICLE_COVERS = {
  kneeOa: '/Images/article-covers/knee-oa.jpg',
  hip: '/Images/article-covers/hip-joint.jpg',
  acl: '/Images/article-covers/acl-knee.jpg',
  rotatorCuff: '/Images/article-covers/shoulder.jpg',
  sciatica: '/Images/article-covers/sciatica.jpg',
  slipDisc: '/Images/article-covers/spine-exam.jpg',
  sports: '/Images/article-covers/sports-injury.jpg',
  fracture: '/Images/article-covers/trauma-ems.jpg',
  arthritis: '/Images/article-covers/arthritis-knee.jpg',
  frozenShoulder: '/Images/article-covers/shoulder-arm.jpg',
  meniscus: '/Images/article-covers/meniscus-knee.jpg',
  ankle: '/Images/article-covers/ankle-sprain.jpg',
  croweHip: '/Images/article-covers/hip-physio.jpg',
  nerve: '/Images/article-covers/nerve-back.jpg',
  tkrTrust: '/Images/article-covers/rehab-physio.jpg'
};

/** Enrich clinical pages used by /orthocare, /joint-replacement, etc. */
export const CLINICAL_DETAIL = {
  orthocare: {
    heroImage: TOPIC_IMAGES.clinic,
    galleryImages: [TOPIC_IMAGES.consult, TOPIC_IMAGES.xray, TOPIC_IMAGES.rehab],
    whoNeeds: [
      'Morning joint stiffness lasting more than 30 minutes',
      'Recurring knee, hip or shoulder pain with daily activity',
      'Swelling, clicking or locking of a joint',
      'Patients advised physiotherapy or injections before surgery'
    ],
    journey: [
      { title: 'Consultation & exam', desc: 'History, gait assessment and targeted clinical tests at Vega Curre OPD.' },
      { title: 'Imaging when needed', desc: 'Weight-bearing X-rays or MRI only when results change the treatment plan.' },
      { title: 'Preserve first', desc: 'Physio, activity modification, viscosupplementation or PRP where appropriate.' },
      { title: 'Escalate wisely', desc: 'If pain and function do not improve, discuss arthroscopy or replacement options clearly.' }
    ],
    recovery: 'Most non-surgical plans show meaningful relief within 2–6 weeks with consistent physiotherapy.',
    detailedOverview: `General orthopaedic care is about catching joint disease early — before cartilage is fully worn. Dr Prashantkumar focuses on accurate diagnosis, honest counselling, and joint-preserving options so surgery is used only when it truly improves quality of life.

At Vega Curre Multispeciality Clinic (and visiting centres at Manipal, Sparsh and HOSMAT), patients receive a structured pathway: listen → examine → image selectively → treat conservatively → review outcomes.`
  },
  jointreplacement: {
    heroImage: TOPIC_IMAGES.knee,
    galleryImages: [TOPIC_IMAGES.knee, TOPIC_IMAGES.hip, TOPIC_IMAGES.rehab],
    whoNeeds: [
      'Grade 3–4 knee osteoarthritis with night pain or limited walking',
      'Hip AVN or dysplasia with groin pain and limp',
      'Failed conservative care (physio, injections, braces)',
      'Patients seeking muscle-sparing TKR with an individualized mobilisation plan'
    ],
    journey: [
      { title: 'Shared decision', desc: 'Explain implant options, risks, expected walking timeline and realistic goals.' },
      { title: 'Pre-habilitation', desc: 'Quadriceps strengthening and medical optimisation before surgery.' },
      { title: 'Muscle-sparing surgery', desc: 'Sub-vastus TKR approaches and planned THR / Crowe Type IV reconstruction when needed.' },
      { title: 'Early mobilisation', desc: 'Selected patients may stand or walk with support on Day 1, subject to medical assessment and the rehabilitation plan.' }
    ],
    recovery: 'Recovery varies by procedure, overall health, rehabilitation and individual response; the care team sets milestones after assessment.',
    detailedOverview: `Joint replacement restores a worn joint surface with durable titanium and polyethylene (or ceramic) implants. Dr Prashantkumar specialises in Total Knee Replacement (TKR) and complex Total Hip Replacement (THR).

His practice is known for muscle-sparing technique, clear family counselling, and complex hip work including Crowe Type IV dysplasia with subtrochanteric osteotomy — work presented at OASISCON and covered in regional press.

The goal is to improve pain and function where possible, with expectations discussed according to the patient's condition and recovery plan.`
  },
  arthroscopy: {
    heroImage: TOPIC_IMAGES.arthroscopy,
    galleryImages: [TOPIC_IMAGES.arthroscopy, TOPIC_IMAGES.sports, TOPIC_IMAGES.rehab],
    whoNeeds: [
      'ACL / PCL tear after a twist or sports injury',
      'Meniscus tear with locking or catching',
      'Rotator cuff tear with night pain and overhead weakness',
      'Recurrent shoulder dislocation'
    ],
    journey: [
      { title: 'Accurate MRI + exam', desc: 'Confirm which structures are torn and which can be preserved.' },
      { title: 'Keyhole repair', desc: '4mm camera portals; anatomical ACL reconstruction or cuff repair.' },
      { title: 'Day-care pathway', desc: 'Selected patients may be eligible for same-day discharge after procedure-specific assessment.' },
      { title: 'Criterion-based return', desc: 'Sport return based on strength and stability tests — not calendar alone.' }
    ],
    recovery: 'Timeline varies by procedure; sports training commonly takes several months and follows strength, stability and clinician-led milestones.',
    detailedOverview: `Arthroscopy is keyhole joint surgery. Tiny cameras and instruments allow ligament and cartilage repair without large open wounds. Dr Prashantkumar performs shoulder and knee keyhole procedures for athletes and active adults, and has organised academic teaching such as “The Shoulder Key Basics” for young orthopedic surgeons.`
  },
  traumacare: {
    heroImage: TOPIC_IMAGES.trauma,
    galleryImages: [TOPIC_IMAGES.trauma, TOPIC_IMAGES.xray, TOPIC_IMAGES.clinic],
    whoNeeds: [
      'Fresh fractures after road traffic accidents or falls',
      'Open / compound injuries needing urgent fixation',
      'Bones that failed to heal (non-union) after earlier surgery',
      'Complex joint-surface fractures of knee, ankle, elbow or hip'
    ],
    journey: [
      { title: 'Emergency stabilisation', desc: 'Protect life and limb; antibiotics and debridement for open fractures.' },
      { title: 'Planned fixation', desc: 'MIPO plating or interlocking nails chosen to protect soft tissue.' },
      { title: 'Reconstruction', desc: 'Bone grafting and revision fixation for non-union or failed implants.' },
      { title: 'Early motion', desc: 'Stable fixation allows physiotherapy before stiffness sets in.' }
    ],
    recovery: 'Timeline depends on fracture type; early joint motion is started as soon as fixation allows.',
    detailedOverview: `Trauma care restores broken bones to anatomical alignment so joints can move again. Dr Prashantkumar’s experience includes complex polytrauma and mass-casualty response (including Sabarimala relief recognition), with modern fixation methods that respect soft tissue and speed recovery.`
  },
  spinecare: {
    heroImage: TOPIC_IMAGES.spine,
    galleryImages: [TOPIC_IMAGES.spine, TOPIC_IMAGES.consult, TOPIC_IMAGES.rehab],
    whoNeeds: [
      'Sciatica shooting down the leg',
      'Neck pain with arm tingling or numbness',
      'Slip disc symptoms that worsen with sitting or coughing',
      'Patients told they “need spine surgery” and seeking a second opinion'
    ],
    journey: [
      { title: 'Rule out red flags', desc: 'Progressive weakness, bladder/bowel change or saddle numbness → urgent care.' },
      { title: 'Conservative first', desc: 'Posture, core rehab, activity pacing and medication as needed.' },
      { title: 'Targeted injections', desc: 'Transforaminal nerve root blocks for severe flares.' },
      { title: 'Surgery only if required', desc: 'Discussed when neurology worsens or pain fails adequate non-surgical care.' }
    ],
    recovery: 'Many sciatica cases improve over weeks, but timing varies; any injection response and follow-up plan depend on the diagnosis.',
    detailedOverview: `Most spine pain does not need immediate surgery. Featured on Asianet Suvarna News “Dear Doctor,” Dr Prashantkumar educates patients that nerve pain from L4-L5 / L5-S1 discs often settles with structured non-surgical care — surgery is reserved for clear indications.`
  }
};
