import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { CursorFollowingLabel } from "@/components/ui/CursorFollowingLabel";

export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="relative bg-background overflow-hidden min-h-screen">
            <div className="container relative z-10 px-4 mx-auto pt-32 pb-24">
                {/* Header Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
                        <Link href="/work" className="hover:text-primary transition-colors">Case Studies</Link>
                        <span>/</span>
                        <span>{project.year}</span>
                        <span>/</span>
                        <span className="text-foreground">{project.title}</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl display-bold uppercase tracking-tighter !leading-[0.85] mb-12 max-w-5xl">
                        {project.title}
                    </h1>
                </div>

                {/* Hero Image */}
                <div className="relative aspect-[21/9] w-full bg-muted border border-border overflow-hidden mb-24 group">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-muted-foreground/5 group-hover:bg-muted-foreground/10 transition-colors">
                        <p className="text-sm font-bold uppercase tracking-widest opacity-20">[ {project.title} Overview ]</p>
                    </div>
                </div>

                {/* Metadata Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-border/40 mb-24">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Client</p>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">{project.client.name}</span>
                            <Link href={project.client.url} target="_blank" className="text-muted-foreground hover:text-primary">
                                <ExternalLink size={14} />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Timeline</p>
                        <span className="font-bold">{project.timeline}</span>
                    </div>
                    <div className="col-span-2">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Disciplines</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-[11px] font-bold uppercase tracking-wider bg-muted px-2 py-0.5 border border-border/50">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Narrative Sections (Sidebar Grid) */}
                <div className="relative border-t border-border/40">
                    <div className="grid-symbol -top-2.5 -left-2.5" />
                    <div className="grid-symbol -top-2.5 right-[150px] lg:right-[300px] -mr-2.5 hidden md:block" />
                    <div className="grid-symbol -top-2.5 -right-2.5" />

                    {project.sections?.map((section, index) => (
                        <div key={index} className="relative">
                            {/* Quote Box Logic */}
                            {section.quote && (
                                <div className="p-8 lg:p-24 border-b border-border/40 bg-muted/5 flex justify-center relative">
                                    <div className="max-w-3xl w-full p-10 border border-border/50 bg-background relative overflow-hidden text-center italic">
                                        <div className="absolute -top-10 -right-10 size-20 bg-muted rotate-45 border-b border-border/50 hidden md:block" />
                                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight opacity-90">
                                            "{section.quote}"
                                        </h3>
                                    </div>
                                    <div className="grid-symbol -bottom-2.5 -left-2.5" />
                                    <div className="grid-symbol -bottom-2.5 right-[150px] lg:right-[300px] -mr-2.5 hidden md:block" />
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
                                                <div className="w-full h-full border border-foreground/5 bg-foreground/[0.02] backdrop-blur-sm flex items-center justify-center relative group">
                                                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-10">P-{(index + 1).toString().padStart(2, '0')}</p>
                                                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-foreground/10" />
                                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-foreground/10" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Gallery Logic */}
                                    {section.gallery && (
                                        <div className="border-t border-border/40 p-4 lg:p-1">
                                            <div className="grid grid-cols-2 gap-1">
                                                {section.gallery.map((img, i) => (
                                                    <div key={i} className="aspect-[4/3] bg-muted relative border border-border/20 flex items-center justify-center">
                                                        <span className="text-[9px] font-bold opacity-10 tracking-widest">GALLERY_{i + 1}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Sidebar Column (Reducing the Gap) */}
                                <div className="hidden md:flex flex-col items-center justify-between py-12 relative bg-muted/5 group">
                                    <div className="space-y-12 flex flex-col items-center">
                                        <div className="sidebar-meta">0{index + 1} // PHASE_0{index + 1}</div>
                                        <div className="h-12 w-[1px] bg-border/40" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 -rotate-90">
                                        /{section.title.split(' ')[0]}
                                    </span>
                                    <div className="sidebar-meta opacity-20">{project.year} // ANTIGRAVITY</div>
                                </div>

                                <div className="grid-symbol -bottom-2.5 -left-2.5" />
                                <div className="grid-symbol -bottom-2.5 right-[150px] lg:right-[300px] -mr-2.5 hidden md:block" />
                                <div className="grid-symbol -bottom-2.5 -right-2.5" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Results (Same Sidebar Logic) */}
                {project.resultsHighlight && (
                    <div className="relative mt-24">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_150px] lg:grid-cols-[1fr_300px] border border-border/40 divide-x divide-border/40 relative">
                            {/* Main Content */}
                            <div className="p-8 lg:p-24 flex flex-col items-center text-center">
                                <div className="max-w-2xl mx-auto space-y-8 mb-16">
                                    <h2 className="display-bold text-4xl lg:text-6xl uppercase tracking-tighter !leading-[0.85]">
                                        {project.resultsHighlight.title}
                                    </h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                                        {project.resultsHighlight.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-8 lg:gap-24 w-full">
                                    {project.resultsHighlight.metrics.map((metric, i) => (
                                        <div key={i} className="space-y-3">
                                            <p className="text-4xl lg:text-5xl font-bold tabular-nums">{metric.value}</p>
                                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                                {metric.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Result Sidebar */}
                            <div className="hidden md:flex flex-col items-center justify-center p-8 bg-primary/5">
                                <div className="sidebar-meta">FINAL // IMPACT</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Header for Next Projects */}
                <div className="mt-48 mb-16 relative">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[1px] w-12 lg:w-24 bg-border/60" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                            /CASE STUDIES
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <h2 className="display-bold text-5xl lg:text-7xl uppercase tracking-tighter !leading-[0.85]">
                            Next case study
                        </h2>
                        <Link href="/work" className="inline-flex items-center gap-3 px-6 py-4 border border-border/40 font-bold text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors group">
                            More case studies
                            <ArrowLeft className="size-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Next Projects Grid */}
                <div className="space-y-4">
                    {(() => {
                        const currentIndex = PROJECTS.findIndex(p => p.slug === slug);
                        const nextProjects = [
                            PROJECTS[(currentIndex + 1) % PROJECTS.length],
                            PROJECTS[(currentIndex + 2) % PROJECTS.length]
                        ];

                        return nextProjects.map((nextProject, i) => (
                            <Link key={nextProject.id} href={`/work/${nextProject.slug}`} className="group block outline-none">
                                <CursorFollowingLabel
                                    className="relative h-full"
                                    labelContent={
                                        <div className="relative">
                                            <div className="learn-more-connector">
                                                <div className="learn-more-dot" />
                                            </div>
                                            <div className="learn-more-box">
                                                <span className="learn-more-text">LEARN MORE</span>
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
                                                    <div className="font-bold tracking-tighter text-2xl opacity-80">{nextProject.client.name.split(' ')[0].toLowerCase()}</div>
                                                    <div className="text-[10px] font-bold text-muted-foreground/60">/{nextProject.year}</div>
                                                </div>
                                                <h3 className="text-3xl lg:text-5xl display-bold uppercase tracking-tighter !leading-[0.85]">
                                                    {nextProject.summary.split('.')[0]}.
                                                </h3>
                                            </div>

                                            <div className="grid grid-cols-3 gap-4 pt-12 border-t border-border/20">
                                                {nextProject.results.map((res, j) => (
                                                    <div key={j} className="space-y-2">
                                                        <p className="font-bold text-xl lg:text-2xl">{res.split(' ')[0]}</p>
                                                        <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground leading-tight">
                                                            {res.split(' ').slice(1).join(' ')}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Visual Side */}
                                        <div className="next-project-visual aspect-[16/10] md:aspect-auto">
                                            <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-16">
                                                <div className="w-full h-full border border-foreground/5 bg-foreground/[0.02] backdrop-blur-sm flex items-center justify-center relative">
                                                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-10">[ {nextProject.title} ]</p>
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

                {/* Footer Nav */}
                <div className="mt-32 pt-24 text-center">
                    <Link href="/work" className="inline-flex items-center gap-3 text-lg font-bold group">
                        <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
                        <span>All Cases</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
