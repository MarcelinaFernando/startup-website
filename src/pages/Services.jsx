// src/pages/Services.jsx
import "./Services.css";
import SectionHeader from "../components/SectionHeader";

export default function Services() {
  return (
    <main className="services-page">
      {/* Our Services section*/}
      <SectionHeader
        subtitle="PLANS"
        title="Our Services"
        description={
          <>
            Lorem ipsum, dolor sit amet <br />
            consectetur <br />
            <span className="last-line">adipisicing elit.</span>
          </>
        }
      />
    </main>
  );
}
