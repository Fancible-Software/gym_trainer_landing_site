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

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <div className="space-y-24 pb-24">
        <StatsIntro />
        <Programs />
        <Features />
        <WhyChooseUs />
        <WorkoutGuide />
        <Pricing />
        <MidBanner />
        <Testimonials />
        <Trainers />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
