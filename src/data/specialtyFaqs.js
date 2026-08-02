/** Department FAQs — single source for specialty pages and /faqs */

export const ORTHO_FAQS = [
  {
    q: 'When should I see an orthopedic specialist instead of general physician?',
    a: 'You should see an orthopedic specialist if joint or bone pain lasts more than 2 weeks, disrupts your sleep, causes morning stiffness > 30 minutes, or limits daily activities like walking or climbing stairs.'
  },
  {
    q: 'Do I always need surgery for knee or hip joint pain?',
    a: 'No! Over 80% of joint pain patients improve with conservative care including targeted quadriceps exercises, weight management, viscosupplementation (hyaluronic acid injections), and PRP therapy.'
  },
  {
    q: 'What is viscosupplementation injection and how long does it last?',
    a: 'Viscosupplementation involves injecting high-molecular-weight hyaluronic acid directly into the joint capsule to replenish depleted joint fluid, reduce friction, and provide relief lasting 6 to 12 months.'
  },
  {
    q: 'What documents should I bring for my first consultation?',
    a: 'Please bring all prior X-rays, MRI scans, blood test reports, list of ongoing medications, and previous treatment notes to help Dr Prashantkumar perform a comprehensive assessment.'
  }
];

export const JOINT_FAQS = [
  {
    q: 'What is sub-vastus muscle-sparing knee replacement?',
    a: 'Unlike traditional total knee replacement where the quadriceps tendon is cut, sub-vastus technique slides underneath the muscle without severing it. This results in significantly less post-operative pain, faster muscle recovery, and earlier unassisted walking.'
  },
  {
    q: 'How long do modern knee and hip implants last?',
    a: 'With advanced high-crosslinked polyethylene, ceramic bearings, and precision surgical alignment, over 90–95% of modern TKR and THR implants function smoothly for 20 to 25+ years.'
  },
  {
    q: 'What is Crowe Type IV Hip Dysplasia and Subtrochanteric Osteotomy?',
    a: 'Crowe Type IV is the most severe form of congenital hip dislocation where the femoral head is displaced high above the true socket. Dr Prashantkumar presented work at OASISCON 2018 demonstrating successful hip joint reconstruction using uncemented THR combined with subtrochanteric shortening osteotomy to bring the leg back to anatomical length.'
  },
  {
    q: 'When can I walk and climb stairs after knee replacement?',
    a: 'Selected patients stand and walk with a walker on Day 1 or Day 2 post-surgery under physiotherapist supervision. Stair climbing is typically trained before hospital discharge (Day 4–5).'
  }
];

export const ARTHROSCOPY_FAQS = [
  {
    q: 'What is keyhole arthroscopy and how is it done?',
    a: 'Arthroscopy uses tiny 4mm portal incisions through which a high-definition miniature camera and microscopic instruments enter the joint. This allows direct repair of torn ACL ligaments, meniscus cartilages, or rotator cuffs without cutting large muscle groups.'
  },
  {
    q: 'Is day-care discharge possible for keyhole knee or shoulder surgery?',
    a: 'Yes! Many keyhole arthroscopic procedures allow patients to go home on the same day or within 24 hours of surgery once post-anesthesia checks and basic mobility criteria are met.'
  },
  {
    q: 'How soon can I play sports after ACL reconstruction?',
    a: 'Return to sports follows a criterion-based rehabilitation protocol. Light jogging usually starts around 3 months, agility drills at 5–6 months, and full competitive sports clearance at 7–9 months upon passing quad strength and functional leap tests.'
  },
  {
    q: "What was 'The Shoulder Key Basics' conference?",
    a: "Dr Prashantkumar organized 'The Shoulder Key Basics' scientific conference in July 2022 to train young arthroscopy surgeons in modern shoulder keyhole repair, Bankart reconstruction, and rotator cuff anchoring."
  }
];

export const SPINE_FAQS = [
  {
    q: "Why did Asianet Suvarna News invite Dr Prashantkumar to speak on 'Dear Doctor'?",
    a: 'Dr Prashantkumar was invited as an expert speaker to educate the public across Karnataka on nerve pain, sciatica, cervical spondylosis, and non-surgical disc management, highlighting when surgery is NOT required.'
  },
  {
    q: 'What is Sciatica and how does nerve compression happen?',
    a: 'Sciatica occurs when a herniated disc (commonly at L4-L5 or L5-S1) presses against the sciatic nerve root, sending sharp, burning pain, numbness, or tingling down the buttocks, thigh, calf, and foot.'
  },
  {
    q: 'What non-surgical options exist for slip disc and nerve root pain?',
    a: 'Over 85% of slip disc cases recover without surgery using structured core stabilization, posture correction, anti-inflammatory medications, and targeted transforaminal epidural nerve root injections.'
  },
  {
    q: 'When is spine surgery actually mandatory?',
    a: 'Spine surgery is indicated if there is progressive motor weakness (e.g. foot drop), loss of bowel/bladder control (Cauda Equina syndrome), or persistent excruciating pain that fails 6–8 weeks of dedicated conservative treatment.'
  }
];

export const TRAUMA_FAQS = [
  {
    q: 'What experience does Dr Prashantkumar have in emergency trauma management?',
    a: 'Dr Prashantkumar has over 15 years of trauma experience, including special recognition for leading emergency disaster relief and mass casualty care during the Sabarimala emergency. He manages complex polytrauma, open fractures, and pelvic injuries.'
  },
  {
    q: 'What is MIPO (Minimally Invasive Plate Osteosynthesis)?',
    a: 'MIPO is a modern fracture fixation technique where titanium plates are inserted through tiny remote incisions without opening the fracture site itself. This preserves the bone\'s blood supply, leads to faster bone union, and minimizes surgical scarring.'
  },
  {
    q: 'How are non-union (unhealed) fractures treated?',
    a: 'Non-union occurs when a previously operated bone fails to heal properly. Dr Prashantkumar performs revision fixation using biological bone grafting, bone morphogenetic proteins (BMP), and rigid intramedullary nailing to stimulate natural bone union.'
  },
  {
    q: 'At which hospitals are emergency complex fracture surgeries performed?',
    a: 'Emergency and elective complex fracture fixations are performed at leading partner hospitals in Bengaluru including Manipal Hospital, Sparsh Hospital, and HOSMAT Hospital.'
  }
];

export const BOOKING_FAQS = [
  {
    q: 'How do I book an OPD appointment at Vega Curre Clinic?',
    a: 'Call +91 63641 23431, use WhatsApp, or fill the online booking form at /appointment. Walk-ins are welcome Mon–Sat 10 AM – 8:30 PM; Sunday visits are by prior appointment 10 AM – 12 PM.'
  },
  {
    q: 'Does the clinic accept health insurance for surgery?',
    a: 'Most major insurance and corporate TPA panels are accepted at partner hospitals (Manipal, Sparsh, HOSMAT). Bring your policy card and ID for pre-authorisation assistance at consultation.'
  },
  {
    q: 'What should I expect at my first OPD visit?',
    a: 'Dr Prashantkumar will take a detailed history, examine the painful joint or limb, review your scans, explain the diagnosis in plain language, and outline conservative vs surgical options with realistic timelines.'
  }
];

function toFaq(category, items) {
  return items.map((item) => ({
    category,
    question: item.q,
    answer: item.a
  }));
}

export const ALL_SPECIALTY_FAQS = [
  ...toFaq('Ortho Care', ORTHO_FAQS),
  ...toFaq('Joint Replacement', JOINT_FAQS),
  ...toFaq('Arthroscopy', ARTHROSCOPY_FAQS),
  ...toFaq('Spine Care', SPINE_FAQS),
  ...toFaq('Trauma Care', TRAUMA_FAQS),
  ...toFaq('Booking & Visit', BOOKING_FAQS)
];
