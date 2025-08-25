// src/sections/OurTalents.jsx
import SectionHeader from "../components/SectionHeader";

export default function OurTalents() {
  return (
    <section className="our-talents">
      <SectionHeader
        subtitle="TEAM"
        title="Our Talents"
        description={
          <>
            Lorem ipsum, dolor sit amet <br />
            consectetur <br />
            <span className="last-line">adipisicing elit.</span>
          </>
        }
      />
    </section>
  );
}
