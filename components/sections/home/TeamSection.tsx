"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { TEAM } from "@/lib/data";
import { Linkedin, Twitter, Github, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamSectionProps {
    title?: string;
    subtitle?: string;
    isDark?: boolean;
    isCarousel?: boolean;
}

export function TeamSection({
    title = "Meet Our Experts",
    subtitle = "The architects, engineers, and designers behind world-class digital products.",
    isDark = false,
    isCarousel = false
}: TeamSectionProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 640px)": { slidesToScroll: 1 },
            "(min-width: 1024px)": { slidesToScroll: 1 }
        }
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const TeamMember = ({ member }: { member: typeof TEAM[0] }) => (
        <div className="group">
            <div className="aspect-[4/5] bg-muted relative overflow-hidden mb-6 border border-border/50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-6">
                    <div className="flex gap-4">
                        <a href={member.socials.linkedin} className="text-white hover:text-primary transition-colors">
                            <Linkedin className="size-5" />
                        </a>
                        <a href={member.socials.twitter} className="text-white hover:text-primary transition-colors">
                            <Twitter className="size-5" />
                        </a>
                        <a href={member.socials.github} className="text-white hover:text-primary transition-colors">
                            <Github className="size-5" />
                        </a>
                    </div>
                </div>
                <div className="absolute inset-0 bg-muted flex items-center justify-center text-primary/10 font-bold text-4xl select-none rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-0">
                    {member.name.split(' ')[0]}
                </div>
            </div>
            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-foreground'}`}>{member.name}</h3>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mt-1">{member.role}</p>
            <p className={`text-sm mt-4 leading-relaxed line-clamp-2 ${isDark ? 'text-white/50' : 'text-muted-foreground'}`}>
                {member.bio}
            </p>
        </div>
    );

    return (
        <section className={`py-24 ${isDark ? 'bg-[#121315] text-white' : 'bg-background'}`}>
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center rounded-none border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6 backdrop-blur-sm uppercase tracking-[0.2em]">
                            <span className="flex h-2 w-2 rounded-none bg-primary mr-2"></span>
                            Our Team
                        </div>
                        <h2 className={`text-3xl md:text-5xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-foreground'}`}>
                            {title.split(' ').map((word, i) => (
                                word === 'Experts' || i === title.split(' ').length - 1 ? (
                                    <span key={i} className="text-primary italic"> {word}</span>
                                ) : ` ${word}`
                            ))}
                        </h2>
                        <p className={`text-lg mt-6 ${isDark ? 'text-white/60' : 'text-muted-foreground'}`}>
                            {subtitle}
                        </p>
                    </div>

                    {isCarousel && (
                        <div className="flex gap-4">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={scrollPrev}
                                className="size-12 rounded-none border-primary/20 hover:bg-primary/5 hover:text-primary"
                            >
                                <ArrowLeft className="size-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={scrollNext}
                                className="size-12 rounded-none border-primary/20 hover:bg-primary/5 hover:text-primary"
                            >
                                <ArrowRight className="size-5" />
                            </Button>
                        </div>
                    )}
                </div>

                {isCarousel ? (
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-8 lg:gap-12">
                            {TEAM.map((member) => (
                                <div key={member.id} className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(25%-24px)] min-w-0">
                                    <TeamMember member={member} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {TEAM.map((member) => (
                            <TeamMember key={member.id} member={member} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
