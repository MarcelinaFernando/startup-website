// src/components/Button/Button.jsx
import "./Button.css";

export default function Button({ label }) {
  return (
    <button className="btn">
      {label}
    </button>
  );
}
