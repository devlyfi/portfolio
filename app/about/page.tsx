import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Users, Award, Globe } from "lucide-react";
import { TeamSection } from "@/components/sections/home/TeamSection";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-muted/20 -z-10" />
                <div className="container px-4 mx-auto text-center">
                    <div className="inline-flex items-center rounded-none border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-none bg-primary mr-2 animate-pulse"></span>
                        About NexAgency
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        We Design the Future <br /> of Digital Business
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Founded in 2015, we are a collective of strategists, engineers, and designers dedicated to building impactful software solutions.
                    </p>
                </div>
            </section>

            {/* Stats / Snapshot */}
            <section className="py-12 border-y border-border">
                <div className="container px-4 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="space-y-2">
                        <h3 className="text-4xl font-bold text-primary">10+</h3>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Experience</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-4xl font-bold text-primary">200+</h3>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Projects Delivered</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-4xl font-bold text-primary">50+</h3>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Experts Globally</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-4xl font-bold text-primary">15</h3>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Countries Served</p>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24">
                <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Our Vision & Mission</h2>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="bg-primary/10 p-3 rounded-none h-fit">
                                    <Globe className="size-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="tex-xl font-semibold mb-2">Global Impact</h3>
                                    <p className="text-muted-foreground">To empower businesses worldwide with technology that drives sustainable growth and efficiency.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-primary/10 p-3 rounded-none h-fit">
                                    <Users className="size-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="tex-xl font-semibold mb-2">Human-Centric</h3>
                                    <p className="text-muted-foreground">We believe technology should serve people, creating intuitive experiences that solve real problems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-muted rounded-none aspect-square flex items-center justify-center relative overflow-hidden">
                        {/* Abstract Graphic */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20" />
                        <div className="relative text-center p-8">
                            <p className="text-2xl font-bold italic opacity-80">"Innovation distinguishes between a leader and a follower."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Core Values</h2>
                        <p className="text-muted-foreground">The principles that guide every line of code we write.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card>
                            <CardContent className="pt-6 text-center space-y-4">
                                <div className="mx-auto bg-primary/10 size-12 rounded-none flex items-center justify-center">
                                    <CheckCircle2 className="size-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-xl">Excellence First</h3>
                                <p className="text-muted-foreground">We never settle for "good enough". Quality is non-negotiable in our engineering.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center space-y-4">
                                <div className="mx-auto bg-primary/10 size-12 rounded-none flex items-center justify-center">
                                    <TrendingUp className="size-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-xl">Continuous Growth</h3>
                                <p className="text-muted-foreground">Technology evolves fast. So do we. We are always learning and adapting.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center space-y-4">
                                <div className="mx-auto bg-primary/10 size-12 rounded-none flex items-center justify-center">
                                    <Award className="size-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-xl">Transparency</h3>
                                <p className="text-muted-foreground">We build trust through open communication and complete visibility into our process.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <TeamSection
                title="Leadership Team"
                subtitle="The visionaries and innovators steering Devlyfi towards global excellence."
            />
        </div>
    );
}
