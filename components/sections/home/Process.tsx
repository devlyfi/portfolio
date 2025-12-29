"use client";

import { useRef, useLayoutEffect } from "react";
import { PROCESS_STEPS } from "@/lib/data";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Process() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                const section = sectionRef.current;
                const wrapper = wrapperRef.current;
                if (!section || !wrapper) return;

                const scrollWidth = wrapper.scrollWidth;
                const viewport = wrapper.parentElement;
                if (!viewport) return;

                const scrollDistance = scrollWidth - viewport.offsetWidth;

                gsap.to(wrapper, {
                    x: -scrollDistance,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        pin: true,
                        start: "center center",
                        end: () => `+=${scrollDistance}`,
                        scrub: 1,
                        pinSpacing: true,
                        invalidateOnRefresh: true,
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-0 bg-muted/1 overflow-hidden border border-border/40 relative">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row border-x border-border/40 min-h-[60vh]">
                    {/* Header Label */}
                    <div className="w-full lg:w-1/3 p-10 lg:p-16 xl:p-24 space-y-12 relative border-b lg:border-b-0 lg:border-r border-border/40 bg-background/40 z-20">
                        <div className="space-y-6">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] block animate-pulse">/PROCESS</span>
                            <h2 className="display-bold text-3xl lg:text-3xl xl:text-5xl uppercase tracking-tighter !leading-[0.9]"> Our<br />
                                Delivery<br />
                                Process</h2>
                        </div>
                        <p className="text-[11px] uppercase tracking-[0.3em] leading-relaxed opacity-80 max-w-sm">A clear, structured approach to designing, building, and delivering reliable digital products.</p>
                        <div className="grid-symbol -bottom-2.5 -left-2.5" />
                    </div>

                    {/* Process Milestones */}
                    <div className="w-full lg:w-2/3 relative overflow-hidden bg-border/40">
                        <div
                            ref={wrapperRef}
                            className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:h-full relative gap-px"
                        >
                            {PROCESS_STEPS.map((step, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "p-10 lg:p-12 xl:p-16 space-y-16 group bg-background hover:bg-muted/5 transition-all duration-700 relative flex flex-col justify-between",
                                        "md:w-full lg:min-w-[400px] xl:min-w-[450px]"
                                    )}
                                >
                                    <div className="space-y-12">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">PHASE_0{i + 1}</span>
                                            <div className="size-14 border border-border/40 flex items-center justify-center text-muted-foreground/40 group-hover:text-primary group-hover:border-primary transition-all duration-500 bg-background/50">
                                                <step.icon className="size-6" />
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <h3 className="text-[14px] font-black uppercase tracking-[0.3em] text-foreground group-hover:text-primary transition-colors">{step.title}</h3>
                                            <p className="text-[11px] uppercase leading-[2] tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-10 flex items-center gap-6">
                                        <div className="h-px flex-1 bg-border/40 group-hover:bg-primary/20 transition-colors" />
                                        <span className="text-[10px] font-mono text-muted-foreground/10 group-hover:text-primary/40 uppercase tracking-widest transition-colors">ID: {i + 101}</span>
                                    </div>
                                    <div className="grid-symbol -bottom-2.5 -right-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                        <div className="grid-symbol -top-2.5 -right-2.5 hidden lg:block" />
                        <div className="grid-symbol -bottom-2.5 -right-2.5 lg:block hidden" />
                    </div>
                </div>
            </div>
        </section>
    );
}
