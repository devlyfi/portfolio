import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { CursorFollowingLabel } from "@/components/ui/CursorFollowingLabel";

export function generateStaticParams() {
    return SERVICES.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = SERVICES.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="relative bg-background overflow-hidden min-h-screen">
            <div className="container relative z-10 px-4 mx-auto pt-32 pb-24 text-foreground">
                {/* Header Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
                        <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                        <span>/</span>
                        <span>{service.year || '2024'}</span>
                        <span>/</span>
                        <span className="text-foreground">{service.title}</span>
                    </div>

                    <h1 className="text-5xl lg:text-8xl display-bold uppercase tracking-tighter !leading-[0.85] mb-8 max-w-4xl">
                        {service.title}
                    </h1>
                </div>

                {/* Main Hero Visual Area */}
                <div className="w-full aspect-[21/9] bg-muted mb-24 relative overflow-hidden border border-border/40 group">
                    <div className="absolute inset-0 flex items-center justify-center p-12 lg:p-24">
                        <div className="w-full h-full border border-foreground/5 bg-foreground/[0.02] backdrop-blur-sm flex items-center justify-center relative">
                            {(() => {
                                const Icon = service.icon;
                                return <Icon className="size-24 lg:size-48 text-foreground/5" />;
                            })()}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-foreground/10" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-foreground/10" />
                        </div>
                    </div>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 py-12 border-y border-border/40 relative">
                    <div className="grid-symbol -top-2.5 -left-2.5" />
                    <div className="grid-symbol -top-2.5 -right-2.5" />
                    <div className="grid-symbol -bottom-2.5 -left-2.5" />
                    <div className="grid-symbol -bottom-2.5 -right-2.5" />

                    <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/CATEGORY</p>
                        <p className="font-bold uppercase tracking-tighter text-xl">Expertise</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/FOCUS</p>
                        <p className="font-bold uppercase tracking-tighter text-xl">{service.title}</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/YEAR</p>
                        <p className="font-bold uppercase tracking-tighter text-xl">{service.year || '2024'}</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/CAPABILITIES</p>
                        <p className="font-bold uppercase tracking-tighter text-xl">{service.features.length} Specialized</p>
                    </div>
                </div>

                {/* Our Approach / Process Section */}
                {service.process && (
                    <div className="mb-32">
                        <div className="flex items-center gap-4 mb-16">
                            <div className="h-[1px] w-12 lg:w-24 bg-border/60" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                /OUR APPROACH
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-1 gap-x-1 bg-border/40 border border-border/40">
                            {service.process.map((step, idx) => (
                                <div key={step.id} className="bg-background p-8 lg:p-10 group relative h-full flex flex-col">
                                    <div className="space-y-6 flex-grow">
                                        <div className="flex items-center justify-between">
                                            <span className="text-4xl font-bold opacity-10 font-mono">0{idx + 1}</span>
                                            <div className="size-2 bg-primary/40 rotate-45 group-hover:bg-primary group-hover:scale-125 transition-all duration-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">{step.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Nested Tasks */}
                                    <div className="mt-8 pt-8 border-t border-border/40">
                                        <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-4">/CORE_TASKS</p>
                                        <div className="flex flex-wrap gap-2">
                                            {step.tasks.map((task, i) => (
                                                <span key={i} className="text-[10px] font-medium px-2 py-1 bg-muted/50 border border-border/40 rounded-sm">
                                                    {task}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Geometric Decoration */}
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-border/0 group-hover:border-border/40 transition-colors" />
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-border/0 group-hover:border-border/40 transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Narrative Sections Loop */}
                <div className="space-y-0">
                    {service.sections?.map((section, index) => (
                        <div key={index} className="relative group/section">
                            {/* Quote Box (If exists in section) */}
                            {section.quote && (
                                <div className="px-4 py-24 flex justify-center border-b border-border/40 bg-muted/5 relative">
                                    <div className="max-w-4xl text-center relative">
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-primary/20 text-8xl font-serif select-none">“</div>
                                        <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-8 italic text-foreground/90">
                                            {section.quote}
                                        </h2>

                                        {/* Decorative Clipped Corner */}
                                        <div className="absolute -top-4 -right-4 size-8 border-t-2 border-r-2 border-primary/40 pointer-events-none" />
                                        <div className="absolute -bottom-4 -left-4 size-8 border-b-2 border-l-2 border-primary/40 pointer-events-none" />
                                    </div>
                                    <div className="grid-symbol -bottom-2.5 -left-2.5" />
                                    <div className="grid-symbol -bottom-2.5 -right-2.5" />
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-[1fr_150px] lg:grid-cols-[1fr_300px] border-b border-border/40 divide-x divide-border/40 relative">
                                {/* Text & Visual Side */}
                                <div className="flex flex-col">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-border/40">
                                        {/* Text content */}
                                        <div className={`p-8 lg:p-16 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                            <div className="mb-6">
                                                <h2 className="display-bold text-3xl lg:text-5xl uppercase tracking-tighter !leading-[0.85] mb-6">
                                                    {section.title}
                                                </h2>
                                                <div className="space-y-6">
                                                    <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                                                        {section.description}
                                                    </p>
                                                    {section.bullets && (
                                                        <ul className="space-y-3">
                                                            {section.bullets.map((bullet, i) => (
                                                                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                                    <div className="size-1 mt-2 bg-primary shrink-0 rotate-45" />
                                                                    <span>{bullet}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Visual content */}
                                        <div className={`relative min-h-[400px] lg:min-h-full ${section.bgColor || 'bg-muted'} ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                                <div className="w-full h-full border border-foreground/5 bg-foreground/[0.02] backdrop-blur-sm flex items-center justify-center relative">
                                                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-10">S-{(index + 1).toString().padStart(2, '0')}</p>
                                                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-foreground/10" />
                                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-foreground/10" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Optional Gallery Integration */}
                                    {section.gallery && (
                                        <div className="border-t border-border/40 p-4 lg:p-1">
                                            <div className="grid grid-cols-2 gap-1">
                                                {section.gallery.map((img, i) => (
                                                    <div key={i} className="aspect-[4/3] bg-muted relative border border-border/20 flex items-center justify-center opacity-40">
                                                        <span className="text-[9px] font-bold opacity-30 tracking-widest uppercase">GALLERY_{i + 1}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Sidebar Column */}
                                <div className="hidden md:flex flex-col items-center justify-between py-12 relative bg-muted/5">
                                    <div className="space-y-12 flex flex-col items-center">
                                        <div className="sidebar-meta">0{index + 1} // EXPERTISE_V0{index + 1}</div>
                                        <div className="h-12 w-[1px] bg-border/40" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 -rotate-90 whitespace-nowrap">
                                        /{service.title.split(' ')[0]}
                                    </span>
                                    <div className="sidebar-meta opacity-20">{service.year || '2024'} // ANTIGRAVITY</div>
                                </div>

                                <div className="grid-symbol -bottom-2.5 -left-2.5" />
                                <div className="grid-symbol -bottom-2.5 right-[150px] lg:right-[300px] -mr-2.5 hidden md:block" />
                                <div className="grid-symbol -bottom-2.5 -right-2.5" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Header for Next Service */}
                <div className="mt-48 mb-16 relative">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[1px] w-12 lg:w-24 bg-border/60" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                            /ALL SERVICES
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <h2 className="display-bold text-5xl lg:text-7xl uppercase tracking-tighter !leading-[0.85]">
                            Explore <br /> more services
                        </h2>
                        <Link href="/services" className="inline-flex items-center gap-3 px-6 py-4 border border-border/40 font-bold text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors group">
                            View All Services
                            <ArrowLeft className="size-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Next Services List */}
                <div className="space-y-4">
                    {(() => {
                        const currentIndex = SERVICES.findIndex(s => s.slug === slug);
                        const nextServices = [
                            SERVICES[(currentIndex + 1) % SERVICES.length],
                            SERVICES[(currentIndex + 2) % SERVICES.length]
                        ];

                        return nextServices.map((nextService, i) => (
                            <Link key={nextService.id} href={`/services/${nextService.slug}`} className="group block outline-none">
                                <CursorFollowingLabel
                                    className="relative h-full"
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
                                        <div className="next-project-narrative lg:border-r lg:border-border/40">
                                            <div className="space-y-12">
                                                <div className="flex items-center justify-between">
                                                    <div className="font-bold tracking-tighter text-2xl opacity-80 uppercase tracking-widest">{nextService.title.split(' ')[0]}</div>
                                                    <div className="text-[10px] font-bold text-muted-foreground/60">/{nextService.year || '2024'}</div>
                                                </div>
                                                <h3 className="text-3xl lg:text-5xl display-bold uppercase tracking-tighter !leading-[0.85]">
                                                    {nextService.shortDesc}
                                                </h3>
                                            </div>

                                            <div className="flex flex-wrap gap-3 pt-12 border-t border-border/20">
                                                {nextService.features.slice(0, 3).map((f, j) => (
                                                    <span key={j} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-foreground/5 border border-foreground/10">
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Visual Side */}
                                        <div className="next-project-visual aspect-[16/10] md:aspect-auto">
                                            <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-16">
                                                <div className="w-full h-full border border-foreground/5 bg-foreground/[0.02] backdrop-blur-sm flex items-center justify-center relative">
                                                    {(() => {
                                                        const Icon = nextService.icon;
                                                        return <Icon className="size-16 lg:size-24 text-foreground/5" />;
                                                    })()}
                                                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-foreground/10" />
                                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-foreground/10" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CursorFollowingLabel>
                            </Link>
                        ));
                    })()}
                </div>

            </div>
        </div>
    );
}
