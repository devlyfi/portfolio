import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FAQ() {
    const faqs = [
        {
            question: "What is your typical project timeline?",
            answer: "Project timelines vary by complexity. A typical MVP takes 8-12 weeks, while enterprise platforms can take 6+ months. We provide detailed Gantt charts during the discovery phase."
        },
        {
            question: "Do you sign an NDA?",
            answer: "Yes, absolutely. We prioritize your intellectual property and are happy to sign a rigorous NDA before our first discovery call."
        },
        {
            question: "What makes your team different from freelancers?",
            answer: "We offer a cohesive, managed team with guaranteed availability, QA processes, and diverse skill sets (Design, Dev, DevOps) that freelancers can't match alone."
        },
        {
            question: "Do you provide post-launch support?",
            answer: "Yes, we offer flexible SLA-based support packages to ensure your software remains secure, updated, and bug-free after deployment."
        },
        {
            question: "What is your pricing model?",
            answer: "We offer Fixed Price for well-defined scopes and Time & Material for agile/evolving projects. We can also set up Dedicated Teams for long-term partnership."
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground text-lg">Everything you need to know about working with us.</p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`}>
                            <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">Still have questions?</p>
                    <Button variant="outline" asChild>
                        <Link href="/contact">Contact Support</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
