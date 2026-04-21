import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold-dark">
                  Prime Distress
                </span>
                <span className="text-[9px] font-medium text-muted-foreground uppercase tracking-[0.15em] -mt-0.5">
                  Properties
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm">
              India's premium distress property marketplace. Bank auctions, urgent sales, and verified below-market deals in Mumbai and beyond.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Property Categories</h3>
            <ul className="space-y-4">
              {[
                { label: 'Residential Distress Sale', href: '/listings?listingType=SELL' },
                { label: 'Commercial Distress Deals', href: '/listings?type=OFFICE' },
                { label: 'Bank Auction Properties', href: '/listings?type=AUCTION' },
                { label: 'Luxury Flats Below Market', href: '/listings?type=LUXURY' },
                { label: 'Pre-Leased Income Properties', href: '/listings?type=PRELEASED' },
                { label: 'RERA / OC Ready Properties', href: '/listings?type=RERA' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/listings" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors"></span>
                  All Distress Listings
                </Link>
              </li>
              <li>
                <Link to="/services/bank-auction-support" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors"></span>
                  Bank Auction Support
                </Link>
              </li>
              <li>
                <Link to="/services/legal-services" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors"></span>
                  Legal Services
                </Link>
              </li>
              <li>
                <Link to="/services/home-loans" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors"></span>
                  Property Financing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Tech Park, Bandra Kurla Complex (BKC),<br />
                  Bandra East, Mumbai,<br />
                  Maharashtra 400051
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:deals@primedistressproperties.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  deals@primedistressproperties.com
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Prime Distress Properties. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
