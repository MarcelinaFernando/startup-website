// src/components/Partners.jsx
import "./Partners.css";
import Button from "./Button"; 

//import the logos
import googleLogo from "../assets/icons/google.svg";
import microsoftLogo from "../assets/icons/microsoft.svg";
import airbnbLogo from "../assets/icons/airbnb.svg";
import facebookLogo from "../assets/icons/facebook.svg";
import spotifyLogo from "../assets/icons/spotify.svg";

export default function Partners() {
  return (
    <section className="partners">
      <h3 className="partners-subtitle">PARTNERS</h3>
      <h2 className="partners-title">Lorem Ipsum Dolor</h2>
      <h4 className="partners-text">
  Lorem ipsum, dolor sit amet <br />
  consectetur <br />
  <span className="last-line">adipisicing elit.</span>
</h4>
      <div className="partners-logos">
        <img src={googleLogo} alt="Google logo" />
        <img src={microsoftLogo} alt="Microsoft logo" />
        <img src={airbnbLogo} alt="Airbnb logo" />
        <img src={facebookLogo} alt="Facebook logo" />
        <img src={spotifyLogo} alt="Spotify logo" />
      </div>

      {/*  Reusable button */}
      <Button label="Learn More" />
    </section>
  );
}
