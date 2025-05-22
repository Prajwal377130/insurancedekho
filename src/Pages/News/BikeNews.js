import React from "react";
import "./CarNews.css";

const newsArticles = [
  {
    id: 1,
    title: "What is a Quick Shifter in Bikes and Do You Need it?",
    summary:
      `
Discover what a quick shifter does in bikes, how it enables clutchless gear shifts, and whether it’s a must-have for performance or everyday riding.
`,

    author: "Navneet Bhatt",
    date: "16 May 2025",
    image: "https://staticimg.insurancedekho.com/strapi/Small_What_is_a_Quick_Shifter_in_Bikes_05a7ce6ca4.webp",
  },
  {
    id: 2,
    title: "What is a Continuously Variable Transmission? A Simple Guide for You ",
    summary:
      `
Learn what a Continuously Variable Transmission (CVT) is, how it works, and why it offers smoother acceleration and better fuel efficiency in modern cars.


`,
    author: "Loveesh Bali",
    date: "05 May 2025",
    image: "https://staticimg.insurancedekho.com/strapi/Small_Continuously_Variable_Transmission_1e652b5ca6.webp",
  },
    {
    id: 3,
    title: "High-Octane Petrol: Does Your Bike Need It? ",
    summary:
      `

Wondering if high-octane petrol is right for your bike? Learn its benefits, when it’s needed, and whether it truly improves performance or just adds cost.

L



`,
    author: "Loveesh Bali",
    date: "101 May 2025.",
    image: "https://staticimg.insurancedekho.com/strapi/Small_High_Octane_Petrol_56aadf901f.png",
  },
  {
    id: 4,
    title: "Dual-Channel ABS: What It Means For Your Vehicle’s Safety",
    summary:
      `


Discover how dual-channel ABS enhances braking safety by preventing wheel lock-up on both wheels, offering better control and reduced stopping distance.



`
,
    author: "Loveesh Bali.",
    date: "16 May 2025",
    image: "https://staticimg.insurancedekho.com/strapi/Small_Dual_Channel_ABS_35f23703f4.png",
  },
  {
    id: 5,
    title: "Scooter vs Motorcycle: Which is the Better Choice for Daily Commuting?",
    summary:
      `
Confused between a scooter and a motorcycle for daily commuting? Compare their comfort, mileage, cost.



`,
    author: "Loveesh Bali",
    date: "11 Apr 2025",
    image: "https://staticimg.insurancedekho.com/strapi/Small_Scooter_vs_Motorcycle_4ed1699d88.png",
  },
  
];

const BikeNews = () => {
  return (
    <div className="news-page">
      <h1>Bike Insurance News</h1>

      <div className="news-container">
        <div className="news-left">
          {newsArticles.map((article) => (
            <div className="news-card" key={article.id}>
              <img src={article.image} alt={article.title} />
              <div className="news-info">
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <div className="author">
                  <span>{article.author}</span> &middot;{" "}
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default  BikeNews;
