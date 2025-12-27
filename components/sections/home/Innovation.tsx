import { Cpu, Leaf, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export function Innovation() {
    return (
        <section className="py-0 bg-background overflow-hidden border border-border/40 relative">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row border-x border-border/40">
                    {/* Header Label */}
                    <div className="w-full lg:w-1/3 p-10 lg:p-16 xl:p-24 space-y-12 relative bg-muted/5 border-b lg:border-b-0 lg:border-r border-border/40">
                        <div className="space-y-6">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] block animate-pulse">/RD_LAB_STUDIES</span>
                            <h2 className="display-bold text-3xl lg:text-3xl xl:text-5xl uppercase tracking-tighter !leading-[0.9]">Beyond<br />Systems<br />Architecture</h2>
                        </div>
                        <p className="text-[11px] text-muted-foreground uppercase tracking-[0.3em] leading-relaxed opacity-80 max-w-sm">Investing in high-frontier R&D, community ecosystems, and ecological resilience.</p>
                        <div className="grid-symbol -bottom-2.5 -left-2.5" />
                    </div>

                    {/* Innovation Grid */}
                    <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 relative">
                        {[
                            {
                                title: "NexLabs R&D",
                                desc: "Our internal incubator exploring Generative AI, Web3 protocols, and edge computing.",
                                icon: Cpu,
                                marker: "/LAB_01"
                            },
                            {
                                title: "Open Source",
                                desc: "Maintaining 15+ libraries for the global ecosystem. Collective engineering mastery.",
                                icon: Github,
                                marker: "/OSS_CONTRIB"
                            },
                            {
                                title: "Green Tech",
                                desc: "Carbon-neutral hosting and sustainable digital engineering for a low-impact future.",
                                icon: Leaf,
                                marker: "/ECO_STRAT"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "p-10 lg:p-16 xl:p-20 space-y-12 group hover:bg-muted/5 transition-all duration-700 relative flex flex-col justify-between border-b border-border/40",
                                    (index === 0 || index === 1) && "xl:border-r last:border-r-0",
                                    index === 2 && "border-b-0",
                                    "xl:border-b-0"
                                )}
                            >
                                <div className="space-y-10">
                                    <div className="flex items-center justify-between">
                                        <div className="size-14 border border-border/40 flex items-center justify-center text-muted-foreground/40 group-hover:text-primary group-hover:border-primary transition-all duration-500 bg-background/50">
                                            <item.icon className="size-6" />
                                        </div>
                                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0 translate-x-4 duration-500">{item.marker}</span>
                                    </div>
                                    <div className="space-y-6">
                                        <h3 className="text-[13px] font-black uppercase tracking-[0.3em] text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-[11px] text-muted-foreground uppercase leading-[2] tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className="grid-symbol -bottom-2.5 -right-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                        <div className="grid-symbol -top-2.5 -right-2.5 hidden lg:block" />
                        <div className="grid-symbol -bottom-2.5 -right-2.5 lg:block hidden" />
                    </div>
                </div>
            </div>
        </section>
    );
}
