"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/data";
import { ArrowLeft, ArrowRight, User, Quote, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    const testimonial = TESTIMONIALS[activeIndex];

    return (
        <section className="py-0 bg-background overflow-hidden border-b border-border/40">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row border-x border-border/40 divide-y lg:divide-y-0 lg:divide-x divide-border/40">
                    {/* Header Label / Sidebar */}
                    <div className="lg:w-1/3 p-12 lg:p-24 space-y-12 relative bg-muted/2">
                        <div className="space-y-6">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] block animate-pulse">/FEEDBACK_METRICS</span>
                            <h2 className="display-bold text-4xl lg:text-5xl uppercase tracking-tighter !leading-[0.9]">Verified<br />Industry<br />Voices</h2>
                        </div>

                        <div className="space-y-6 pt-4">
                            <div className="p-8 bg-background border border-border/40 relative group overflow-hidden shadow-sm group-hover:shadow-primary/5 transition-all">
                                <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-[0.4em] block mb-4">/SATISFACTION_INDEX</span>
                                <div className="text-4xl font-black text-primary tracking-tighter">98.4%</div>
                                <div className="sidebar-meta absolute -right-2 top-4 scale-75 opacity-10 group-hover:opacity-100 transition-opacity">TX_CONFIRMED</div>
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary/20 group-hover:w-full transition-all duration-700" />
                            </div>
                        </div>

                        <div className="grid-symbol -bottom-2.5 -left-2.5 lg:hidden" />
                    </div>

                    {/* Testimonial Active Unit */}
                    <div className="lg:w-2/3 flex flex-col divide-y divide-border/40 relative">
                        <div className="flex-1 p-12 lg:p-24 space-y-16 relative min-h-[600px] flex flex-col justify-center bg-background/50 backdrop-blur-[2px]">
                            <Quote className="size-24 text-primary opacity-[0.03] absolute top-12 left-12 rotate-12" />

                            <div className="space-y-12 relative z-10">
                                <p className="text-2xl md:text-4xl font-bold uppercase tracking-tight !leading-[1.4] text-foreground/90 italic border-l-2 border-primary/20 pl-10 max-w-2xl">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-8 pt-8">
                                    <div className="size-20 border border-border/40 flex items-center justify-center bg-muted/5 group-hover:border-primary transition-all duration-700">
                                        <User className="size-10 text-primary opacity-20" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-black uppercase tracking-tight text-foreground">{testimonial.author}</h4>
                                        <div className="text-[11px] font-black text-primary uppercase tracking-[0.4em] opacity-80">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-meta absolute -right-2 top-24 scale-90 opacity-20 transition-opacity">PROTOCOL_0{activeIndex + 1}</div>
                        </div>

                        {/* Navigation Unit */}
                        <div className="p-10 lg:p-16 flex items-center justify-between bg-muted/1 relative group/nav">
                            <div className="flex items-center gap-3">
                                {TESTIMONIALS.map((_, i) => (
                                    <div
                                        key={i}
                                        className={cn(
                                            "h-1.5 transition-all duration-700",
                                            i === activeIndex ? "w-16 bg-primary" : "w-6 bg-border/40 group-hover/nav:bg-border/60"
                                        )}
                                    />
                                ))}
                            </div>

                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={prev}
                                    className="size-14 rounded-none border-border/40 bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 group shadow-lg shadow-black/5"
                                >
                                    <ArrowLeft className="size-6 transition-transform group-hover:-translate-x-2" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={next}
                                    className="size-14 rounded-none border-border/40 bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 group shadow-lg shadow-black/5"
                                >
                                    <ArrowRight className="size-6 transition-transform group-hover:translate-x-2" />
                                </Button>
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

