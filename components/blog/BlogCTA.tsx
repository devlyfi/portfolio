import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MessageSquare, Rocket } from "lucide-react";

interface BlogCTAProps {
    type: "hire" | "consult" | "start";
}

export function BlogCTA({ type }: BlogCTAProps) {
    const config = {
        hire: {
            title: "Ready to scale your team?",
            desc: "Hire Devlyfi's expert developers to accelerate your project with top-tier talent and proven processes.",
            icon: Rocket,
            label: "Hire Our Team",
            href: "/contact?intent=hire"
        },
        consult: {
            title: "Need expert growth advice?",
            desc: "Book a strategic consultation to optimize your Fiverr profile, freelance business, or agency roadmap.",
            icon: MessageSquare,
            label: "Book a Consultation",
            href: "/contact?intent=consult"
        },
        start: {
            title: "Starting a new project?",
            desc: "Let's turn your vision into a high-performance digital reality. We build software that scales.",
            icon: Sparkles,
            label: "Start Your Project",
            href: "/contact?intent=project"
        }
    }[type];

    const Icon = config.icon;

    return (
        <div className="relative overflow-hidden p-8 md:p-12 lg:p-16 border border-border/40 bg-muted/5 rounded-none mt-16 group">
            {/* Background symbol pattern */}
            <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-[0.02] rotate-12 pointer-events-none select-none">
                <Icon className="size-64" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                <div className="max-w-2xl text-center md:text-left">
                    <div className="inline-flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-6">
                        <Icon className="size-4" />
                        /NEXT_PROTOCOL
                    </div>
                    <h2 className="display-bold text-3xl md:text-4xl lg:text-5xl mb-6 uppercase tracking-tight leading-tight">{config.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed italic border-l-2 border-primary/20 pl-6">
                        {config.desc}
                    </p>
                </div>

                <div className="shrink-0">
                    <Button size="lg" className="rounded-none h-16 px-10 text-xs font-bold uppercase tracking-[0.2em] shadow-2xl shadow-primary/10 group/btn" asChild>
                        <Link href={config.href}>
                            {config.label} <ArrowRight className="ml-3 size-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="grid-symbol -top-2.5 -left-2.5" />
            <div className="grid-symbol -bottom-2.5 -right-2.5" />
        </div>
    );
}
