import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function generateStaticParams() {
    return SERVICES.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = SERVICES.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-background">
            {/* Service Header */}
            <section className="py-20 lg:py-32 bg-muted/30 border-b border-border">
                <div className="container px-4 mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-none mb-6 text-primary">
                        <service.icon className="size-10" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                        {service.title}
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {service.shortDesc}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Description & Features */}
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Overview</h2>
                            <p className="text-lg text-muted-foreground leading-loose">
                                {service.fullDesc}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6">Key Capabilities</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3 p-4 border rounded-none bg-card/50">
                                        <CheckCircle2 className="size-5 text-primary shrink-0" />
                                        <span className="font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Simulated Process for this service */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">How We Work</h3>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="size-8 rounded-none bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                                {i}
                                            </div>
                                            {i < 3 && <div className="w-0.5 h-full bg-border my-2" />}
                                        </div>
                                        <div className="pb-8">
                                            <h4 className="font-bold text-lg">Step {i}: Phase Name</h4>
                                            <p className="text-muted-foreground text-sm">Description of this phase in the {service.title} workflow.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: CTA & Info */}
                    <div className="space-y-8">
                        <Card className="bg-primary text-primary-foreground border-none">
                            <CardContent className="pt-6 space-y-4">
                                <h3 className="text-2xl font-bold">Start Your {service.title} Project</h3>
                                <p className="opacity-90">
                                    Get a custom quote and technical roadmap for your specific requirements.
                                </p>
                                <Button variant="secondary" className="w-full text-foreground" asChild>
                                    <Link href="/contact">Book Consultation</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <div className="bg-muted p-6 rounded-none space-y-4">
                            <h4 className="font-bold">Related Services</h4>
                            <ul className="space-y-2">
                                {SERVICES.filter(s => s.id !== service.id).slice(0, 3).map(s => (
                                    <li key={s.id}>
                                        <Link href={`/services/${s.slug}`} className="text-primary hover:underline text-sm flex items-center gap-2">
                                            <ArrowRight className="size-3" /> {s.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
