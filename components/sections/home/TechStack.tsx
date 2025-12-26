import { cn } from "@/lib/utils";

export function TechStack() {
    const technologies = [
        "React", "Next.js", "TypeScript", "Node.js", "Python", "TensorFlow",
        "AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "GraphQL",
        "PostgreSQL", "Redis", "Figma", "TailwindCSS"
    ];

    return (
        <section className="py-24 border-y border-border overflow-hidden bg-muted/20">
            <div className="container px-4 mx-auto mb-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold">Powered by Modern Tech</h2>
                <p className="text-muted-foreground mt-2">We use the best tools to build future-proof solutions.</p>
            </div>

            <div className="relative w-full overflow-hidden max-w-7xl mx-auto [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                <div className="flex animate-marquee space-x-12 items-center hover:pause py-4">
                    {/* Repeat list 4 times to ensure it covers wide screens and loops smoothly */}
                    {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <span key={index} className="text-2xl md:text-5xl font-extrabold tracking-tighter text-muted-foreground/50 hover:text-primary transition-all duration-300 cursor-default shrink-0">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
