import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsIntro from "@/components/StatsIntro";
import Programs from "@/components/Programs";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkoutGuide from "@/components/WorkoutGuide";
import Pricing from "@/components/Pricing";
import MidBanner from "@/components/MidBanner";
import Testimonials from "@/components/Testimonials";
import Trainers from "@/components/Trainers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollFade from "@/components/ScrollFade";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <div className="space-y-24 pb-24">
        <ScrollFade>
          <StatsIntro />
        </ScrollFade>
        <ScrollFade>
          <Programs />
        </ScrollFade>
        <ScrollFade>
          <Features />
        </ScrollFade>
        <ScrollFade>
          <WhyChooseUs />
        </ScrollFade>
        <ScrollFade>
          <WorkoutGuide />
        </ScrollFade>
        <ScrollFade>
          <Pricing />
        </ScrollFade>
        <ScrollFade>
          <MidBanner />
        </ScrollFade>
        <ScrollFade>
          <Testimonials />
        </ScrollFade>
        <ScrollFade>
          <Trainers />
        </ScrollFade>
        <ScrollFade>
          <Contact />
        </ScrollFade>
      </div>
      <Footer />
    </main>
  );
}
