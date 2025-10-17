import React from "react";
import Button from "./Button"; 
import checkIcon from "../assets/icons/check.svg";
import "./PlanCard.css";

export default function PlanCard({ id,  title, price, period = "month", description, features = [] }) {
  return (
    <article className="plan-card" aria-labelledby={`plan-${id}-title`}>
      <header className="plan-card-header">
        <h3 id={`plan-${id}-title`} className="plan-card-title">{title}</h3>
        <div className="plan-card-price" aria-hidden="true">
          <div className="price-text">
            <span className="price-amount">{price}</span>
            <span className="price-period">/{period}</span>
          </div>
        </div>
      </header>

      {description && <p className="plan-card-desc">{description}</p>}

      <ul className="plan-features" aria-label={`${title} features`}>
        {features.map((f, i) => (
          <li key={i} className="plan-feature">
            <img src={checkIcon} alt="" className="check-icon" />
            {f}
          </li>
        ))}
      </ul>
      {/*Reusable Button */}
      <div className="plan-card-footer">
        <Button label="Learn More" />
      </div>
    </article>
  );
}
