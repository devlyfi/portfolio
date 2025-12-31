import Link from "next/link";
import { ArrowRight, ChevronRight, Binary, Cpu, ShieldCheck, Globe, MoveDown } from "lucide-react";
import { ScrambleButton } from "@/components/ui/ScrambleButton";

export function Hero() {
    return (
        <section className="relative bg-background overflow-hidden">

            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row min-h-[90vh]">

                    {/* Main Narrative Panel */}
                    <div className="w-full p-12 lg:p-32 flex flex-col items-center justify-center text-center space-y-16 relative">

                        <div className="space-y-10">
                            <div className="flex flex-col items-center gap-4">
                                <div className="h-px w-12 bg-primary/40" />
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] animate-pulse">
                                    PHASE_03 // SYSTEMS AT SCALE
                                </span>
                                <div className="h-px w-12 bg-primary/40" />
                            </div>

                            <h1 className="display-bold text-5xl md:text-8xl lg:text-[7.5rem] leading-[0.85] uppercase tracking-tighter text-foreground">
                                Architecting <br />
                                <span className="text-primary italic">Reliable Digital</span> <br />
                                Foundations.
                            </h1>
                        </div>

                        <div className="max-w-2xl space-y-10 flex flex-col items-center">
                            <p className="text-[11px] md:text-[11px] text-muted-foreground uppercase leading-[2] tracking-[0.3em] font-medium opacity-90 border-y border-border/10 py-6 px-8">
                                We engineer high-performance digital systems for modern enterprises—built for scale, security, and operational clarity.
                                At Devlyfi, every solution is designed with transparent processes, clean architecture, and a focus on stability under real-world load.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                <ScrambleButton
                                    size="lg"
                                    scrambleText="Start a Conversation"
                                    className="h-16 px-12 font-black uppercase tracking-[0.4em] rounded-none group/btn bg-primary text-primary-foreground hover:bg-primary/90 transition-all border border-primary"
                                    asChild
                                >
                                    <Link href="/contact" className="flex items-center">
                                        <ArrowRight className="ml-4 size-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
                                    </Link>
                                </ScrambleButton>
                                <ScrambleButton
                                    size="lg"
                                    variant="outline"
                                    scrambleText="Our Work"
                                    className="h-16 px-12  font-black uppercase tracking-[0.4em] rounded-none border-border/40 hover:bg-muted/10 transition-all"
                                    asChild
                                >
                                    <Link href="/work" className="flex items-center">
                                        <ChevronRight className="ml-2 size-4 opacity-40" />
                                    </Link>
                                </ScrambleButton>
                            </div>
                        </div>

                        {/* Visual Scroll Anchor */}
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 group  opacity-40 hover:opacity-100 transition-opacity">
                            <div className="size-10 border border-border/40 flex items-center justify-center animate-bounce group-hover:border-primary group-hover:text-primary transition-colors">

                                <MoveDown className="size-4" />

                            </div>
                            <span className="text-[9px] font-bold uppercase tracking-[0.4em]">EXPLORE DEVLYFI</span>
                        </div>

                    </div>

                </div>

                {/* Performance Metrics Bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 border border-border/40 divide-x divide-border/40 relative">
                    <div className="grid-symbol -top-2.5 -left-2.5" />
                    <div className="grid-symbol -top-2.5 -right-2.5" />
                    <div className="grid-symbol -bottom-2.5 -left-2.5" />
                    <div className="grid-symbol -bottom-2.5 -right-2.5" />
                    {[
                        {
                            label: "/PROJECTS_DELIVERED",
                            value: "50+",
                            sub: "Production Systems Shipped"
                        },
                        {
                            label: "/YEARS_EXPERIENCE",
                            value: "5+",
                            sub: "Hands-on Engineering"
                        },
                        {
                            label: "/TEAM_MEMBERS",
                            value: "12+",
                            sub: "Designers & Engineers"
                        },
                        {
                            label: "/LINES_OF_CODE",
                            value: "1M+",
                            sub: "Maintained in Production"
                        }
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="p-10 lg:p-14 space-y-4 group hover:bg-muted/5 transition-all relative overflow-hidden"
                        >
                            <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.3em]">
                                {stat.label}
                            </p>

                            <h3 className="text-3xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                                {stat.value}
                            </h3>

                            <p className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] opacity-70">
                                {stat.sub}
                            </p>

                            {/* Decorative line */}
                            <div className="absolute bottom-0 left-0 h-0.5 bg-primary/20 w-0 group-hover:w-full transition-all duration-700" />
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="size-1.5 bg-primary animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
