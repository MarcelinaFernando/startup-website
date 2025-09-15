// src/components/TeamCard.jsx
import "./TeamCard.css";

export default function TeamCard({ image, name, role }) {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-card-image" />
      <h2 className="team-card-name">{name}</h2>
      <p className="team-card-role">{role}</p>
    </div>
  );
}
