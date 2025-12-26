"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { TEAM } from "@/lib/data";
import { Linkedin, Twitter, Github, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TeamSectionProps {
    title?: string;
    subtitle?: string;
    isDark?: boolean;
    isCarousel?: boolean;
}

export function TeamSection({
    title = "Systems Architects",
    subtitle = "The specialized engineering unit behind high-performance digital infrastructure.",
    isDark = false,
    isCarousel = false
}: TeamSectionProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 640px)": { slidesToScroll: 2 },
            "(min-width: 1024px)": { slidesToScroll: 4 }
        }
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const TeamMember = ({ member, index }: { member: typeof TEAM[0], index: number }) => (
        <div className="group h-full relative border-r border-border/40">
            <div className="aspect-[3/4] bg-muted/10 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <div className="w-full h-full flex items-center justify-center relative">
                    <span className="text-[12vw] font-black opacity-[0.03] select-none uppercase pointer-events-none">{member.name.split(' ')[0]}</span>

                    {/* Operational ID */}
                    <div className="absolute top-6 left-6 z-20">
                        <span className="text-[10px] font-mono text-muted-foreground/40 group-hover:text-primary transition-colors tracking-tighter">ID: OPS_{index + 101}</span>
                    </div>

                    {/* Social Overlay */}
                    <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <a href={member.socials.linkedin} className="text-foreground hover:text-primary transition-colors">
                            <Linkedin className="size-4" />
                        </a>
                        <a href={member.socials.github} className="text-foreground hover:text-primary transition-colors">
                            <Github className="size-4" />
                        </a>
                    </div>
                </div>
                <div className="grid-symbol -top-2.5 -right-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-8 lg:p-10 space-y-6 flex flex-col justify-between bg-background group-hover:bg-muted/5 transition-colors h-full lg:h-auto">
                <div className="space-y-4">
                    <h3 className="text-xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors shrink-0">{member.name}</h3>
                    <div className="inline-block border border-primary/20 bg-primary/5 px-3 py-1 text-[9px] font-black text-primary uppercase tracking-[0.3em]">
                        {member.role}
                    </div>
                    <p className="text-[10px] text-muted-foreground uppercase leading-relaxed tracking-widest opacity-60 group-hover:opacity-100 transition-opacity line-clamp-2">
                        {member.bio}
                    </p>
                </div>

                <div className="pt-4 flex items-center justify-between">
                    <div className="sidebar-meta static translate-y-0 text-[8px] opacity-40">ACTIVE_RESERVE</div>
                    <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-all text-primary" />
                </div>
            </div>
            <div className="grid-symbol -bottom-2.5 -right-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
    );

    return (
        <section className={cn(
            "py-0 bg-muted/2 overflow-hidden border-b border-border/40",
            isDark && "bg-black"
        )}>
            <div className="container px-4 mx-auto">
                {/* Header Split */}
                <div className="flex flex-col lg:flex-row border-x border-border/40 divide-y lg:divide-y-0 lg:divide-x divide-border/40 border-b border-border/40 bg-background/40">
                    <div className="lg:w-2/3 p-12 lg:p-24 space-y-10">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] block animate-pulse">/PERSONNEL_LOGS</span>
                        <h2 className="display-bold text-4xl lg:text-6xl uppercase tracking-tighter !leading-[0.9]">{title}</h2>
                    </div>
                    <div className="lg:w-1/3 p-12 lg:p-24 flex flex-col justify-center space-y-12 bg-muted/2 relative">
                        <p className="text-[11px] text-muted-foreground uppercase leading-[2] tracking-[0.3em] font-medium opacity-60 border-l border-primary/20 pl-8">
                            {subtitle}
                        </p>

                        {isCarousel && (
                            <div className="flex gap-2 shrink-0 pt-4">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={scrollPrev}
                                    className="size-12 rounded-none border-border/40 bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 shadow-sm"
                                >
                                    <ArrowLeft className="size-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={scrollNext}
                                    className="size-12 rounded-none border-border/40 bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 shadow-sm"
                                >
                                    <ArrowRight className="size-4" />
                                </Button>
                            </div>
                        )}
                        <div className="grid-symbol -top-2.5 -right-2.5" />
                    </div>
                </div>

                <div className="border-x border-border/40 relative">
                    {isCarousel ? (
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                {TEAM.map((member, i) => (
                                    <div key={member.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0">
                                        <div className="group h-full relative border-r border-border/40">
                                            <div className="aspect-[3/4] bg-muted/10 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                                                <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                                <div className="w-full h-full flex items-center justify-center relative bg-background/5">
                                                    <span className="text-[12vw] font-black opacity-[0.05] select-none uppercase pointer-events-none tracking-tighter">{member.name.split(' ')[0]}</span>

                                                    {/* Operational ID */}
                                                    <div className="absolute top-8 left-8 z-20">
                                                        <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-all">ID: OPS_{i + 101}</span>
                                                    </div>

                                                    {/* Social Overlay */}
                                                    <div className="absolute bottom-8 left-8 z-20 flex flex-col gap-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                                        <a href={member.socials.linkedin} className="text-foreground border border-border/40 size-10 flex items-center justify-center bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                                                            <Linkedin className="size-4" />
                                                        </a>
                                                        <a href={member.socials.github} className="text-foreground border border-border/40 size-10 flex items-center justify-center bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                                                            <Github className="size-4" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="grid-symbol -top-2.5 -right-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>

                                            <div className="p-10 lg:p-14 space-y-8 flex flex-col justify-between bg-background group-hover:bg-muted/5 transition-all duration-700 h-full lg:h-auto">
                                                <div className="space-y-6">
                                                    <div className="space-y-3">
                                                        <h3 className="text-2xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors shrink-0">{member.name}</h3>
                                                        <div className="inline-block border border-primary/20 bg-primary/2 px-4 py-1.5 text-[10px] font-black text-primary uppercase tracking-[0.4em]">
                                                            {member.role}
                                                        </div>
                                                    </div>
                                                    <p className="text-[11px] text-muted-foreground uppercase leading-[2] tracking-[0.2em] font-medium opacity-50 group-hover:opacity-100 transition-opacity line-clamp-3">
                                                        {member.bio}
                                                    </p>
                                                </div>

                                                <div className="pt-8 flex items-center justify-between border-t border-border/40 mt-4 group-hover:border-primary/20 transition-colors">
                                                    <div className="sidebar-meta static translate-y-0 text-[9px] font-black opacity-20 tracking-[0.5em] group-hover:opacity-100 transition-opacity">ACTIVE_RESERVE</div>
                                                    <div className="size-8 border border-border/40 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 bg-background group-hover:border-primary">
                                                        <ArrowUpRight className="size-4 text-primary" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid-symbol -bottom-2.5 -right-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-border/40">
                            {/* Static grid handled by TeamMember component logic if needed, but here it's mapping inline for simplicity in carousel mode */}
                            {/* Re-implementing static grid if carousel is false */}
                            {TEAM.map((member, i) => (
                                <div key={member.id} className="group h-full relative border-r border-border/40">
                                    <div className="aspect-[3/4] bg-muted/10 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                                        <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                        <div className="w-full h-full flex items-center justify-center relative bg-background/5">
                                            <span className="text-[10vw] font-black opacity-[0.05] select-none uppercase pointer-events-none tracking-tighter">{member.name.split(' ')[0]}</span>

                                            {/* Operational ID */}
                                            <div className="absolute top-8 left-8 z-20">
                                                <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-all">ID: OPS_{i + 101}</span>
                                            </div>

                                            {/* Social Overlay */}
                                            <div className="absolute bottom-8 left-8 z-20 flex flex-col gap-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                                <a href={member.socials.linkedin} className="text-foreground border border-border/40 size-10 flex items-center justify-center bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                                                    <Linkedin className="size-4" />
                                                </a>
                                                <a href={member.socials.github} className="text-foreground border border-border/40 size-10 flex items-center justify-center bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                                                    <Github className="size-4" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="grid-symbol -top-2.5 -right-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    <div className="p-10 lg:p-14 space-y-8 flex flex-col justify-between bg-background group-hover:bg-muted/5 transition-all duration-700 h-full lg:h-auto">
                                        <div className="space-y-6">
                                            <div className="space-y-3">
                                                <h3 className="text-2xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors shrink-0">{member.name}</h3>
                                                <div className="inline-block border border-primary/20 bg-primary/2 px-4 py-1.5 text-[10px] font-black text-primary uppercase tracking-[0.4em]">
                                                    {member.role}
                                                </div>
                                            </div>
                                            <p className="text-[11px] text-muted-foreground uppercase leading-[2] tracking-[0.2em] font-medium opacity-50 group-hover:opacity-100 transition-opacity line-clamp-3">
                                                {member.bio}
                                            </p>
                                        </div>

                                        <div className="pt-8 flex items-center justify-between border-t border-border/40 mt-4 group-hover:border-primary/20 transition-colors">
                                            <div className="sidebar-meta static translate-y-0 text-[9px] font-black opacity-20 tracking-[0.5em] group-hover:opacity-100 transition-opacity">ACTIVE_RESERVE</div>
                                            <div className="size-8 border border-border/40 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 bg-background group-hover:border-primary">
                                                <ArrowUpRight className="size-4 text-primary" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-symbol -bottom-2.5 -right-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="grid-symbol -bottom-2.5 -right-2.5" />
                </div>
            </div>
        </section>
    );
}
