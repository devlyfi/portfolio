import { Hero } from "@/components/sections/home/Hero";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { FeaturedWork } from "@/components/sections/home/FeaturedWork";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { Comparison } from "@/components/sections/home/Comparison";
import { TechStack } from "@/components/sections/home/TechStack";
import { Process } from "@/components/sections/home/Process";
import { Innovation } from "@/components/sections/home/Innovation";
import { TeamSection } from "@/components/sections/home/TeamSection";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { LatestInsights } from "@/components/sections/home/LatestInsights";
import { FAQ } from "@/components/sections/home/FAQ";
import { CTASection } from "@/components/sections/home/CTASection";

export default function Home() {
    return (
        <>
            <div className="flex flex-col gap-32 mb-32">
                <Hero />
                <TechStack />
                <ServicesOverview />
                <FeaturedWork />
                <WhyChooseUs />
                <Comparison />
                <Process />
                <Innovation />
                <TeamSection isCarousel={true} />
                <Testimonials />
                <LatestInsights />
                <FAQ />
                <CTASection />
            </div>
        </>
    );
}