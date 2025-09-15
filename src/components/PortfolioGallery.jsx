// src/sections/PortfolioGallery.jsx
import "./PortfolioGallery.css";
// importando imagens
import portfolio1 from "../assets/images/portfolio1.png";
import portfolio2 from "../assets/images/portfolio2.png";
import portfolio3 from "../assets/images/portfolio3.png";
import portfolio4 from "../assets/images/portfolio4.png";
import portfolio5 from "../assets/images/portfolio5.png";
import portfolio6 from "../assets/images/portfolio6.png";
import portfolio7 from "../assets/images/portfolio7.png";
import portfolio8 from "../assets/images/portfolio8.png";

export default function PortfolioGallery() {
  const images = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
    portfolio7,
    portfolio8,
  ];

  return (
    <section className="portfolio-gallery">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Portfolio project ${index + 1}`}
          className="portfolio-image"
        />
      ))}
    </section>
  );
}
