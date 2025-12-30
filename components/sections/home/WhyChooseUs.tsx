import { ShieldCheck, Zap, Users, TrendingUp } from "lucide-react";

export function WhyChooseUs() {
    const reasons = [
        {
            title: "Security & Reliability",
            desc: "Security-first development practices and reliable system design to protect data and ensure operational continuity.",
            icon: ShieldCheck,
            marker: "SECURITY_PROTOCOL"
        },
        {
            title: "Efficient Delivery",
            desc: "Well-defined processes, automation, and iterative development to deliver features consistently and on time.",
            icon: Zap,
            marker: "DELIVERY_MANAGEMENT"
        },
        {
            title: "Experienced Team",
            desc: "Work directly with experienced engineers and designers who understand real-world product and system challenges.",
            icon: Users,
            marker: "ADVISORY_TEAM"
        },
        {
            title: "Scalable Foundations",
            desc: "Architectures designed to scale gradually and safely as products, users, and workloads grow.",
            icon: TrendingUp,
            marker: "GROWTH_SCALE"
        }
    ];

    return (
        <section className="py-0 bg-background overflow-hidden border-b border-border/40">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row border border-border/40 divide-y lg:divide-y-0 lg:divide-x divide-border/40">
                    {/* Header Label */}
                    <div className="lg:w-1/3 p-12 lg:p-24 space-y-10 relative bg-muted/2">
                        <div className="space-y-4">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] block animate-pulse">WHY_DEVLYFI</span>
                            <h2 className="display-bold text-4xl lg:text-5xl uppercase tracking-tighter !leading-[0.9]"> Why Teams<br />
                                Choose to<br />
                                Work With Us</h2>
                        </div>
                        <p className="text-[11px] uppercase tracking-[0.3em] leading-relaxed opacity-60"> A practical, transparent approach to building reliable software and long-term technical partnerships.</p>
                        <div className="grid-symbol -bottom-2.5 -left-2.5 lg:hidden" />
                    </div>

                    {/* Reasons Grid */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40 border-l border-border/40 relative">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="p-12 lg:p-20 space-y-12 group bg-background hover:bg-muted/5 transition-all duration-700 relative"
                            >
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="size-16 border border-border/40 flex items-center justify-center text-primary bg-background group-hover:border-primary transition-all duration-500 shadow-sm group-hover:shadow-primary/5">
                                            <reason.icon className="size-7" />
                                        </div>
                                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0 translate-x-4 duration-500">{reason.marker}</span>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">{reason.title}</h3>
                                        <p className="text-[11px] uppercase leading-loose tracking-widest opacity-60 group-hover:opacity-100 transition-opacity max-w-sm">
                                            {reason.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className="grid-symbol -bottom-2.5 -right-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                        <div className="grid-symbol -top-2.5 -right-2.5 hidden lg:block" />
                        <div className="grid-symbol -bottom-2.5 -right-2.5" />
                    </div>
                </div>
            </div>
        </section>
    );
}
