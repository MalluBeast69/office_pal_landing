import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EducationHero from "@/components/EducationHero";
import CoreFeatures from "@/components/CoreFeatures";
import UserRoles from "@/components/UserRoles";
import TechnicalFeatures from "@/components/TechnicalFeatures";
import SecurityFeatures from "@/components/SecurityFeatures";
import Platforms from "@/components/Platforms";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <EducationHero />
        <CoreFeatures />
        <UserRoles />
        <TechnicalFeatures />
        <Platforms />
        <SecurityFeatures />
      </main>
      <Footer />
    </div>
  );
}
