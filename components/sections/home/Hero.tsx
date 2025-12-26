import Link from "next/link";
import { ArrowRight, ChevronRight, Binary, Cpu, ShieldCheck, Globe, MoveDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative bg-background overflow-hidden">
            {/* Architectural Grid Underlay */}
            <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute left-0 top-0 h-full w-px bg-border/40" />
                <div className="absolute right-0 top-0 h-full w-px bg-border/40" />
            </div>

            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row border-x border-border/40 min-h-[90vh]">

                    {/* Left Narrative Panel (65%) */}
                    <div className="lg:w-[65%] p-12 lg:p-32 flex flex-col justify-center space-y-16 relative border-b lg:border-b-0 lg:border-r border-border/40 bg-background/50 backdrop-blur-[2px]">

                        <div className="space-y-10">
                            <div className="flex items-center gap-4">
                                <div className="h-px w-12 bg-primary/40" />
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] animate-pulse">
                                    PHASE_03 // CORE_SYSTEMS_ACTIVE
                                </span>
                            </div>

                            <h1 className="display-bold text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.85] uppercase tracking-tighter text-foreground">
                                Architecting <br />
                                <span className="text-primary italic">Digital</span> <br />
                                Superiority.
                            </h1>
                        </div>

                        <div className="max-w-xl space-y-10">
                            <p className="text-[11px] text-muted-foreground uppercase leading-[2] tracking-[0.3em] font-medium opacity-70 border-l border-border/60 pl-8">
                                We build high-frontier infrastructure for enterprise units that demand absolute technical precision, deep resilience, and global-scale performance.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="h-16 px-12 text-[10px] font-black uppercase tracking-[0.4em] rounded-none group/btn bg-primary text-primary-foreground hover:bg-primary/90 transition-all border border-primary" asChild>
                                    <Link href="/contact" className="flex items-center">
                                        Initiate Protocol <ArrowRight className="ml-4 size-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-16 px-12 text-[10px] font-black uppercase tracking-[0.4em] rounded-none border-border/40 hover:bg-muted/10 transition-all" asChild>
                                    <Link href="/work" className="flex items-center">
                                        Records <ChevronRight className="ml-2 size-4 opacity-40" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Visual Scroll Anchor */}
                        <div className="absolute bottom-12 left-12 lg:left-32 flex items-center gap-4 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
                            <div className="size-10 border border-border/40 flex items-center justify-center animate-bounce group-hover:border-primary group-hover:text-primary transition-colors">
                                <MoveDown className="size-4" />
                            </div>
                            <span className="text-[9px] font-bold uppercase tracking-[0.4em]">DEPLOY_EXPLORATION</span>
                        </div>

                        <div className="grid-symbol -top-2.5 -left-2.5" />
                    </div>

                    {/* Right Technical Panel (35%) */}
                    <div className="lg:w-[35%] flex flex-col divide-y divide-border/40 relative bg-muted/5 group">

                        {/* Technical Brief */}
                        <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center space-y-12 relative overflow-hidden">
                            <Binary className="absolute top-1/2 right-0 -translate-y-1/2 size-80 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-1000 rotate-12" />

                            <div className="space-y-10 relative z-10">
                                <div className="space-y-2">
                                    <span className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.4em] block">/OPERATIONAL_PARAMETERS</span>
                                    <div className="h-0.5 w-8 bg-primary/40" />
                                </div>

                                <div className="space-y-8">
                                    {[
                                        { icon: Cpu, label: "Neural Compute", val: "L3_OPTIMIZED" },
                                        { icon: ShieldCheck, label: "Cyber Layer", val: "ZERO_TRUST_v2" },
                                        { icon: Globe, label: "Global Mesh", val: "24_NODES_ACTIVE" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between group/item">
                                            <div className="flex items-center gap-4">
                                                <div className="size-10 border border-border/40 flex items-center justify-center bg-background group-hover/item:border-primary transition-colors">
                                                    <item.icon className="size-4 text-primary/60" />
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.label}</span>
                                            </div>
                                            <span className="text-[9px] font-mono text-primary/40 group-hover/item:text-primary transition-colors">{item.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Industry Validation */}
                        <div className="p-12 lg:p-16 bg-background/40 relative">
                            <div className="space-y-8">
                                <span className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.4em] block opacity-40">/VERIFIED_PARTNERS</span>
                                <div className="grid grid-cols-2 gap-8 opacity-20 grayscale hover:grayscale-0 transition-all duration-700">
                                    {["ACME_SYS", "GLOBAL_v2", "NEO_TECH", "SYNTH_INF"].map((b) => (
                                        <div key={b} className="text-[10px] font-black tracking-[0.3em] flex items-center gap-2">
                                            <div className="size-1 bg-primary/40" />
                                            {b}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="sidebar-meta absolute -right-2 top-10 scale-75 opacity-20 group-hover:opacity-100 transition-opacity">SYS_AUTH_03</div>
                        </div>

                        <div className="grid-symbol -top-2.5 -right-2.5 hidden lg:block" />
                    </div>
                </div>

                {/* Performance Metrics Bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 border-x border-b border-border/40 divide-x divide-border/40 bg-background/50">
                    {[
                        { label: "/TOTAL_DEPLOYMENTS", value: "850+", sub: "Ops_Stability: 100%" },
                        { label: "/SYSTEM_UPTIME", value: "99.99%", sub: "Enterprise Grade" },
                        { label: "/GLOBAL_NODES", value: "24+", sub: "Distributed Mesh" },
                        { label: "/SEC_COMPLIANCE", value: "SOC_2", sub: "Phase_04 // Gold" }
                    ].map((stat, i) => (
                        <div key={i} className="p-10 lg:p-14 space-y-4 group hover:bg-muted/5 transition-all relative overflow-hidden">
                            <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.3em]">{stat.label}</p>
                            <h3 className="text-3xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">{stat.value}</h3>
                            <p className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] opacity-40">{stat.sub}</p>

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
