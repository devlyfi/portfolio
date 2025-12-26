import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
    return (
        <section className="py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="bg-muted rounded-none p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 size-96 bg-primary/10 rounded-none blur-3xl" />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 size-96 bg-primary/10 rounded-none blur-3xl" />

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight relative z-10 max-w-4xl mx-auto">
                        Transform Your Business with Custom Software
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto relative z-10">
                        Sometimes the hardest part is reaching out — but once you do, we’ll make the rest easy.
                        Schedule a free strategy session today.
                    </p>
                    <div className="relative z-10 pt-4">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-none" asChild>
                            <Link href="/contact">
                                Start a Conversation <ArrowRight className="ml-2 size-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
