import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OmniSearch } from '@/components/home/OmniSearch';
import { PropertyCard } from '@/components/property/PropertyCard';
import { PropertyListSkeleton } from '@/components/property/PropertySkeleton';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { mockProperties, topCities } from '@/data/mockProperties';
import {
  Building2,
  Shield,
  TrendingDown,
  ArrowRight,
  BadgeCheck,
  Home,
  Award,
  Gavel,
  Crown,
  FileCheck,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroPremium from '@/assets/hero-premium.png';

const stats = [
  { value: '₹500 Cr+', label: 'Properties Listed', icon: Building2 },
  { value: '200+', label: 'Verified Deals', icon: Shield },
  { value: '40%+', label: 'Avg. Savings', icon: TrendingDown },
  { value: '100%', label: 'Legal Clarity', icon: FileCheck },
];

const features = [
  {
    title: 'Verified Listings',
    description: 'Every property goes through our legal and physical verification process. Clear titles, OC status, and document support.',
    icon: Shield,
  },
  {
    title: 'Below Market Value',
    description: 'Access properties priced significantly below market rate. Bank auctions, distress sales, and urgent liquidation deals.',
    icon: TrendingDown,
  },
  {
    title: 'Commission Transparency',
    description: 'Every listing clearly states commission terms. No hidden charges, no surprises. Full disclosure on every deal.',
    icon: Eye,
  },
];

const categories = [
  { name: 'Residential Distress Sale', icon: Building2, href: '/listings?listingType=SELL', desc: 'Flats & apartments below market price' },
  { name: 'Commercial Deals', icon: Crown, href: '/listings?type=OFFICE', desc: 'Office spaces & retail in prime locations' },
  { name: 'Bank Auction', icon: Gavel, href: '/listings?type=AUCTION', desc: 'SARFAESI Act properties with physical possession' },
  { name: 'Luxury Flats', icon: Award, href: '/listings?type=LUXURY', desc: 'Premium residences at distress pricing' },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const featuredProperties = mockProperties.slice(0, 6);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/10">
      <Navbar />

      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-60" />

        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/4 -right-20 w-[300px] h-[300px] bg-urgent/10 rounded-full blur-[80px] pointer-events-none"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-flex items-center gap-2 badge-urgent px-5 py-2.5 text-sm backdrop-blur-md">
                    <BadgeCheck className="w-5 h-5" />
                    <span className="font-bold tracking-tight uppercase">Mumbai's Premium Distress Marketplace</span>
                  </span>
                </motion.div>

                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-foreground"
                  >
                    High-Value Properties at
                    <br />
                    <span className="text-gradient-gold relative">
                      Distress Prices.
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-1 left-0 h-1 bg-gradient-premium rounded-full"
                      />
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="text-xl md:text-2xl text-muted-foreground/90 max-w-xl leading-relaxed"
                  >
                    Verified distress sales, bank auctions, and urgent property deals in Mumbai. <span className="text-foreground font-bold">Save 30-50% below market value.</span>
                  </motion.p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="hidden lg:block relative group"
              >
                <div className="absolute -inset-1 bg-gradient-premium rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <OmniSearch />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="lg:hidden"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSearchModalOpen(true)}
                  className="w-full p-5 bg-card/80 backdrop-blur-xl rounded-2xl shadow-elevated border border-primary/20 flex items-center gap-4 text-left"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shadow-gold">
                    <Home className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Search Distress Deals</p>
                    <p className="text-muted-foreground">Residential, Commercial, Auction</p>
                  </div>
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex flex-wrap items-center gap-x-10 gap-y-6 pt-6 border-t border-border/50"
              >
                {stats.slice(0, 3).map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full glass border border-primary/20 flex items-center justify-center shadow-soft">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-extrabold text-2xl tracking-tight leading-none">{stat.value}</p>
                      <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative lg:block hidden"
            >
              <div className="relative z-10 p-4">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)] border-4 border-border bg-card group"
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={heroPremium}
                    alt="Premium Distress Property Deals"
                    className="w-full h-auto max-w-2xl mx-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {searchModalOpen && (
            <OmniSearch isModal onClose={() => setSearchModalOpen(false)} />
          )}
        </AnimatePresence>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-px bg-primary" />
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Browse by Category</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
              Explore Distress Property Categories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={cat.href}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-card rounded-2xl p-6 shadow-card border border-border/50 group cursor-pointer h-full"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <cat.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2">{cat.name}</h3>
                    <p className="text-muted-foreground text-sm">{cat.desc}</p>
                    <div className="mt-4 text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Deals <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
              <Award className="w-6 h-6 text-primary" />
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-gradient-gold">Prime Distress</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Premium distress real estate marketplace with verified listings and transparent deals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 card-hover group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-px bg-urgent" />
                <span className="text-urgent font-medium text-sm uppercase tracking-wider">Featured Deals</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
                Prime Distress Properties
              </h2>
              <p className="text-muted-foreground">
                Verified listings with clear title and immediate availability
              </p>
            </div>
            <Link to="/listings">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 md:mt-0"
              >
                <Button variant="outline" className="rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View All Deals
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {isLoading ? (
            <PropertyListSkeleton count={6} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProperties.map((property, i) => (
                <PropertyCard key={property.id} property={property} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Distress Deals in <span className="text-gradient-gold">Top Cities</span>
            </h2>
            <p className="text-muted-foreground">
              Premium below-market properties across India's major cities
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {topCities.map((city, i) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={`/listings?city=${city}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-card rounded-full shadow-soft border border-border/50 font-medium hover:border-primary hover:shadow-gold transition-all"
                  >
                    {city}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-secondary rounded-3xl p-8 md:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-urgent rounded-full blur-3xl" />
            </div>

            <div className="absolute inset-0 rounded-3xl border border-primary/20" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
                <Gavel className="w-6 h-6 text-primary" />
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
                Have a Distress Property to Sell?
              </h2>
              <p className="text-secondary-foreground/70 text-lg mb-8">
                List your urgent sale, bank auction, or distress property. Reach serious investors and close fast.
              </p>
              <Link to="/post-property">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button className="btn-gold text-lg px-8 py-6 h-auto gap-2">
                    <span>Submit Your Property</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
