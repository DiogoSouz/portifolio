import BestCasesSection from "./components/cases-section";
import HeroSection from "./components/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection/>
      
      <div className="max-w-12/12 mx-auto p-5 text-pretty ">
        <BestCasesSection />
      </div>
    </div>
  );
}
