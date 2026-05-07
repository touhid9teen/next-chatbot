export const shopData = {
  name: "ELEVATE",
  slogan: "Next Generation Tech & Lifestyle",
  description: "A premium boutique for high-end electronics, wearable tech, and minimalist home gadgets.",
  
  categories: [
    { name: "Audio", products: ["Aura Pods Pro", "Sonic Max Headphones", "Nexus Desktop Speakers"] },
    { name: "Wearables", products: ["Stellar Watch Gen 3", "Nova Health Ring", "Horizon Smart Glasses"] },
    { name: "Home", products: ["Lumina Smart Lamp", "Aero Purifier Pro", "Zenith Hub Display"] },
    { name: "Computing", products: ["Lumina Tablet 12", "Quantum Mechanical Keyboard", "Ultra Slim Laptop"] }
  ],
  
  featuredProducts: [
    {
      id: "aura-pods-pro",
      name: "Aura Pods Pro",
      price: "$249.00",
      features: ["Active Noise Cancellation", "Spatial Audio", "30h Battery Life", "Water Resistant"],
      description: "Our flagship wireless earbuds with industry-leading sound clarity."
    },
    {
      id: "stellar-watch-3",
      name: "Stellar Watch Gen 3",
      price: "$399.00",
      features: ["Sapphire Glass", "ECG Monitoring", "Always-on Retina Display", "7-day Battery"],
      description: "The ultimate companion for health and productivity."
    }
  ],
  
  policies: {
    shipping: {
      standard: "3-5 business days (Free over $100)",
      express: "Next day delivery available for orders before 2 PM.",
      international: "Available to over 50 countries."
    },
    returns: {
      period: "30-day hassle-free returns",
      condition: "Items must be in original packaging and condition.",
      refunds: "Processed within 5-7 business days after inspection."
    },
    support: {
      hours: "24/7 via chat or email",
      email: "support@elevate.tech",
      tracking: "Available in the 'My Account' section under 'Orders'."
    }
  },
  
  brandTone: [
    "Professional and sophisticated",
    "Helpful and concise",
    "Modern and tech-forward",
    "Exclusive and premium"
  ]
};
