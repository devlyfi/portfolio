import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative overflow-hidden py-20 lg:py-32">
            {/* Background Gradients */}
            <div className="absolute inset-0 -z-10 bg-background">
                <div className="absolute top-0 right-0 -mr-40 -mt-40 size-[600px] md:size-[800px] bg-primary/10 rounded-none blur-3xl opacity-50 animate-blob" />
                <div className="absolute bottom-0 left-0 -ml-40 -mb-40 size-[600px] md:size-[800px] bg-secondary/20 rounded-none blur-3xl opacity-50 animate-blob animation-delay-2000" />
            </div>

            <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-8">
                <div className="inline-flex items-center rounded-none border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-none bg-primary mr-2 animate-pulse"></span>
                    Accepting New Enterprise Projects
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                    Innovation You Can Trust. <br className="hidden sm:block" />
                    <span className="text-primary block mt-2">Results You Can Measure.</span>
                </h1>

                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    We craft innovative software solutions that transform businesses and delight users. Your trusted technology partner for digital excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
                    <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20" asChild>
                        <Link href="/contact">
                            Start Your Project <ArrowRight className="ml-2 size-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base backdrop-blur-sm bg-background/50" asChild>
                        <Link href="/work">
                            View Our Work
                        </Link>
                    </Button>
                </div>

                {/* Clients/Trust Badges Placeholder */}
                <div className="pt-16">
                    <p className="text-sm font-medium text-muted-foreground/60 mb-8 uppercase tracking-[0.3em]">
                        Trusted by industry leaders
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 md:gap-x-20 opacity-80">
                        {/* Improved typography for brand placeholders */}
                        {["Acme Corp", "GlobalTech", "Nebula.ai", "SaaS Flow", "GreenEnergy"].map((brand) => (
                            <span key={brand} className="text-xl md:text-2xl font-black tracking-tighter text-muted-foreground hover:text-foreground transition-colors cursor-default">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
