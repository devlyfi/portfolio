import { PROCESS_STEPS } from "@/lib/data";

export function Process() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Methodology</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">From Concept to Code</h2>
                    <p className="text-muted-foreground text-lg">
                        A transparent, agile workflow designed to minimize risk and maximize value.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[15%] left-0 w-full h-0.5 bg-border -z-10" />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {PROCESS_STEPS.map((step, i) => (
                            <div key={i} className="relative flex flex-col items-center text-center space-y-4 group">
                                <div className="size-16 rounded-none bg-background border-4 border-muted group-hover:border-primary transition-colors flex items-center justify-center shrink-0">
                                    <step.icon className="size-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mt-4">{step.title}</h3>
                                <p className="text-sm text-muted-foreground max-w-[200px]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
