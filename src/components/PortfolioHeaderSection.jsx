// src/sections/PortfolioHeaderSection.jsx
import SectionHeader from "../components/SectionHeader";

export default function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <SectionHeader
        subtitle="WORKS"
        title="Portfolio"
        description={
          <>
            Lorem ipsum, dolor sit amet <br />
            consectetur <br />
            <span className="last-line">adipisicing elit.</span>
          </>
        }
      />
      {/* Aqui depois vamos adicionar a grade de imagens */}
    </section>
  );
}
