export interface Property {
  id: string;
  title: string;
  type: 'rent' | 'buy' | 'commercial' | 'pg';
  bhk: number;
  price: number;
  marketValue?: number;
  deposit?: number;
  area: number;
  furnishing: 'full' | 'semi' | 'none';
  tenantType: 'family' | 'bachelor' | 'company' | 'any';
  location: string;
  city: string;
  locality: string;
  bathrooms: number;
  amenities: string[];
  images: string[];
  ownerName: string;
  ownerPhone: string;
  isVerified: boolean;
  postedDate: string;
  description: string;
  availability: 'immediate' | 'within15' | 'within30';
  tags?: string[];
  commission?: string;
  rrValue?: number;
  parking?: number;
  carpetArea?: number;
  status?: string[];
}

const cities = ['Mumbai', 'Navi Mumbai', 'Thane', 'Pune', 'Delhi NCR', 'Bengaluru', 'Hyderabad', 'Chennai'];
const localities: Record<string, string[]> = {
  'Mumbai': ['BKC Bandra', 'Andheri', 'Bandra', 'Powai', 'Worli', 'Lower Parel', 'Malad', 'Goregaon East', 'Santacruz East', 'Juhu'],
  'Navi Mumbai': ['Vashi', 'Kharghar', 'Panvel', 'Airoli', 'Belapur'],
  'Thane': ['Ghodbunder Road', 'Thane West', 'Kasarvadavali', 'Majiwada'],
  'Pune': ['Koregaon Park', 'Viman Nagar', 'Hinjewadi', 'Baner', 'Kharadi', 'Wakad'],
  'Delhi NCR': ['Dwarka', 'Gurgaon', 'Noida', 'Saket', 'Vasant Kunj'],
  'Bengaluru': ['Indiranagar', 'Koramangala', 'Whitefield', 'HSR Layout'],
  'Hyderabad': ['Gachibowli', 'Madhapur', 'Hitech City', 'Jubilee Hills'],
  'Chennai': ['Adyar', 'Anna Nagar', 'OMR', 'Velachery'],
};

const ownerNames = ['Rajesh M.', 'Priya K.', 'Amit S.', 'Sneha R.', 'Vikram P.', 'Kavita D.'];

const distressTags = ['distress sale', 'bank auction', 'urgent sale', 'clear title', 'OC available', 'physical possession', 'negotiable', 'RERA registered'];

const imageUrls = [
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
];

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomElements<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generatePhone(): string {
  return `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`;
}

const distressProperties: Property[] = [
  {
    id: 'distress-1',
    title: 'BKC Commercial Office Space - Distress Sale',
    type: 'commercial',
    bhk: 0,
    price: 330000000,
    marketValue: 450000000,
    area: 7450,
    carpetArea: 7450,
    furnishing: 'none',
    tenantType: 'company',
    location: 'BKC, Mumbai',
    city: 'Mumbai',
    locality: 'BKC Bandra',
    bathrooms: 0,
    parking: 18,
    amenities: ['Lift', 'Power Backup', 'Security', 'Fire Safety', 'Central AC', 'Parking'],
    images: [imageUrls[0], imageUrls[1], imageUrls[2]],
    ownerName: 'Rajesh M.',
    ownerPhone: '+91 9876543210',
    isVerified: true,
    postedDate: '2026-04-01T00:00:00.000Z',
    description: 'Premium commercial office space in BKC. 100% crystal clear property with OC. 7,450 sq ft carpet area with 18 reserved parking slots. Government ready reckoner value: ₹30 Cr. Final distress sale price: ₹32 Cr + ₹1 Cr commission. Non-negotiable commission for fast payment buyer.',
    availability: 'immediate',
    tags: ['distress sale', 'clear title', 'OC available'],
    commission: '₹1 Cr',
    rrValue: 300000000,
  },
  {
    id: 'distress-2',
    title: 'Lotus Corporate Park - SARFAESI Auction',
    type: 'commercial',
    bhk: 0,
    price: 201000000,
    marketValue: 300000000,
    area: 5813,
    carpetArea: 5813,
    furnishing: 'semi',
    tenantType: 'company',
    location: 'WEH, Goregaon East, Mumbai',
    city: 'Mumbai',
    locality: 'Goregaon East',
    bathrooms: 0,
    parking: 6,
    amenities: ['Lift', 'Power Backup', 'Security', 'Parking', 'Gym'],
    images: [imageUrls[3], imageUrls[4], imageUrls[5]],
    ownerName: 'Amit S.',
    ownerPhone: '+91 9876543211',
    isVerified: true,
    postedDate: '2026-03-25T00:00:00.000Z',
    description: 'Bank auction property under SARFAESI Act at Lotus Corporate Park, Western Express Highway, Goregaon East. Physical possession available. Bank reserve price: ₹18.60 Cr + ₹1 Cr bank charges. Total with commission: ₹20.10 Cr. Market value: ₹30 Cr. Auction date: 30 March 2026. EMD last date: 27 March 2026.',
    availability: 'immediate',
    tags: ['bank auction', 'physical possession', 'urgent sale'],
    commission: '₹50 Lakh',
    rrValue: 186000000,
  },
  {
    id: 'distress-3',
    title: 'BKC Bandra Office - Premium Distress Deal',
    type: 'commercial',
    bhk: 0,
    price: 800000000,
    marketValue: 1350000000,
    area: 42000,
    carpetArea: 31000,
    furnishing: 'semi',
    tenantType: 'company',
    location: 'BKC Bandra, Mumbai',
    city: 'Mumbai',
    locality: 'BKC Bandra',
    bathrooms: 0,
    parking: 25,
    amenities: ['Lift', 'Power Backup', 'Security', 'Central AC', 'Parking', 'Fire Safety'],
    images: [imageUrls[6], imageUrls[7], imageUrls[0]],
    ownerName: 'Vikram P.',
    ownerPhone: '+91 9876543212',
    isVerified: true,
    postedDate: '2026-03-20T00:00:00.000Z',
    description: 'Massive 42,000 sq ft built-up / 31,000 sq ft carpet office space in BKC. RR value: ₹38,500/sq ft. 25 reserved car parking. Seating capacity: 1,500. Current rental: ₹50 lakh - ₹55 lakh/month. Clear title property available for immediate closure.',
    availability: 'immediate',
    tags: ['distress sale', 'clear title', 'negotiable'],
    commission: 'On application',
    rrValue: 1193500000,
  },
  {
    id: 'distress-4',
    title: 'Santacruz East - Under-Construction Flats (12 Units)',
    type: 'buy',
    bhk: 3,
    price: 331100000,
    marketValue: 490000000,
    area: 2480,
    carpetArea: 2480,
    furnishing: 'none',
    tenantType: 'any',
    location: 'Masjid Road, Vakola, Santacruz East, Mumbai',
    city: 'Mumbai',
    locality: 'Santacruz East',
    bathrooms: 2,
    parking: 12,
    amenities: ['Lift', 'Power Backup', 'Security', 'Garden', 'Kids Play Area'],
    images: [imageUrls[1], imageUrls[2], imageUrls[3]],
    ownerName: 'Kavita D.',
    ownerPhone: '+91 9876543213',
    isVerified: true,
    postedDate: '2026-03-15T00:00:00.000Z',
    description: '12 flats in under-construction building. Each flat: 2,480 sq ft. Total plot: 1,061 sq yards. Construction ~75% complete. CTS No 1499-1510, village Kole-Kalyan. Sale price: ₹33.11 Cr. Market value: ₹49 Cr. 2% brokerage applicable on final sale.',
    availability: 'within30',
    tags: ['distress sale', 'RERA registered', 'negotiable'],
    commission: '2% on final sale',
  },
  {
    id: 'distress-5',
    title: 'Lotus Corporate Park - 9,000 sq ft Fully Furnished',
    type: 'commercial',
    bhk: 0,
    price: 260000000,
    marketValue: 350000000,
    area: 9000,
    carpetArea: 5400,
    furnishing: 'full',
    tenantType: 'company',
    location: 'WEH, Goregaon East, Mumbai',
    city: 'Mumbai',
    locality: 'Goregaon East',
    bathrooms: 0,
    parking: 6,
    amenities: ['Lift', 'Power Backup', 'Security', 'Parking', 'AC', 'Fire Safety'],
    images: [imageUrls[4], imageUrls[5], imageUrls[6]],
    ownerName: 'Priya K.',
    ownerPhone: '+91 9876543214',
    isVerified: true,
    postedDate: '2026-04-10T00:00:00.000Z',
    description: '9,000 sq ft built-up / 5,400 sq ft carpet with 6 parking slots. Fully furnished office. Current rent: ₹14.8 lakh/month. Negotiable price at ₹26 Cr. Strong rental yield in high-demand business district.',
    availability: 'immediate',
    tags: ['distress sale', 'negotiable', 'clear title'],
    commission: 'On application',
  },
  {
    id: 'distress-6',
    title: 'Lotus Corporate Park - Final Price ₹14 Cr (4,500 sq ft)',
    type: 'commercial',
    bhk: 0,
    price: 140000000,
    marketValue: 220000000,
    area: 4500,
    carpetArea: 2700,
    furnishing: 'full',
    tenantType: 'company',
    location: 'WEH, Goregaon East, Mumbai',
    city: 'Mumbai',
    locality: 'Goregaon East',
    bathrooms: 0,
    parking: 3,
    amenities: ['Lift', 'Power Backup', 'Security', 'Parking', 'AC'],
    images: [imageUrls[7], imageUrls[0], imageUrls[1]],
    ownerName: 'Sneha R.',
    ownerPhone: '+91 9876543215',
    isVerified: true,
    postedDate: '2026-04-12T00:00:00.000Z',
    description: '4,500 sq ft built-up / 2,700 sq ft carpet. Fully furnished with 3 parking. Final price: ₹14 Cr. Current rent: ₹6 lakh/month. Ideal for SME or startup looking for prime WEH location.',
    availability: 'immediate',
    tags: ['urgent sale', 'fully furnished', 'clear title'],
    commission: 'On application',
  },
  {
    id: 'distress-7',
    title: 'Worli Sea-View Luxury 4 BHK - Below Market',
    type: 'buy',
    bhk: 4,
    price: 85000000,
    marketValue: 120000000,
    area: 3800,
    carpetArea: 3200,
    furnishing: 'semi',
    tenantType: 'family',
    location: 'Worli, Mumbai',
    city: 'Mumbai',
    locality: 'Worli',
    bathrooms: 3,
    parking: 2,
    amenities: ['Swimming Pool', 'Gym', 'Power Backup', 'Security', 'Lift', 'Garden', 'Club House'],
    images: [imageUrls[2], imageUrls[3], imageUrls[4]],
    ownerName: 'Rajesh M.',
    ownerPhone: '+91 9876543216',
    isVerified: true,
    postedDate: '2026-04-05T00:00:00.000Z',
    description: 'Premium 4 BHK sea-view apartment in Worli. 3,200 sq ft carpet. OC available. Clear title with all documents in order. Urgent transfer opportunity. Market value ₹12 Cr, available at ₹8.5 Cr.',
    availability: 'immediate',
    tags: ['distress sale', 'luxury flat', 'OC available', 'clear title'],
    commission: '2% on final sale',
  },
  {
    id: 'distress-8',
    title: 'Andheri West Commercial Office - Auction',
    type: 'commercial',
    bhk: 0,
    price: 95000000,
    marketValue: 140000000,
    area: 3200,
    carpetArea: 3200,
    furnishing: 'none',
    tenantType: 'company',
    location: 'Andheri West, Mumbai',
    city: 'Mumbai',
    locality: 'Andheri',
    bathrooms: 0,
    parking: 4,
    amenities: ['Lift', 'Power Backup', 'Security', 'Parking'],
    images: [imageUrls[5], imageUrls[6], imageUrls[7]],
    ownerName: 'Amit S.',
    ownerPhone: '+91 9876543217',
    isVerified: true,
    postedDate: '2026-04-08T00:00:00.000Z',
    description: 'Commercial office in Andheri West. Bank auction under SARFAESI. 3,200 sq ft carpet with 4 parking. Physical possession. Bank reserve: ₹9.5 Cr. Market value: ₹14 Cr.',
    availability: 'immediate',
    tags: ['bank auction', 'physical possession', 'urgent sale'],
    commission: '₹25 Lakh',
  },
  {
    id: 'distress-9',
    title: 'Powai 3 BHK Lake-View - Urgent Sale',
    type: 'buy',
    bhk: 3,
    price: 28000000,
    marketValue: 42000000,
    area: 1800,
    carpetArea: 1500,
    furnishing: 'semi',
    tenantType: 'family',
    location: 'Powai, Mumbai',
    city: 'Mumbai',
    locality: 'Powai',
    bathrooms: 2,
    parking: 1,
    amenities: ['Swimming Pool', 'Gym', 'Power Backup', 'Security', 'Garden', 'Kids Play Area'],
    images: [imageUrls[0], imageUrls[7], imageUrls[2]],
    ownerName: 'Priya K.',
    ownerPhone: '+91 9876543218',
    isVerified: true,
    postedDate: '2026-04-15T00:00:00.000Z',
    description: 'Scenic 3 BHK lake-view apartment in Powai. 1,500 sq ft carpet. Gated community with 24/7 security. RERA registered. Urgent sale - owner relocating. Market value ₹4.2 Cr.',
    availability: 'immediate',
    tags: ['urgent sale', 'RERA registered', 'lake view'],
    commission: '1.5% on final sale',
  },
  {
    id: 'distress-10',
    title: 'Lower Parel Commercial Tower - Pre-Leased',
    type: 'commercial',
    bhk: 0,
    price: 550000000,
    marketValue: 750000000,
    area: 12000,
    carpetArea: 9000,
    furnishing: 'full',
    tenantType: 'company',
    location: 'Lower Parel, Mumbai',
    city: 'Mumbai',
    locality: 'Lower Parel',
    bathrooms: 0,
    parking: 10,
    amenities: ['Lift', 'Power Backup', 'Security', 'Central AC', 'Parking', 'Fire Safety', 'Gym'],
    images: [imageUrls[1], imageUrls[4], imageUrls[6]],
    ownerName: 'Vikram P.',
    ownerPhone: '+91 9876543219',
    isVerified: true,
    postedDate: '2026-03-28T00:00:00.000Z',
    description: 'Pre-leased commercial office in Lower Parel. 9,000 sq ft carpet with 10 parking. Currently rented to MNC at ₹22 lakh/month. Strong rental yield of ~4.8%. Clear title, OC available. Available for immediate transfer.',
    availability: 'immediate',
    tags: ['distress sale', 'pre-leased', 'OC available', 'clear title'],
    commission: 'On application',
  },
  {
    id: 'distress-11',
    title: 'Malad West 2 BHK - Urgent Liquidation',
    type: 'buy',
    bhk: 2,
    price: 12000000,
    marketValue: 18000000,
    area: 950,
    carpetArea: 750,
    furnishing: 'semi',
    tenantType: 'any',
    location: 'Malad West, Mumbai',
    city: 'Mumbai',
    locality: 'Malad',
    bathrooms: 2,
    parking: 1,
    amenities: ['Lift', 'Power Backup', 'Security', 'Garden'],
    images: [imageUrls[3], imageUrls[5], imageUrls[0]],
    ownerName: 'Sneha R.',
    ownerPhone: '+91 9876543220',
    isVerified: true,
    postedDate: '2026-04-18T00:00:00.000Z',
    description: 'Well-maintained 2 BHK in Malad West. 750 sq ft carpet. Near station and market. RERA registered with OC. Urgent liquidation by NRI owner. Market value ₹1.8 Cr.',
    availability: 'immediate',
    tags: ['urgent sale', 'RERA registered', 'OC available'],
    commission: '1.5% on final sale',
  },
  {
    id: 'distress-12',
    title: 'Bandra 3 BHK Luxury - Owner Relocating',
    type: 'buy',
    bhk: 3,
    price: 52000000,
    marketValue: 72000000,
    area: 2200,
    carpetArea: 1800,
    furnishing: 'full',
    tenantType: 'family',
    location: 'Bandra, Mumbai',
    city: 'Mumbai',
    locality: 'Bandra',
    bathrooms: 3,
    parking: 2,
    amenities: ['Swimming Pool', 'Gym', 'Power Backup', 'Security', 'Lift', 'Club House', 'Garden'],
    images: [imageUrls[6], imageUrls[2], imageUrls[7]],
    ownerName: 'Kavita D.',
    ownerPhone: '+91 9876543221',
    isVerified: true,
    postedDate: '2026-04-16T00:00:00.000Z',
    description: 'Premium 3 BHK in Bandra. 1,800 sq ft carpet. Fully furnished with designer interiors. Gated community. Owner relocating abroad - urgent transfer needed. Market value ₹7.2 Cr.',
    availability: 'within15',
    tags: ['urgent sale', 'luxury flat', 'fully furnished', 'negotiable'],
    commission: '2% on final sale',
  },
];

export function generateMockProperties(count: number = 50): Property[] {
  const properties: Property[] = [...distressProperties];

  for (let i = distressProperties.length; i < count; i++) {
    const city = getRandomElement(cities);
    const locality = getRandomElement(localities[city]);
    const isCommercial = Math.random() > 0.5;
    const basePrice = isCommercial
      ? (50000000 + Math.random() * 500000000)
      : (10000000 + Math.random() * 100000000);

    const marketVal = Math.round(basePrice * (1.2 + Math.random() * 0.4));

    const property: Property = {
      id: `prop-${i + 1}`,
      title: isCommercial
        ? `Commercial Office in ${locality}, ${city}`
        : `${Math.floor(Math.random() * 3) + 2} BHK Luxury Flat in ${locality}, ${city}`,
      type: isCommercial ? 'commercial' : 'buy',
      bhk: isCommercial ? 0 : Math.floor(Math.random() * 3) + 2,
      price: Math.round(basePrice),
      marketValue: marketVal,
      area: isCommercial ? Math.round(2000 + Math.random() * 15000) : Math.round(800 + Math.random() * 3000),
      furnishing: getRandomElement(['full', 'semi', 'none'] as const),
      tenantType: getRandomElement(['family', 'bachelor', 'company', 'any'] as const),
      location: `${locality}, ${city}`,
      city,
      locality,
      bathrooms: isCommercial ? 0 : Math.floor(Math.random() * 3) + 1,
      parking: isCommercial ? Math.floor(Math.random() * 10) + 2 : 1,
      amenities: getRandomElements(['Lift', 'Power Backup', 'Security', 'Gym', 'Swimming Pool', 'Garden', 'Club House', 'AC', 'Fire Safety', 'Parking'], Math.floor(Math.random() * 6) + 3),
      images: getRandomElements(imageUrls, 4),
      ownerName: getRandomElement(ownerNames),
      ownerPhone: generatePhone(),
      isVerified: Math.random() > 0.2,
      postedDate: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
      description: isCommercial
        ? `Premium commercial office space in ${locality}, ${city}. ${Math.round(basePrice / 10000000)} Cr distress price. Clear title, available for immediate closure.`
        : `Luxury ${Math.floor(Math.random() * 3) + 2} BHK in prime ${locality}, ${city}. Below market price. RERA registered, OC available.`,
      availability: getRandomElement(['immediate', 'within15', 'within30'] as const),
      tags: getRandomElements(distressTags, Math.floor(Math.random() * 3) + 1),
      commission: isCommercial ? 'On application' : `${(Math.random() * 2 + 1).toFixed(1)}%`,
    };

    properties.push(property);
  }

  return properties;
}

export const mockProperties = generateMockProperties(50);
export const topCities = cities;
export const allLocalities = localities;
