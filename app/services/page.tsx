import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ServicesPage() {
    return (
        <div className="bg-background">
            <section className="py-20 lg:py-32 bg-muted/20">
                <div className="container px-4 mx-auto text-center max-w-3xl">
                    <div className="inline-flex items-center rounded-none border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-none bg-primary mr-2 animate-pulse"></span>
                        Our Expertise
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Comprehensive Tech Services</h1>
                    <p className="text-xl text-muted-foreground">
                        From initial discovery to final deployment, we provide end-to-end engineering and design services to scale your business.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map((service) => (
                            <Card key={service.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="size-12 rounded-none bg-primary/10 flex items-center justify-center text-primary mb-4">
                                        <service.icon className="size-6" />
                                    </div>
                                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground mb-6">
                                        {service.shortDesc}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.slice(0, 3).map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm">
                                                <Check className="size-4 text-primary shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full group" asChild>
                                        <Link href={`/services/${service.slug}`}>
                                            Explore Service <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="bg-muted rounded-none p-8 md:p-16 relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 size-96 bg-primary/10 rounded-none blur-3xl" />
                        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 size-96 bg-primary/10 rounded-none blur-3xl" />

                        <div className="text-center mb-16 relative z-10">
                            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
                            <p className="text-muted-foreground opacity-80 max-w-2xl mx-auto">Deep domain expertise across key sectors allowing us to solve industry-specific challenges.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
                            {["FinTech", "Healthcare", "E-Commerce", "EdTech", "Real Estate", "Logistics"].map((industry) => (
                                <div key={industry} className="bg-background/80 text-foreground text-center p-6 rounded-none backdrop-blur-sm border border-border/50 hover:bg-background transition-colors">
                                    <span className="font-semibold">{industry}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Engagement Models */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Engagement Models</h2>
                        <p className="text-muted-foreground">Flexible cooperation models to match your project needs.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Dedicated Team",
                                desc: "A full cross-functional team working exclusively on your product. Best for long-term development.",
                            },
                            {
                                title: "Time & Material",
                                desc: "Pay for the actual work done. Flexible and scalable. Best for undefined scopes and R&D.",
                            },
                            {
                                title: "Fixed Price",
                                desc: "Defined scope, timeline, and budget. Best for MVPs and small projects with clear requirements.",
                            }
                        ].map((model) => (
                            <div key={model.title} className="p-8 border rounded-none hover:border-primary transition-colors">
                                <h3 className="text-xl font-bold mb-3">{model.title}</h3>
                                <p className="text-muted-foreground">{model.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
