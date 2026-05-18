// Mock results for demo mode when API key isn't configured
export function generateMockResults(profile) {
  const isRural = ['farmer', 'agriLabourer'].includes(profile.occupation);
  const isLowIncome = ['below1L', '1to2_5L'].includes(profile.annualIncome);
  const isFemale = profile.gender === 'female';
  const isSCST = ['SC', 'ST'].includes(profile.community);
  const isSenior = parseInt(profile.age) >= 60;
  const isStudent = profile.occupation === 'student';
  const hasLand = profile.ownsLand === true;
  
  const schemes = [];
  let totalValue = 0;

  // PM-KISAN
  if (isRural || hasLand) {
    const val = 30000;
    totalValue += val;
    schemes.push({
      id: "pm-kisan", name: "PM-KISAN", ministry: "Ministry of Agriculture",
      level: "Central", type: "Now", timelineMonths: 1, projectedValue: val,
      eligibilityScore: 95, eligibilityReason: "You are a farmer with land — you qualify for ₹6,000 per year directly in your bank account.",
      plainDescription: "The government sends ₹6,000 every year (₹2,000 every 4 months) straight to your bank account to help with farming costs.",
      missingDocuments: profile.documents?.includes('landRecords') ? [] : ["Land Records / 7/12 Extract"],
      actionSteps: [
        { step: 1, action: "Go to your nearest Common Service Centre (CSC) or bank", timeRequired: "1 day" },
        { step: 2, action: "Carry your Aadhaar card, bank passbook, and land records", timeRequired: "—" },
        { step: 3, action: "Ask them to register you for PM-KISAN", timeRequired: "15 minutes" },
        { step: 4, action: "You'll get ₹2,000 within 2-3 months", timeRequired: "2-3 months" }
      ],
      deadline: null, cascadesTo: ["kcc"], sunsetRisk: { exists: false, description: "", confidence: 0 }
    });
  }

  // Ayushman Bharat
  if (isLowIncome) {
    const val = 500000;
    totalValue += val;
    schemes.push({
      id: "ayushman-bharat", name: "Ayushman Bharat (PM-JAY)", ministry: "Ministry of Health",
      level: "Central", type: "Now", timelineMonths: 1, projectedValue: val,
      eligibilityScore: 90, eligibilityReason: "Your family income qualifies you for free health insurance worth ₹5 lakh per year.",
      plainDescription: "Free health insurance of ₹5 lakh per year for your whole family. Get treatment at any government or listed private hospital without paying.",
      missingDocuments: profile.documents?.includes('rationCard') ? [] : ["Ration Card"],
      actionSteps: [
        { step: 1, action: "Visit mera.pmjay.gov.in or call 14555 to check if your name is in the list", timeRequired: "10 minutes" },
        { step: 2, action: "If yes, go to any listed hospital with your Aadhaar card", timeRequired: "1 day" },
        { step: 3, action: "They will make your Ayushman card for free at the hospital", timeRequired: "30 minutes" }
      ],
      deadline: null, cascadesTo: [], sunsetRisk: { exists: false, description: "", confidence: 0 }
    });
  }

  // PMAY-G
  if (isRural && isLowIncome && profile.ownsHome !== 'owned') {
    const val = 130000;
    totalValue += val;
    schemes.push({
      id: "pmay-g", name: "PM Awas Yojana (Gramin)", ministry: "Ministry of Rural Development",
      level: "Central", type: "Now", timelineMonths: 6, projectedValue: val,
      eligibilityScore: 80, eligibilityReason: "You don't own a pucca house and have low income — you can get help building one.",
      plainDescription: "The government gives ₹1.30 lakh (plains) or ₹1.50 lakh (hilly areas) to help you build a pucca house. The money comes in installments.",
      missingDocuments: [],
      actionSteps: [
        { step: 1, action: "Check if your name is in the SECC/Awaas+ list at your Gram Panchayat", timeRequired: "1 day" },
        { step: 2, action: "If not, apply at the Gram Panchayat office", timeRequired: "1 day" },
        { step: 3, action: "After approval, you'll get money in 3 installments as construction progresses", timeRequired: "6-12 months" }
      ],
      deadline: null, cascadesTo: [], sunsetRisk: { exists: false, description: "", confidence: 0 }
    });
  }

  // PM Ujjwala
  if (isFemale && isLowIncome) {
    const val = 1600;
    totalValue += val;
    schemes.push({
      id: "pm-ujjwala", name: "PM Ujjwala Yojana", ministry: "Ministry of Petroleum",
      level: "Central", type: "Now", timelineMonths: 1, projectedValue: val,
      eligibilityScore: 92, eligibilityReason: "As a woman from a low-income family, you can get a free LPG gas connection.",
      plainDescription: "Get a free LPG gas connection and your first cylinder free. Stop using wood or coal for cooking — it's better for your health.",
      missingDocuments: [],
      actionSteps: [
        { step: 1, action: "Go to your nearest LPG gas distributor (HP, Bharat, or Indane)", timeRequired: "1 day" },
        { step: 2, action: "Carry your Aadhaar card, BPL/ration card, and a passport photo", timeRequired: "—" },
        { step: 3, action: "Fill the Ujjwala form and submit", timeRequired: "20 minutes" },
        { step: 4, action: "You'll get a free connection within 7-15 days", timeRequired: "1-2 weeks" }
      ],
      deadline: null, cascadesTo: [], sunsetRisk: { exists: false, description: "", confidence: 0 }
    });
  }

  // MGNREGA
  if (isRural) {
    const val = 50000;
    totalValue += val;
    schemes.push({
      id: "mgnrega", name: "MGNREGA", ministry: "Ministry of Rural Development",
      level: "Central", type: "Now", timelineMonths: 1, projectedValue: val,
      eligibilityScore: 95, eligibilityReason: "Every rural household is guaranteed 100 days of paid work per year.",
      plainDescription: "The government guarantees 100 days of work per year near your village. You get paid daily wages (₹250-350 depending on your state).",
      missingDocuments: profile.documents?.includes('mgnrega') ? [] : ["MGNREGA Job Card"],
      actionSteps: [
        { step: 1, action: "Go to your Gram Panchayat and apply for a Job Card", timeRequired: "1 day" },
        { step: 2, action: "Once you have the card, apply for work in writing", timeRequired: "15 minutes" },
        { step: 3, action: "Work must be provided within 15 days of applying", timeRequired: "15 days" }
      ],
      deadline: null, cascadesTo: [], sunsetRisk: { exists: false, description: "", confidence: 0 }
    });
  }

  // e-Shram
  if (isLowIncome && !['salaried'].includes(profile.occupation)) {
    const val = 24000;
    totalValue += val;
    schemes.push({
      id: "e-shram", name: "e-Shram Card", ministry: "Ministry of Labour",
      level: "Central", type: "Now", timelineMonths: 1, projectedValue: val,
      eligibilityScore: 88, eligibilityReason: "As an informal worker, you can get an e-Shram card for free accident insurance.",
      plainDescription: "Register as a worker and get free accident insurance of ₹2 lakh. Also helps you get benefits from other schemes faster.",
      missingDocuments: [],
      actionSteps: [
        { step: 1, action: "Visit eshram.gov.in or go to your nearest CSC", timeRequired: "30 minutes" },
        { step: 2, action: "Enter your Aadhaar, mobile number, and bank details", timeRequired: "10 minutes" },
        { step: 3, action: "You'll get your e-Shram card instantly", timeRequired: "Instant" }
      ],
      deadline: null, cascadesTo: ["pmsby", "bocw"], sunsetRisk: { exists: false, description: "", confidence: 0 }
    });
  }

  // Atal Pension Yojana
  if (parseInt(profile.age) >= 18 && parseInt(profile.age) <= 40) {
    const val = 60000;
    totalValue += val;
    schemes.push({
      id: "atal-pension", name: "Atal Pension Yojana", ministry: "Ministry of Finance",
      level: "Central", type: "Now", timelineMonths: 1, projectedValue: val,
      eligibilityScore: 85, eligibilityReason: "You're between 18-40 years old and can start a pension for as little as ₹42/month.",
      plainDescription: "Pay a small amount every month now (₹42-₹210) and get a guaranteed pension of ₹1,000-₹5,000 per month after age 60.",
      missingDocuments: [],
      actionSteps: [
        { step: 1, action: "Go to your bank (where you have a savings account)", timeRequired: "1 day" },
        { step: 2, action: "Ask for the Atal Pension Yojana form", timeRequired: "10 minutes" },
        { step: 3, action: "Choose your pension amount and sign up", timeRequired: "15 minutes" }
      ],
      deadline: null, cascadesTo: [], sunsetRisk: { exists: false, description: "", confidence: 0 }
    });
  }

  // PMJJBY
  if (parseInt(profile.age) >= 18 && parseInt(profile.age) <= 50) {
    const val = 200000;
    totalValue += val;
    schemes.push({
      id: "pmjjby", name: "PM Jeevan Jyoti Bima Yojana", ministry: "Ministry of Finance",
      level: "Central", type: "Now", timelineMonths: 1, projectedValue: val,
      eligibilityScore: 90, eligibilityReason: "Life insurance for just ₹436 per year. Your family gets ₹2 lakh if something happens to you.",
      plainDescription: "For just ₹436 per year (auto-deducted from your bank), your family is protected with ₹2 lakh life insurance.",
      missingDocuments: profile.documents?.includes('aadhaar') ? [] : ["Aadhaar Card"],
      actionSteps: [
        { step: 1, action: "Go to your bank", timeRequired: "1 day" },
        { step: 2, action: "Ask to enroll in PMJJBY", timeRequired: "10 minutes" },
        { step: 3, action: "₹436 will be auto-deducted yearly from your account", timeRequired: "Automatic" }
      ],
      deadline: "May 31 each year for renewal", cascadesTo: [], sunsetRisk: { exists: false, description: "", confidence: 0 }
    });
  }

  // Sukanya Samriddhi (if has daughters)
  if (isFemale || profile.familyMembers > 2) {
    const val = 100000;
    totalValue += val;
    schemes.push({
      id: "sukanya", name: "Sukanya Samriddhi Yojana", ministry: "Ministry of Finance",
      level: "Central", type: "Soon", timelineMonths: 6, projectedValue: val,
      eligibilityScore: 75, eligibilityReason: "If you have a daughter under 10, you can open this special savings account with high interest.",
      plainDescription: "A special savings account for your daughter (under 10 years). Gets higher interest than any bank FD. Great for her education or marriage.",
      missingDocuments: [],
      actionSteps: [
        { step: 1, action: "Go to any post office or bank", timeRequired: "1 day" },
        { step: 2, action: "Carry daughter's birth certificate and your ID", timeRequired: "—" },
        { step: 3, action: "Open the account with minimum ₹250", timeRequired: "30 minutes" }
      ],
      deadline: null, cascadesTo: [], sunsetRisk: { exists: false, description: "", confidence: 0 }
    });
  }

  // KCC
  if (hasLand) {
    const val = 300000;
    totalValue += val;
    schemes.push({
      id: "kcc", name: "Kisan Credit Card", ministry: "Ministry of Agriculture",
      level: "Central", type: "Now", timelineMonths: 2, projectedValue: val,
      eligibilityScore: 88, eligibilityReason: "As a farmer with land, you can get a credit card with low-interest loans for farming.",
      plainDescription: "Get a special credit card for farming. Borrow up to ₹3 lakh at just 4% interest (with subsidy). Use it to buy seeds, fertilizer, equipment.",
      missingDocuments: profile.documents?.includes('kcc') ? [] : (profile.documents?.includes('landRecords') ? [] : ["Land Records"]),
      actionSteps: [
        { step: 1, action: "Go to your nearest bank branch", timeRequired: "1 day" },
        { step: 2, action: "Carry land papers, Aadhaar, and passport photos", timeRequired: "—" },
        { step: 3, action: "Apply for KCC — processing takes 2-3 weeks", timeRequired: "2-3 weeks" }
      ],
      deadline: null, cascadesTo: ["pmfby"], sunsetRisk: { exists: false, description: "", confidence: 0 }
    });
  }

  // SC/ST specific
  if (isSCST) {
    const val = 50000;
    totalValue += val;
    schemes.push({
      id: "post-matric", name: "Post-Matric Scholarship", ministry: "Ministry of Social Justice",
      level: "Central", type: "Soon", timelineMonths: 3, projectedValue: val,
      eligibilityScore: 82, eligibilityReason: "As an SC/ST family, your children can get scholarships for education after class 10.",
      plainDescription: "Full fee payment + monthly living allowance for SC/ST students studying after class 10. Covers college, professional courses, and more.",
      missingDocuments: profile.documents?.includes('casteCert') ? [] : ["Caste Certificate"],
      actionSteps: [
        { step: 1, action: "Go to scholarships.gov.in", timeRequired: "30 minutes" },
        { step: 2, action: "Register and fill the scholarship form", timeRequired: "1 hour" },
        { step: 3, action: "Upload caste certificate, income certificate, and marks", timeRequired: "30 minutes" },
        { step: 4, action: "Money comes directly to student's bank account", timeRequired: "2-3 months" }
      ],
      deadline: "October 31 each year", cascadesTo: [], sunsetRisk: { exists: false, description: "", confidence: 0 }
    });
  }

  // Document gaps
  const allDocs = ['aadhaar', 'rationCard', 'voterId', 'incomeCert', 'casteCert', 'bankAccount'];
  const userDocs = profile.documents || [];
  const documentGaps = [];
  
  if (!userDocs.includes('aadhaar')) {
    documentGaps.push({ document: "Aadhaar Card", howToGet: "Visit nearest Aadhaar centre with any ID proof. Free of cost.", timeRequired: "15-30 days", unlocksSchemes: ["Almost all schemes"] });
  }
  if (!userDocs.includes('rationCard')) {
    documentGaps.push({ document: "Ration Card", howToGet: "Apply at your local food supply office or online on your state's portal.", timeRequired: "30-45 days", unlocksSchemes: ["Ayushman Bharat", "PM Ujjwala", "Subsidized food grains"] });
  }
  if (!userDocs.includes('incomeCert')) {
    documentGaps.push({ document: "Income Certificate", howToGet: "Apply at Tehsildar/Taluk office or through CSC.", timeRequired: "7-15 days", unlocksSchemes: ["Scholarships", "Housing schemes", "BPL schemes"] });
  }
  if (isSCST && !userDocs.includes('casteCert')) {
    documentGaps.push({ document: "Caste Certificate", howToGet: "Apply at SDM/Tehsildar office with supporting documents.", timeRequired: "15-30 days", unlocksSchemes: ["Post-Matric Scholarship", "SC/ST reservations", "Special welfare schemes"] });
  }

  return {
    archetype: {
      id: isRural ? "rural-farmer" : (isLowIncome ? "urban-worker" : "general"),
      label: isRural ? `${profile.state || 'Indian'} Smallholder Farmer` : `${profile.occupation || 'Citizen'} — ${profile.state || 'India'}`,
      description: `Based on your profile, we found ${schemes.length} schemes that can help you and your family.`
    },
    totalProjectedValue: totalValue,
    projectionYears: 5,
    schemes,
    documentGaps,
    cascadeChains: [
      { parent: "PM-KISAN", child: "kcc", childName: "Kisan Credit Card", relationship: "PM-KISAN registration makes KCC application faster" },
      { parent: "e-Shram", child: "pmsby", childName: "PM Suraksha Bima", relationship: "e-Shram card auto-enrolls you for accident insurance" }
    ],
    sunsetAlerts: [
      { schemeName: "PMFBY (Kharif)", alert: "Kharif season enrollment closes soon", deadline: "July 31", confidence: 85 }
    ]
  };
}
