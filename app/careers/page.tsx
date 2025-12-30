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
            <div className="relative bg-background overflow-hidden min-h-screen">
                <div className="container relative z-10 px-4 mx-auto pt-32 pb-24 text-foreground">
                    {/* Header Section */}
                    <div className="mb-24">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/80 mb-6">
                            <span>Agency</span>
                            <span>/</span>
                            <span className="text-foreground">Careers</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-24 items-end">
                            <h1 className="display-bold text-6xl md:text-7xl lg:text-9xl flex flex-col items-start gap-2 uppercase tracking-tighter !leading-[0.85]">
                                <span className="flex items-center gap-6">
                                    Build the <span className="h-[2px] w-12 md:w-24 bg-primary mt-4" />
                                </span>
                                <span className="text-muted-foreground/20">Scale.</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed pb-2 border-l border-border/40 pl-8 italic">
                                We are a world-class team of engineers, designers, and strategists on a mission to redefine digital excellence. Join us in architecting systems that matter.
                            </p>
                        </div>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 py-12 border-y border-border/40 relative">
                        <div className="grid-symbol -top-2.5 -left-2.5" />
                        <div className="grid-symbol -top-2.5 -right-2.5" />
                        <div className="grid-symbol -bottom-2.5 -left-2.5" />
                        <div className="grid-symbol -bottom-2.5 -right-2.5" />

                        <div className="space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/LOCATION</p>
                            <p className="font-bold uppercase tracking-tighter text-2xl">Remote First</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/STACK</p>
                            <p className="font-bold uppercase tracking-tighter text-2xl">Next.js / AI</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/CULTURE</p>
                            <p className="font-bold uppercase tracking-tighter text-2xl">Radical Transparency</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/BENEFITS</p>
                            <p className="font-bold uppercase tracking-tighter text-2xl">Full Coverage</p>
                        </div>
                    </div>

                    {/* Environment Section - Narrative Visual Split */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_150px] lg:grid-cols-[1fr_300px] border-b border-border/40 divide-x divide-border/40 relative group/section">
                        <div className="flex flex-col">
                            <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-border/40">
                                {/* Text content */}
                                <div className="p-8 lg:p-16 flex flex-col justify-center">
                                    <div className="mb-6">
                                        <h2 className="display-bold text-3xl lg:text-5xl uppercase tracking-tighter !leading-[0.85] mb-6">
                                            An Environment Built <br /> for Excellence.
                                        </h2>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                                            At Devlyfi, we've replaced rigid hierarchies with radical transparency and autonomous ownership. We believe that top-tier talent thrives when they have the freedom to innovate.
                                        </p>
                                        <div className="space-y-8">
                                            {[
                                                {
                                                    title: "Mission-Driven Projects",
                                                    description: "We partner with clients to solve real-world problems using cutting-edge technology."
                                                },
                                                {
                                                    title: "Modern Tech Only",
                                                    description: "Next.js, TypeScript, AI, and Cloud-Native architectures. We stay on the leading edge."
                                                },
                                                {
                                                    title: "Zero Ego Culture",
                                                    description: "Ideas win, not titles. We foster an environment where every voice is heard."
                                                }
                                            ].map((item, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <div className="mt-1 shrink-0">
                                                        <CheckCircle2 className="size-5 text-primary" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-xl uppercase tracking-tight">{item.title}</h3>
                                                        <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Visual content */}
                                <div className="relative min-h-[400px] lg:min-h-full bg-muted/20">
                                    <div className="absolute inset-0 flex items-center justify-center p-8">
                                        <div className="w-full h-full border border-foreground/5 bg-foreground/[0.02] backdrop-blur-sm flex items-center justify-center relative">
                                            <div className="p-12 text-center max-w-sm">
                                                <div className="size-16 bg-primary rounded-none mx-auto flex items-center justify-center text-primary-foreground mb-8">
                                                    <Zap className="size-8" />
                                                </div>
                                                <p className="text-xl font-bold italic opacity-60 leading-relaxed">
                                                    "The best work happens when you stop managing time and start managing energy."
                                                </p>
                                                <div className="mt-6 h-[1px] w-12 bg-primary/40 mx-auto" />
                                            </div>
                                            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-foreground/10" />
                                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-foreground/10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Column */}
                        <div className="hidden md:flex flex-col items-center justify-between py-12 relative bg-muted/5">
                            <div className="space-y-12 flex flex-col items-center">
                                <div className="sidebar-meta">01 // CULTURE_V01</div>
                                <div className="h-12 w-[1px] bg-border/40" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 -rotate-90 whitespace-nowrap">
                                /PHILOSOPHY
                            </span>
                            <div className="sidebar-meta opacity-20">2024 // ANTIGRAVITY</div>
                        </div>

                        <div className="grid-symbol -bottom-2.5 -left-2.5" />
                        <div className="grid-symbol -bottom-2.5 right-[150px] lg:right-[300px] -mr-2.5 hidden md:block" />
                        <div className="grid-symbol -bottom-2.5 -right-2.5" />
                    </div>

                    {/* Benefits / Perks Grid */}
                    <div className="py-24">
                        <div className="flex items-center gap-4 mb-16">
                            <div className="h-[1px] w-12 lg:w-24 bg-border/60" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                /INVESTED IN YOU
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-1 gap-x-1 bg-border/40 border border-border/40 text-foreground">
                            {[
                                { icon: Globe, title: "Remote Anywhere", desc: "Work from the beach, your home office, or our partner hubs." },
                                { icon: Laptop, title: "High-End Setup", desc: "Latest MacBook Pro, noise-canceling headphones, and office budget." },
                                { icon: BookOpen, title: "Learning Budget", desc: "Unlimited books, $2,000/year for courses, and paid time to learn." },
                                { icon: Coffee, title: "Retreats & Hubs", desc: "Annual retreats in exotic locations and access to coworking spaces." }
                            ].map((perk, i) => (
                                <div key={i} className="bg-background p-10 group relative h-full flex flex-col">
                                    <div className="space-y-6 flex-grow">
                                        <div className="flex items-center justify-between">
                                            <div className="size-10 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                                                <perk.icon className="size-5 text-primary group-hover:text-primary-foreground transition-colors" />
                                            </div>
                                            <div className="size-2 bg-primary/40 rotate-45 group-hover:bg-primary group-hover:scale-125 transition-all duration-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">{perk.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {perk.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Geometric Decoration */}
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-border/0 group-hover:border-border/40 transition-colors" />
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-border/0 group-hover:border-border/40 transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Openings Section */}
                    <div id="openings" className="mt-24 p-12 lg:p-24 border border-border/40 relative bg-muted/5 group">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <Sparkles className="size-6 text-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/JOIN_OUR_COMMUNITY</span>
                                </div>
                                <h2 className="display-bold text-4xl lg:text-6xl uppercase tracking-tighter !leading-[0.85] mb-8">Ready to make <br /> your mark?</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                                    While we don't have active positions today, we are always looking for exceptional engineers and designers for our future projects.
                                </p>
                            </div>
                            <div className="space-y-8 lg:border-l lg:border-border/40 lg:pl-16">
                                <h3 className="text-2xl font-bold uppercase tracking-tighter">Apply Spontaneously</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Drop your details and we'll reach out when the time is right. We value talent over timing.
                                </p>
                                <Button size="lg" className="rounded-none h-14 px-10 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                                    <Link href="/contact">Send Application <ArrowRight className="ml-2 size-5" /></Link>
                                </Button>

                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 pt-8 mt-8 border-t border-border/40">
                                    <div className="size-2 rounded-full bg-red-500/50" />
                                    <span>No active openings at the moment.</span>
                                </div>
                            </div>
                        </div>

                        {/* Architectural Symbols */}
                        <div className="grid-symbol -top-2.5 -left-2.5" />
                        <div className="grid-symbol -top-2.5 -right-2.5" />
                        <div className="grid-symbol -bottom-2.5 -left-2.5" />
                        <div className="grid-symbol -bottom-2.5 -right-2.5" />
                    </div>
                </div>
            </div>
        </div>
    );
}
