import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Users,
    Sparkles,
    Heart,
    Zap,
    Globe,
    Laptop,
    BookOpen,
    Coffee,
    ArrowRight,
    CheckCircle2
} from "lucide-react";

export default function CareersPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-muted/20">
                    <div className="absolute top-0 right-0 -mr-40 -mt-40 size-[600px] bg-primary/5 rounded-none blur-3xl opacity-50 animate-blob" />
                    <div className="absolute bottom-0 left-0 -ml-40 -mb-40 size-[600px] bg-secondary/10 rounded-none blur-3xl opacity-50 animate-blob animation-delay-2000" />
                </div>

                <div className="container px-4 mx-auto text-center relative z-10">
                    <div className="inline-flex items-center rounded-none border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8 backdrop-blur-sm uppercase tracking-widest">
                        <span className="flex h-2 w-2 rounded-none bg-primary mr-2"></span>
                        Work With Us
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight italic">
                        Build the Future <span className="text-primary not-italic">Together.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        We are a world-class team of engineers, designers, and strategists on a mission to redefine digital excellence. Join us in creating software that matters.
                    </p>
                    <div className="mt-12">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-none shadow-lg shadow-primary/20" asChild>
                            <Link href="#openings">View Open Positions</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Our Environment Section */}
            <section className="py-24 border-t border-border/50">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                An Environment Built for <span className="text-primary italic">Excellence.</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                At Devlyfi, we've replaced rigid hierarchies with radical transparency and autonomous ownership. We believe that top-tier talent thrives when they have the freedom to innovate and the support to grow.
                            </p>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Mission-Driven Projects",
                                        description: "We don't just take orders; we partner with clients to solve real-world problems using cutting-edge technology."
                                    },
                                    {
                                        title: "Modern Tech Only",
                                        description: "Next.js, TypeScript, AI, and Cloud-Native architectures. We stay on the leading edge because that's where the most interesting problems are."
                                    },
                                    {
                                        title: "Zero Ego Culture",
                                        description: "Ideas win, not titles. We foster an environment where every voice is heard and every challenge is an opportunity to learn."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 shrink-0">
                                            <CheckCircle2 className="size-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl">{item.title}</h3>
                                            <p className="text-muted-foreground mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-muted/40 border border-border flex items-center justify-center p-12 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
                                <div className="z-10 text-center space-y-6">
                                    <div className="size-20 bg-primary rounded-none mx-auto flex items-center justify-center text-primary-foreground">
                                        <Zap className="size-10" />
                                    </div>
                                    <p className="text-2xl font-bold tracking-tight italic">
                                        "The best work happens when you stop managing time and start managing energy."
                                    </p>
                                    <p className="text-sm uppercase tracking-widest font-bold text-primary">
                                        — Our Philosophy
                                    </p>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -right-6 size-32 bg-secondary/20 -z-10 blur-2xl" />
                            <div className="absolute -top-6 -left-6 size-32 bg-primary/20 -z-10 blur-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Spirit Section */}
            <section className="py-24 bg-muted/30 border-y border-border/50">
                <div className="container px-4 mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">More Than Just a <span className="text-primary italic">Paycheck.</span></h2>
                    <p className="text-lg text-muted-foreground mb-16 leading-relaxed">
                        We are a community of builders. Whether we're tackling a complex architectural challenge or celebrating a product launch, we do it with a spirit of collective ownership and mutual respect.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Users, title: "Collaborative Spirit", desc: "No silos. We pair program, brainstorm, and solve problems together." },
                            { icon: Globe, title: "Global Perspective", desc: "Our team spans continents, bringing diverse viewpoints to every project." },
                            { icon: Heart, title: "Human Centric", desc: "We support the person, not just the worker. Your mental health and family come first." }
                        ].map((item, i) => (
                            <div key={i} className="bg-background p-8 border border-border/50 hover:border-primary/30 transition-all group">
                                <div className="size-12 bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors mx-auto">
                                    <item.icon className="size-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Invested in <span className="text-primary italic">You.</span></h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We don't just hire you for what you know today; we invest in who you will become tomorrow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Globe, title: "Work from Anywhere", desc: "We are a remote-first company. Work from the beach, your home office, or our partner hubs." },
                            { icon: Laptop, title: "High-End Setup", desc: "We provide the latest MacBook Pro, noise-canceling headphones, and a budget for your home office." },
                            { icon: BookOpen, title: "Learning Budget", desc: "Unlimited books, $2,000/year for courses and conferences, and paid time off to learn." },
                            { icon: Coffee, title: "Retreats & Hubs", desc: "Annual all-expenses-paid team retreats in exotic locations and access to premium coworking spaces." }
                        ].map((perk, i) => (
                            <div key={i} className="p-8 border border-border/50 bg-muted/10">
                                <perk.icon className="size-8 text-primary mb-6" />
                                <h3 className="text-xl font-bold mb-3">{perk.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section id="openings" className="py-24 bg-[#121315] text-white overflow-hidden relative">
                {/* Subtle Primary Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-primary/10 blur-[100px] rounded-full -z-0" />

                <div className="container px-4 mx-auto text-center max-w-3xl relative z-10">
                    <Sparkles className="size-12 mx-auto mb-8 text-primary/80" />
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">Ready to make your mark?</h2>

                    <div className="bg-white/[0.03] backdrop-blur-md p-10 border border-white/10 rounded-none relative overflow-hidden">
                        <div className="absolute -top-12 -right-12 size-40 bg-primary/10 rounded-full blur-3xl" />
                        <h3 className="text-2xl font-bold mb-4">Talent Community</h3>
                        <p className="text-white/60 mb-8 text-lg leading-relaxed">
                            While we don't have active positions today, we are always looking for exceptional engineers and designers for our future projects. Drop your details and we'll reach out when the time is right.
                        </p>
                        <Button size="lg" className="rounded-none h-14 px-10 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                            <Link href="/contact">Apply Spontaneously <ArrowRight className="ml-2 size-5" /></Link>
                        </Button>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2 text-white/40 font-medium">
                        <div className="size-2 rounded-full bg-red-500/50" />
                        <span>No active openings at the moment.</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
