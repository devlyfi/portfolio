import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
    const faqs = [
        {
            question: "What is your typical project timeline?",
            answer: "Project timelines vary by complexity. A typical MVP takes 8-12 weeks, while enterprise platforms can take 6+ months. We provide detailed mapping during discovery."
        },
        {
            question: "Do you sign a rigorous NDA?",
            answer: "Yes, absolutely. We prioritize your intellectual property and are happy to sign a rigorous NDA before our first technical audit or discovery session."
        },
        {
            question: "Managed Team vs. Freelancers?",
            answer: "We offer a cohesive, managed engineering unit with guaranteed availability, rigorous QA processes, and diverse senior skill sets that freelancers can't match."
        },
        {
            question: "Post-launch Support Structure?",
            answer: "We offer flexible SLA-based maintenance packages to ensure your software remains secure, optimized, and technically superior after deployment."
        }
    ];

    return (
        <section className="py-0 bg-background overflow-hidden border-b border-border/40">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row border border-border/40 divide-y lg:divide-y-0 lg:divide-x divide-border/40">
                    {/* Header Label */}
                    <div className="lg:w-1/3 p-12 lg:p-24 space-y-10 relative bg-muted/2">
                        <div className="space-y-4">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] block animate-pulse">KNOWLEDGE_BASE</span>
                            <h2 className="display-bold text-4xl lg:text-5xl uppercase tracking-tighter !leading-[0.9]">Common<br />Professional<br />Questions</h2>
                        </div>
                        <p className="text-[11px] text-muted-foreground uppercase tracking-[0.3em] leading-relaxed opacity-60">Everything required to initiate and maintain a high-performance engineering partnership.</p>
                        <div className="grid-symbol -bottom-2.5 -left-2.5 lg:hidden" />
                    </div>

                    {/* FAQ Accordion Grid */}
                    <div className="lg:w-2/3 p-12 lg:p-24 relative bg-background/50">
                        <Accordion type="single" collapsible className="w-full space-y-6">
                            {faqs.map((faq, i) => (
                                <AccordionItem
                                    key={i}
                                    value={`item-${i}`}
                                    className="border border-border/40 bg-muted/2 px-10 lg:px-14 py-4 hover:bg-muted/5 transition-all duration-700 relative group overflow-hidden"
                                >
                                    <AccordionTrigger className="text-left py-10 hover:no-underline group focus:outline-none">
                                        <div className="flex items-center gap-10">
                                            <span className="text-[11px] font-black text-primary/20 group-hover:text-primary transition-all duration-500 scale-125 group-data-[state=open]:text-primary group-data-[state=open]:scale-150">0{i + 1}</span>
                                            <span className="text-lg lg:text-xl font-black uppercase tracking-tight group-hover:text-primary transition-colors text-foreground/80">{faq.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[11px] text-muted-foreground uppercase leading-[2] tracking-[0.3em] font-medium opacity-80 pb-12 pl-14 lg:pl-16 max-w-3xl border-l border-primary/10 ml-5">
                                        {faq.answer}
                                    </AccordionContent>
                                    <div className="grid-symbol -bottom-2.5 -right-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-data-[state=open]:h-full transition-all duration-700" />
                                </AccordionItem>
                            ))}
                        </Accordion>
                        <div className="grid-symbol -top-2.5 -right-2.5 hidden lg:block" />
                        <div className="grid-symbol -bottom-2.5 -right-2.5" />
                    </div>
                </div>
            </div>
        </section>
    );
}
