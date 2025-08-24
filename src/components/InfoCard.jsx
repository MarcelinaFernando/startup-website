// src/components/InfoCard.jsx
import "./InfoCard.css";
import Button from "./Button";

export default function InfoCard({ imageSrc }) {
  return (
    <section className="info-card">
      {/* ILLUSTRATION */}
      <div className="info-card_image">
        <img src={imageSrc} alt="Illustration" />
      </div>

      {/* TEXT */}
      <div className="info-card_content">
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Suscipit nemo hic quos, ab, dolor aperiam nobis cum et
          error <br /> ipsum, voluptate culpa nesciunt delectus <br /> iste?
        </p>
        <Button label="Learn More" />
      </div>
    </section>
  );
}
