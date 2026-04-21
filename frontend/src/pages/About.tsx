import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Building2, TrendingDown, FileCheck, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-28 pb-16 bg-secondary/50 border-b border-border">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                        About Prime Distress
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                        India's Premium Distress Property Marketplace
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        We connect serious investors and buyers with verified distress sale, bank auction, and urgent liquidation properties across Mumbai and India's major cities.
                    </p>
                </div>
            </div>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden relative shadow-xl border border-border/50">
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-card">
                                    <div className="text-center space-y-4 p-8">
                                        <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto">
                                            <Building2 className="w-12 h-12 text-primary" />
                                        </div>
                                        <h3 className="font-heading text-2xl font-bold text-foreground">Trusted Since 2024</h3>
                                        <p className="text-muted-foreground">Premium distress real estate services</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border/50 max-w-xs hidden md:block">
                                <TrendingDown className="w-8 h-8 text-primary mb-2" />
                                <p className="text-sm font-medium text-foreground italic">
                                    "Helping investors find premium properties at below-market prices with full legal clarity."
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Mission</h2>
                                <h3 className="text-3xl font-bold text-foreground mb-4">Bridging the Gap in Distress Real Estate</h3>
                                <p className="text-muted-foreground font-medium">Verified Listings &bull; Transparent Deals &bull; Mumbai Focus</p>
                            </div>

                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <p>
                                    Prime Distress Properties is a specialized real estate marketplace focused exclusively on distress sales, bank auction properties, and urgent liquidation deals. We work with property owners, banks, and financial institutions to bring verified below-market opportunities to serious investors.
                                </p>
                                <p>
                                    Every listing on our platform undergoes a rigorous verification process including title search, OC status check, encumbrance certificate review, and physical inspection where applicable. We believe in complete transparency - from ready reckoner values to commission terms.
                                </p>
                                <p>
                                    Our primary focus is Mumbai's premium residential and commercial real estate market, with expanding coverage across Navi Mumbai, Thane, Pune, Delhi NCR, Bengaluru, and Hyderabad.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Link to="/listings">
                                    <Button size="lg" className="h-12 px-8 text-base btn-gold">
                                        Browse Distress Deals <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-muted/30 border-y border-border">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-12">What Sets Us Apart</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-card p-8 rounded-xl shadow-card border border-border/50">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-7 h-7 text-primary" />
                            </div>
                            <div className="text-4xl font-bold text-primary mb-2">100%</div>
                            <div className="text-muted-foreground font-medium">Verified Listings</div>
                        </div>
                        <div className="bg-card p-8 rounded-xl shadow-card border border-border/50">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <FileCheck className="w-7 h-7 text-primary" />
                            </div>
                            <div className="text-4xl font-bold text-primary mb-2">Full</div>
                            <div className="text-muted-foreground font-medium">Legal Clarity</div>
                        </div>
                        <div className="bg-card p-8 rounded-xl shadow-card border border-border/50">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Eye className="w-7 h-7 text-primary" />
                            </div>
                            <div className="text-4xl font-bold text-primary mb-2">Zero</div>
                            <div className="text-muted-foreground font-medium">Hidden Charges</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
