// src/pages/Services.jsx
import "./Services.css";
import SectionHeader from "../components/SectionHeader";
import PlanCard from "../components/PlanCard";
export default function Services() {

// Plan Details
const plansData = [
  {
    id: 1,
    title: "Basic",
    price: "$100",
    period: "month",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
    features: [
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
  {
    id: 2,
    title: "Plus",
    price: "$250",
    period: "month",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
    features: [
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
  {
    id: 3,
    title: "Pro",
    price: "$400",
    period: "month",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
    features: [
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
];

  return (
    <main className="services-page">
      {/* Our Services section*/}
      <SectionHeader
        subtitle="PLANS"
        title="Our Services"
        description={
          <>
            Lorem ipsum, dolor sit amet <br />
            consectetur <br />
            <span className="last-line">adipisicing elit.</span>
          </>
        }
      />

      
      {/*Plans Section*/}
      <section className="plans-section">
        <div className="plans-container">
        {plansData.map((plan) => (
          <PlanCard key={plan.id} {...plan} />
        ))}
        </div>
      </section>
    </main>
  );
}
