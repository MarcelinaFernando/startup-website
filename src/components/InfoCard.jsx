// src/components/InfoCard/InfoCard.jsx
import "./InfoCard.css";
import Button from "./Button"; 
import illustration from "../assets/images/illustration.png"; 

export default function InfoCard() {
  return (
    <section className="info-card">
      {/* ILLUSTRATION*/}
      <div className="info-card_image">
        <img src={illustration} alt="People illustration" />
      </div>

      {/*TEXT*/}
      <div className="info-card_content">
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Suscipit nemo hic quos, ab, dolor aperiam nobis cum et
          error  <br /> ipsum, voluptate culpa nesciunt delectus  <br />iste?
        </p>
      </div>
       {/*  Reusable button */}
            <Button label="Learn More" />
    </section>
  );
}