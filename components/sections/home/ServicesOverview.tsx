import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ServicesOverview() {
    return (
        <section className="py-0 bg-background overflow-hidden border-b border-border/40">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row border-x border-border/40">
                    {/* Section Label / Side Header */}
                    <div className="lg:w-1/4 p-12 lg:p-24 space-y-10 relative bg-muted/2">
                        <div className="space-y-4">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] block animate-pulse">/SOLUTIONS_OVERVIEW</span>
                            <h2 className="display-bold text-3xl lg:text-5xl uppercase tracking-tighter !leading-[0.9]">Core<br />Systems &<br />Services</h2>
                        </div>
                        <p className="text-[11px] text-muted-foreground uppercase tracking-[0.2em] leading-relaxed opacity-60">End-to-end digital engineering protocols designed for high-frontier enterprise performance.</p>

                        <div className="pt-8">
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-4 text-[10px] font-black text-primary uppercase tracking-[0.4em] hover:translate-x-2 transition-all group"
                            >
                                View full directory <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid-symbol -bottom-2.5 -left-2.5 lg:hidden" />
                    </div>

                    {/* Services Grid */}
                    <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/40 relative">
                        {SERVICES.slice(0, 4).map((service, index) => (
                            <div
                                key={service.id}
                                className={cn(
                                    "p-12 lg:p-24 space-y-12 group hover:bg-muted/5 transition-all duration-500 relative",
                                    index > 1 && "md:border-t border-border/40"
                                )}
                            >
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="size-16 border border-border/40 flex items-center justify-center text-primary bg-background group-hover:border-primary transition-all duration-500 shadow-sm group-hover:shadow-primary/5">
                                            <service.icon className="size-7" />
                                        </div>
                                        <span className="text-[10px] font-mono text-muted-foreground/20 group-hover:text-primary transition-colors">ID: 0{index + 1}</span>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="text-[11px] text-muted-foreground uppercase leading-loose tracking-widest opacity-60 group-hover:opacity-100 transition-opacity max-w-sm">
                                            {service.shortDesc}
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="inline-flex items-center gap-4 text-[10px] font-black text-primary uppercase tracking-[0.4em] group-hover:translate-x-4 transition-all"
                                    >
                                        /EXPLORE_CASE <ArrowUpRight className="size-3" />
                                    </Link>
                                </div>
                                <div className="grid-symbol -top-2.5 -right-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                        <div className="grid-symbol -top-2.5 -right-2.5 lg:block hidden" />
                        <div className="grid-symbol -bottom-2.5 -right-2.5" />
                    </div>
                </div>
            </div>
        </section>
    );
}
