// src/components/Hero.jsx
import "./Hero.css";
import heroImage from "../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <img src={heroImage} alt="Team working illustration" />
        </div>
        <h2 className="hero-subtitle">WELCOME</h2>
        <h1 className="hero-title">Lorem ipsum dolor sit amet consectetur</h1>
        <p className="hero-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab,
          dolor aperiam nobis cum est eos error <br />
          ipsum, voluptate culpa nesciunt delectus <br /> iste?
        </p>
        <button className="hero-btn">Explore</button>
      </div>
    </section>
  );
}
