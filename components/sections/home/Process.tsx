import { PROCESS_STEPS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Process() {
    return (
        <section className="py-0 bg-muted/1 overflow-hidden border border-border/40 relative">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row border-x border-border/40">
                    {/* Header Label */}
                    <div className="w-full lg:w-1/3 p-10 lg:p-16 xl:p-24 space-y-12 relative border-b lg:border-b-0 lg:border-r border-border/40 bg-background/40">
                        <div className="space-y-6">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] block animate-pulse">/OPERATIONAL_FLOW</span>
                            <h2 className="display-bold text-3xl lg:text-3xl xl:text-5xl uppercase tracking-tighter !leading-[0.9]">Phase<br />Based<br />Methodology</h2>
                        </div>
                        <p className="text-[11px] text-muted-foreground uppercase tracking-[0.3em] leading-relaxed opacity-80 max-w-sm">A disciplined engineering lifecycle designed for enterprise scale and absolute precision.</p>
                        <div className="grid-symbol -bottom-2.5 -left-2.5" />
                    </div>

                    {/* Process Milestones */}
                    <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative transition-all">
                        {PROCESS_STEPS.map((step, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "p-10 lg:p-12 xl:p-16 space-y-16 group hover:bg-background transition-all duration-700 relative flex flex-col justify-between border-b border-border/40",
                                    "md:border-r md:[&:nth-child(2n)]:border-r-0 xl:[&:nth-child(2n)]:border-r xl:[&:nth-child(3n)]:border-r-0",
                                    i >= PROCESS_STEPS.length - 1 && "border-b-0",
                                    i >= PROCESS_STEPS.length - 2 && "md:border-b-0 xl:border-b",
                                    "xl:[&:nth-child(4)]:border-b-0 xl:[&:nth-child(5)]:border-b-0"
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
                                        <p className="text-[11px] text-muted-foreground uppercase leading-[2] tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">
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
                        <div className="grid-symbol -top-2.5 -right-2.5 hidden lg:block" />
                        <div className="grid-symbol -bottom-2.5 -right-2.5 lg:block hidden" />
                    </div>
                </div>
            </div>
        </section>
    );
}
