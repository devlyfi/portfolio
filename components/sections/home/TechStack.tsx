import { cn } from "@/lib/utils";

export function TechStack() {
    const technologies = [
        "React", "Next.js", "TypeScript", "Node.js", "Python", "TensorFlow",
        "AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "GraphQL",
        "PostgreSQL", "Redis", "Figma", "TailwindCSS"
    ];

    return (
        <section className="py-0 border-b border-border/40 overflow-hidden bg-muted/3">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row border-x border-border/40 divide-y lg:divide-y-0 lg:divide-x divide-border/40">
                    {/* Summary Label */}
                    <div className="lg:w-1/4 p-12 lg:p-20 space-y-4 relative">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] block animate-pulse">/SYSTEM_STACK_01</span>
                        <h2 className="display-bold text-2xl lg:text-3xl uppercase tracking-tighter">Enterprise Infrastructure</h2>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-relaxed opacity-60">Highly reliable and scalable technology stack for modern digital solutions.</p>
                        <div className="grid-symbol -bottom-2.5 -left-2.5 lg:hidden" />
                    </div>

                    {/* Infinite Marquee */}
                    <div className="lg:w-3/4 py-20 lg:py-0 flex items-center relative group overflow-hidden bg-background/40">
                        <div className="flex animate-marquee space-x-0 items-center hover:pause">
                            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                                <div key={index} className="flex items-center">
                                    <span className="text-sm md:text-base font-bold tracking-[0.3em] text-muted-foreground/30 hover:text-primary transition-all duration-300 cursor-default px-16 uppercase whitespace-nowrap">
                                        {tech}
                                    </span>
                                    <div className="h-12 w-px bg-border/40" />
                                </div>
                            ))}
                        </div>

                        <div className="sidebar-meta absolute -right-2 top-1/2 -translate-y-1/2 text-[8px] opacity-20 group-hover:opacity-100 transition-opacity">TX_STACK_ACTIVE</div>
                        <div className="grid-symbol -bottom-2.5 -right-2.5" />
                    </div>
                </div>
            </div>
        </section>
    );
}
