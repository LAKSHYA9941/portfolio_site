import LandingSection from "../components/Landingsection";
import Stars from "../components/Stars";


export default function LandingPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Stars />
      <LandingSection />
    </div>
  );
}