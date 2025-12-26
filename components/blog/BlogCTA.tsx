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
        <div className="relative overflow-hidden p-8 md:p-12 lg:p-16 border border-primary/20 bg-primary/5 rounded-none mt-16 group">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 size-64 bg-primary/10 rounded-none blur-3xl group-hover:bg-primary/20 transition-colors duration-700" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                <div className="max-w-2xl text-center md:text-left">
                    <div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-4">
                        <Icon className="size-5" />
                        Next Steps
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{config.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        {config.desc}
                    </p>
                </div>

                <div className="shrink-0">
                    <Button size="lg" className="rounded-none h-14 px-10 text-base shadow-xl shadow-primary/30 group/btn" asChild>
                        <Link href={config.href}>
                            {config.label} <ArrowRight className="ml-2 size-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
