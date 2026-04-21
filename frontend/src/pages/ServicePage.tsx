import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Gavel, FileText, Building2 } from "lucide-react";

const ServicePage = () => {
    const { serviceName } = useParams();

    const getServiceData = (slug: string = "") => {
        switch (slug.toLowerCase()) {
            case 'bank-auction-support':
                return {
                    title: "Bank Auction Support",
                    icon: <Gavel className="w-12 h-12 text-primary" />,
                    description: "End-to-end assistance with SARFAESI Act bank auctions. From EMD filing to possession handover, our experts guide you through the entire auction process."
                };
            case 'legal-services':
                return {
                    title: "Legal Services",
                    icon: <FileText className="w-12 h-12 text-primary" />,
                    description: "Comprehensive legal verification and documentation support for distress properties. Title search, encumbrance certificates, and registration assistance."
                };
            case 'home-loans':
                return {
                    title: "Property Financing",
                    icon: <Building2 className="w-12 h-12 text-primary" />,
                    description: "Get financing for distress property purchases. We connect you with lenders who specialize in auction and distress property financing."
                };
            default:
                return {
                    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                    icon: <CheckCircle2 className="w-12 h-12 text-primary" />,
                    description: "Premium real estate services designed for distress property buyers and investors."
                };
        }
    };

    const service = getServiceData(serviceName);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-32 pb-20 bg-secondary/50 border-b border-border">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
                        {service.icon}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                        {service.title}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                        {service.description}
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg" className="h-12 px-8 btn-gold">
                          Talk to an Advisor
                        </Button>
                        <Link to="/">
                            <Button variant="outline" size="lg" className="h-12 px-8">
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ServicePage;
