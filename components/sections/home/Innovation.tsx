import { Cpu, Leaf, Github } from "lucide-react";

export function Innovation() {
    return (
        <section className="py-24 bg-background border-t border-border">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Beyond Client Work</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We invest heavily in R&D, community, and the planet. Here is how we give back and stay ahead.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Innovation Lab */}
                    <div className="group relative overflow-hidden rounded-none bg-muted/40 p-8 hover:bg-muted/60 transition-colors">
                        <div className="mb-4 inline-flex p-3 rounded-none bg-primary/10 text-primary">
                            <Cpu className="size-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">NexLabs R&D</h3>
                        <p className="text-muted-foreground mb-4">
                            Our internal incubator exploring Generative AI, Web3 protocols, and edge computing before they hit the mainstream market.
                        </p>
                        <div className="h-1 w-12 bg-primary/30 group-hover:w-full transition-all duration-500 rounded-none" />
                    </div>

                    {/* Open Source */}
                    <div className="group relative overflow-hidden rounded-none bg-muted/40 p-8 hover:bg-muted/60 transition-colors">
                        <div className="mb-4 inline-flex p-3 rounded-none bg-primary/10 text-primary">
                            <Github className="size-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Open Source</h3>
                        <p className="text-muted-foreground mb-4">
                            We maintain 15+ open source libraries downloaded by 500k+ developers. Giving back to the ecosystem that powers us.
                        </p>
                        <div className="h-1 w-12 bg-primary/30 group-hover:w-full transition-all duration-500 rounded-none" />
                    </div>

                    {/* Sustainability */}
                    <div className="group relative overflow-hidden rounded-none bg-muted/40 p-8 hover:bg-muted/60 transition-colors">
                        <div className="mb-4 inline-flex p-3 rounded-none bg-primary/10 text-primary">
                            <Leaf className="size-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Green Tech</h3>
                        <p className="text-muted-foreground mb-4">
                            We prioritize carbon-neutral hosting and sustainable code practices. 1% of our profits go to climate action initiatives.
                        </p>
                        <div className="h-1 w-12 bg-primary/30 group-hover:w-full transition-all duration-500 rounded-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
