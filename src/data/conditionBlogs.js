import {
  Bone, Dumbbell, Zap, Heart, Brain, Shield,
  Activity, PersonStanding, AlignCenter, FlipHorizontal2, Hand, Footprints
} from 'lucide-react';
import { ARTICLE_COVERS } from './clinicalContent';

/** Condition index + patient education blogs for Conditions We Treat */
export const CONDITIONS = [
  {
    id: 'knee-osteoarthritis',
    icon: Bone,
    label: 'Knee pain & arthritis',
    category: 'Knee Care',
    coverImage: ARTICLE_COVERS.kneeOa,
    articleId: 'blog-knee-osteoarthritis'
  },
  {
    id: 'hip-dysplasia-avn',
    icon: Activity,
    label: 'Hip pain & AVN',
    category: 'Joint Replacement',
    coverImage: ARTICLE_COVERS.hip,
    articleId: 'blog-hip-dysplasia-avn'
  },
  {
    id: 'acl-ligament',
    icon: Dumbbell,
    label: 'ACL & ligament tear',
    category: 'Sports Medicine',
    coverImage: ARTICLE_COVERS.acl,
    articleId: 'blog-acl-ligament'
  },
  {
    id: 'rotator-cuff',
    icon: Hand,
    label: 'Shoulder pain',
    category: 'Sports Medicine',
    coverImage: ARTICLE_COVERS.rotatorCuff,
    articleId: 'blog-rotator-cuff'
  },
  {
    id: 'sciatica',
    icon: Brain,
    label: 'Sciatica & leg pain',
    category: 'Spine Care',
    coverImage: ARTICLE_COVERS.sciatica,
    articleId: 'blog-sciatica'
  },
  {
    id: 'slip-disc',
    icon: AlignCenter,
    label: 'Slip disc / back pain',
    category: 'Spine Care',
    coverImage: ARTICLE_COVERS.slipDisc,
    articleId: 'blog-slip-disc'
  },
  {
    id: 'sports-injury',
    icon: Zap,
    label: 'Sports injuries',
    category: 'Sports Medicine',
    coverImage: ARTICLE_COVERS.sports,
    articleId: 'blog-sports-injury'
  },
  {
    id: 'fractures-trauma',
    icon: Shield,
    label: 'Fractures & accidents',
    category: 'Trauma Care',
    coverImage: ARTICLE_COVERS.fracture,
    articleId: 'blog-fractures-trauma'
  },
  {
    id: 'arthritis-joint',
    icon: Heart,
    label: 'Joint pain & arthritis',
    category: 'General Orthopedics',
    coverImage: ARTICLE_COVERS.arthritis,
    articleId: 'blog-arthritis-joint'
  },
  {
    id: 'frozen-shoulder',
    icon: PersonStanding,
    label: 'Frozen shoulder',
    category: 'Sports Medicine',
    coverImage: ARTICLE_COVERS.frozenShoulder,
    articleId: 'blog-frozen-shoulder'
  },
  {
    id: 'meniscus-cartilage',
    icon: FlipHorizontal2,
    label: 'Meniscus tear',
    category: 'Sports Medicine',
    coverImage: ARTICLE_COVERS.meniscus,
    articleId: 'blog-meniscus-cartilage'
  },
  {
    id: 'ankle-foot',
    icon: Footprints,
    label: 'Ankle & foot injury',
    category: 'Trauma Care',
    coverImage: ARTICLE_COVERS.ankle,
    articleId: 'blog-ankle-foot'
  }
];

export const CONDITION_ARTICLES = [
  {
    id: 'blog-knee-osteoarthritis',
    title: 'Knee pain & arthritis: when stiffness needs more than rest',
    author: 'Dr Prashantkumar',
    date: 'Patient Guide · 2026',
    category: 'Knee Care',
    readTime: '7 min read',
    coverImage: ARTICLE_COVERS.kneeOa,
    doctorPic: '/Images/doctor-portrait-coat.jpg',
    summary: 'Morning knee stiffness, grinding pain, and difficulty climbing stairs are classic signs of osteoarthritis. Learn how Dr Prashantkumar stages treatment from physiotherapy to muscle-sparing TKR.',
    keyTakeaways: [
      'Osteoarthritis is wear of joint cartilage — not simply “old age.”',
      'Weight management, quadriceps strengthening, and viscosupplementation often delay surgery.',
      'Muscle-sparing TKR may be considered when pain limits daily life despite conservative care; mobilisation goals are individualized.'
    ],
    content: `
      ### What Is Knee Osteoarthritis?
      Osteoarthritis (OA) is progressive loss of the smooth cartilage that cushions the femur and tibia. Bone ends rub, inflammation rises, and patients feel **grinding, swelling, and activity-related pain**.

      ### Early Warning Signs Patients Ignore
      * Morning stiffness lasting more than 30 minutes
      * Pain after sitting for long periods (theatre or flight)
      * Difficulty squatting, kneeling, or climbing stairs
      * Night pain that wakes you from sleep

      ### How Dr Prashantkumar Evaluates Your Knee
      Clinical exam plus **weight-bearing X-rays** (not lying X-rays alone) show true joint space loss. MRI is reserved when meniscus tears or ligament injury are also suspected.

      ### Stepwise Treatment Pathway
      1. **Lifestyle & Physiotherapy** — Quadriceps and glute strengthening, activity modification, BMI optimisation.
      2. **Injections** — Hyaluronic acid viscosupplementation or PRP for selected early–moderate cases.
      3. **Muscle-Sparing Total Knee Replacement** — For Grade 3–4 OA with failed conservative care; selected patients may stand or walk with support on Day 1, subject to medical assessment.

      ### When to Book a Consult
      If painkillers are needed daily, sleep is disturbed, or walking distance is shrinking, schedule an OPD visit at Vega Curre Clinic or affiliated hospitals.
    `
  },
  {
    id: 'blog-hip-dysplasia-avn',
    title: 'Hip pain, dysplasia & AVN: when a specialist hip rebuild is needed',
    author: 'Dr Prashantkumar',
    date: 'Patient Guide · 2026',
    category: 'Joint Replacement',
    readTime: '8 min read',
    coverImage: ARTICLE_COVERS.hip,
    doctorPic: '/Images/doctor-portrait-coat.jpg',
    summary: 'From Crowe Type IV congenital dislocation to AVN of the femoral head — why specialised uncemented THR and osteotomy planning matter for lasting mobility.',
    keyTakeaways: [
      'AVN often presents as groin pain in young adults after steroids, alcohol, or trauma.',
      'Crowe Type IV dysplasia may need subtrochanteric shortening osteotomy with THR.',
      'Early imaging and specialist referral prevent irreversible femoral head collapse.'
    ],
    content: `
      ### Understanding Hip Dysplasia
      Developmental dysplasia leaves the socket shallow and the femoral head poorly covered. In severe **Crowe Type IV** cases, the hip is fully dislocated with limb shortening — one of the most demanding reconstructions in orthopedics.

      ### What Is Avascular Necrosis (AVN)?
      AVN is death of bone tissue from lost blood supply to the femoral head. Patients often feel **deep groin pain**, limping, and reduced hip rotation long before X-rays look dramatic.

      ### Dr Prashantkumar’s Approach
      * Detailed limb-length and acetabular templating
      * **Uncemented titanium cups and stems** for osseointegration
      * Subtrochanteric osteotomy when needed to protect the sciatic nerve (technique presented at OASISCON 2018)
      * Early mobilisation protocols after THR

      ### Non-Surgical Options for Early AVN
      Core decompression and activity modification may help before collapse. Once the head collapses and arthritis sets in, **Total Hip Replacement** may improve pain and function when recommended after assessment.
    `
  },
  {
    id: 'blog-acl-ligament',
    title: 'ACL tear: keyhole repair that helps athletes return to sport',
    author: 'Dr Prashantkumar',
    date: 'Patient Guide · 2026',
    category: 'Sports Medicine',
    readTime: '6 min read',
    coverImage: ARTICLE_COVERS.acl,
    doctorPic: '/Images/doctor-portrait-suit.jpg',
    summary: 'A “pop,” swelling, and instability after a pivot injury often means ACL rupture. Learn anatomical reconstruction, meniscus-preserving strategy, and rehab timelines.',
    keyTakeaways: [
      'ACL tears rarely heal on their own in active patients who pivot or cut.',
      'Anatomical single- or double-bundle reconstruction restores rotational stability.',
      'Full sports return typically takes 6–9 months with structured physiotherapy.'
    ],
    content: `
      ### Typical Injury Story
      Football, badminton, or sudden twisting — you hear a **pop**, the knee swells within hours, and it feels unstable on stairs or turns.

      ### Diagnosis
      Clinical Lachman / pivot-shift tests plus **MRI** confirm ACL, PCL, or collateral ligament injury and associated meniscus tears.

      ### Arthroscopic ACL Reconstruction
      Dr Prashantkumar performs **keyhole anatomical reconstruction** using autograft (often hamstring), precise tunnel placement, and careful meniscus repair when indicated — preserving the shock-absorber cartilage whenever possible.

      ### Recovery Roadmap
      * Weeks 0–2: Swelling control, gentle ROM, protected weight-bearing
      * Months 2–4: Strength, balance, light jogging
      * Months 6–9: Sport-specific drills and return-to-play testing

      Partial tears in low-demand patients may be managed non-operatively with bracing and physio — decisions are individualised in OPD.
    `
  },
  {
    id: 'blog-rotator-cuff',
    title: 'Shoulder pain & rotator cuff tears: why night pain needs early care',
    author: 'Dr Prashantkumar',
    date: 'Patient Guide · 2026',
    category: 'Sports Medicine',
    readTime: '6 min read',
    coverImage: ARTICLE_COVERS.rotatorCuff,
    doctorPic: '/Images/doctor-clinical-team.jpg',
    summary: 'Rotator cuff tears cause night pain and difficulty lifting the arm. Organiser of “The Shoulder Key Basics,” Dr Prashantkumar explains repair vs rehab.',
    keyTakeaways: [
      'Night pain and overhead weakness are classic rotator cuff red flags.',
      'Partial tears often respond to physio and injections; full tears may need arthroscopic repair.',
      'Early repair may be considered in selected active patients; timing depends on tear pattern, tissue quality and symptoms.'
    ],
    content: `
      ### What the Rotator Cuff Does
      Four tendons stabilise the shoulder ball in the socket and power lifting, reaching, and rotation.

      ### Symptoms That Should Prompt a Visit
      * Pain at night lying on the affected side
      * Weakness raising the arm or pouring tea
      * Clicking after a fall or overhead sports

      ### Treatment Ladder
      1. Physiotherapy focusing on scapular control and cuff activation
      2. Targeted anti-inflammatory injections when appropriate
      3. **Arthroscopic suture-anchor repair** for full-thickness or failed non-surgical cases

      As Organising Chairman of **“The Shoulder Key Basics,”** Dr Prashantkumar emphasises precise arthroscopic technique and guided rehab for durable outcomes.
    `
  },
  {
    id: 'blog-sciatica',
    title: 'Sciatica & nerve pain: most people improve without spine surgery',
    author: 'Dr Prashantkumar',
    date: 'Patient Guide · 2026',
    category: 'Spine Care',
    readTime: '6 min read',
    coverImage: ARTICLE_COVERS.sciatica,
    doctorPic: '/Images/doctor-clinical-team.jpg',
    summary: 'Burning pain down the leg is often a compressed spinal nerve — not a “hip problem.” Insights from Dr Prashantkumar’s Suvarna News Dear Doctor talk.',
    keyTakeaways: [
      'Many people with sciatica improve with non-surgical care; the cause, examination and red flags determine the plan.',
      'Red flags: progressive weakness, bladder/bowel change, or saddle numbness — seek urgent care.',
      'Nerve root blocks can relieve severe pain while the disc heals.'
    ],
    content: `
      ### What Sciatica Really Is
      Sciatica is **radiating nerve pain** from lumbar root compression — often L4-L5 or L5-S1 disc herniation — shooting into the buttock, thigh, or foot.

      ### Myths Cleared on Suvarna News
      Seeing a spine-aware orthopedic specialist does **not** mean automatic surgery. Dr Prashantkumar’s public education focus: posture, core strength, and targeted injections first.

      ### Evidence-Based Non-Surgical Care
      * Activity modification (avoid prolonged forward bending)
      * Core and glute rehabilitation
      * Transforaminal epidural nerve root blocks for severe flares
      * Ergonomic workstation design for IT professionals

      Surgery is reserved for progressive neurological deficit or failed conservative therapy after adequate time.
    `
  },
  {
    id: 'blog-slip-disc',
    title: 'Slip disc: what herniation means — without the panic',
    author: 'Dr Prashantkumar',
    date: 'Patient Guide · 2026',
    category: 'Spine Care',
    readTime: '7 min read',
    coverImage: ARTICLE_COVERS.slipDisc,
    doctorPic: '/Images/doctor-portrait-coat.jpg',
    summary: 'A “slipped disc” is disc material pressing on a nerve. Most patients recover with decompression protocols, injections, and time — surgery is selective.',
    keyTakeaways: [
      'Disc herniation often improves as inflammation settles over weeks to months.',
      'MRI guides care but clinical findings decide urgency.',
      'Microdiscectomy is considered only when pain or weakness persists despite optimal non-surgical care.'
    ],
    content: `
      ### Anatomy in Plain Language
      Spinal discs are cushions between vertebrae. When the soft centre pushes through the outer ring, it can irritate a nerve root — commonly at **L4-L5 or L5-S1**.

      ### Symptoms
      Back pain with leg radiation, numbness, or tingling. Cough/sneeze may worsen pain.

      ### Dr Prashantkumar’s Protocol
      * Accurate neurological examination
      * Selective MRI interpretation (not every MRI finding needs surgery)
      * Traction, physiotherapy, and **targeted epidural blocks**
      * Clear timeline: when to escalate vs continue conservative care

      Patients leave with a written plan — not fear-based recommendations.
    `
  },
  {
    id: 'blog-sports-injury',
    title: 'Sports injuries: from the field to a clear recovery plan',
    author: 'Dr Prashantkumar',
    date: 'Patient Guide · 2026',
    category: 'Sports Medicine',
    readTime: '5 min read',
    coverImage: ARTICLE_COVERS.sports,
    doctorPic: '/Images/doctor-portrait-suit.jpg',
    summary: 'Ankle sprains, ACL tears, shoulder dislocations — sports medicine is about accurate diagnosis, timely repair, and criterion-based return to sport.',
    keyTakeaways: [
      '“Play through pain” often converts a simple injury into a chronic one.',
      'Return-to-play should be criterion-based, not calendar-based alone.',
      'Keyhole surgery may be suitable as a day-care procedure for selected ligament and cartilage injuries.'
    ],
    content: `
      ### Common Sports Injuries Seen in Clinic
      ACL/PCL tears, meniscus injuries, ankle ligament sprains, shoulder dislocations, and muscle strains.

      ### The Vega Curre Sports Pathway
      1. Same-week clinical assessment where possible
      2. Imaging only when it changes management
      3. Arthroscopy when structural repair is required
      4. Custom rehab milestones shared with your physiotherapist

      Whether you are a weekend footballer or a competitive athlete, the goal is **safe, durable return** — not the fastest reckless comeback.
    `
  },
  {
    id: 'blog-fractures-trauma',
    title: 'Fractures & accidents: why timing and fixation technique matter',
    author: 'Dr Prashantkumar',
    date: 'Patient Guide · 2026',
    category: 'Trauma Care',
    readTime: '7 min read',
    coverImage: ARTICLE_COVERS.fracture,
    doctorPic: '/Images/doctor-clinical-team.jpg',
    summary: 'High-energy accidents need anatomical reduction, stable fixation, and early joint motion. Insights from mass-casualty and complex non-union experience.',
    keyTakeaways: [
      'Open fractures are emergencies and need prompt antibiotics, wound care and surgical assessment.',
      'MIPO and interlocking nails reduce soft-tissue damage vs older large exposures.',
      'Non-union and failed previous fixation need specialist reconstruction planning.'
    ],
    content: `
      ### What Makes Trauma “Complex”?
      Intra-articular fractures, pelvic injuries, open wounds, multiple broken bones, or bones that failed to heal (**non-union**).

      ### Surgical Principles Dr Prashantkumar Follows
      * **Minimally Invasive Plate Osteosynthesis (MIPO)** where appropriate
      * Intramedullary nailing for long bones
      * Bone grafting for gaps and non-unions
      * Early physiotherapy to prevent joint stiffness

      Recognised for leadership in challenging emergency settings including Sabarimala mass-casualty response, the focus remains: restore anatomy, protect soft tissue, and mobilise early.
    `
  },
  {
    id: 'blog-arthritis-joint',
    title: 'Joint pain & arthritis: think before daily painkillers',
    author: 'Dr Prashantkumar',
    date: 'Patient Guide · 2026',
    category: 'General Orthopedics',
    readTime: '6 min read',
    coverImage: ARTICLE_COVERS.arthritis,
    doctorPic: '/Images/doctor-portrait-coat.jpg',
    summary: 'Not all joint pain is osteoarthritis. Inflammatory arthritis, bursitis, and mechanical overload need different paths — diagnosis first, drugs second.',
    keyTakeaways: [
      'Daily NSAIDs without diagnosis can mask serious disease and harm the stomach/kidneys.',
      'Rheumatoid and gouty arthritis need medical co-management.',
      'Preserving the natural joint with injections and physio is preferred when possible.'
    ],
    content: `
      ### Types of Joint Pain
      * **Osteoarthritis** — wear-and-tear cartilage loss
      * **Inflammatory arthritis** — rheumatoid, seronegative
      * **Crystal arthritis** — gout / pseudogout
      * **Soft-tissue** — bursitis, tendinitis

      ### Clinic Evaluation
      History, exam, blood tests when indicated, and appropriate imaging. Treatment may include physiotherapy, bracing, viscosupplementation, PRP, or referral for rheumatology.

      Surgery (arthroscopy or replacement) is considered only after the right non-surgical pathway fails — never as a first reflex.
    `
  },
  {
    id: 'blog-frozen-shoulder',
    title: 'Frozen shoulder: stiff shoulder that needs patience and the right plan',
    author: 'Dr Prashantkumar',
    date: 'Patient Guide · 2026',
    category: 'Sports Medicine',
    readTime: '5 min read',
    coverImage: ARTICLE_COVERS.frozenShoulder,
    doctorPic: '/Images/doctor-portrait-suit.jpg',
    summary: 'Frozen shoulder progresses through freezing, frozen, and thawing stages. Smart physio, injections, and selective release restore motion.',
    keyTakeaways: [
      'Diabetes and thyroid disease increase frozen shoulder risk.',
      'Aggressive stretching in the wrong stage can worsen pain.',
      'Arthroscopic capsular release helps stubborn cases after failed conservative care.'
    ],
    content: `
      ### The Three Stages
      1. **Freezing** — rising pain, reducing motion
      2. **Frozen** — pain eases slightly but stiffness dominates
      3. **Thawing** — gradual return of motion over months

      ### Treatment
      Guided physiotherapy matched to stage, anti-inflammatory strategies, and hydrodilatation or injections when appropriate. Persistent functional limitation may need **arthroscopic release** followed by intensive rehab.

      Early consultation shortens disability — especially for diabetic patients.
    `
  },
  {
    id: 'blog-meniscus-cartilage',
    title: 'Meniscus tear: repair when you can, remove only when you must',
    author: 'Dr Prashantkumar',
    date: 'Patient Guide · 2026',
    category: 'Sports Medicine',
    readTime: '6 min read',
    coverImage: ARTICLE_COVERS.meniscus,
    doctorPic: '/Images/doctor-clinical-team.jpg',
    summary: 'The meniscus is the knee’s shock absorber. Modern arthroscopy prioritises repair and cartilage preservation over old-style removal.',
    keyTakeaways: [
      'Bucket-handle and peripheral tears are often repairable — especially in younger patients.',
      'Unnecessary meniscectomy accelerates osteoarthritis.',
      'Cartilage grafting and preservation techniques protect long-term joint health.'
    ],
    content: `
      ### Why the Meniscus Matters
      It distributes load and stabilises the knee. Removing large portions without need raises future arthritis risk.

      ### Modern Keyhole Strategy
      * All-inside and hybrid **meniscal repair** techniques
      * Selective partial meniscectomy only for irreparable white-zone tears
      * Cartilage assessment and adjunct procedures when indicated

      Rehabilitation after repair is protected weight-bearing — slower than removal, but better for the joint decade ahead.
    `
  },
  {
    id: 'blog-ankle-foot',
    title: 'Ankle & foot injuries: why “just rest” is not always enough',
    author: 'Dr Prashantkumar',
    date: 'Patient Guide · 2026',
    category: 'Trauma Care',
    readTime: '5 min read',
    coverImage: ARTICLE_COVERS.ankle,
    doctorPic: '/Images/doctor-portrait-coat.jpg',
    summary: 'Repeated ankle sprains, ligament laxity, and missed fractures can lead to chronic instability. Timely assessment and rehabilitation may reduce the risk of persistent instability and altered gait.',
    keyTakeaways: [
      'Grade 3 ligament injuries and fractures need structured immobilisation or surgery.',
      'Chronic ankle instability increases cartilage damage risk.',
      'Early physio after sprain reduces recurrence.'
    ],
    content: `
      ### Common Presentations
      Inversion sprains, malleolar fractures, Achilles issues, and midfoot injuries after twists or falls.

      ### Care Pathway
      Accurate Ottawa-rule informed imaging, bracing or casting when needed, ligament repair/reconstruction for chronic instability, and progressive proprioception training.

      If your ankle still “gives way” months after a sprain, book an orthopedic review — chronic instability is treatable.
    `
  }
];
