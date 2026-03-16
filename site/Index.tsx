import Navigation from "@/components/Navigation";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackToTop from "@/components/BackToTop";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Solutions from "@/components/Features";
import Technology from "@/components/Technology";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import News from "@/components/News";
import Team from "@/components/Team";
import Careers from "@/components/Careers";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navigation />
      <ScrollProgressBar />
      <Hero />
      <AboutUs />
      <WhoWeWorkWith />
      <Solutions />
      <Technology />
      <News />
      <Team />
      <Careers />
      <CTA />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
