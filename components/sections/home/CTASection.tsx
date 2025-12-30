"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrambleText } from "@/components/ui/ScrambleText";

export function CTASection() {
    return (
        <section className="py-0 bg-muted/3 overflow-hidden relative border-b border-border/40">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row border border-border/40 divide-y lg:divide-y-0 lg:divide-x divide-border/40 h-full min-h-[600px]">
                    {/* Narrative Panel */}
                    <div className="lg:w-2/3 p-12 lg:p-24 space-y-16 relative flex flex-col justify-center bg-background/40">
                        <div className="space-y-10 max-w-3xl">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] block animate-pulse">GET_IN_TOUCH</span>
                            <h2 className="display-bold text-4xl lg:text-7xl uppercase tracking-tighter !leading-[0.85]">
                                Accelerate Your<br />Technical Vision
                            </h2>
                            <p className="text-[12px] uppercase leading-[2] tracking-[0.3em] font-medium opacity-60 border-l border-primary/20 pl-10">
                                Connect with our expert team to explore innovative technical solutions. Initiate a conversation to unlock strategies, insights, and collaborative opportunities tailored for your goals.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-16 pt-8">
                            <div className="space-y-4">
                                <span className="text-[10px] font-black text-muted-foreground/30 uppercase tracking-[0.4em] block">AVAILABILITY</span>
                                <div className="text-sm font-black uppercase text-primary tracking-[0.4em]">CURRENT_SESSION // {new Date().getFullYear()}</div>
                            </div>
                            <div className="space-y-4">
                                <span className="text-[10px] font-black text-muted-foreground/30 uppercase tracking-[0.4em] block">STATUS</span>
                                <div className="text-sm font-black uppercase text-foreground tracking-[0.4em]">OPEN_FOR_PROJECTS</div>
                            </div>
                        </div>

                        <div className="sidebar-meta absolute -right-2 top-24 scale-90 opacity-10">CONTACT_v01</div>
                        <div className="grid-symbol -bottom-2.5 -left-2.5 lg:hidden" />
                    </div>

                    {/* Action Panel */}
                    <div className="lg:w-1/3 group relative bg-muted/5 flex flex-col items-center justify-center p-12 lg:p-24 overflow-hidden cursor-pointer transition-all duration-1000">
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out -z-10" />

                        <Link href="/contact" className="relative z-10 text-center space-y-10">
                            <div className="size-24 border border-border/40 flex items-center justify-center mx-auto bg-background group-hover:border-primary-foreground group-hover:scale-110 transition-all duration-700 shadow-2xl group-hover:shadow-primary/20">
                                <ArrowUpRight className="size-10 text-primary group-hover:rotate-45 transition-all duration-700" />
                            </div>

                            <div className="space-y-4">
                                <span className="text-lg font-black uppercase tracking-[0.6em] text-foreground group-hover:text-white transition-colors block">
                                    <CTAActionText />
                                </span>
                                <span className="text-[10px] font-bold text-muted-foreground group-hover:text-white/60 uppercase tracking-[0.4em] transition-colors block">INITIATE_CONTACT</span>
                            </div>
                        </Link>

                        {/* Visual Connector - Abstract Grid */}


                        <div className="grid-symbol -top-2.5 -right-2.5" />
                        <div className="grid-symbol -bottom-2.5 -right-2.5" />

                        {/* Subtle Radial Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-[radial-gradient(circle_at_center,var(--primary-foreground)_0%,transparent_70%)] transition-opacity duration-1000 -z-20" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function CTAActionText() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline-block"
        >
            <ScrambleText text="Connect Now" trigger={isHovered} />
        </span>
    );
}
