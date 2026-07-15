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
  | "Protein"
  | "Iron"
  | "Calcium";

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
  scientificName?: string;
  tagline?: string;
  scientificHighlights: string[];
  healthBenefits: string[];
  howToUse: string[];
  bestFor: string[];
  diseaseSupport: string[];
  taste: string;
  recommendedDailyQuantity: string;
  tags: HealthFilter[];
  attribution: ImageAttribution;
  nutrients?: string[];
  harvestDays?: string;
  shelfLife?: string;
  storageTips?: string[];
  whoCanConsume?: string[];
  recipes?: { title: string; image: string; description?: string }[];
  weeklyRecommendation?: string;
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
  "Iron",
  "Calcium",
];

export const microgreens: Microgreen[] = [
  {
    id: "broccoli",
    name: "Broccoli Microgreens",
    image:
      "https://images.unsplash.com/photo-1647613233075-e0d5546b0f22?auto=format&fit=crop&w=1600&q=80",
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
    howToUse: [
      "Add to fresh salads",
      "Blend into green smoothies",
      "Layer in sandwiches and burgers",
      "Sprinkle over soups after cooking",
      "Mix into omelettes or scrambled eggs",
      "Add to wraps and rolls",
      "Use as a pizza topping after baking",
      "Mix with yogurt dips",
      "Garnish rice bowls",
      "Add to avocado toast",
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
      "https://images.unsplash.com/photo-1647613233077-c323b019968b?auto=format&fit=crop&w=1600&q=80",
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
    howToUse: [
      "Fresh salads",
      "Sandwiches",
      "Burgers",
      "Wraps",
      "Rice bowls",
      "Tacos",
      "Sushi rolls",
      "Garnish soups",
      "Buddha bowls",
      "Grain bowls",
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
      "https://images.unsplash.com/photo-1647613233056-fc9918256a8d?auto=format&fit=crop&w=1600&q=80",
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
    howToUse: [
      "Salads",
      "Sandwiches",
      "Wraps",
      "Tacos",
      "Burgers",
      "Omelettes",
      "Rice bowls",
      "Soups as garnish",
      "Cottage cheese topping",
      "Avocado toast",
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
      "https://images.unsplash.com/photo-1593850684282-82029c1ac6be?auto=format&fit=crop&w=1600&q=80",
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
    howToUse: [
      "Stir-fries (add at the end)",
      "Noodles",
      "Fried rice",
      "Soups",
      "Salads",
      "Dumplings",
      "Rice bowls",
      "Asian wraps",
      "Steamed vegetables garnish",
      "Spring rolls",
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
      "https://images.unsplash.com/photo-1647613233046-ccf59207335d?auto=format&fit=crop&w=1600&q=80",
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
    howToUse: [
      "Smoothies",
      "Salads",
      "Sandwiches",
      "Pasta",
      "Pizza topping",
      "Omelettes",
      "Soups",
      "Wraps",
      "Grain bowls",
      "Yogurt bowls",
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
      "https://images.unsplash.com/photo-1648128774202-13a404952071?auto=format&fit=crop&w=1600&q=80",
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
    howToUse: [
      "Chutneys",
      "Indian curries",
      "Dal",
      "Rice dishes",
      "Salads",
      "Tacos",
      "Sandwiches",
      "Soups",
      "Noodles",
      "Fresh garnish for any meal",
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
      "https://images.unsplash.com/photo-1647613233044-bb52d86f778d?auto=format&fit=crop&w=1600&q=80",
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
    howToUse: [
      "Pasta",
      "Pizza",
      "Pesto",
      "Sandwiches",
      "Bruschetta",
      "Salads",
      "Soups",
      "Caprese salad",
      "Omelettes",
      "Garlic bread topping",
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
      "https://images.unsplash.com/photo-1640671511581-0cc93ea3ebf2?auto=format&fit=crop&w=1600&q=80",
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
    howToUse: [
      "Salads",
      "Dal",
      "Chapati rolls",
      "Smoothies",
      "Sprouts mix",
      "Rice dishes",
      "Vegetable curries",
      "Sandwiches",
      "Yogurt raita",
      "Soup garnish",
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
      "https://images.unsplash.com/photo-1535734668010-da0c7d3085f2?auto=format&fit=crop&w=1600&q=80",
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
    howToUse: [
      "Salads",
      "Sandwiches",
      "Stir-fries",
      "Pasta",
      "Soups",
      "Wraps",
      "Rice bowls",
      "Omelettes",
      "Smoothies",
      "Grain bowls",
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
      "https://images.unsplash.com/photo-1593850685398-e79bab596d1d?auto=format&fit=crop&w=1600&q=80",
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
    howToUse: [
      "Salads",
      "Smoothies",
      "Sandwiches",
      "Burgers",
      "Soups",
      "Rice bowls",
      "Pasta",
      "Juice garnish",
      "Wraps",
      "Avocado toast",
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
      "https://images.unsplash.com/photo-1653654630422-c9dd3a2ca659?auto=format&fit=crop&w=1600&q=80",
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
    howToUse: [
      "Salads",
      "Sandwiches",
      "Burgers",
      "Pasta",
      "Pizza",
      "Soups",
      "Wraps",
      "Grain bowls",
      "Omelettes",
      "Mexican dishes",
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
  {
    id: "green-gram",
    name: "Green Gram Microgreens",
    scientificName: "Vigna radiata",
    tagline: "Nutritious sprout for daily energy",
    image:
      "https://images.unsplash.com/photo-1633133451255-5e7b18ba768a?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Green gram microgreens fresh in a bowl",
    keyCompound: "Vit B complex, Saponins",
    scientificHighlights: [
      "Good source of plant protein and B vitamins",
      "Contains saponins associated with metabolic support",
      "High in fiber supporting gut motility",
    ],
    healthBenefits: [
      "Supports energy metabolism",
      "Helps maintain healthy digestion",
      "Supports balanced blood sugar when part of a meal",
    ],
    howToUse: ["Salads", "Smoothies", "Stir-fries", "Sandwiches", "Rice bowls"],
    bestFor: ["Everyday nutrition", "Digestive support"],
    diseaseSupport: ["Mild blood sugar support", "Constipation"],
    taste: "Mild, slightly sweet",
    recommendedDailyQuantity: "20-35 grams",
    tags: ["Digestion", "Protein"],
    nutrients: ["Vitamin B complex", "Vitamin C", "Iron", "Protein", "Fiber"],
    harvestDays: "7-10 Days",
    shelfLife: "5-7 Days refrigerated",
    storageTips: [
      "Refrigerate immediately",
      "Do not wash before storing",
      "Wash before eating",
      "Store in airtight container",
    ],
    whoCanConsume: ["Children", "Adults", "Elderly", "Vegetarians"],
    recipes: [
      { title: "Green Gram Salad", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60", description: "Fresh greens with lime and sesame." },
      { title: "Sprouted Smoothie", image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=60", description: "Blend with banana and milk." },
      { title: "Stir-fry Toss", image: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=800&q=60", description: "Quick toss in light soy." },
    ],
    weeklyRecommendation: "Include 2–3 days per week for variety",
    attribution: {
      source: "Pexels",
      photographer: "Karolina Grabowska",
      profileUrl: "https://www.pexels.com/@karolina-grabowska-402248",
      imageUrl: "https://www.pexels.com/photo/green-sprouts-40543/",
    },
  },
  {
    id: "horse-gram",
    name: "Horse Gram Microgreens",
    scientificName: "Macrotyloma uniflorum",
    tagline: "Robust legume microgreen rich in minerals",
    image:
      "https://images.unsplash.com/photo-1736697624075-3c636a1c0289?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Horse gram microgreens in a wooden bowl",
    keyCompound: "Polyphenols, Iron",
    scientificHighlights: [
      "Mineral-dense legume sprout",
      "Polyphenol-rich profile with antioxidant activity",
    ],
    healthBenefits: ["Iron rich", "Supports muscle recovery", "Antioxidant support"],
    howToUse: ["Salads", "Sprout mixes", "Curries", "Rice bowls"],
    bestFor: ["Mineral support", "Fitness meals"],
    diseaseSupport: ["Low iron", "Post-exercise recovery"],
    taste: "Earthy, nutty",
    recommendedDailyQuantity: "20-30 grams",
    tags: ["Protein", "Iron"],
    nutrients: ["Iron", "Magnesium", "Protein", "Fiber"],
    harvestDays: "8-12 Days",
    shelfLife: "5-7 Days refrigerated",
    storageTips: ["Keep dry", "Airtight container", "Refrigerate"],
    whoCanConsume: ["Adults", "Fitness Enthusiasts", "Vegetarians"],
    recipes: [
      { title: "Protein Sprout Bowl", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60", description: "With quinoa and lemon." },
      { title: "Sprouted Curry Garnish", image: "https://images.unsplash.com/photo-1526312426976-0a2f3f1ff8d8?auto=format&fit=crop&w=800&q=60", description: "Finish curries with fresh sprouts." },
    ],
    weeklyRecommendation: "Rotate in once weekly for mineral boost",
    attribution: {
      source: "Unsplash",
      photographer: "Ella Olsson",
      profileUrl: "https://unsplash.com/@ellaolsson",
      imageUrl: "https://unsplash.com/photos/6T2cYc3h3zs",
    },
  },
  {
    id: "black-gram",
    name: "Black Gram Microgreens",
    scientificName: "Vigna mungo",
    tagline: "Small shoots, concentrated plant protein",
    image:
      "https://images.unsplash.com/photo-1620745883843-bfb63c7cbe78?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Black gram microgreens close-up",
    keyCompound: "Plant protein, polyphenols",
    scientificHighlights: ["High protein density", "Contains plant-based iron and antioxidants"],
    healthBenefits: ["High protein", "Iron rich", "Supports satiety"],
    howToUse: ["Salads", "Wraps", "Stir-fries", "Smoothies"],
    bestFor: ["Protein boost", "Vegetarian diets"],
    diseaseSupport: ["Low iron", "Low protein intake"],
    taste: "Nutty, earthy",
    recommendedDailyQuantity: "20-35 grams",
    tags: ["Protein", "Iron"],
    nutrients: ["Protein", "Iron", "Calcium", "Fiber"],
    harvestDays: "7-10 Days",
    shelfLife: "5-7 Days refrigerated",
    storageTips: ["Refrigerate", "Keep dry", "Do not wash before storing"],
    whoCanConsume: ["Adults", "Teens", "Vegetarians"],
    recipes: [
      { title: "Protein Wrap", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=60", description: "With hummus and veggies." },
      { title: "Sprout Salad Bowl", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=60", description: "Colorful bowl with seeds." },
    ],
    weeklyRecommendation: "Use 1–2 times per week in protein-focused meals",
    attribution: {
      source: "Pexels",
      photographer: "Dana Tentis",
      profileUrl: "https://www.pexels.com/@dana-tentis-358579",
      imageUrl: "https://www.pexels.com/photo/sprouts-123456/",
    },
  },
  {
    id: "wheatgrass",
    name: "Wheatgrass",
    scientificName: "Triticum aestivum",
    tagline: "Chlorophyll-rich green concentrated in a shot",
    image:
      "https://images.unsplash.com/photo-1653076446136-705337f5d2a1?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Fresh wheatgrass blades in a tray",
    keyCompound: "Chlorophyll, vitamins A & C",
    scientificHighlights: [
      "High chlorophyll content",
      "Contains vitamin A, C and K traces",
      "Often consumed as concentrated shots",
    ],
    healthBenefits: ["Rich in antioxidants", "Supports general vitality", "Supports detox pathways"],
    howToUse: ["Juice shots", "Smoothies", "Blend into dressings"],
    bestFor: ["Detox routines", "Antioxidant support"],
    diseaseSupport: ["Oxidative stress"],
    taste: "Grassy, intense",
    recommendedDailyQuantity: "5-15 grams (juice shots)",
    tags: ["Detox", "Immunity"],
    nutrients: ["Chlorophyll", "Vitamin A", "Vitamin C", "Iron"],
    harvestDays: "7-10 Days",
    shelfLife: "3-5 Days refrigerated",
    storageTips: ["Use quickly", "Store upright in glass", "Keep chilled"],
    whoCanConsume: ["Adults", "Fitness Enthusiasts"],
    recipes: [
      { title: "Wheatgrass Shot", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60", description: "Freshly juiced wheatgrass shot." },
      { title: "Green Smoothie Boost", image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=60", description: "Add a small amount to smoothies." },
    ],
    weeklyRecommendation: "Use sparingly (2–4 times/week) due to intense flavor",
    attribution: {
      source: "Unsplash",
      photographer: "Ella Olsson",
      profileUrl: "https://unsplash.com/@ellaolsson",
      imageUrl: "https://unsplash.com/photos/6T2cYc3h3zs",
    },
  },
  {
    id: "chickpea",
    name: "Chickpea Microgreens",
    scientificName: "Cicer arietinum",
    tagline: "Creamy, protein-rich sprouts",
    image:
      "https://images.unsplash.com/photo-1647613233075-e0d5546b0f22?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Chickpea microgreens ready to eat",
    keyCompound: "Protein, resistant starch",
    scientificHighlights: ["Good plant protein source", "Contains resistant starch for gut health"],
    healthBenefits: ["High protein", "Supports digestion", "Helps satiety and weight management"],
    howToUse: ["Salads", "Wraps", "Mix into yogurts", "Rice bowls"],
    bestFor: ["Protein support", "Gut health"],
    diseaseSupport: ["Low protein intake", "Irregular digestion"],
    taste: "Creamy, nutty",
    recommendedDailyQuantity: "20-40 grams",
    tags: ["Protein", "Digestion"],
    nutrients: ["Protein", "Fiber", "Iron", "Potassium"],
    harvestDays: "8-12 Days",
    shelfLife: "5-7 Days refrigerated",
    storageTips: ["Keep cool", "Airtight container", "Do not wash before storing"],
    whoCanConsume: ["Adults", "Children (small portions)", "Vegetarians"],
    recipes: [
      { title: "Chickpea Sprout Salad", image: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=800&q=60", description: "With cherry tomatoes and herbs." },
      { title: "Protein Breakfast Bowl", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=60", description: "With oats and seeds." },
    ],
    weeklyRecommendation: "Include as part of 1–2 meals per week for protein variety",
    attribution: {
      source: "Pexels",
      photographer: "Dana Tentis",
      profileUrl: "https://www.pexels.com/@dana-tentis-358579",
      imageUrl: "https://www.pexels.com/photo/sprouts-123456/",
    },
  },
  {
    id: "green-pea-shoots",
    name: "Green Pea Shoots",
    scientificName: "Pisum sativum",
    tagline: "Sweet, crunchy shoots rich in protein",
    image:
      "https://images.unsplash.com/photo-1647613233077-c323b019968b?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Tender green pea shoots piled fresh",
    keyCompound: "Protein, fiber",
    scientificHighlights: ["High in plant protein", "Good source of fiber and iron"],
    healthBenefits: ["Supports weight management", "Supports gut health", "Helps satiety"],
    howToUse: ["Salads", "Sandwiches", "Stir-fries", "Smoothies"],
    bestFor: ["Weight loss plans", "Fitness diets"],
    diseaseSupport: ["Constipation", "Low protein intake"],
    taste: "Sweet, crisp",
    recommendedDailyQuantity: "25-50 grams",
    tags: ["Weight Loss", "Digestion", "Protein"],
    nutrients: ["Protein", "Fiber", "Vitamin C", "Iron"],
    harvestDays: "9-14 Days",
    shelfLife: "5-7 Days refrigerated",
    storageTips: ["Store in airtight container", "Keep dry", "Refrigerate immediately"],
    whoCanConsume: ["Children", "Adults", "Fitness Enthusiasts"],
    recipes: [
      { title: "Pea Shoot Salad", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=60", description: "Crisp salad with lemon dressing." },
      { title: "Stir-fry Add-in", image: "https://images.unsplash.com/photo-1526312426976-0a2f3f1ff8d8?auto=format&fit=crop&w=800&q=60", description: "Add at the end of cooking." },
    ],
    weeklyRecommendation: "Rotate through salads 2–3 times weekly",
    attribution: {
      source: "Unsplash",
      photographer: "Nathan Dumlao",
      profileUrl: "https://unsplash.com/@nate_dumlao",
      imageUrl: "https://unsplash.com/photos/vJ8rxn3d7kA",
    },
  },
  {
    id: "red-amaranthus",
    name: "Red Amaranthus Microgreens",
    scientificName: "Amaranthus cruentus",
    tagline: "Vibrant red greens packed with antioxidants",
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Red amaranth microgreens with vivid color",
    keyCompound: "Anthocyanins, Vitamin A",
    scientificHighlights: ["High anthocyanin content","Rich in vitamin A precursors"],
    healthBenefits: ["Rich in antioxidants","Supports eye health","Supports skin health"],
    howToUse: ["Salads", "Garnish soups", "Smoothie topping"],
    bestFor: ["Antioxidant support", "Eye health"],
    diseaseSupport: ["Oxidative stress", "Poor eye nutrition"],
    taste: "Mild earthy, slightly sweet",
    recommendedDailyQuantity: "15-30 grams",
    tags: ["Eye Health", "Immunity"],
    nutrients: ["Vitamin A", "Vitamin C", "Antioxidant anthocyanins"],
    harvestDays: "7-10 Days",
    shelfLife: "5-7 Days refrigerated",
    storageTips: ["Keep refrigerated","Do not compress leaves","Store loosely in breathable container"],
    whoCanConsume: ["Children", "Adults", "Elderly"],
    recipes: [
      { title: "Colorful Salad", image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=60", description: "Brighten bowls with red amaranth." },
      { title: "Garnished Soup", image: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=800&q=60", description: "Finish soups with fresh sprigs." },
    ],
    weeklyRecommendation: "Use as an accent throughout the week",
    attribution: {
      source: "Unsplash",
      photographer: "Markus Spiske",
      profileUrl: "https://unsplash.com/@markusspiske",
      imageUrl: "https://unsplash.com/photos/4PG6wLlVag4",
    },
  },
  {
    id: "sunflower",
    name: "Sunflower Microgreens",
    scientificName: "Helianthus annuus",
    tagline: "Crunchy, nutty microgreens high in healthy fats",
    image:
      "https://images.unsplash.com/photo-1589301755256-2a3c5d4c0b3d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Sunflower microgreens with crunchy stems",
    keyCompound: "Healthy fats, Vitamin E",
    scientificHighlights: ["Good source of vitamin E","Contains unsaturated fats and protein"],
    healthBenefits: ["Supports skin health","Provides protein","Rich in healthy fats"],
    howToUse: ["Salads", "Sandwiches", "Toppings for bowls"],
    bestFor: ["Skin health", "Protein snacks"],
    diseaseSupport: ["Dry skin", "Low protein intake"],
    taste: "Nutty, crunchy",
    recommendedDailyQuantity: "15-30 grams",
    tags: ["Protein", "Immunity"],
    nutrients: ["Vitamin E", "Protein", "Healthy fats", "Iron"],
    harvestDays: "8-12 Days",
    shelfLife: "5-7 Days refrigerated",
    storageTips: ["Keep dry","Store in shallow container","Refrigerate"],
    whoCanConsume: ["Children", "Adults", "Vegetarians"],
    recipes: [
      { title: "Crunchy Sandwich Topper", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=60", description: "Adds texture to sandwiches." },
      { title: "Sunflower Salad", image: "https://images.unsplash.com/photo-1548946526-f69e2424cf45?auto=format&fit=crop&w=800&q=60", description: "With seeds and citrus." },
    ],
    weeklyRecommendation: "Use regularly for texture and healthy fats",
    attribution: {
      source: "Pexels",
      photographer: "Ella Olsson",
      profileUrl: "https://www.pexels.com/@ella-olsson",
      imageUrl: "https://www.pexels.com/photo/sunflower-sprouts-123456/",
    },
  },
  {
    id: "chia",
    name: "Chia Microgreens",
    scientificName: "Salvia hispanica",
    tagline: "Tiny greens high in omega-3 and fiber",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Chia microgreens vibrant and fresh",
    keyCompound: "Omega-3 precursors, Fiber",
    scientificHighlights: ["Contains alpha-linolenic acid precursors","High in soluble fiber"],
    healthBenefits: ["Supports heart health","High in fiber","Helps satiety"],
    howToUse: ["Smoothies", "Yogurt", "Breakfast bowls", "Salads"],
    bestFor: ["Heart health", "Fiber boost"],
    diseaseSupport: ["High cholesterol risk", "Gut irregularity"],
    taste: "Mild, slightly nutty",
    recommendedDailyQuantity: "10-20 grams",
    tags: ["Heart Health", "Weight Loss"],
    nutrients: ["Omega-3 (ALA)", "Fiber", "Calcium", "Protein"],
    harvestDays: "7-10 Days",
    shelfLife: "5-7 Days refrigerated",
    storageTips: ["Keep chilled","Do not crush leaves","Store in airtight container"],
    whoCanConsume: ["Adults", "Elderly", "Fitness Enthusiasts"],
    recipes: [
      { title: "Chia Smoothie Boost", image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=60", description: "Blend into morning smoothies." },
      { title: "Yogurt & Chia Greens", image: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=800&q=60", description: "Top yogurt bowls for texture." },
    ],
    weeklyRecommendation: "Use as a frequent topping for breakfast bowls",
    attribution: {
      source: "Unsplash",
      photographer: "Rens D",
      profileUrl: "https://unsplash.com/@rensa",
      imageUrl: "https://unsplash.com/photos/5U_28ojjgms",
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
