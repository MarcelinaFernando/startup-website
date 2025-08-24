// src/sections/TeamSection.jsx
import React from "react";
import TeamCard from "./TeamCard";
import Button from "./Button"; 
import "./TeamSection.css";

import avatar1 from "../assets/images/avatar1.svg";
import avatar2 from "../assets/images/avatar2.svg";
import avatar3 from "../assets/images/avatar3.svg";
import avatar4 from "../assets/images/avatar4.svg";

export default function TeamSection() {
  const team = [
    { image: avatar1, name: "Peg Legge", role: "CEO" },
    { image: avatar2, name: "Richard Guerra", role: "CTO" },
    { image: avatar3, name: "Alexandra Stolz", role: "DESIGNER" },
    { image: avatar4, name: "Janet Bray", role: "DEVELOPER" },
  ];

  return (
    <section className="team-section">
      <div className="team-cards">
        {team.map((member, index) => (
          <TeamCard
            key={index}
            image={member.image}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
{/*Reusable Button */}
      <Button label="Learn More" />
    </section>
  );
}
