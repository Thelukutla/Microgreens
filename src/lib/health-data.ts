export type HealthFilter =
  | "Diabetes"
  | "Heart Health"
  | "Weight Loss"
  | "Eye Health"
  | "Cancer Prevention"
  | "Digestion"
  | "Detox"
  | "Immunity"
  | "Blood Pressure"
  | "Bone Health"
  | "Protein";

export interface ImageAttribution {
  source: "Unsplash" | "Pexels";
  photographer: string;
  profileUrl: string;
  imageUrl: string;
}

export interface Microgreen {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  keyCompound?: string;
  scientificHighlights: string[];
  healthBenefits: string[];
  bestFor: string[];
  diseaseSupport: string[];
  taste: string;
  recommendedDailyQuantity: string;
  tags: HealthFilter[];
  attribution: ImageAttribution;
}

export const healthFilters: HealthFilter[] = [
  "Diabetes",
  "Heart Health",
  "Weight Loss",
  "Eye Health",
  "Cancer Prevention",
  "Digestion",
  "Detox",
  "Immunity",
  "Blood Pressure",
  "Bone Health",
  "Protein",
];

export const microgreens: Microgreen[] = [
  {
    id: "broccoli",
    name: "Broccoli Microgreens",
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Fresh broccoli microgreens in a bright bowl",
    keyCompound: "Sulforaphane",
    scientificHighlights: [
      "10-100x more sulforaphane than mature broccoli",
      "Powerful antioxidant",
      "Anti-inflammatory activity",
      "Supports insulin sensitivity",
    ],
    healthBenefits: [
      "Helps manage Type 2 Diabetes",
      "Cancer protective potential",
      "Supports detoxification",
      "Improves cellular resilience",
    ],
    bestFor: ["Metabolic health", "Detox routines", "Preventive nutrition"],
    diseaseSupport: ["Type 2 Diabetes", "Inflammation", "Oxidative stress"],
    taste: "Mild",
    recommendedDailyQuantity: "25-30 grams",
    tags: ["Diabetes", "Cancer Prevention", "Detox", "Immunity"],
    attribution: {
      source: "Unsplash",
      photographer: "Anna Pelzer",
      profileUrl: "https://unsplash.com/@annapelzer",
      imageUrl:
        "https://unsplash.com/photos/IGfIGP5ONV0",
    },
  },
  {
    id: "red-cabbage",
    name: "Red Cabbage Microgreens",
    image:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Purple red cabbage microgreens with water droplets",
    scientificHighlights: [
      "Rich in Vitamin C and Vitamin E",
      "High anthocyanin concentration",
      "Strong antioxidant capacity",
    ],
    healthBenefits: [
      "Supports heart health",
      "May lower LDL cholesterol",
      "Anti-inflammatory support",
      "Liver protective properties",
    ],
    bestFor: ["Cardiovascular support", "Recovery diets"],
    diseaseSupport: ["High LDL", "Inflammation", "Liver stress"],
    taste: "Slightly sweet",
    recommendedDailyQuantity: "25-30 grams",
    tags: ["Heart Health", "Detox", "Immunity"],
    attribution: {
      source: "Unsplash",
      photographer: "Louis Hansel",
      profileUrl: "https://unsplash.com/@louishansel",
      imageUrl:
        "https://unsplash.com/photos/9CjvlbUg5AQ",
    },
  },
  {
    id: "radish",
    name: "Radish Microgreens",
    image:
      "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Fresh radish microgreens with pink stems",
    scientificHighlights: [
      "Rich in Vitamin B6, folate, and manganese",
      "Natural antibacterial compounds",
      "Anti-inflammatory phytochemicals",
    ],
    healthBenefits: [
      "Improves digestion",
      "Supports cellular repair",
      "May help immune balance",
    ],
    bestFor: ["Digestive support", "Immune-focused meals"],
    diseaseSupport: ["Poor digestion", "Low appetite"],
    taste: "Spicy",
    recommendedDailyQuantity: "15-25 grams",
    tags: ["Digestion", "Immunity"],
    attribution: {
      source: "Unsplash",
      photographer: "Markus Spiske",
      profileUrl: "https://unsplash.com/@markusspiske",
      imageUrl:
        "https://unsplash.com/photos/4PG6wLlVag4",
    },
  },
  {
    id: "pak-choi",
    name: "Pak Choi Microgreens",
    image:
      "https://images.unsplash.com/photo-1457296898342-cdd24585d095?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Pak choi microgreens in a tray",
    scientificHighlights: [
      "High glucosinolate content",
      "Supports cellular protection",
      "Phytonutrient rich leafy profile",
    ],
    healthBenefits: [
      "Supports immunity",
      "Associated with cancer prevention nutrition",
      "May reduce oxidative stress",
    ],
    bestFor: ["Immune support", "Preventive wellness"],
    diseaseSupport: ["Low immunity", "Oxidative stress"],
    taste: "Mild",
    recommendedDailyQuantity: "25 grams",
    tags: ["Cancer Prevention", "Immunity"],
    attribution: {
      source: "Unsplash",
      photographer: "Rens D",
      profileUrl: "https://unsplash.com/@rensa",
      imageUrl:
        "https://unsplash.com/photos/5U_28ojjgms",
    },
  },
  {
    id: "spinach",
    name: "Spinach Microgreens",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Bright green spinach microgreens",
    scientificHighlights: [
      "Contains lutein and zeaxanthin",
      "Provides plant iron and calcium",
      "Nutrient-dense leafy profile",
    ],
    healthBenefits: [
      "Supports eye health",
      "Contributes to bone support",
      "Helps maintain healthy blood profile",
    ],
    bestFor: ["Eye support", "Mineral support", "Bone strength"],
    diseaseSupport: ["Eye strain", "Low iron", "Low calcium intake"],
    taste: "Mild",
    recommendedDailyQuantity: "30-40 grams",
    tags: ["Eye Health", "Bone Health"],
    attribution: {
      source: "Unsplash",
      photographer: "Mockup Graphics",
      profileUrl: "https://unsplash.com/@mockupgraphics",
      imageUrl:
        "https://unsplash.com/photos/i1iqQRLULlg",
    },
  },
  {
    id: "cilantro",
    name: "Cilantro Microgreens",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Fresh cilantro microgreens close-up",
    scientificHighlights: [
      "Rich in Vitamin A and Vitamin C",
      "Contains carotenoids",
      "Aromatic phytonutrient profile",
    ],
    healthBenefits: [
      "Supports detox pathways",
      "Supports digestion",
      "Supports skin health",
    ],
    bestFor: ["Detox support", "Skin-forward nutrition"],
    diseaseSupport: ["Digestive discomfort", "Poor nutrient quality"],
    taste: "Fresh herbal",
    recommendedDailyQuantity: "15-20 grams",
    tags: ["Detox", "Digestion"],
    attribution: {
      source: "Unsplash",
      photographer: "Erol Ahmed",
      profileUrl: "https://unsplash.com/@erol",
      imageUrl:
        "https://unsplash.com/photos/zn9aRO26qyU",
    },
  },
  {
    id: "basil",
    name: "Basil Microgreens",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Fresh basil microgreens in natural light",
    scientificHighlights: [
      "Contains polyphenols",
      "Provides potassium and magnesium",
      "High antioxidant potential",
    ],
    healthBenefits: [
      "Supports blood sugar regulation",
      "Supports blood pressure balance",
      "Protects against oxidative stress",
    ],
    bestFor: ["Blood pressure support", "Metabolic wellness"],
    diseaseSupport: ["High blood pressure", "Blood sugar variation"],
    taste: "Sweet aromatic",
    recommendedDailyQuantity: "15-20 grams",
    tags: ["Blood Pressure", "Diabetes", "Heart Health"],
    attribution: {
      source: "Unsplash",
      photographer: "CHUTTERSNAP",
      profileUrl: "https://unsplash.com/@chuttersnap",
      imageUrl:
        "https://unsplash.com/photos/e7MO8Q9f8fQ",
    },
  },
  {
    id: "fenugreek",
    name: "Fenugreek Microgreens",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Fenugreek microgreens in small pots",
    scientificHighlights: [
      "Supports glucose metabolism",
      "May enhance sugar uptake",
      "Rich antioxidant profile",
    ],
    healthBenefits: [
      "Supports diabetic nutrition plans",
      "Improves metabolic resilience",
      "Supports anti-inflammatory balance",
    ],
    bestFor: ["Diabetes support", "Metabolic management"],
    diseaseSupport: ["Type 2 Diabetes", "Metabolic syndrome"],
    taste: "Slightly bitter",
    recommendedDailyQuantity: "20-25 grams",
    tags: ["Diabetes", "Detox"],
    attribution: {
      source: "Unsplash",
      photographer: "Ales Krivec",
      profileUrl: "https://unsplash.com/@aleskrivec",
      imageUrl:
        "https://unsplash.com/photos/QnNqGoCnBg0",
    },
  },
  {
    id: "pea-shoot",
    name: "Pea Shoot Microgreens",
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Tender pea shoots piled fresh",
    scientificHighlights: [
      "High plant protein and fiber",
      "Provides iron",
      "Supports satiety",
    ],
    healthBenefits: [
      "Supports weight management",
      "Supports gut health",
      "Helps prevent constipation",
    ],
    bestFor: ["Weight loss plans", "High-fiber meals", "Fitness diets"],
    diseaseSupport: ["Constipation", "Low protein intake"],
    taste: "Sweet",
    recommendedDailyQuantity: "30-50 grams",
    tags: ["Weight Loss", "Digestion", "Protein"],
    attribution: {
      source: "Unsplash",
      photographer: "Nathan Dumlao",
      profileUrl: "https://unsplash.com/@nate_dumlao",
      imageUrl:
        "https://unsplash.com/photos/vJ8rxn3d7kA",
    },
  },
  {
    id: "beetroot",
    name: "Beetroot Microgreens",
    image:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Beetroot microgreens with deep red stems",
    scientificHighlights: [
      "Natural nitrate source",
      "Rich in potassium",
      "Supports nitric oxide pathways",
    ],
    healthBenefits: [
      "Supports better circulation",
      "May improve exercise performance",
      "Supports heart health",
    ],
    bestFor: ["Cardio fitness", "Exercise support"],
    diseaseSupport: ["Poor circulation", "Cardiovascular strain"],
    taste: "Earthy",
    recommendedDailyQuantity: "20-30 grams",
    tags: ["Heart Health", "Blood Pressure"],
    attribution: {
      source: "Unsplash",
      photographer: "Louis Hansel",
      profileUrl: "https://unsplash.com/@louishansel",
      imageUrl:
        "https://unsplash.com/photos/9CjvlbUg5AQ",
    },
  },
  {
    id: "corn",
    name: "Corn Microgreens",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Corn microgreens with yellow-green shoots",
    scientificHighlights: [
      "Contains antioxidants",
      "Provides calcium",
      "Micronutrient support for immunity",
    ],
    healthBenefits: [
      "Supports bone health",
      "Supports immune resilience",
      "Supports blood health and anemia prevention",
    ],
    bestFor: ["Bone support", "Immunity support"],
    diseaseSupport: ["Low calcium intake", "Low immunity", "Anemia risk"],
    taste: "Naturally sweet",
    recommendedDailyQuantity: "25-35 grams",
    tags: ["Bone Health", "Immunity"],
    attribution: {
      source: "Unsplash",
      photographer: "Engin Akyurt",
      profileUrl: "https://unsplash.com/@enginakyurt",
      imageUrl:
        "https://unsplash.com/photos/zYfRITx9f1U",
    },
  },
];

export const faqItems = [
  {
    question: "How much should adults eat daily?",
    answer:
      "Most adults can include 25-50 grams per day (around 1/2 to 1 cup). Start small and increase gradually based on digestion and tolerance.",
  },
  {
    question: "Can children eat microgreens?",
    answer:
      "Yes. Offer age-appropriate portions: toddlers 5-10 grams, children 10-15 grams, and teens 15-20 grams per day.",
  },
  {
    question: "Can diabetics eat microgreens?",
    answer:
      "In many cases yes, especially broccoli and fenugreek microgreens. They can support glucose management as part of a balanced medical nutrition plan.",
  },
  {
    question: "Which microgreen is best for weight loss?",
    answer:
      "Pea shoots are a strong choice due to fiber and protein support. Radish and cilantro can also fit calorie-aware meals.",
  },
  {
    question: "Which one is richest in antioxidants?",
    answer:
      "Broccoli and red cabbage microgreens are often highlighted for high antioxidant activity and protective phytonutrients.",
  },
  {
    question: "Can I eat multiple varieties together?",
    answer:
      "Yes. Mixing varieties is a practical way to diversify vitamins, minerals, and phytonutrients while keeping portions moderate.",
  },
] as const;
