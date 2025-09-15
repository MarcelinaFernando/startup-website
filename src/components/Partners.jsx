// src/components/Partners.jsx
import "./Partners.css";
import SectionHeader from "./SectionHeader";
import Button from "./Button"; 

// import the logos
import googleLogo from "../assets/icons/google.svg";
import microsoftLogo from "../assets/icons/microsoft.svg";
import airbnbLogo from "../assets/icons/airbnb.svg";
import facebookLogo from "../assets/icons/facebook.svg";
import spotifyLogo from "../assets/icons/spotify.svg";

export default function Partners() {
  return (
    <section className="partners">
      {/* Reusable Header */}
      <SectionHeader
        subtitle="PARTNERS"
        title="Lorem Ipsum Dolor"
        description={
          <>
            Lorem ipsum, dolor sit amet <br />
            consectetur <br />
            <span className="last-line">adipisicing elit.</span>
          </>
        }
      />

      {/* Logos */}
      <div className="partners-logos">
        <img src={googleLogo} alt="Google logo" />
        <img src={microsoftLogo} alt="Microsoft logo" />
        <img src={airbnbLogo} alt="Airbnb logo" />
        <img src={facebookLogo} alt="Facebook logo" />
        <img src={spotifyLogo} alt="Spotify logo" />
      </div>

      {/*Reusable Button */}
      <Button label="Learn More" />
    </section>
  );
}
