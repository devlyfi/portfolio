"use client";

import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Comparison() {
    const devlyfiAdvantages = [
        {
            title: "Ambition-First Growth",
            desc: "We value your ambition. Instead of just an MVP, we talk transparently about what you need for a sustainable, long-term goal."
        },
        {
            title: "Quality-Balanced Delivery",
            desc: "While others rush to meet deadlines at any cost, we focus on both uncompromising engineering quality and aggressive timelines."
        },
        {
            title: "Transparent Architecture",
            desc: "Full visibility into the systems we build. No black boxes, no hidden technical debt—just clean, documented code."
        },
        {
            title: "Scalability by Design",
            desc: "We build for where you are going, not just where you are. Every line of code is written with future scale in mind."
        }
    ];

    const otherAgencies = [
        {
            title: "MVP-Only Mindset",
            desc: "Treating your vision as a disposable prototype. Often leads to expensive rewrites when you actually start scaling."
        },
        {
            title: "Deadline Rushing",
            desc: "Sacrificing long-term stability and security just to check a box. The 'move fast and break things' approach often stays broken."
        },
        {
            title: "Project-Based Silos",
            desc: "Transactional relationships with zero follow-up and hidden processes that make future maintenance a nightmare."
        },
        {
            title: "Technical Debt Accumulation",
            desc: "Focusing only on the visible features while letting the foundation rot, leading to massive maintenance costs later."
        }
    ];

    return (
        <section className="py-0 bg-background overflow-hidden border-b border-border/40">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row border border-border/40 divide-y lg:divide-y-0 lg:divide-x divide-border/40">
                    {/* Header Panel */}
                    <div className="lg:w-1/3 p-12 lg:p-24 space-y-12 relative bg-muted/2">
                        <div className="space-y-6">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] block animate-pulse">/COMPARISON</span>
                            <h2 className="display-bold text-4xl lg:text-5xl uppercase tracking-tighter !leading-[0.9]">
                                A Higher <br />
                                Standard of <br />
                                Engineering
                            </h2>
                        </div>
                        <p className="text-[11px] uppercase tracking-[0.3em] leading-relaxed opacity-60 max-w-sm">
                            We don't just build software; we architect sustainable digital products that survive and thrive in real-world environments.
                        </p>
                        <div className="grid-symbol -bottom-2.5 -left-2.5" />
                    </div>

                    {/* Comparison Grid */}
                    <div className="lg:w-2/3 flex flex-col md:flex-row bg-border/40 relative">
                        {/* Devlyfi Column */}
                        <div className="flex-1 p-10 lg:p-16 space-y-12 bg-background relative group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="size-10 bg-primary/10 flex items-center justify-center border border-primary/20">
                                    <Check className="size-5 text-primary" />
                                </div>
                                <span className="text-sm font-black uppercase tracking-[0.4em] text-primary">DEVLYFI_STANDARD</span>
                            </div>

                            <div className="space-y-10">
                                {devlyfiAdvantages.map((item, i) => (
                                    <div key={i} className="space-y-3 group/item">
                                        <div className="flex items-center gap-3">
                                            <div className="size-1.5 bg-primary rotate-45" />
                                            <h3 className="text-lg font-bold uppercase tracking-tighter text-foreground group-hover/item:text-primary transition-colors">{item.title}</h3>
                                        </div>
                                        <p className="text-[10px] uppercase leading-relaxed tracking-widest opacity-60 pl-4 border-l border-primary/10 group-hover/item:opacity-100 transition-opacity">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative architectural line */}
                            <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-primary/5 to-transparent hidden md:block" />
                        </div>

                        {/* Others Column */}
                        <div className="flex-1 p-10 lg:p-16 space-y-12 bg-muted/5 relative">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="size-10 bg-muted/20 flex items-center justify-center border border-border/40">
                                    <X className="size-5 text-muted-foreground/40" />
                                </div>
                                <span className="text-sm font-black uppercase tracking-[0.4em] text-muted-foreground/40">OTHER_AGENCIES</span>
                            </div>

                            <div className="space-y-10">
                                {otherAgencies.map((item, i) => (
                                    <div key={i} className="space-y-3 opacity-40 hover:opacity-100 transition-opacity cursor-default">
                                        <div className="flex items-center gap-3">
                                            <div className="size-1.5 bg-border/60 rotate-45" />
                                            <h3 className="text-lg font-bold uppercase tracking-tighter text-muted-foreground">{item.title}</h3>
                                        </div>
                                        <p className="text-[10px] uppercase leading-relaxed tracking-widest pl-4 border-l border-border/20">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid-symbol -top-2.5 -right-2.5 hidden lg:block" />
                        <div className="grid-symbol -bottom-2.5 -right-2.5" />
                    </div>
                </div>
            </div>
        </section>
    );
}
