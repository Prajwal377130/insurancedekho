import React, { useState } from "react";
import "./AdvisorInBengalore.css";


const advisorsData = [
  {
    id: 1,
    name: "Deepanshu Jaglan",
    city: "New Delhi",
    experience: 6,
    rating: 4.8,
    insuranceType: "Health Insurance",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    id: 2,
    name: "Anjali Mehta",
    city: "Mumbai",
    experience: 5,
    rating: 4.6,
    insuranceType: "Car Insurance",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 3,
    name: "Pankaj Singh",
    city: "Chennai",
    experience: 7,
    rating: 4.7,
    insuranceType: "Life Insurance",
    image: "https://staticimg.insurancedekho.com/uploads/fusion/GCD36825.png"
  },
   {
    id: 4,
    name: "Deepanshu Jaglan",
    city: "New Delhi",
    experience: 6,
    rating: 4.8,
    insuranceType: "Health Insurance",
    image: "https://staticimg.insurancedekho.com/uploads/fusion/GCD38036.jpg"
  },
   {
    id: 5,
    name: "Rohit Jaglan",
    city: "Bangalore",
    experience: 6,
    rating: 4.8,
    insuranceType: "Health Insurance",
    image: "https://staticimg.insurancedekho.com/uploads/fusion/GCD36064.jpeg"
  },
  
];

const cities = [
  "New Delhi",  "Chennai","Kolkata", "Mumbai", "Pune", "Bangalore"
];

const AdvisorInMumbai = () => {
  const [selectedCity, setSelectedCity] = useState("New Delhi");

  const filteredAdvisors = advisorsData.filter(
    advisor => advisor.city === selectedCity
  );

  return (
    <div className="advisor-container">
      <aside className="advisor-filters">
        <h3>Filters</h3>
        <div className="filter-section">
          <h4>City</h4>
          {cities.map(city => (
            <label key={city} className="city-option">
              <input
                type="radio"
                checked={selectedCity === city}
                onChange={() => setSelectedCity(city)}
              />
              {city}
            </label>
          ))}
        </div>
      </aside>

      <main className="advisor-content">
        <h2>{filteredAdvisors.length} Insurance Advisors in {selectedCity}</h2>
        <p>Get expert advice at your home to buy the right insurance plan.</p>

        <div className="advisor-highlight">
          <div className="highlight-left">
            <h3>Get the Best Insurance Advisor at Home</h3>
            <ul>
              <li>✔ iD Certified Experts</li>
              <li>✔ Free Meeting</li>
              <li>✔ Lifetime Claim Support</li>
            </ul>
            
          </div>
          <div className="highlight-right">
            <img src="https://static.insurancedekho.com/pwa/img/FusionFilterBanner.webp" alt="home visit" />
          </div>
        </div>

        <div className="advisor-cards">
          {filteredAdvisors.map(advisor => (
            <div className="advisor-card" key={advisor.id}>
            <div className="card-image">
    <img src={advisor.image} alt={advisor.name} />
  </div>
  <div className="card-content">
    <h4>{advisor.name}</h4>
    <p>Experience {advisor.experience} Yrs | Rating ⭐ {advisor.rating}</p>
    <p>{advisor.city}</p>
    <span>{advisor.insuranceType}</span>
   
  </div>
   <button className="book-btn">Book Home Visit</button>
</div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdvisorInMumbai;
