// src/components/SectionHeader.jsx
import "./SectionHeader.css";

export default function SectionHeader({ subtitle, title, description }) {
  return (
    <header className="section-header">
      {/* Subtítulo */}
      <h3 className="section-subtitle">{subtitle}</h3>

      {/* Título */}
      <h2 className="section-title">{title}</h2>

      {/* Descrição */}
      {description && (
        <p className="section-description">{description}</p>
      )}
    </header>
  );
}
