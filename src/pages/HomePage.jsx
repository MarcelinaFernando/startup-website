import Hero from "../components/Hero";
import Partners from "../components/Partners";
import InfoCard from "../components/InfoCard";
import illustration1 from "../assets/images/illustration1.svg";
import illustration2 from "../assets/images/illustration2.svg";
import OurTalents from "../components/OurTalents"; 
import TeamSection from "../components/TeamSection";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <Hero reverse />

      {/* PARTNERS SECTION */}
      <Partners />

      {/* INFO-CARD SECTION 1 */}
      <InfoCard imageSrc={illustration1} />

      {/* INFO-CARD SECTION 2 */}
      <InfoCard imageSrc={illustration2} reverse />

      {/* OUR TALENTS SECTION */}
      <OurTalents />

      {/* TEAM SECTION */}
      <TeamSection />
    </main>
  );
}
