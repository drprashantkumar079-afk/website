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
    galleryImages: ['/Images/clinic-opd.jpg', '/Images/doctor-clinical-team.jpg', '/Images/community-care.jpg'],
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
    heroImage: '/Images/knee-replacement-patient-2.jpeg',
    galleryImages: [
      '/Images/robotic-knee.png', 
      '/Images/surgery-reconstruct.jpg', 
      '/Images/joint-care.jpg'
    ],
    xrayCases: [
      '/Images/knee-replacement-patient-1.jpeg',
      '/Images/knee-replacement-patient-2.jpeg',
      '/Images/knee-replacement-patient-3.jpeg',
      '/Images/knee-replacement-patient-4.jpeg'
    ],
    heroIntro: `Joint replacement is definitive reconstructive surgery — not a routine procedure. Worn femoral and tibial surfaces (or the hip ball-and-socket) are replaced with precision-machined implants after careful alignment planning, medical optimisation and family counselling. Dr Prashantkumar (MBBS D-Ortho DNB, FIJR) has performed 1,000+ knee replacements and complex hip reconstructions including Crowe Type IV dysplasia work presented at OASISCON 2018.`,
    heroBenefits: [
      'Sub-vastus quadriceps-sparing TKR — less cut, faster straightening',
      'Uncemented press-fit hip shells with ceramic / polyethylene bearings',
      'Crowe Type IV hip reconstruction with subtrochanteric osteotomy',
      'Surgery at Manipal, Sparsh & HOSMAT · OPD at Vega Curre, Hebbal'
    ],
    whoNeeds: [
      'Grade 3–4 knee osteoarthritis with night pain or limited walking',
      'Hip AVN or dysplasia with groin pain and limp',
      'Failed conservative care (physio, injections, braces)',
      'Patients seeking muscle-sparing TKR with an individualized mobilisation plan'
    ],
    journey: [
      { title: 'Pre-operative assessment', desc: 'Weight-bearing X-rays, limb alignment, cardiac & anaesthesia clearance, implant sizing on templating.' },
      { title: 'Medical optimisation', desc: 'Diabetes, BP and anaemia control; pre-hab quadriceps strengthening for smoother post-op walking.' },
      { title: 'Muscle-sparing operation', desc: 'Sub-vastus TKR or planned THR / Crowe reconstruction at partner hospital OT.' },
      { title: 'Structured rehabilitation', desc: 'Day 1–2 mobilisation when clinically safe; stair training, home exercise protocol and follow-up X-rays.' }
    ],
    recovery: 'Typical TKR: assisted walking Day 1–2, stairs before discharge Day 4–5, driving at 4–6 weeks when safe. THR: partial weight-bearing per protocol; full recovery 6–12 weeks. Crowe and revision cases follow individualised timelines set at consultation.',
    detailedOverview: `Dr Prashantkumar's joint replacement practice is built on three pillars: accurate pre-operative planning, tissue-respecting surgical technique, and honest recovery counselling.

For knees, he favours sub-vastus (quad-sparing) exposure where anatomy allows — sliding under the vastus medialis instead of dividing the quadriceps tendon — which typically means less post-operative pain and earlier active knee extension. Implant selection (cruciate-retaining vs posterior-stabilised, high-flex designs) is matched to ligament status, deformity and patient activity goals.

For hips, uncemented porous-coated cups and titanium stems with ceramic or cross-linked polyethylene bearings are used for AVN, primary osteoarthritis and dysplasia. Crowe Type IV developmental dysplasia — where the femoral head sits high above a shallow socket — requires subtrochanteric shortening osteotomy combined with uncemented THR; this is among the most demanding reconstructions in orthopaedics and was the subject of his OASISCON 2018 presentation and regional press coverage.

Revision surgery for loose, infected or worn implants is undertaken with modular revision stems, bone graft and careful soft-tissue handling. Every patient receives a written understanding of risks, expected walking milestones and hospital stay before booking surgery.`
  },
  arthroscopy: {
    heroImage: '/Images/keyhole-arthroscopy.png',
    galleryImages: ['/Images/keyhole-arthroscopy.png', '/Images/arthroscopy-care.jpg', '/Images/conference.jpg'],
    heroIntro: `Arthroscopy is a minimally invasive surgical procedure that lets orthopedic surgeons diagnose and treat joint problems through small incisions. A tiny camera called an arthroscope shows the inside of the knee or shoulder on a monitor in real time — so torn ligaments, cartilage damage and joint inflammation can be treated with less tissue disruption than open surgery.`,
    heroBenefits: [
      'Less post-operative pain than open surgery',
      'Smaller scars — typically 4mm keyhole portals',
      'Faster healing and earlier joint movement',
      'Quicker return to work, sport and daily activity'
    ],
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
    detailedOverview: `Arthroscopy has revolutionized orthopedic care — offering precise joint treatment through keyhole portals instead of large incisions. Dr Prashantkumar performs knee and shoulder arthroscopy for athletes and active adults at Vega Curre OPD and partner hospitals. He organised “The Shoulder Key Basics” conference (2022) to train young surgeons in modern shoulder keyhole repair. Every treatment plan is tailored after clinical examination and MRI review — not every tear needs surgery, but when it does, repair is planned to preserve as much native tissue as possible.`
  },
  traumacare: {
    heroImage: TOPIC_IMAGES.trauma,
    galleryImages: ['/Images/article-covers/trauma-ems.jpg', '/Images/article-covers/meniscus-knee.jpg', '/Images/clinic-opd.jpg'],
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
    galleryImages: ['/Images/spine-care.jpg', '/Images/article-covers/spine-exam.jpg', '/Images/article-covers/sciatica.jpg'],
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

/** Kossin-style arthroscopy procedure education — knee & shoulder */
export const ARTHROSCOPY_KNEE_PROCEDURES = [
  {
    id: 'meniscectomy',
    title: 'Meniscectomy',
    body: 'Often used for meniscal tears where repair is not possible. The damaged portion of the meniscus shock-absorber is trimmed arthroscopically, preserving as much healthy meniscus tissue as possible to protect long-term cartilage.'
  },
  {
    id: 'meniscus-repair',
    title: 'Meniscal Repair',
    body: 'When the tear pattern and blood supply allow, surgeons repair rather than remove the meniscus using all-inside suture devices. This promotes long-term joint health, stability and delays arthritis — preferred over excision whenever feasible.'
  },
  {
    id: 'acl-pcl',
    title: 'ACL Reconstruction',
    body: 'Anterior cruciate ligament injuries after sports twists or falls need reconstructive surgery to restore knee stability. Hamstring or bone-patellar tendon grafts replace the torn ligament through keyhole portals with anatomical tunnel placement.'
  },
  {
    id: 'pcl-reconstruction',
    title: 'PCL Reconstruction',
    body: 'Posterior cruciate ligament injuries — common in dashboard road-traffic accidents — may require surgical reconstruction to regain knee stability and prevent long-term wear when bracing and rehab are insufficient.'
  },
  {
    id: 'debridement',
    title: 'Arthroscopic Joint Debridement',
    body: 'Removes damaged tissue, loose bodies and inflamed synovium from inside the knee joint. Alleviates mechanical catching, swelling and pain when debris limits smooth movement despite physiotherapy.'
  },
  {
    id: 'mcl-lcl',
    title: 'MCL / LCL Reconstruction',
    body: 'Severe medial or lateral collateral ligament damage may need surgical reconstruction to restore side-to-side knee stability — especially after contact sports injuries or high-energy trauma when conservative bracing fails.'
  },
  {
    id: 'chondroplasty',
    title: 'Chondroplasty / Mosaicplasty',
    body: 'Addresses cartilage damage: chondroplasty smooths rough fibrillated surfaces; mosaicplasty transplants healthy osteochondral plugs into defects to regenerate damaged areas and reduce catching in active patients.'
  }
];

export const ARTHROSCOPY_SHOULDER_PROCEDURES = [
  {
    id: 'rotator-cuff',
    title: 'Rotator Cuff Repair',
    body: 'Among the most common shoulder arthroscopy procedures. Torn supraspinatus and infraspinatus tendons are re-anchored to the humerus with suture anchors, restoring overhead strength and relieving night pain.'
  },
  {
    id: 'bankart-repair',
    title: "Bankart's Repair",
    body: 'Treats shoulder instability from a torn glenoid labrum. The labrum is reattached with suture anchors to restore joint stability and prevent recurrent dislocations in athletes and young adults.'
  },
  {
    id: 'shoulder-debridement',
    title: 'Joint Debridement / Adhesiolysis',
    body: 'Similar to knee debridement — removes damaged tissue, loose bodies and scar adhesions within the shoulder joint. Improves range of motion and reduces pain in stiff or inflamed shoulders.'
  },
  {
    id: 'shoulder-advanced',
    title: 'Remplissage Procedure',
    body: 'Often combined with Bankart repair for engaging Hill-Sachs defects. The humeral defect is filled to prevent the ball from slipping out, enhancing stability for throwing and contact-sport athletes.'
  }
];

/** Advanced joint replacement procedure education — surgeon-specific */
export const JOINT_REPLACEMENT_PROCEDURES = [
  {
    id: 'total-knee',
    title: 'Total Knee Replacement (TKR) — Sub-Vastus Muscle-Sparing',
    color: '#0284c7',
    indication: 'Tricompartmental osteoarthritis, rheumatoid arthropathy, post-traumatic arthritis with bone-on-bone change and failed conservative care.',
    technique: 'Sub-vastus approach preserves the quadriceps tendon — the vastus medialis is elevated subperiosteally rather than divided. Distal femur and proximal tibia cuts are made with alignment jigs to restore mechanical axis. High-crosslinked polyethylene insert and cobalt-chrome or oxidised zirconium femoral component are seated after soft-tissue balancing.',
    recovery: 'Day 1–2: stand and walk with frame/walker. Day 4–5: stair training, discharge planning. Weeks 2–6: home physiotherapy, wean walking aid. Months 3–6: return to low-impact activity when quadriceps strength permits.',
    bullets: ['1,000+ knee replacements in clinical practice', 'CR / PS implant choice per ligament status', 'Bilateral staged or simultaneous when medically fit']
  },
  {
    id: 'partial-knee',
    title: 'Partial / Unicondylar Knee Replacement (UKR)',
    color: '#0d9488',
    indication: 'Isolated medial or lateral compartment arthritis with intact ACL, correctable deformity and pain localised to one side of the knee — not suitable for widespread tricompartmental disease.',
    technique: 'Only the worn femoral condyle and tibial plateau are resurfaced through a smaller incision. Native cruciate ligaments and unaffected cartilage compartments are preserved, maintaining more natural knee kinematics than total replacement.',
    recovery: 'Often faster than TKR: many patients walk independently within 1–2 weeks and return to desk work by 3–4 weeks. Strict patient selection is essential — progression to TKR remains possible if other compartments deteriorate.',
    bullets: ['Preserves ACL & healthy bone stock', 'Smaller scar, less bone removal', 'Ideal for younger active patients with single-compartment OA']
  },
  {
    id: 'total-hip',
    title: 'Total Hip Replacement (THR) — Uncemented Press-Fit',
    color: '#0284c7',
    indication: 'Avascular necrosis (AVN) of femoral head, primary hip osteoarthritis, ankylosing spondylitis hip involvement, and painful dysplasia where socket and head are reconstructible without major shortening.',
    technique: 'Porous-coated titanium acetabular shell is press-fit into prepared socket; ceramic or metal femoral head articulates on highly cross-linked polyethylene or ceramic liner. Uncemented stems achieve biological fixation through bone ingrowth — avoiding cement-related long-term loosening in active patients.',
    recovery: 'Partial weight-bearing with walker immediately per protocol. Hospital stay typically 3–5 days. Hip precautions (avoid extreme flexion/internal rotation early) for 6–12 weeks. Driving and office work often resume 4–6 weeks post-op.',
    bullets: ['Ceramic / polyethylene bearing surfaces', 'AVN & primary OA most common indications', 'Performed at Manipal, Sparsh, HOSMAT']
  },
  {
    id: 'crowe-hip',
    title: 'Crowe Type IV Hip Reconstruction & Subtrochanteric Osteotomy',
    color: '#d4a017',
    indication: 'Crowe Type IV developmental dysplasia — congenital high dislocation of the femoral head with severe limb shortening, shallow acetabulum and abnormal gait from childhood.',
    technique: 'Requires subtrochanteric shortening osteotomy to bring the femoral head down to a reconstructed true acetabulum without stretching the sciatic nerve. Uncemented THR with specialised cups and long stems restores leg length and hip centre of rotation. Presented at OASISCON 2018; covered in regional orthopaedic press.',
    recovery: 'Longer protected weight-bearing than standard THR — typically 8–12 weeks partial weight-bearing with crutches. Limb length equalisation is gradual; gait training is intensive. Outcomes depend on pre-op contractures and abductor strength.',
    bullets: ['OASISCON 2018 published case series', 'Among the most complex hip surgeries in orthopaedics', 'Referral centre cases from across Karnataka']
  },
  {
    id: 'revision-joint',
    title: 'Revision Knee & Hip Replacement',
    color: '#0369a1',
    indication: 'Aseptic loosening, polyethylene wear, periprosthetic fracture, instability after primary TKR/THR, or deep infection requiring two-stage exchange.',
    technique: 'Failed components are removed; bone defects are assessed with CT and classified (Paprosky / AORI). Modular tapered revision stems, trabecular metal augments and structural allograft restore fixation. In infection, antibiotic spacer placement precedes definitive re-implantation.',
    recovery: 'Highly individualised — often slower than primary replacement. Protected weight-bearing for 6–12 weeks; close follow-up with serial X-rays. Goal is pain relief and stable, load-bearing fixation rather than sport-level activity.',
    bullets: ['Modular revision stems & bone augments', 'Two-stage protocol for infected joints', 'Complex cases at tertiary partner hospitals']
  }
];
