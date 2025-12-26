import { ShieldCheck, Zap, Users, TrendingUp } from "lucide-react";

export function WhyChooseUs() {
    const reasons = [
        {
            title: "Enterprise Security",
            desc: "Rigorous security standards (ISO 27001, SOC 2) to protect your IP and user data.",
            icon: ShieldCheck,
            marker: "/SEC_READY"
        },
        {
            title: "High-Velocity Agile",
            desc: "CI/CD pipelines and rapid iteration cycles ensuring faster market entry.",
            icon: Zap,
            marker: "/VELOCITY_OPT"
        },
        {
            title: "Senior Talent",
            desc: "Work directly with seasoned engineers and designers, not junior trainees.",
            icon: Users,
            marker: "/TALENT_EXP"
        },
        {
            title: "Scalable Architecture",
            desc: "Systems built to handle millions of users using proven cloud-native patterns.",
            icon: TrendingUp,
            marker: "/ARCH_SCALE"
        }
    ];

    return (
        <section className="py-0 bg-background overflow-hidden border-b border-border/40">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row border-x border-border/40 divide-y lg:divide-y-0 lg:divide-x divide-border/40">
                    {/* Header Label */}
                    <div className="lg:w-1/3 p-12 lg:p-24 space-y-10 relative bg-muted/2">
                        <div className="space-y-4">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] block animate-pulse">/RATION_LOG</span>
                            <h2 className="display-bold text-4xl lg:text-5xl uppercase tracking-tighter !leading-[0.9]">Why<br />Leading<br />Brands Choose Us</h2>
                        </div>
                        <p className="text-[11px] text-muted-foreground uppercase tracking-[0.3em] leading-relaxed opacity-60">Technical superiority through architectural discipline and deep business acumen.</p>
                        <div className="grid-symbol -bottom-2.5 -left-2.5 lg:hidden" />
                    </div>

                    {/* Reasons Grid */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/40 relative">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="p-12 lg:p-24 space-y-12 group hover:bg-muted/5 transition-all duration-700 relative"
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
                                        <p className="text-[11px] text-muted-foreground uppercase leading-loose tracking-widest opacity-60 group-hover:opacity-100 transition-opacity max-w-sm">
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
