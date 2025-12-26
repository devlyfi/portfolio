import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServicesOverview() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Core Services</h2>
                        <p className="text-muted-foreground text-lg">
                            End-to-end digital solutions tailored to your unique business challenges.
                        </p>
                    </div>
                    <Button variant="ghost" className="hidden md:flex group" asChild>
                        <Link href="/services">
                            View All Services <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service) => (
                        <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm">
                            <CardHeader>
                                <div className="size-12 rounded-none bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="size-6" />
                                </div>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.shortDesc}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="text-primary font-medium text-sm flex items-center hover:underline icon-link"
                                >
                                    Learn more <ArrowRight className="ml-1 size-3" />
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 md:hidden">
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/services">View All Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
