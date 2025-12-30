import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { CursorFollowingLabel } from "@/components/ui/CursorFollowingLabel";

export default function ServicesPage() {
    return (
        <div className="relative bg-background overflow-hidden min-h-screen">
            <div className="container relative z-10 px-4 mx-auto pt-32 pb-24">
                {/* Header Section */}
                <div className="mb-24 relative">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/80 mb-6">
                        <span>Agency</span>
                        <span>/</span>
                        <span className="text-foreground">Services</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-24 items-end">
                        <h1 className="display-bold text-6xl md:text-7xl lg:text-9xl flex flex-col items-start gap-2 uppercase tracking-tighter !leading-[0.85]">
                            <span className="flex items-center gap-6">
                                Tech <span className="h-[2px] w-12 md:w-24 bg-primary mt-4" />
                            </span>
                            <span className="text-muted-foreground/20">Excellence.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed pb-2 border-l border-border/40 pl-8 italic">
                            We architect high-performance digital systems built for scale, security, and operational clarity—from initial discovery to production-ready foundations.
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
                    {SERVICES.map((service, index) => (
                        <Link key={service.id} href={`/services/${service.slug}`} className="group block outline-none">
                            <CursorFollowingLabel
                                className="h-full min-h-[500px]"
                                labelContent={
                                    <div className="relative">
                                        <div className="learn-more-connector">
                                            <div className="learn-more-dot" />
                                        </div>
                                        <div className="learn-more-box">
                                            <span className="learn-more-text">EXPLORE SERVICE</span>
                                            <ArrowLeft className="size-3 text-[#a3e635] rotate-135" />
                                        </div>
                                    </div>
                                }
                            >
                                <div className="next-project-card h-full">
                                    {/* Narrative Side */}
                                    <div className="next-project-narrative border-b md:border-b-0 md:border-r border-border/40">
                                        <div className="space-y-8 lg:space-y-12 mb-12">
                                            <div className="flex items-center justify-between">
                                                <div className="font-bold tracking-tighter text-2xl opacity-80 uppercase tracking-widest">{service.title.split(' ')[0]}</div>
                                                <div className="text-[10px] font-bold text-muted-foreground/60">/{service.year || '2024'}</div>
                                            </div>
                                            <h3 className="text-3xl lg:text-4xl display-bold uppercase tracking-tighter !leading-[0.85]">
                                                {service.shortDesc}
                                            </h3>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border/20">
                                            {service.features.slice(0, 4).map((feature, j) => (
                                                <div key={j} className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="size-1 bg-primary rotate-45" />
                                                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                                            {feature}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Visual Side */}
                                    <div className="next-project-visual min-h-[300px] md:min-h-full bg-muted/30">
                                        <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
                                            <div className="w-full h-full border border-foreground/5 bg-foreground/[0.02] backdrop-blur-sm flex items-center justify-center relative">
                                                <service.icon className="size-16 lg:size-24 text-foreground/5" />
                                                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-foreground/10" />
                                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-foreground/10" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CursorFollowingLabel>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
