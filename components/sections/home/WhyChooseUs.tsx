import { ShieldCheck, Zap, Users, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const REASONS = [
    {
        title: "Enterprise-Grade Security",
        description: "We implement rigorous security standards (ISO 27001, SOC 2) to protect your IP and user data.",
        icon: ShieldCheck
    },
    {
        title: "High-Velocity Agile",
        description: "Our CI/CD pipelines and rapid iteration cycles ensure you get to market faster.",
        icon: Zap
    },
    {
        title: "Senior Talent Only",
        description: "Work directly with seasoned engineers and designers, not junior trainees.",
        icon: Users
    },
    {
        title: "Scalable Architecture",
        description: "Systems built to handle millions of users from day one, using cloud-native patterns.",
        icon: TrendingUp
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="bg-muted rounded-none p-8 md:p-16 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 size-96 bg-primary/10 rounded-none blur-3xl" />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 size-96 bg-primary/10 rounded-none blur-3xl" />

                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Leading Brands Choose Us</h2>
                        <p className="text-muted-foreground text-lg">
                            We combine technical excellence with business acumen to deliver software that drives real growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {REASONS.map((reason, i) => (
                            <Card key={i} className="bg-background/80 border-border/50 text-foreground backdrop-blur-sm rounded-none">
                                <CardHeader>
                                    <reason.icon className="size-8 mb-2 text-primary opacity-90" />
                                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground opacity-80 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
