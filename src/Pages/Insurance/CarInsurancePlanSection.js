import React from "react";
import "./Car.css"; 

const CarInsurancePlanSection = () => {
  const plans = [
    {
      title: "Comprehensive Cover",
      description: "Covers your car and third-party liabilities.",
      image: "https://ik.imagekit.io/insuranceDekho/comp-cover.svg",
    },
    {
      title: "Third Party Cover",
      description: "Covers legal liabilities towards third parties.",
      image: "https://ik.imagekit.io/insuranceDekho/thirdpartycover.svg",
    },
    {
      title: "Own Damage Cover",
      description: "Covers damages to your own car only.",
      image: "https://ik.imagekit.io/insuranceDekho/owndamage.svg",
    },
    {
      title: "Zero Depreciation",
      description: "Get full claim without depreciation deduction.",
      image: "https://ik.imagekit.io/insuranceDekho/zero-dep.svg",
    },
    {
      title: "Cashless Repairs",
      description: "Get cashless repairs at network garages.",
      image: "https://ik.imagekit.io/insuranceDekho/cashless.svg",
    },
    {
      title: "24x7 Support",
      description: "Assistance anytime during emergencies.",
      image: "https://ik.imagekit.io/insuranceDekho/support.svg",
    },
  ];

  return (
    <div className="insurance-plan-grid">
      {plans.map((plan, index) => (
        <div key={index} className="plan-card">
          <img src={plan.image} alt={plan.title} />
          <h4>{plan.title}</h4>
          <p>{plan.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CarInsurancePlanSection;
