export interface Course {
  title: string;
  price: string;
  originalPrice: string;
  duration: string;
  sessionLength: string;
  description: string;
  features: string[];
  popular: boolean;
  bestValue: boolean;
}

export interface ComparisonFeature {
  feature: string;
  beginner: string;
  cash: string;
  mentorship: string;
}

export const courses: Course[] = [
  {
    title: "Foundation Programme",
    price: "₹6,999",
    originalPrice: "₹10,000",
    duration: "3 days workshop",
    sessionLength: "15 days practicals",
    description: "Ideal starting point for beginners building their financial knowledge",
    features: [
      "Lifetime assistance",
      "Fundamental analysis",
      "Technical analysis",
      "Candlestick",
      "Basic scalping strategies",
      "Basic hedging strategies",
      "Best value for money",
      "Basics of future and options"
    ],
    popular: false,
    bestValue: false
  },
  {
    title: "Cash Market",
    price: "₹19,999",
    originalPrice: "₹25,000",
    duration: "Flexible",
    sessionLength: "Customized timing",
    description: "Master capital markets with advanced technical and fundamental analysis",
    features: [
      "Customized timing",
      "Beginner revision",
      "Advance technicals",
      "Advance fundamentals",
      "Market analysis setups",
      "Complete equity market knowledge",
      "Highest success ratio",
      "Online and offline available"
    ],
    popular: true,
    bestValue: false
  },
  {
    title: "Mentorship",
    price: "₹29,999",
    originalPrice: "₹35,000",
    duration: "Flexible",
    sessionLength: "Time slab suitable for lifestyle",
    description: "Personalized coaching with small batch sizes and market analysis",
    features: [
      "Time slab suitable for your lifestyle",
      "Get personalized coach",
      "Small batch",
      "Previous course revision",
      "Advance fundamental",
      "Advance technical",
      "Market analysis with mentor",
      "Online and offline available",
      "Personalized software for market analysis",
      "Advance f & o"
    ],
    popular: false,
    bestValue: true
  },
  {
    title: "Premium Mentorship",
    price: "₹44,999",
    originalPrice: "₹55,000",
    duration: "Extended",
    sessionLength: "Unlimited revisions",
    description: "Elite programme with capital management and live market support",
    features: [
      "Capital above 5 lakh",
      "All courses of BSC Institutions included",
      "Unlimited revisions",
      "Asset allocation",
      "Liability management",
      "Live market support",
      "Investment advisory"
    ],
    popular: false,
    bestValue: false
  }
];

export const comparisonFeatures: ComparisonFeature[] = [
  { feature: "Duration", beginner: "3 days workshop", cash: "Flexible", mentorship: "Flexible" },
  { feature: "Practicals", beginner: "15 days", cash: "✓", mentorship: "✓" },
  { feature: "Revision", beginner: "✗", cash: "✓", mentorship: "✓" },
  { feature: "1-on-1 Support", beginner: "✓", cash: "✓", mentorship: "Personalized" },
  { feature: "Advanced Derivatives", beginner: "Basics", cash: "✗", mentorship: "✓" },
  { feature: "Live Market Support", beginner: "✗", cash: "✓", mentorship: "✓" },
]; 