import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Building2, ArrowRight } from "lucide-react";
import { CITY_DESCRIPTIONS } from "@/config/cityContent";

const CityPage = () => {
    const { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() : "City";

    const cityContent = CITY_DESCRIPTIONS[formattedCity as keyof typeof CITY_DESCRIPTIONS];

    const title = cityContent ? cityContent.title : `Distress Properties in ${formattedCity}`;
    const description = cityContent ? cityContent.description : `Explore verified distress sale properties and bank auction deals in ${formattedCity}. Below-market prices with full legal clarity.`;

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-32 pb-20 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-0 w-64 h-64 bg-urgent rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6 text-sm font-medium">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{cityContent ? 'City Guide' : `Distress Deals in ${formattedCity}`}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
                        {title}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                        {description}
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link to={`/listings?city=${formattedCity}`}>
                            <Button size="lg" className="h-12 px-8 text-base font-semibold btn-gold">
                                View Distress Deals in {formattedCity}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center py-12 bg-card rounded-2xl border border-border shadow-card">
                        <Building2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-foreground mb-2">
                            {cityContent ? `Distress Deals in ${formattedCity}` : 'Browse Distress Listings'}
                        </h2>
                        <p className="text-muted-foreground max-w-md mx-auto mb-6">
                            {cityContent ? cityContent.meta : `We are actively verifying distress properties in ${formattedCity}. Browse our database to find below-market opportunities.`}
                        </p>
                        <Link to={`/listings?city=${formattedCity}`}>
                            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                                Search All Deals <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CityPage;
