import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Users, Award, Globe } from "lucide-react";
import { TeamSection } from "@/components/sections/home/TeamSection";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="relative bg-background overflow-hidden min-h-screen">
            <div className="container relative z-10 px-4 mx-auto pt-32 pb-24 text-foreground">
                {/* Header Section */}
                <div className="mb-24">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/80 mb-6">
                        <span>Agency</span>
                        <span>/</span>
                        <span className="text-foreground">About</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-24 items-end">
                        <h1 className="display-bold text-6xl md:text-7xl lg:text-9xl flex flex-col items-start gap-2 uppercase tracking-tighter !leading-[0.85]">
                            <span className="flex items-center gap-6">
                                We Design <span className="h-[2px] w-12 md:w-24 bg-primary mt-4" />
                            </span>
                            <span className="text-muted-foreground/20">The Future.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed pb-2 border-l border-border/40 pl-8 italic">
                            A collective of strategists, engineers, and designers dedicated to building impactful software solutions that drive global transformation.
                        </p>
                    </div>
                </div>

                {/* Metadata / Impact Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 py-12 border-y border-border/40 relative">
                    <div className="grid-symbol -top-2.5 -left-2.5" />
                    <div className="grid-symbol -top-2.5 -right-2.5" />
                    <div className="grid-symbol -bottom-2.5 -left-2.5" />
                    <div className="grid-symbol -bottom-2.5 -right-2.5" />

                    <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/EXPERIENCE</p>
                        <p className="font-bold uppercase tracking-tighter text-4xl text-primary">10Y+</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/DELIVERED</p>
                        <p className="font-bold uppercase tracking-tighter text-4xl text-primary">200+</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/EXPERTS</p>
                        <p className="font-bold uppercase tracking-tighter text-4xl text-primary">50+</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/REACH</p>
                        <p className="font-bold uppercase tracking-tighter text-4xl text-primary">15+</p>
                    </div>
                </div>

                {/* Vision & Mission - Narrative Visual Split */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_150px] lg:grid-cols-[1fr_300px] border-b border-border/40 divide-x divide-border/40 relative group/section">
                    <div className="flex flex-col">
                        <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-border/40">
                            {/* Text content */}
                            <div className="p-8 lg:p-16 flex flex-col justify-center">
                                <div className="mb-6">
                                    <h2 className="display-bold text-3xl lg:text-5xl uppercase tracking-tighter !leading-[0.85] mb-6">
                                        Vision & Mission
                                    </h2>
                                    <div className="space-y-12">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <Globe className="size-5 text-primary" />
                                                <h3 className="text-xl font-bold uppercase tracking-tight">Global Impact</h3>
                                            </div>
                                            <p className="text-lg text-muted-foreground leading-relaxed">
                                                To empower businesses worldwide with technology that drives sustainable growth and efficiency. We build for the global stage, ensuring every solution is scalable and resilient.
                                            </p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <Users className="size-5 text-primary" />
                                                <h3 className="text-xl font-bold uppercase tracking-tight">Human-Centric</h3>
                                            </div>
                                            <p className="text-lg text-muted-foreground leading-relaxed">
                                                We believe technology should serve people, creating intuitive experiences that solve real problems. Our design philosophy stands at the intersection of psychology and aesthetics.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Visual content */}
                            <div className="relative min-h-[400px] lg:min-h-full bg-muted/20">
                                <div className="absolute inset-0 flex items-center justify-center p-8">
                                    <div className="w-full h-full border border-foreground/5 bg-foreground/[0.02] backdrop-blur-sm flex items-center justify-center relative">
                                        <div className="p-12 text-center max-w-sm">
                                            <p className="text-xl font-bold italic opacity-60 leading-relaxed">
                                                "Innovation distinguishes between a leader and a follower."
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
                            <div className="sidebar-meta">01 // VISION_V01</div>
                            <div className="h-12 w-[1px] bg-border/40" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 -rotate-90 whitespace-nowrap">
                            /PURPOSE
                        </span>
                        <div className="sidebar-meta opacity-20">2024 // ANTIGRAVITY</div>
                    </div>

                    <div className="grid-symbol -bottom-2.5 -left-2.5" />
                    <div className="grid-symbol -bottom-2.5 right-[150px] lg:right-[300px] -mr-2.5 hidden md:block" />
                    <div className="grid-symbol -bottom-2.5 -right-2.5" />
                </div>

                {/* Core Values Section */}
                <div className="py-24">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-[1px] w-12 lg:w-24 bg-border/60" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                            /CORE VALUES
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-1 gap-x-1 bg-border/40 border border-border/40">
                        {[
                            {
                                icon: CheckCircle2,
                                title: "Excellence First",
                                desc: "We never settle for 'good enough'. Quality is non-negotiable in our engineering."
                            },
                            {
                                icon: TrendingUp,
                                title: "Continuous Growth",
                                desc: "Technology evolves fast. So do we. We are always learning and adapting."
                            },
                            {
                                icon: Award,
                                title: "Transparency",
                                desc: "We build trust through open communication and complete visibility into our process."
                            }
                        ].map((value, i) => (
                            <div key={i} className="bg-background p-10 group relative h-full flex flex-col">
                                <div className="space-y-6 flex-grow">
                                    <div className="flex items-center justify-between">
                                        <div className="size-10 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                                            <value.icon className="size-5 text-primary group-hover:text-primary-foreground transition-colors" />
                                        </div>
                                        <div className="size-2 bg-primary/40 rotate-45 group-hover:bg-primary group-hover:scale-125 transition-all duration-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">{value.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {value.desc}
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

                {/* Team Section Integration */}
                <div className="pt-24 border-t border-border/40">
                    <TeamSection
                        title="Leadership Team"
                        subtitle="The visionaries steering Nakula towards global excellence."
                    />
                </div>
            </div>
        </div>
    );
}
