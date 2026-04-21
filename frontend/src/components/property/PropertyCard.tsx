import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bed, Bath, Maximize, ChevronLeft, ChevronRight, BadgeCheck, Phone, TrendingDown, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Property } from '@/data/mockProperties';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(price / 100000).toFixed(2)} L`;
  };

  const savings = property.marketValue && property.price
    ? Math.round(((property.marketValue - property.price) / property.marketValue) * 100)
    : 0;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <Link to={`/property/${property.id}`}>
        <div className="bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border/50">
          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.img
              src={property.images[currentImage]}
              alt={property.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.4 }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              {property.isVerified && (
                <span className="badge-verified flex items-center gap-1">
                  <BadgeCheck className="w-3 h-3" />
                  Verified
                </span>
              )}
              {property.tags?.slice(0, 2).map((tag) => (
                <span key={tag} className={cn(
                  'px-2 py-1 rounded text-[10px] font-bold uppercase backdrop-blur-md',
                  tag === 'bank auction' || tag === 'urgent sale'
                    ? 'bg-red-500/90 text-white'
                    : 'bg-black/50 text-white/90'
                )}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="absolute bottom-3 left-3 right-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1">
                  <div className="bg-card/95 backdrop-blur-sm px-4 py-2 rounded-xl border border-primary/30">
                    <div className="flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-emerald-400" />
                      <span className="text-foreground font-heading font-bold text-lg">
                        {formatPrice(property.price)}
                      </span>
                    </div>
                  </div>
                </div>
                {savings > 0 && (
                  <div className="savings-badge flex-shrink-0">
                    Save {savings}%
                  </div>
                )}
              </div>
              {property.marketValue && (
                <p className="text-white/60 text-xs mt-1 ml-1 line-through">
                  Market: {formatPrice(property.marketValue)}
                </p>
              )}
            </div>

            {property.images.length > 1 && (
              <>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </>
            )}

            {property.images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1" style={{ display: 'none' }}>
                {property.images.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      'w-1.5 h-1.5 rounded-full transition-all',
                      i === currentImage ? 'bg-primary w-4' : 'bg-card/50'
                    )}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="p-4 space-y-3">
            <h3 className="font-heading font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {property.title}
            </h3>

            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              {property.bhk > 0 && (
                <div className="flex items-center gap-1.5">
                  <Bed className="w-4 h-4 text-primary" />
                  <span>{property.bhk} BHK</span>
                </div>
              )}
              {property.carpetArea && (
                <div className="flex items-center gap-1.5">
                  <Maximize className="w-4 h-4 text-primary" />
                  <span>{property.carpetArea.toLocaleString()} sqft</span>
                </div>
              )}
              {property.parking && property.parking > 0 && (
                <div className="flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-primary" />
                  <span>{property.parking} Park</span>
                </div>
              )}
            </div>

            {property.commission && (
              <p className="text-xs text-muted-foreground">
                Commission: {property.commission}
              </p>
            )}

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full btn-gold gap-2" size="lg">
                <Phone className="w-4 h-4" />
                <span>Request Callback</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
