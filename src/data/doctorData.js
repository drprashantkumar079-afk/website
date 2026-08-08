// Peak Level Data Store for Dr Prashantkumar
import { ARTICLE_COVERS } from './clinicalContent';
import { ALL_SPECIALTY_FAQS } from './specialtyFaqs';

export const DOCTOR_INFO = {
  name: "Dr Prashantkumar",
  title: "Senior Consultant Orthopedic Surgeon | Joint Replacement, Keyhole Arthroscopy & Trauma",
  qualifications: "MBBS D-Ortho (DNB), FIJR",
  experienceYears: 15,
  surgeriesCount: "3,800+",
  satisfactionRate: "99.4%",
  socialLinks: {
    youtubeChannel: "https://www.youtube.com/channel/UCw9E_H95SrJf4yKK0tag1rw",
    facebook: "https://www.facebook.com/share/1C22HRDbm8/?mibextid=wwXIfr",
    facebookPage: "https://www.facebook.com/dr.prashantkumar23",
    instagram: "https://www.instagram.com/dr.prashantkumar23",
    linkedin: "https://www.linkedin.com/in/dr-prashantkumar-n-d-200094a0/",
    whatsapp: "https://wa.me/916364123431"
  },
  roles: [
    "Director, Vega Curre Multispeciality Clinic (Founded Nov 2024)",
    "Visiting Consultant, Manipal Hospital, Bengaluru",
    "Visiting Consultant, Sparsh Hospital, Bengaluru",
    "Visiting Consultant, HOSMAT Hospital, Bengaluru"
  ],
  hospitalAffiliations: [
    "Vega Curre Multispeciality Clinic (Director)",
    "Manipal Hospital, Bengaluru",
    "Sparsh Hospital, Bengaluru",
    "HOSMAT Hospital, Bengaluru"
  ],
  mediaAppearances: [
    {
      mediaName: "Asianet Suvarna News Kannada",
      program: "'Dear Doctor' Public Health Broadcast",
      topic: "Nerve Health, Sciatica & Joint Alignment Secrets",
      date: "June 2026"
    },
    {
      mediaName: "National Orthopedic Press & Regional Dailies",
      program: "OASISCON 2018 Special Coverage",
      topic: "Crowe Type IV Hip Reconstruction with Subtrochanteric Osteotomy",
      date: "OASISCON 2018"
    },
    {
      mediaName: "Public Healthcare Press",
      program: "Disaster Emergency Care Recognition",
      topic: "Exemplary Leadership in Sabarimala Mass Casualty Management",
      date: "Mass Casualty Management"
    }
  ],
  achievementsList: [
    {
      year: "2026",
      title: "Asianet Suvarna News Expert Speaker",
      desc: "Invited speaker on 'Dear Doctor' program delivering statewide public health education on nerve and bone health."
    },
    {
      year: "2024",
      title: "Founder & Director - Vega Curre Clinic",
      desc: "Established Vega Curre Multispeciality Clinic in November 2024 to provide ethical, patient-centered orthopedic care."
    },
    {
      year: "2022",
      title: "Organizing Chairman - 'The Shoulder Key Basics'",
      desc: "Led scientific conference in Kottayam to train young arthroscopy surgeons in advanced shoulder keyhole procedures."
    },
    {
      year: "2018",
      title: "OASISCON 2018 Paper & Press Recognition",
      desc: "Presented a paper on Crowe Type IV Hip Dysplasia using Uncemented THR with Subtrochanteric Osteotomy; the work received regional press coverage."
    },
    {
      year: "2015 - 2023",
      title: "8 Years Senior Consultant & Faculty - SH Medical Centre",
      desc: "Awarded 'Excellence in Orthopedics' for 8 years of clinical service and teaching medical students."
    },
    {
      year: "2013",
      title: "DNB Orthopedics Thesis Recognition",
      desc: "Accepted thesis on Hemiarthroplasty with Bipolar Prosthesis via Lateral (Hardinge) Approach for elderly femur neck fractures."
    },
    {
      year: "Leadership",
      title: "IT Secretary - Madhya Kerala Orthopaedic Society",
      desc: "Elected to lead digital & academic initiatives for regional orthopedic surgical community."
    },
    {
      year: "Community",
      title: "Sabarimala Relief & Free Health Camps",
      desc: "Recognized for emergency disaster relief at Sabarimala; organized free camps in Amruthnagar, Kempapura, and Rachenahalli."
    }
  ],
  contacts: {
    phonePrimary: "+91 63641 23431",
    whatsapp: "916364123431",
    email: "vegacurre@gmail.com",
    addressLine1: "2nd Floor, Shop No. 24 & 25, 3rd A Cross",
    addressLine2: "Bhuvaneswari Nagar, Dasarahalli Main Road",
    addressLine3: "Hebbal Kempapura, Bengaluru – 560024",
    location: "Vega Curre Multispeciality Clinic, Hebbal Kempapura, Bengaluru",
    mapsUrl: "https://maps.app.goo.gl/AWnwvQAfmFMe7ax87",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d77.5754!3d13.0456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17be10a60e33%3A0x7d5c2e1d6f8a8f5d!2sVega%20Curre%20Multispeciality%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000",
    opdHours: "Mon – Sat: 10 AM – 8:30 PM | Sun: 10 AM – 12 PM (Prior Appt)",
    opdSchedule: {
      monSat: { open: '10:00', close: '20:30', label: 'Mon – Sat: 10 AM – 8:30 PM' },
      sun: { open: '10:00', close: '12:00', label: 'Sun: 10 AM – 12 PM (Prior Appt)', byAppointment: true }
    },
    nearbyLandmarks: [
      'Near Hebbal Flyover, Outer Ring Road',
      'Opposite Bhuvaneswari Nagar Park',
      'Dasarahalli Main Road, Kempapura'
    ]
  },
  images: {
    hero: "/Images/dr-prashant-kumar-profile.jpg",
    heroAlt: "/Images/dr-prashant-kumar-profile.jpg",
    about: "/Images/dr-prashant-kumar-profile.jpg",
    portrait: "/Images/dr-prashant-kumar-profile.jpg",
    clinical: "/Images/clinic-opd.jpg",
    roboticKnee: "/Images/robotic-knee.png",
    keyholeArthroscopy: "/Images/keyhole-arthroscopy.png",
    specialties: {
      jointReplacement: "/Images/joint-care.jpg",
      arthroscopy: "/Images/conference.jpg",
      trauma: "/Images/arthroscopy-care.jpg",
      spine: "/Images/spine-care.jpg"
    },
    articles: "/Images/community-care.jpg",
    videos: "/Images/doctor-clinical-team.jpg",
    gallery: [
      { id: 1, src: "/Images/surgery-reconstruct.jpg", title: "Complex Knee & Hip Reconstruction Surgery", category: "Surgery" },
      { id: 2, src: "/Images/doctor-portrait-suit.jpg", title: "Dr Prashantkumar — Professional Portrait", category: "Profile" },
      { id: 3, src: "/Images/doctor-clinical-team.jpg", title: "Clinical Leadership & Patient Care", category: "Clinic" },
      { id: 4, src: "/Images/robotic-knee.png", title: "Advanced Joint Replacement Technology", category: "Technology" },
      { id: 5, src: "/Images/doctor-portrait-coat.jpg", title: "Senior Orthopedic Specialist", category: "Profile" },
      { id: 6, src: "/Images/clinic-opd.jpg", title: "Vega Curre Multispeciality Clinic OPD", category: "Clinic" },
      { id: 7, src: "/Images/keyhole-arthroscopy.png", title: "Keyhole Arthroscopy Precision Care", category: "Technology" },
      { id: 8, src: "/Images/arthroscopy-care.jpg", title: "Minimally Invasive Arthroscopy", category: "Surgery" },
      { id: 9, src: "/Images/spine-care.jpg", title: "Spine & Nerve Health Rehabilitation", category: "Spine Care" },
      { id: 10, src: "/Images/health-camp.jpg", title: "Community Health Camp — Patient Care", category: "Community" },
      { id: 11, src: "/Images/conference.jpg", title: "Shoulder Key Basics Conference", category: "Academics" },
      { id: 12, src: "/Images/community-care.jpg", title: "Free Health Camp Amruthnagar & Rachenahalli", category: "Community" }
    ]
  }
};

export const SPECIALTIES = [
  {
    id: "joint-replacement",
    title: "Total Knee & Complex Hip Replacement (TKR / THR)",
    badge: "Crowe Type IV Hip Specialist",
    image: "/Images/robotic-knee.png",
    doctorPic: "/Images/doctor-portrait-suit.jpg",
    shortDesc: "Muscle-sparing joint replacement planning, including complex subtrochanteric osteotomy planning for severe hip dysplasia.",
    fullDesc: "Dr Prashantkumar specializes in Total Knee Replacement (TKR) and complex Total Hip Replacement (THR). He has presented work at OASISCON on Crowe Type IV Developmental Dysplasia of the Hip. Surgical planning, implant choice and mobilisation are tailored to each patient's anatomy, health and recovery goals.",
    highlights: [
      "Crowe Type IV Dysplasia & Osteotomy Planning",
      "Early Mobilisation When Clinically Appropriate",
      "Implant choices discussed around anatomy and long-term goals",
      "Visiting Surgeon at Manipal, Sparsh & HOSMAT Hospitals"
    ],
    recoveryTimeline: "Recovery varies with the procedure, health, rehabilitation and individual response; the team sets milestones after assessment.",
    suitableFor: ["Severe Osteoarthritis", "Crowe Type IV Dysplasia", "Avascular Necrosis (AVN) of Hip", "Post-Traumatic Joint Stiffness"]
  },
  {
    id: "arthroscopy",
    title: "Arthroscopy & Sports Medicine",
    badge: "'The Shoulder Key' Organizer",
    image: "/Images/keyhole-arthroscopy.png",
    doctorPic: "/Images/arthroscopy-care.jpg",
    shortDesc: "Keyhole procedures for ACL/PCL knee ligaments, shoulder rotator cuff, and sports injury rehabilitation.",
    fullDesc: "Organizer of 'The Shoulder Key Basics' scientific conference for young orthopedic surgeons, Dr Prashantkumar performs high-definition keyhole repairs for knee ligaments, meniscus tears, shoulder dislocations, and rotator cuff injuries, enabling athletes and active adults to return to sports.",
    highlights: [
      "Anatomical Single-Graft & Double-Bundle ACL Repair",
      "Shoulder Rotator Cuff & Bankart Reconstruction",
      "Meniscus Preservation & Cartilage Grafting",
      "Day-care keyhole surgery may be suitable for selected patients"
    ],
    recoveryTimeline: "Light activity within 10 days; full sports training at 3-6 months with custom rehab.",
    suitableFor: ["ACL/PCL Ligament Tears", "Meniscus Bucket-Handle Tears", "Recurrent Shoulder Dislocation", "Frozen Shoulder"]
  },
  {
    id: "trauma-care",
    title: "Complex Trauma & Polytrauma Management",
    badge: "Mass Casualty Relief Specialist",
    image: "/Images/arthroscopy-care.jpg",
    doctorPic: "/Images/clinic-opd.jpg",
    shortDesc: "Expert management of polytrauma, non-union fractures, pelvic injuries, and emergency disaster trauma response.",
    fullDesc: "With special commendations for his service during the Sabarimala Mass Casualty emergency, Dr Prashantkumar manages high-energy accidents and complex non-union fractures using advanced locking titanium plates, intramedullary nailing, and bone grafting.",
    highlights: [
      "Minimally Invasive Plate Osteosynthesis (MIPO)",
      "Non-Union & Malunion Bone Reconstruction",
      "Complex Intra-Articular & Pelvic Fractures",
      "Clinical response and mobilisation plans are tailored to the injury and fixation"
    ],
    recoveryTimeline: "Varies with fracture severity; early joint mobilization protocol is started immediately.",
    suitableFor: ["Open & Compound Fractures", "Pelvic & Acetabular Trauma", "Failed Previous Fracture Surgeries", "Deformity Correction"]
  },
  {
    id: "spine-care",
    title: "Spine & Nerve Health Care",
    badge: "Asianet Suvarna News Speaker",
    image: "/Images/spine-care.jpg",
    doctorPic: "/Images/doctor-portrait-coat.jpg",
    shortDesc: "Comprehensive care for Cervical Spondylosis, Nerve Compression, Sciatica, and Non-Surgical Decompression.",
    fullDesc: "Featured on Asianet Suvarna News' 'Dear Doctor' program for nerve and spine health, Dr Prashantkumar delivers evidence-based care for neck and back conditions, prioritizing targeted physiotherapy, nerve root blocks, and ergonomic posture correction before surgery.",
    highlights: [
      "Public Education Speaker on Suvarna News 'Dear Doctor'",
      "Targeted Nerve Root Blocks & Facet Joint Injections",
      "Non-Surgical Disc Decompression Protocols",
      "Ergonomic Spine & Core Rehabilitation"
    ],
    recoveryTimeline: "Relief timing varies; assessment determines whether physiotherapy, medication, an injection or another option is appropriate.",
    suitableFor: ["Cervical Spondylosis", "Lumbar Slip Disc (L4-L5/S1)", "Sciatica Radiating Nerve Pain", "Spinal Stenosis"]
  }
];

export const CLINICAL_PAGES_DATA = {
  orthocare: {
    title: "General Ortho Care & Joint Wellness",
    tagline: "Comprehensive Non-Surgical & Surgical Joint Preservation",
    heroImage: "/Images/clinic-opd.jpg",
    overview: "Orthopedic care focuses on diagnosing, treating, and preventing musculoskeletal disorders affecting bones, joints, ligaments, tendons, and muscles. Dr Prashantkumar combines advanced diagnostic imaging with personalized physiotherapy and non-surgical interventions to treat joint degeneration early.",
    conditions: [
      "Osteoarthritis & Cartilage Wear",
      "Rheumatoid & Gouty Arthritis",
      "Osteoporosis & Bone Density Loss",
      "Tendinitis, Bursitis & Synovitis",
      "Chronic Back & Joint Stiffness"
    ],
    nonSurgicalOptions: [
      "Hyaluronic Acid Viscosupplementation Injections",
      "Platelet-Rich Plasma (PRP) Cartilage Therapy",
      "Targeted Physical Rehabilitation & Quadriceps Exercises",
      "Lifestyle & Postural Ergonomics Modification"
    ]
  },
  jointreplacement: {
    title: "Total Knee & Total Hip Replacement (TKR / THR)",
    tagline: "Planned, muscle-sparing joint replacement care",
    heroImage: "/Images/robotic-knee.png",
    overview: "Joint replacement surgery replaces damaged cartilage and bone surfaces with biocompatible implants. Dr Prashantkumar provides Total Knee Replacement (TKR) and complex Total Hip Replacement (THR), including planning for subtrochanteric osteotomies in selected Crowe Type IV hip dysplasia cases.",
    conditions: [
      "End-Stage Knee Osteoarthritis (Grade 3 & 4)",
      "Severe Avascular Necrosis (AVN) of Femoral Head",
      "Crowe Type IV Congenital Hip Dysplasia",
      "Post-Traumatic Joint Arthritis & Deformity"
    ],
    surgicalTechniques: [
      "Sub-Vastus Muscle-Sparing Knee Incision",
      "Subtrochanteric Shortening Osteotomy for Dislocated Hips",
      "Uncemented Press-Fit Titanium & Ceramic Bearing Implants",
      "Early mobilisation plan based on clinical assessment"
    ]
  },
  arthroscopy: {
    title: "Keyhole Arthroscopy & Sports Medicine",
    tagline: "Minimally Invasive Ligament & Joint Reconstruction",
    heroImage: "/Images/keyhole-arthroscopy.png",
    overview: "Arthroscopy utilizes tiny 4mm fiber-optic cameras and precision micro-instruments to repair torn joint cartilage and ligaments without large surgical incisions. As the organizer of 'The Shoulder Key Basics', Dr Prashantkumar delivers elite sports medicine care for athletes and active individuals.",
    conditions: [
      "Knee ACL & PCL Ligament Tears",
      "Meniscus Bucket-Handle & Radial Tears",
      "Shoulder Rotator Cuff Tears & Impingement",
      "Recurrent Shoulder Dislocation (Bankart Lesions)",
      "Ankle Ligament & Cartilage Impingement"
    ],
    surgicalTechniques: [
      "Anatomical Single & Double-Bundle ACL Reconstruction",
      "Meniscal Repair & Preservation (All-Inside Technique)",
      "Suture Anchor Shoulder Stabilization",
      "Selected patients may be eligible for day-care discharge after assessment"
    ]
  },
  traumacare: {
    title: "Complex Trauma & Polytrauma Management",
    tagline: "Emergency fracture and non-union reconstruction",
    heroImage: "/Images/arthroscopy-care.jpg",
    overview: "High-velocity accidents require immediate emergency trauma response and anatomical bone realignment. Honored for Sabarimala Mass Casualty disaster management, Dr Prashantkumar leads emergency trauma teams in treating complex intra-articular fractures, open injuries, and failed previous bone fixations.",
    conditions: [
      "Complex Intra-Articular Fractures (Knee, Hip, Ankle, Elbow)",
      "Open & Compound Polytrauma Fractures",
      "Non-Union & Malunion (Unhealed Bones)",
      "Pelvic & Acetabular Ring Disruptions"
    ],
    surgicalTechniques: [
      "Minimally Invasive Plate Osteosynthesis (MIPO)",
      "Interlocking Titanium Intramedullary Nailing",
      "Autologous Bone Grafting & Bone Morphogenetic Protein",
      "Early Rigid Fixation for Immediate Joint Movement"
    ]
  },
  spinecare: {
    title: "Spine Care & Nerve Rehabilitation",
    tagline: "Targeted Decompression & Non-Surgical Relief",
    heroImage: "/Images/spine-care.jpg",
    overview: "Spine pain radiating into arms or legs is caused by spinal nerve root compression. Featured on Asianet Suvarna News' 'Dear Doctor' program, Dr Prashantkumar emphasizes evidence-based non-surgical decompression, targeted epidural nerve blocks, and core stabilization before considering surgery.",
    conditions: [
      "Cervical Spondylosis & Neck Muscle Spasm",
      "Lumbar Slip Disc (L4-L5, L5-S1 Herniation)",
      "Sciatica Radiating Nerve Pain Down Legs",
      "Spinal Canal Stenosis & Neurogenic Claudication"
    ],
    nonSurgicalTechniques: [
      "Targeted Transforaminal Epidural Nerve Root Blocks",
      "Selective Facet Joint Anti-Inflammatory Injections",
      "Lumbar Spine Traction & Core Strengthening Protocols",
      "Ergonomic Screen Positioning & Workstation Design"
    ]
  }
};

export const SOCIAL_POSTERS = [
  {
    id: "poster-1",
    platform: "Instagram",
    platformIcon: "instagram",
    handle: "@dr.prashantkumar23",
    image: "/Images/clinic-opd.jpg",
    title: "Knee Arthritis Awareness & Early Prevention",
    caption: "Don't ignore persistent morning knee stiffness. Early assessment, strengthening and appropriate joint care may help manage symptoms and support joint function. Follow @dr.prashantkumar23 for patient education.",
    link: "https://www.instagram.com/dr.prashantkumar23",
    likes: "1.2k",
    comments: "84"
  },
  {
    id: "poster-2",
    platform: "Facebook",
    platformIcon: "facebook",
    handle: "Dr Prashantkumar Ortho",
    image: "/Images/doctor-clinical-team.jpg",
    title: "Post-TKR mobility milestone poster",
    caption: "A patient story about mobilisation after Total Knee Replacement. Walking milestones and pain levels vary by procedure, health, rehabilitation and individual response.",
    link: "https://www.facebook.com/share/1C22HRDbm8/?mibextid=wwXIfr",
    likes: "2.4k",
    comments: "142"
  },
  {
    id: "poster-3",
    platform: "YouTube",
    platformIcon: "youtube",
    handle: "Dr Prashantkumar Ortho Care",
    image: "/Images/health-camp.jpg",
    title: "Nerve Health & Sciatica Live Session",
    caption: "Live Q&A on Asianet Suvarna News stream addressing sciatica, slip disc non-surgical recovery, and neck ergonomics for IT professionals.",
    link: "https://www.youtube.com/channel/UCw9E_H95SrJf4yKK0tag1rw",
    likes: "3.8k",
    comments: "310"
  },
  {
    id: "poster-4",
    platform: "Instagram",
    platformIcon: "instagram",
    handle: "@dr.prashantkumar23",
    image: "/Images/robotic-knee.png",
    title: "Vega Curre Clinic Health Camp Poster",
    caption: "Free Bone Density (BMD) & Joint Consultation Camp at Amruthnagar & Rachenahalli Lake organized by Vega Curre Multispeciality Clinic team.",
    link: "https://www.instagram.com/dr.prashantkumar23",
    likes: "1.8k",
    comments: "96"
  }
];

export const ARTICLES = [
  {
    id: "crowe-iv-hip-dysplasia-case",
    title: "Complex hip dysplasia (Crowe Type IV): how specialist rebuild restores walking",
    author: "Dr Prashantkumar",
    date: "OASISCON Presentation & Press Feature",
    category: "Joint Replacement",
    readTime: "6 min read",
    coverImage: ARTICLE_COVERS.croweHip,
    doctorPic: "/Images/doctor-portrait-coat.jpg",
    summary: "A detailed look at the hip reconstruction case presented at OASISCON 2018, including subtrochanteric osteotomy for severe congenital hip dislocation.",
    keyTakeaways: [
      "Crowe Type IV hip dysplasia is one of the most technically demanding hip joint reconstructions in orthopedics.",
      "Subtrochanteric shortening osteotomy protects the sciatic nerve while restoring true anatomical hip center.",
      "Uncemented titanium implants achieve long-term osseointegration and complete mobility restoration."
    ],
    content: `
      ### Overcoming Severe Congenital Hip Dislocation
      Developmental Dysplasia of the Hip (DDH) classified as **Crowe Type IV** represents complete dislocation of the femoral head from the acetabular socket with severe limb shortening.

      At OASISCON 2018 in Kerala, Dr Prashantkumar presented the successful execution of an **Uncemented Total Hip Replacement with Subtrochanteric Shortening Osteotomy**.

      #### Why This Surgical Procedure Received Press Coverage:
      1. **Restoring True Anatomical Socket**: Placing the cup in the false socket leads to early failure. Dr Prashantkumar reconstructed the true acetabulum.
      2. **Sciatic Nerve Protection**: Shortening the femoral shaft via subtrochanteric osteotomy prevents excessive nerve stretch while bringing the hip into anatomical position.
      3. **Rehabilitation Planning**: Press-fit uncemented modular stems supported a planned progression to weight-bearing and rehabilitation, with timing based on clinical assessment.
    `
  },
  {
    id: "nerve-health-suvarna-news",
    title: "Nerve health & spine care: key takeaways from Suvarna News",
    author: "Dr Prashantkumar",
    date: "June 2026",
    category: "Spine Care",
    readTime: "5 min read",
    coverImage: ARTICLE_COVERS.nerve,
    doctorPic: "/Images/doctor-clinical-team.jpg",
    summary: "Key public health insights delivered by Dr Prashantkumar on Kannada television regarding nerve entrapment, cervical spondylosis, and avoiding unnecessary spine surgeries.",
    keyTakeaways: [
      "Tingling and numbness in fingers often originate from cervical nerve compression, not wrist issues.",
      "Many people with sciatica improve with appropriate non-surgical care, but the cause and red flags determine the plan.",
      "Early medical consultation helps identify nerve problems and appropriate escalation before symptoms become more difficult to manage."
    ],
    content: `
      ### Public Health Guidance on National Television
      In June 2026, Dr Prashantkumar was invited as an expert orthopedic speaker on the popular program **"Dear Doctor" on Asianet Suvarna News Kannada**.

      #### Key Messages Shared with the Public:
      * **Understanding Radiating Nerve Pain**: Pain or burning sensations shooting down the leg (Sciatica) or arm are signals of spinal nerve root compression.
      * **The Myth of Immediate Spine Surgery**: Many patients improve with conservative therapy, nerve blocks, and core strengthening, but the cause, examination, and red flags determine the plan.
    `
  },
  {
    id: "tkr-trust-and-recovery",
    title: "Before knee replacement: why trust and recovery planning matter",
    author: "Dr Prashantkumar",
    date: "July 2026",
    category: "Knee Replacement",
    readTime: "5 min read",
    coverImage: ARTICLE_COVERS.tkrTrust,
    doctorPic: "/Images/doctor-portrait-suit.jpg",
    summary: "Why mental preparation, clear communication, and structured post-operative physiotherapy matter just as much as surgical perfection in Total Knee Replacement.",
    keyTakeaways: [
      "Pre-habilitation can support strength and confidence before surgery; recovery still varies by health and rehabilitation.",
      "Implant longevity varies with implant type, patient age, activity, alignment and other factors.",
      "Early mobilisation is part of an individualized recovery and DVT-prevention plan; it does not guarantee a shorter hospital stay."
    ],
    content: `
      ### Understanding Knee Replacement Beyond the Operating Room
      When patients visit my clinic suffering from severe knee arthritis, their biggest fear isn't just the surgical incision—it is the unknown journey of recovery. 
      
      Many patients delay surgical treatment for years out of fear of prolonged pain or immobility. However, modern orthopedic science has evolved dramatically. **Total Knee Replacement (TKR)** today is not just about replacing worn cartilage; it is a holistic pathway designed to return you to an active, independent life.
    `
  }
];

export const VIDEOS = [
  {
    id: "video-acl-recovery",
    title: "ACL tear recovery — week-by-week journey",
    duration: "Watch",
    category: "Sports Medicine",
    youtubeId: "aEKSNe7myak",
    thumbnail: "https://i.ytimg.com/vi/aEKSNe7myak/hqdefault.jpg",
    doctorPic: "/Images/doctor-portrait-suit.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=aEKSNe7myak",
    description: "Real ACL recovery progress after reconstruction — what patients can expect week by week.",
    highlights: [
      "Patient recovery timeline",
      "Rehab milestones after ACL surgery",
      "Return-to-sport mindset"
    ]
  },
  {
    id: "video-prp-knee",
    title: "PRP therapy for knee pain & arthritis",
    duration: "Watch",
    category: "Knee Care",
    youtubeId: "3QmrUQ9Gt0s",
    thumbnail: "https://i.ytimg.com/vi/3QmrUQ9Gt0s/hqdefault.jpg",
    doctorPic: "/Images/doctor-portrait-coat.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=3QmrUQ9Gt0s",
    description: "What PRP (platelet-rich plasma) is, how knee injections work, and who may benefit for osteoarthritis pain.",
    highlights: [
      "Knee osteoarthritis options",
      "PRP injection explained simply",
      "When injections help before surgery"
    ]
  },
  {
    id: "video-tibial-plateau",
    title: "Knee fracture fixation — tibial plateau ORIF",
    duration: "Watch",
    category: "Trauma Care",
    youtubeId: "zVsBoKrgMpU",
    thumbnail: "https://i.ytimg.com/vi/zVsBoKrgMpU/hqdefault.jpg",
    doctorPic: "/Images/doctor-clinical-team.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=zVsBoKrgMpU",
    description: "Surgical fixation for proximal tibia (tibial plateau) fracture — restoring knee alignment and stability.",
    highlights: [
      "Complex knee fracture care",
      "Stable fixation principles",
      "Early motion after surgery"
    ]
  },
  {
    id: "video-hip-fracture",
    title: "Hip fracture in elderly — keyhole PFN fixation",
    duration: "Watch",
    category: "Joint Replacement",
    youtubeId: "tMj418GbEzk",
    thumbnail: "https://i.ytimg.com/vi/tMj418GbEzk/hqdefault.jpg",
    doctorPic: "/Images/doctor-portrait-coat.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=tMj418GbEzk",
    description: "Minimally invasive hip fracture fixation (PFN A2) for an 80-year-old patient — protecting mobility after a fall.",
    highlights: [
      "Elderly hip fracture pathway",
      "Keyhole nailing technique",
      "Early walking goals"
    ]
  },
  {
    id: "video-sports-finger",
    title: "Finger fracture while playing cricket — don’t ignore it",
    duration: "Watch",
    category: "Sports Medicine",
    youtubeId: "n5B7seB_ekI",
    thumbnail: "https://i.ytimg.com/vi/n5B7seB_ekI/hqdefault.jpg",
    doctorPic: "/Images/doctor-portrait-suit.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=n5B7seB_ekI",
    description: "Common cricket finger injuries — why early orthopedic assessment may reduce the risk of long-term stiffness and deformity.",
    highlights: [
      "Sports hand injuries",
      "When to get an X-ray",
      "Protecting finger motion"
    ]
  },
  {
    id: "video-tennis-elbow",
    title: "Tennis elbow — lateral epicondylitis pain explained",
    duration: "Watch",
    category: "Sports Medicine",
    youtubeId: "lt7eqf5TH48",
    thumbnail: "https://i.ytimg.com/vi/lt7eqf5TH48/hqdefault.jpg",
    doctorPic: "/Images/doctor-clinical-team.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=lt7eqf5TH48",
    description: "Elbow pain from tennis elbow / lateral epicondylitis — symptoms patients feel and how care usually starts.",
    highlights: [
      "Overuse elbow pain",
      "Activity modification tips",
      "When to see a specialist"
    ]
  },
  {
    id: "video-shoulder-trauma",
    title: "Shoulder fracture fixation — modern plate technique",
    duration: "Watch",
    category: "Trauma Care",
    youtubeId: "ddcc4WxcRU4",
    thumbnail: "https://i.ytimg.com/vi/ddcc4WxcRU4/hqdefault.jpg",
    doctorPic: "/Images/doctor-portrait-coat.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=ddcc4WxcRU4",
    description: "From shoulder fracture to stable fixation using modern plating — restoring shoulder function after trauma.",
    highlights: [
      "Shoulder trauma surgery",
      "Stable fixation goals",
      "Rehab after plate fixation"
    ]
  },
  {
    id: "video-pcl",
    title: "PCL injury — posterior drawer test explained",
    duration: "Watch",
    category: "Sports Medicine",
    youtubeId: "ZIJFp87J5r0",
    thumbnail: "https://i.ytimg.com/vi/ZIJFp87J5r0/hqdefault.jpg",
    doctorPic: "/Images/doctor-portrait-suit.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=ZIJFp87J5r0",
    description: "How doctors check a PCL (posterior cruciate ligament) injury and why timely ligament care matters for knee stability.",
    highlights: [
      "Knee ligament exam",
      "PCL vs ACL basics",
      "Rehab after ligament injury"
    ]
  }
];

const GLOBAL_FAQS = [
  {
    category: 'About the Clinic',
    question: 'Where is Vega Curre Multispeciality Clinic located?',
    answer: 'Vega Curre is on the 2nd Floor, Shop No. 24 & 25, 3rd A Cross, Bhuvaneswari Nagar, Dasarahalli Main Road, Hebbal Kempapura, Bengaluru – 560024. Visit /location for map, hours and directions.'
  },
  {
    category: 'Social Media & Education',
    question: "Where can I watch Dr Prashantkumar's surgical lectures and posters?",
    answer: "Subscribe to his YouTube Channel 'Dr Prashantkumar Ortho Care' (https://www.youtube.com/channel/UCw9E_H95SrJf4yKK0tag1rw) or follow @dr.prashantkumar23 on Instagram and Facebook for health posters and live video updates."
  }
];

export const FAQS = [...GLOBAL_FAQS, ...ALL_SPECIALTY_FAQS];
