import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X, Search, Loader2 } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PropertyCard } from '@/components/property/PropertyCard';
import { EmptyState } from '@/components/property/EmptyState';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { searchProperties } from '@/services/propertyService';
import { Property, SearchFilters, PropertyType, Furnishing, ListingType } from '@/types/property';
import { cn } from '@/lib/utils';
import { CITY_DESCRIPTIONS } from '@/config/cityContent';

const propertyTypeOptions = [
  { value: 'APARTMENT', label: 'Residential' },
  { value: 'VILLA', label: 'Villa/House' },
  { value: 'SHOP', label: 'Shop' },
  { value: 'OFFICE', label: 'Commercial Office' },
  { value: 'PLOT', label: 'Plot/Land' },
  { value: 'AUCTION', label: 'Bank Auction' },
  { value: 'LUXURY', label: 'Luxury Flat' },
  { value: 'PRELEASED', label: 'Pre-Leased' },
];

const distressCategories = [
  { value: 'RENT', label: 'Residential' },
  { value: 'SELL', label: 'All Sales' },
  { value: 'AUCTION', label: 'Bank Auction' },
  { value: 'COMMERCIAL', label: 'Commercial' },
];

const cities = ['Mumbai', 'Navi Mumbai', 'Thane', 'Pune', 'Delhi NCR', 'Bengaluru', 'Hyderabad', 'Chennai'];

export default function Listings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || '');
  const [selectedType, setSelectedType] = useState<PropertyType | ''>(searchParams.get('type') as PropertyType || '');
  const [selectedListingType, setSelectedListingType] = useState<ListingType | ''>(searchParams.get('listingType') as ListingType || '');

  useEffect(() => {
    loadProperties();
  }, [currentPage, searchParams]);

  const loadProperties = async () => {
    try {
      setIsLoading(true);

      const filters: SearchFilters = {
        page: currentPage,
        limit: 12,
      };

      const q = searchParams.get('q');
      const city = searchParams.get('city');
      const type = searchParams.get('type') as PropertyType;
      const listingType = searchParams.get('listingType') as ListingType;

      if (q) filters.q = q;
      if (city) filters.city = city;
      if (type) filters.type = type;
      if (listingType) filters.listingType = listingType;

      const result = await searchProperties(filters);
      setProperties(result.properties);
      setTotalCount(result.pagination.total);
      setTotalPages(result.pagination.totalPages);
    } catch (error) {
      console.error('Failed to load properties:', error);
      setProperties([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (searchQuery) params.set('q', searchQuery);
    if (selectedCity) params.set('city', selectedCity);
    if (selectedType) params.set('type', selectedType);
    if (selectedListingType) params.set('listingType', selectedListingType);

    setSearchParams(params);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCity('');
    setSelectedType('');
    setSelectedListingType('');
    setSearchParams({});
    setCurrentPage(1);
  };

  const getPageTitle = () => {
    if (selectedCity) return `Distress Properties in ${selectedCity}`;
    if (selectedListingType === 'RENT') return 'Residential Distress Sales';
    if (selectedListingType === 'SELL') return 'All Distress Sale Properties';
    if (selectedType === 'AUCTION') return 'Bank Auction Properties';
    if (selectedType === 'LUXURY') return 'Luxury Flats Below Market';
    if (selectedType) return `${selectedType.charAt(0) + selectedType.slice(1).toLowerCase()} Properties`;
    return 'All Distress Listings';
  };

  const cityContent = selectedCity ? CITY_DESCRIPTIONS[selectedCity as keyof typeof CITY_DESCRIPTIONS] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-px bg-primary" />
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  {cityContent ? 'City Guide' : 'Distress Marketplace'}
                </span>
              </div>
              <h1 className="font-heading text-3xl font-bold md:text-4xl mb-3">
                {cityContent ? cityContent.title : getPageTitle()}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {cityContent ? cityContent.description : (isLoading ? 'Loading...' : `${totalCount} verified distress deals found`)}
              </p>
            </div>
            <div className="flex gap-3 self-start md:self-center">
              <Button
                variant="outline"
                className="lg:hidden gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search by location, property name..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Select value={selectedCity || 'ALL'} onValueChange={(v) => setSelectedCity(v === 'ALL' ? '' : v)}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All Cities</SelectItem>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button className="btn-gold" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </div>

          <div className="flex gap-8">
            <aside className={cn(
              'w-72 shrink-0 space-y-6',
              'hidden lg:block',
              showFilters && 'fixed inset-0 z-50 bg-card p-6 lg:relative lg:p-0 block'
            )}>
              {showFilters && (
                <Button variant="ghost" size="icon" className="lg:hidden absolute top-4 right-4" onClick={() => setShowFilters(false)}>
                  <X className="w-5 h-5" />
                </Button>
              )}

              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-lg flex items-center gap-2">
                    <span className="w-6 h-px bg-primary" />
                    Filters
                  </h3>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {distressCategories.map((option) => (
                      <Button
                        key={option.value}
                        variant={selectedListingType === option.value ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedListingType(selectedListingType === option.value ? '' : option.value as ListingType)}
                        className={cn(
                          'rounded-full',
                          selectedListingType === option.value && 'bg-primary hover:bg-primary/90'
                        )}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium">Property Type</label>
                  <Select value={selectedType || 'ALL'} onValueChange={(v) => setSelectedType(v === 'ALL' ? '' : v as PropertyType)}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ALL">All Types</SelectItem>
                      {propertyTypeOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full btn-gold" onClick={handleSearch}>
                  Apply Filters
                </Button>
              </div>
            </aside>

            <div className="flex-1">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-80 rounded-2xl skeleton" />
                  ))}
                </div>
              ) : properties.length === 0 ? (
                <EmptyState />
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {properties.map((property, i) => (
                      <PropertyCardAPI key={property.id} property={property} index={i} />
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                      <Button
                        variant="outline"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(p => p - 1)}
                      >
                        Previous
                      </Button>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                          const page = i + 1;
                          return (
                            <Button
                              key={page}
                              variant={currentPage === page ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </Button>
                          );
                        })}
                      </div>
                      <Button
                        variant="outline"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(p => p + 1)}
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function PropertyCardAPI({ property, index }: { property: Property; index: number }) {
  const navigate = useNavigate();

  const formatPrice = (price: number, listingType: string) => {
    if (listingType === 'SELL') {
      if (price >= 10000000) {
        return `₹${(price / 10000000).toFixed(2)} Cr`;
      }
      return `₹${(price / 100000).toFixed(2)} L`;
    }
    return `₹${price.toLocaleString('en-IN')}/mo`;
  };

  const images = property.images.length > 0 ? property.images : ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => navigate(`/property/${property.id}`)}
    >
      <div className="bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border/50">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={images[0]}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute top-3 left-3 flex gap-2">
            {property.owner.isVerified && (
              <span className="bg-emerald-500/90 text-white text-xs px-2 py-1 rounded-full font-medium backdrop-blur-md">
                Verified
              </span>
            )}
            <span className="bg-white/90 text-black text-xs px-2 py-1 rounded-full font-medium backdrop-blur-md">
              {property.listingType === 'RENT' ? 'Distress Rent' : 'Distress Sale'}
            </span>
          </div>

          <div className="absolute bottom-3 right-3">
            <span className="bg-card/95 backdrop-blur-sm text-foreground font-heading font-bold text-lg px-4 py-2 rounded-xl shadow-soft border border-primary/30">
              {formatPrice(property.price, property.listingType)}
            </span>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <h3 className="font-heading font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {property.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-1">
            {property.locality}, {property.city}
          </p>

          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            {property.bhk > 0 && (
              <div className="flex items-center gap-1.5">
                <span className="text-primary">🛏</span>
                <span>{property.bhk} BHK</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <span className="text-primary">📐</span>
              <span>{property.builtUpArea} sqft</span>
            </div>
          </div>

          <Button className="w-full btn-gold gap-2" size="lg">
            Request Callback
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
