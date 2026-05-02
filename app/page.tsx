import Footer from "@/components/Footer";
import GTS from "@/components/GTS";
import Header from "@/components/Header";
import HomeCTA from "@/components/Home/CTA";
import HomeHero from "@/components/Home/Hero";
import HomeProperties from "@/components/Home/Properties";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <HomeProperties />
      <HomeCTA />
      <Footer />
      <GTS />
    </>
  );
}
