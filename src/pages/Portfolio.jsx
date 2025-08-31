import "./Portfolio.css";
import PortfolioHeaderSection from "../components/PortfolioHeaderSection";
import PortfolioGallery from "../components/PortfolioGallery";
import Button from "../components/Button"; 

export default function Portfolio() {
  return (
    <main className="portfolio-page">

      {/* seção de cabeçalho*/}
      
      <PortfolioHeaderSection />
       {/*  galeria */}
       <PortfolioGallery />

       
       {/*Reusable Button */}
      <div className="portfolio-button">
        <Button label="Learn More" />
      </div>
    </main>
  );
}

