import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FeaturedWork() {
    return (
        <section className="py-0 bg-muted/2 overflow-hidden border-b border-border/40">
            <div className="container px-4 mx-auto">
                {/* Header Split */}
                <div className="flex flex-col lg:flex-row border border-border/40 divide-y lg:divide-y-0 lg:divide-x divide-border/40 border-b border-border/40 bg-background/40">
                    <div className="lg:w-1/2 p-12 lg:p-24 space-y-10">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] block animate-pulse">/CASE_STUDIES</span>
                        <h2 className="display-bold text-4xl lg:text-6xl uppercase tracking-tighter !leading-[0.9]"> Real-World<br />
                            Software<br />
                            Deliveries</h2>
                    </div>
                    <div className="lg:w-1/2 p-12 lg:p-24 flex items-center relative">
                        <p className="text-[12px]  uppercase leading-[2] tracking-[0.3em] font-medium opacity-60 max-w-md border-l border-primary/20 pl-8">
                            A selection of projects where we partnered with teams to design, build, and scale reliable digital products—focused on outcomes, performance, and long-term value.
                        </p>
                        <div className="grid-symbol -top-2.5 -right-2.5" />
                    </div>
                </div>

                {/* Projects Loop */}
                <div className="divide-y divide-border/40 border border-border/40">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={project.id}
                            className={cn(
                                "flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-border/40 group relative overflow-hidden bg-background/10",
                                index % 2 === 1 && "lg:flex-row-reverse lg:divide-x-reverse"
                            )}
                        >
                            {/* Visual Panel */}
                            <div className="lg:w-1/2 aspect-square lg:aspect-auto relative overflow-hidden bg-muted/20">
                                <Link href={`/work/${project.slug}`} className="block h-full relative group/img">
                                    <div className="absolute inset-0 grayscale brightness-[0.25] group-hover/img:grayscale-0 group-hover/img:brightness-100 transition-all duration-1000">
                                        <div className="w-full h-full bg-primary/2 flex items-center justify-center relative">
                                            <span className="text-[10vw] font-black opacity-[0.05] select-none uppercase tracking-tighter">{project.title.split(' ')[0]}</span>
                                            {/* Neon Learn More Hover Effect */}
                                            <div className="learn-more-box group-hover/img:opacity-100 opacity-0 transition-opacity absolute inset-0 flex items-center justify-center z-30 pointer-events-none scale-90 group-hover:scale-100 duration-500">
                                                <div className="px-10 py-5 border border-primary bg-background/95 text-primary text-[10px] font-black tracking-[0.5em] uppercase flex items-center gap-4 shadow-2xl shadow-primary/20">
                                                    LEARN_MORE <ArrowUpRight className="size-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-symbol -bottom-2.5 -left-2.5" />
                                    <div className="grid-symbol -top-2.5 -right-2.5" />
                                </Link>
                            </div>

                            {/* Narrative Panel */}
                            <div className="lg:w-1/2 p-12 lg:p-24 space-y-16 flex flex-col justify-center relative hover:bg-muted/5 transition-all duration-700">
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">0{index + 1} // PROJECT_FILE</span>
                                        <div className="h-px flex-1 bg-border/40" />
                                    </div>
                                    <h3 className="display-bold text-4xl lg:text-5xl uppercase tracking-tighter group-hover:text-primary transition-all duration-500">{project.title}</h3>
                                    <p className="text-[11px]  uppercase leading-[2] tracking-[0.3em] font-medium opacity-60">
                                        {project.summary}
                                    </p>
                                </div>

                                {/* Technical Metadata Grid */}
                                <div className="grid grid-cols-2 gap-px bg-border/40 border border-border/40 bg-muted/10">
                                    <div className="bg-background/40 p-8 space-y-3">
                                        <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.4em]">/INDUSTRY</p>
                                        <p className="text-xs font-black uppercase tracking-[0.3em]">{project.category.replace(' & ', '_')}</p>
                                    </div>
                                    <div className="bg-background/40 p-8 space-y-3">
                                        <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.4em]">/OUTCOME</p>
                                        <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">{project.results[0].split(' ').pop()}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-[9px] font-black border border-border/40 px-4 py-2 uppercase tracking-[0.3em] text-muted-foreground/80 group-hover:text-primary/60 group-hover:border-primary/40 transition-all">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* <div className="sidebar-meta absolute -right-2 top-32 scale-75 opacity-20 group-hover:opacity-100 transition-opacity">TRANS_RECORD</div>
                                <div className="grid-symbol -bottom-2.5 -right-2.5" /> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="flex items-center justify-center p-20 lg:p-32 border border-border/40 relative bg-background/20 group cursor-pointer overflow-hidden">
                    <Link
                        href="/work"
                        className="group flex flex-col items-center gap-10 relative z-10"
                    >
                        <div className="px-16 py-6 border border-primary bg-background group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl shadow-primary/5 group-hover:shadow-primary/20">
                            <span className="text-xs font-black uppercase tracking-[0.6em]">View Case Studies</span>
                        </div>
                        <p className="text-[10px]  uppercase tracking-[0.5em] opacity-30 group-hover:opacity-100 transition-opacity">
                            Built with Care // Shipped with Confidence
                        </p>
                    </Link>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] transition-opacity duration-1000" />
                    <div className="grid-symbol -bottom-2.5 -right-2.5" />
                </div>
            </div>
        </section>
    );
}
