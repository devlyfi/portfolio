"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/data";
import { ArrowLeft, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";


export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    const testimonial = TESTIMONIALS[activeIndex];

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="mb-20">
                    <div className="inline-flex items-center rounded-none border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6 backdrop-blur-sm uppercase tracking-[0.2em]">
                        <span className="flex h-2 w-2 rounded-none bg-primary mr-2"></span>
                        Success Stories
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Trusted <span className="text-primary italic">Voices.</span>
                    </h2>
                </div>

                <div className="relative space-y-12">

                    {/* Big Quote Icon - Custom SVG for that blocky look */}
                    <div className="text-primary">
                        <svg width="45" height="36" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 36V16.3636H10.125V0H19.125V16.3636V36H0ZM25.875 36V16.3636H36V0H45V16.3636V36H25.875Z" />
                        </svg>
                    </div>

                    {/* Testimonial Text */}
                    <div className="relative min-h-[160px] flex items-center">
                        <p className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight !leading-[1.1] text-foreground/90">
                            {testimonial.content}
                        </p>
                    </div>


                    {/* Custom Separator Line */}
                    <div className="relative h-px w-full bg-border">
                        <div className="absolute top-0 left-0 h-[3px] -translate-y-[1px] w-32 bg-primary" />
                    </div>

                    {/* Footer: Author & Nav */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="size-14 rounded-full bg-muted overflow-hidden flex items-center justify-center border border-border">
                                <User className="size-8 text-muted-foreground/50" />
                            </div>
                            <div className="text-left">
                                <p className="text-lg font-bold leading-none">{testimonial.author}</p>
                                <p className="text-sm font-medium text-muted-foreground mt-1 tracking-wider uppercase">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center gap-4">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={prev}
                                className="size-10  border-primary/20 hover:bg-primary/5 hover:text-primary transition-all"
                            >
                                <ArrowLeft className="size-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={next}
                                className="size-10 border-primary/20 hover:bg-primary/5 hover:text-primary transition-all"
                            >
                                <ArrowRight className="size-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

