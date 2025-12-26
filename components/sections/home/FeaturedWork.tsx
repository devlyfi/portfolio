import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FeaturedWork() {
    return (
        <section className="py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Work</h2>
                    <p className="text-muted-foreground text-lg">
                        We don't just write code; we build transformative digital products. Here are a few success stories.
                    </p>
                </div>

                <div className="space-y-20 lg:space-y-32">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={project.id}
                            className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Image Placeholder */}
                            <div className="w-full lg:w-1/2 aspect-video bg-muted rounded-none flex items-center justify-center border-2 border-dashed border-muted-foreground/20 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="text-muted-foreground font-medium flex items-center gap-2">
                                    [Project Screenshot: {project.title}]
                                </span>
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="space-y-2">
                                    <Badge variant="secondary" className="rounded-none px-3 py-1">
                                        {project.category}
                                    </Badge>
                                    <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                                </div>

                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {project.summary}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono bg-primary/5 text-primary px-2 py-1 rounded-none">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 grid grid-cols-2 gap-4">
                                    {project.results.slice(0, 2).map((result, i) => (
                                        <div key={i} className="border-l-2 border-primary pl-4">
                                            <p className="font-semibold text-foreground">{result}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <Button variant="outline" className="group rounded-none" asChild>
                                        <Link href={`/work/${project.slug}`}>
                                            View Case Study <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Button size="lg" asChild>
                        <Link href="/work">View All Projects</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
