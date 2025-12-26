import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { ArrowLeft } from "lucide-react";

export default function WorkPage() {
    return (
        <div className="relative bg-background overflow-hidden min-h-screen">
            <div className="container relative z-10 px-4 mx-auto pt-32 pb-24">
                {/* Header Section */}
                <div className="mb-24 relative">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[1px] w-12 lg:w-24 bg-border/60" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                            /CASE STUDIES
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                        <h1 className="text-6xl md:text-8xl font-bold display-bold">
                            Latest works
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl lg:mb-2">
                            Real stories behind our work, showing how we solve problems, create impact, and help ideas find their place in the world.
                        </p>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
                    {PROJECTS.map((project, index) => (
                        <Link key={project.id} href={`/work/${project.slug}`} className="group block outline-none">
                            <div className="next-project-card h-full min-h-[500px]">
                                {/* Hover "LEARN MORE" Label */}
                                <div className="learn-more-label">
                                    <div className="relative">
                                        <div className="learn-more-connector">
                                            <div className="learn-more-dot" />
                                        </div>
                                        <div className="learn-more-box">
                                            <span className="learn-more-text">LEARN MORE</span>
                                            <ArrowLeft className="size-3 text-[#a3e635] rotate-135" />
                                        </div>
                                    </div>
                                </div>

                                {/* Narrative Side */}
                                <div className="next-project-narrative border-b md:border-b-0 md:border-r border-border/40">
                                    <div className="space-y-8 lg:space-y-12 mb-12">
                                        <div className="flex items-center justify-between">
                                            <div className="font-bold tracking-tighter text-2xl opacity-80">{project.client.name.split(' ')[0].toLowerCase()}</div>
                                            <div className="text-[10px] font-bold text-muted-foreground/60">/{project.year}</div>
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl lg:leading-[1.15] font-bold">
                                            {project.summary.split('.')[0]}.
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/20">
                                        {project.results.map((res, j) => (
                                            <div key={j} className="space-y-2">
                                                <p className="font-bold text-lg lg:text-xl truncate">{res.split(' ')[0]}</p>
                                                <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground leading-tight line-clamp-2">
                                                    {res.split(' ').slice(1).join(' ')}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual Side */}
                                <div className="next-project-visual min-h-[300px] md:min-h-full">
                                    <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
                                        <div className="w-full h-full border border-foreground/5 bg-foreground/[0.02] backdrop-blur-sm flex items-center justify-center relative">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-10">[ {project.title} ]</p>
                                            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-foreground/10" />
                                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-foreground/10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
