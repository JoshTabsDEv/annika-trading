// lib/content.ts

// ─── Constants for reusable values ───
const CONTACT = {
  phone: {
    display: '0909 993 1787',
    tel: '+639099931787',
  },
  address: 'In front of Ever, MH Del Pilar, Poblacion Road, Valenzuela',
  addressFull: 'In front of Ever, MH Del Pilar, Poblacion Road, Valenzuela, Metro Manila',
  mapsUrl: 'https://maps.google.com/?q=Annika+Trading+MH+Del+Pilar+Poblacion+Valenzuela',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=MH+Del+Pilar+Poblacion+Valenzuela+City&output=embed&z=16',
};

// ─── TypeScript Interfaces ───
interface Button {
  label: string;
  href: string;
  icon: string;
  variant: string;
  ariaLabel?: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Card {
  icon: string;
  title: string;
  content: string;
  isLink?: boolean;
  href?: string;
}

interface Product {
  title: string;
  description: string;
  emoji: string;
}

interface Badge {
  value: string;
  label: string;
}

interface Review {
  name: string;
  date: string;
  rating: number;
  stars: string;
  text: string;
}

interface NavLink {
  label: string;
  href: string;
}

interface ContactInfo {
  address: string;
  phone: string;
  hours: string;
}

// ─── Main Content Export ───
export const siteContent = {
  nav: {
    brand: 'Annika',
    brandHighlight: 'Trading',
    phone: CONTACT.phone.display,
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
        href: `tel:${CONTACT.phone.tel}`,
        icon: '☎️',
        variant: 'primary',
        ariaLabel: 'Call Annika Trading at 0909 993 1787',
      },
      {
        label: 'Get Directions',
        href: CONTACT.mapsUrl,
        icon: '📍',
        variant: 'ghost-white',
        ariaLabel: 'Get directions to Annika Trading store',
      },
    ] as Button[],
    stats: [
      { value: '5.0 ★', label: 'Google Rating' },
      { value: 'Open', label: 'Until 4:30 PM daily' },
      { value: 'Local', label: 'Valenzuela-based' },
    ] as Stat[],
  },

  storeInfo: {
    sectionLabel: 'Find Us',
    title: 'Visit Our Store',
    subtitle: "We're easy to find — right in front of Ever in Valenzuela.",
    cards: [
      {
        icon: '📍',
        title: 'Address',
        content: CONTACT.address,
      },
      {
        icon: '☎️',
        title: 'Phone',
        content: CONTACT.phone.display,
        isLink: true,
        href: `tel:${CONTACT.phone.tel}`,
      },
      {
        icon: '🕐',
        title: 'Business Hours',
        content: 'Open daily · Closes at 4:30 PM',
      },
    ] as Card[],
    mapEmbedUrl: CONTACT.mapsEmbedUrl,
    mapButtonText: 'Open in Google Maps',
    mapButtonHref: CONTACT.mapsUrl,
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
    ] as Product[],
  },

  deliveryStrip: {
    headline: 'We Deliver to Your Jobsite',
    description:
      'Our own fleet of trucks delivers materials straight to your construction site anywhere in Valenzuela and nearby areas.',
    badges: [
      { value: '2+', label: 'Delivery Trucks' },
      { value: 'Fast', label: 'Local Delivery' },
    ] as Badge[],
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
    ] as Review[],
  },

  cta: {
    headline: 'Ready to Order? Call Us Now',
    subtitle: 'Reach us for orders, inquiries, and bulk pricing',
    buttons: [
      {
        label: `Call: ${CONTACT.phone.display}`,
        href: `tel:${CONTACT.phone.tel}`,
        icon: '☎️',
        variant: 'white',
        ariaLabel: 'Call Annika Trading to place an order',
      },
      {
        label: 'Send a Text',
        href: `sms:${CONTACT.phone.tel}`,
        icon: '💬',
        variant: 'ghost-white',
        ariaLabel: 'Send a text message to Annika Trading',
      },
    ] as Button[],
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
    ] as NavLink[],
    contactInfo: {
      address: CONTACT.addressFull,
      phone: CONTACT.phone.display,
      hours: 'Open until 4:30 PM',
    } as ContactInfo,
    copyright: '© 2025 Annika Trading. All rights reserved. · Valenzuela, Philippines',
  },

  stickyCall: {
    phone: CONTACT.phone.tel,
    ariaLabel: 'Call Annika Trading',
  },
};
