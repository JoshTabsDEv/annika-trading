// lib/content.ts
export const siteContent = {
  nav: {
    brand: 'Annika',
    brandHighlight: 'Trading',
    phone: '0909 993 1787',
    callNowLabel: 'Call Now',
  },

  hero: {
    badge: {
      icon: '📍',
      text: 'Valenzuela, Philippines',
    },
    headline: 'Annika Trading Construction Supply Store',
    description:
      'Your trusted partner for quality building materials, cement, steel, pipes, and hardware supplies — right in the heart of Valenzuela.',
    buttons: [
      {
        label: 'Call Now',
        href: 'tel:+639099931787',
        icon: '☎️',
        variant: 'primary',
      },
      {
        label: 'Get Directions',
        href: 'https://maps.google.com/?q=Annika+Trading+MH+Del+Pilar+Poblacion+Valenzuela',
        icon: '📍',
        variant: 'ghost-white',
      },
    ],
    stats: [
      { value: '5.0 ★', label: 'Google Rating' },
      { value: 'Open', label: 'Until 4:30 PM daily' },
      { value: 'Local', label: 'Valenzuela-based' },
    ],
  },

  storeInfo: {
    sectionLabel: 'Find Us',
    title: 'Visit Our Store',
    subtitle: "We're easy to find — right in front of Ever in Valenzuela.",
    cards: [
      {
        icon: '📍',
        title: 'Address',
        content:
          'In front of Ever, MH Del Pilar, Poblacion Road, Valenzuela',
      },
      {
        icon: '☎️',
        title: 'Phone',
        content: '0909 993 1787',
        isLink: true,
        href: 'tel:+639099931787',
      },
      {
        icon: '🕐',
        title: 'Business Hours',
        content: 'Open daily · Closes at 4:30 PM',
      },
    ],
    mapEmbedUrl:
      'https://maps.google.com/maps?q=MH+Del+Pilar+Poblacion+Valenzuela+City&output=embed&z=16',
    mapButtonText: 'Open in Google Maps',
    mapButtonHref:
      'https://maps.google.com/?q=Annika+Trading+MH+Del+Pilar+Poblacion+Valenzuela',
  },

  products: {
    sectionLabel: 'What We Carry',
    title: 'Our Product Categories',
    subtitle:
      'Everything you need for your construction project, in one place.',
    items: [
      {
        title: 'Cement & Aggregates',
        description: 'Portland cement, sand, gravel, hollow blocks',
        emoji: '🏗️',
      },
      {
        title: 'Steel & Rebars',
        description: 'Deformed bars, gi wire, angle bars, c-purlins',
        emoji: '⚙️',
      },
      {
        title: 'Pipes & Plumbing',
        description: 'PVC pipes, fittings, G.I. pipes, valves',
        emoji: '🔧',
      },
      {
        title: 'Paints & Hardware',
        description: 'Boysen, Davies, primers, sealants, fasteners',
        emoji: '🎨',
      },
      {
        title: 'Construction Tools',
        description: 'Hand tools, power tools, safety equipment',
        emoji: '🛠️',
      },
    ],
  },

  deliveryStrip: {
    headline: 'We Deliver to Your Jobsite',
    description:
      'Our own fleet of trucks delivers materials straight to your construction site anywhere in Valenzuela and nearby areas.',
    badges: [
      { value: '2+', label: 'Delivery Trucks' },
      { value: 'Fast', label: 'Local Delivery' },
    ],
  },

  reviews: {
    sectionLabel: 'Customer Reviews',
    title: 'What Our Customers Say',
    ratingOverview: {
      score: 5.0,
      stars: '★★★★★',
      source: 'Based on Google Reviews · Valenzuela',
    },
    items: [
      {
        name: 'Jun Rey S.',
        date: 'March 2025',
        rating: 5,
        stars: '★★★★★',
        text: '"Maganda ang serbisyo nila. Mabilis at magalang ang mga staff. Yung mga materials ay complete at may stock lagi. Dito na talaga ako palagi mag-order ng supplies para sa aming proyekto."',
      },
      {
        name: 'Maria A.',
        date: 'January 2025',
        rating: 5,
        stars: '★★★★★',
        text: '"Very reliable supplier! Competitive prices and the owners are very accommodating. We\'ve been getting our construction materials here for years. Highly recommend to anyone building in Valenzuela."',
      },
      {
        name: 'Ramon L.',
        date: 'December 2024',
        rating: 5,
        stars: '★★★★★',
        text: '"Laging may stocks at mababang presyo kumpara sa iba. Madaling hanapin — nasa harap ng Ever. Maganda rin yung serbisyo, hindi kayo pababayaan. Limang bituin talaga!"',
      },
    ],
  },

  cta: {
    headline: 'Ready to Order? Call Us Now',
    subtitle: 'Reach us for orders, inquiries, and bulk pricing',
    buttons: [
      {
        label: 'Call: 0909 993 1787',
        href: 'tel:+639099931787',
        icon: '☎️',
        variant: 'white',
      },
      {
        label: 'Send a Text',
        href: 'sms:+639099931787',
        icon: '💬',
        variant: 'ghost-white',
      },
    ],
  },

  footer: {
    brand: 'Annika',
    brandHighlight: 'Trading',
    tagline:
      'Your trusted construction supply store in Valenzuela. Quality materials, reliable service.',
    navLinks: [
      { label: 'Home', href: '#home' },
      { label: 'Store Info', href: '#info' },
      { label: 'Products', href: '#products' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Contact', href: '#contact' },
    ],
    contactInfo: {
      address:
        'In front of Ever, MH Del Pilar, Poblacion Road, Valenzuela, Metro Manila',
      phone: '0909 993 1787',
      hours: 'Open until 4:30 PM',
    },
    copyright: '© 2025 Annika Trading. All rights reserved. · Valenzuela, Philippines',
  },

  stickyCall: {
    phone: '0909 993 1787',
    ariaLabel: 'Call Annika Trading',
  },
};
