import React from "react";
import "./CarNews.css";

const newsArticles = [
  {
    id: 1,
    title: "USD Forks vs. Telescopic Forks: Which Is Best for Your Motorcycle?",
    summary:
      "Compare USD forks and telescopic forks in terms of performance, comfort, and cost...",
    author: "Siddharth Malik",
    date: "16 May 2025",
    image: "https://staticimg.insurancedekho.com/strapi/Small_USD_Forks_vs_Telescopic_Forks_Which_Is_Best_for_Your_Bike_2412676682.webp",
  },
  {
    id: 2,
    title: "Telescopic Suspension in Motorcycle: How it Works & its Benefits",
    summary:
      "Understand how telescopic suspension works in motorcycles, its advantages...",
    author: "Siddharth Malik",
    date: "16 May 2025",
    image: "https://staticimg.insurancedekho.com/strapi/Small_Telescopic_Suspension_8e3873fb7d.webp",
  },
    {
    id: 3,
    title: "How to Replace a Car Key Battery: A Step-by-Step Guide?",
    summary:
      `
Learn how to replace your car key battery easily at home with this step-by-step guide. Save time and avoid getting locked out due to a dead key fob.

`,
    author: "Siddharth Malik",
    date: "15 May 2025",
    image: "https://staticimg.insurancedekho.com/strapi/Small_How_to_Replace_a_Car_Key_Battery_A_Step_by_Step_Guide_0392a8c19c.webp",
  },
  {
    id: 4,
    title: "Clutch, Brake, & Accelerator in Cars: Understanding all the Pedals",
    summary:
      `
Learn how the clutch, brake, and accelerator pedals function in a car, their roles in driving, and tips for using them smoothly and safely.
`
,
    author: "Siddharth Malik",
    date: "16 May 2025",
    image: "https://staticimg.insurancedekho.com/strapi/Small_Clutch_Brake_and_Accelerator_in_Cars_Understanding_the_Pedals_6dbb46030c.webp",
  },
  {
    id: 5,
    title: "Telescopic Suspension in Motorcycle: How it Works & its Benefits",
    summary:
      "Understand how telescopic suspension works in motorcycles, its advantages...",
    author: "Siddharth Malik",
    date: "16 May 2025",
    image: "https://staticimg.insurancedekho.com/strapi/Small_Telescopic_Suspension_8e3873fb7d.webp",
  },
  
];



const CarNews = () => {
  return (
    <div className="news-page">
      <h1>Car Insurance News</h1>

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

export default CarNews;
