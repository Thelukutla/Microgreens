export type Product = {
  id: string;
  name: string;
  slug: string;
  category: "Fresh Microgreens" | "Microgreens Powder";
  price: number;
  sizes: { label: string; price: number }[];
  image: string;
  badge?: string;
  benefits: string[];
  nutrition: string[];
  usage: string[];
  rating: number;
  reviews: number;
  inventory: number;
  description: string;
};

export const products: Product[] = [
  {
    id: "broccoli-50g",
    name: "Broccoli Microgreens",
    slug: "broccoli-microgreens",
    category: "Fresh Microgreens",
    price: 99,
    sizes: [
      { label: "50g", price: 99 },
      { label: "100g", price: 179 },
      { label: "250g", price: 399 },
    ],
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=900&q=80",
    badge: "Best Seller",
    benefits: [
      "Supports immunity and digestion",
      "Rich in sulforaphane and antioxidants",
      "Perfect for salads and smoothies",
    ],
    nutrition: [
      "Vitamin C",
      "Vitamin K",
      "Folate",
      "Fiber",
    ],
    usage: [
      "Add to wraps and sandwiches",
      "Blend into smoothies",
      "Use as a fresh garnish",
    ],
    rating: 4.9,
    reviews: 218,
    inventory: 48,
    description:
      "Crunchy and nutrient-rich broccoli microgreens cultivated in a controlled environment for maximum freshness.",
  },
  {
    id: "sunflower-50g",
    name: "Sunflower Microgreens",
    slug: "sunflower-microgreens",
    category: "Fresh Microgreens",
    price: 89,
    sizes: [
      { label: "50g", price: 89 },
      { label: "100g", price: 169 },
      { label: "250g", price: 379 },
    ],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    benefits: [
      "High in healthy fats and protein",
      "Great source of vitamin E",
      "Fresh nutty flavor",
    ],
    nutrition: [
      "Vitamin E",
      "Protein",
      "Magnesium",
      "Healthy fats",
    ],
    usage: [
      "Sprinkle over bowls and salads",
      "Blend into energy drinks",
      "Pair with toast and avocado",
    ],
    rating: 4.8,
    reviews: 152,
    inventory: 36,
    description:
      "A bright and creamy microgreen with a mild nutty flavor that works beautifully in everyday meals.",
  },
  {
    id: "radish-50g",
    name: "Radish Microgreens",
    slug: "radish-microgreens",
    category: "Fresh Microgreens",
    price: 79,
    sizes: [
      { label: "50g", price: 79 },
      { label: "100g", price: 149 },
      { label: "250g", price: 349 },
    ],
    image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=900&q=80",
    benefits: [
      "Cleansing and digestion-friendly",
      "Adds a peppery kick to meals",
      "Rich in vitamin C",
    ],
    nutrition: [
      "Vitamin C",
      "Potassium",
      "Antioxidants",
      "Phytochemicals",
    ],
    usage: [
      "Top tacos, burgers, and rice bowls",
      "Mix into dressings and dips",
      "Use with soups and sandwiches",
    ],
    rating: 4.7,
    reviews: 134,
    inventory: 27,
    description:
      "A zesty, peppery microgreen that brings bold flavor and nutrition to every bite.",
  },
  {
    id: "mustard-50g",
    name: "Mustard Microgreens",
    slug: "mustard-microgreens",
    category: "Fresh Microgreens",
    price: 79,
    sizes: [
      { label: "50g", price: 79 },
      { label: "100g", price: 149 },
      { label: "250g", price: 349 },
    ],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
    benefits: [
      "Boosts metabolism support",
      "Adds vibrant color to plates",
      "Loaded with phytonutrients",
    ],
    nutrition: [
      "Vitamin A",
      "Vitamin C",
      "Calcium",
      "Iron",
    ],
    usage: [
      "Enhance salads and grain bowls",
      "Add to sandwiches and wraps",
      "Use in fresh juices",
    ],
    rating: 4.6,
    reviews: 97,
    inventory: 22,
    description:
      "A lively green with a crisp mustard bite that gives meals a fresh, energizing finish.",
  },
  {
    id: "mixed-50g",
    name: "Mixed Microgreens",
    slug: "mixed-microgreens",
    category: "Fresh Microgreens",
    price: 99,
    sizes: [
      { label: "50g", price: 99 },
      { label: "100g", price: 189 },
      { label: "250g", price: 429 },
    ],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
    badge: "New Blend",
    benefits: [
      "Broad nutrient spectrum",
      "Balanced texture and flavor",
      "Ideal for daily wellness routines",
    ],
    nutrition: [
      "Vitamin A",
      "Vitamin C",
      "Vitamin K",
      "Minerals",
    ],
    usage: [
      "Use in salads, bowls, and wraps",
      "Top soups and curries",
      "Add to smoothies",
    ],
    rating: 4.9,
    reviews: 251,
    inventory: 54,
    description:
      "A curated mix of premium greens designed for color, texture, and daily nourishment.",
  },
  {
    id: "broccoli-powder-100g",
    name: "Broccoli Powder",
    slug: "broccoli-powder",
    category: "Microgreens Powder",
    price: 399,
    sizes: [
      { label: "100g", price: 399 },
      { label: "250g", price: 899 },
    ],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    benefits: [
      "Convenient daily greens booster",
      "Supports detox and gut health",
      "Versatile for smoothies and recipes",
    ],
    nutrition: [
      "Sulforaphane",
      "Chlorophyll",
      "Fiber",
      "Plant nutrients",
    ],
    usage: [
      "Stir into smoothies",
      "Mix in soups and sauces",
      "Add to healthy baking recipes",
    ],
    rating: 4.8,
    reviews: 188,
    inventory: 18,
    description:
      "A finely milled powder made from premium broccoli microgreens for easy daily nutrition.",
  },
  {
    id: "wheatgrass-powder-100g",
    name: "Wheatgrass Powder",
    slug: "wheatgrass-powder",
    category: "Microgreens Powder",
    price: 299,
    sizes: [
      { label: "100g", price: 299 },
      { label: "250g", price: 699 },
    ],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
    benefits: [
      "Helps support energy naturally",
      "Rich in chlorophyll",
      "A refreshing greens supplement",
    ],
    nutrition: [
      "Chlorophyll",
      "Iron",
      "Vitamin A",
      "Enzymes",
    ],
    usage: [
      "Blend with juice",
      "Add to protein shakes",
      "Mix in overnight oats",
    ],
    rating: 4.7,
    reviews: 143,
    inventory: 24,
    description:
      "A nutrient-dense wheatgrass powder that delivers all the power of fresh greens in a convenient form.",
  },
];

export const testimonials = [
  {
    name: "Asha R.",
    role: "Fitness Enthusiast",
    quote:
      "The freshness is unbelievable. My smoothies and salads have never tasted this good.",
  },
  {
    name: "Kiran M.",
    role: "Cafe Owner",
    quote:
      "Our customers love the quality and consistency. It has elevated our menu significantly.",
  },
  {
    name: "Neha S.",
    role: "Nutritionist",
    quote:
      "The product quality and nutritional value are exactly what I recommend to my clients.",
  },
];

export const subscriptionPlans = [
  {
    name: "Starter Plan",
    price: 799,
    description: "Perfect for individuals exploring daily wellness.",
    perks: ["2 deliveries per week", "Choose 1 microgreens blend", "Priority support"],
  },
  {
    name: "Family Plan",
    price: 1499,
    description: "For home kitchens and growing families.",
    perks: ["3 deliveries per week", "Mix & match bundles", "15% off extra products"],
  },
  {
    name: "Premium Health Plan",
    price: 2499,
    description: "For serious wellness routines and restaurants.",
    perks: ["Daily delivery", "Premium powders included", "Dedicated nutritionist guidance"],
  },
];

export const blogPosts = [
  {
    title: "Top 5 ways to add microgreens to your daily meals",
    slug: "top-5-ways-add-microgreens",
    category: "Health Benefits",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Microgreens recipes for busy mornings and quick dinners",
    slug: "microgreens-recipes-busy-mornings",
    category: "Recipes",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "How organic farming improves nutrient density",
    slug: "organic-farming-nutrient-density",
    category: "Organic Farming",
    image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=900&q=80",
  },
];

export const benefits = [
  "Rich in essential vitamins and minerals",
  "Naturally grown without harmful chemicals",
  "Supports immunity, energy, and digestion",
  "Freshly harvested for peak nutrition",
];
