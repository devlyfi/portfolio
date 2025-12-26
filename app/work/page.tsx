import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function WorkPage() {
    const categories = Array.from(new Set(PROJECTS.map(p => p.category)));

    return (
        <div className="bg-background">
            <section className="py-20 lg:py-32">
                <div className="container px-4 mx-auto text-center">
                    <div className="inline-flex items-center rounded-none border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-none bg-primary mr-2 animate-pulse"></span>
                        Our Portfolio
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Success Stories</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                        Explore how we've helped companies transform their businesses with technology.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-16">
                        <Button variant="default" className="rounded-none">All</Button>
                        {categories.map(cat => (
                            <Button key={cat} variant="outline" className="rounded-none">{cat}</Button>
                        ))}
                    </div>
                </div>

                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {PROJECTS.map((project) => (
                            <Link href={`/work/${project.slug}`} key={project.id} className="group block space-y-4">
                                <div className="aspect-video bg-muted rounded-none border border-border overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="text-sm font-medium mb-1">{project.category}</p>
                                        <h3 className="text-2xl font-bold">{project.title}</h3>
                                    </div>
                                    {/* Placeholder for real image */}
                                    <div className="absolute inset-0 flex items-center justify-center -z-10 bg-muted-foreground/10">
                                        [Project Image]
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
