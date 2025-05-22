import React from "react";
import "./CarNews.css";

const newsArticles = [
  {
    id: 1,
    title: "Renewable vs Convertible Life Insurance Term Plans?",
    summary:
      `

Know the difference between Renewable and Convertible Term Life Insurance Plans. Understand how each type works, their benefits, and which might be best for you



`,

    author: "Manwendra Singh",
    date: "24 Oct 2024",
    image: "https://staticimg.insurancedekho.com/strapi/Renewable_vs_Convertible_300x200_a426301b59.jpg",
  },
  {
    id: 2,
    title: `SBI Life Term Insurance Vs LIC Term Insurance` ,
    summary:
      `



Get a quick comparison of SBI Life Term Insurance Vs LIC Term Insurance to find out which policy is best.



`,
    author: "Kritika Singh",
    date: "08 Aug 2024",
    image: "https://staticimg.insurancedekho.com/strapi/SBI_Life_Term_Insurance_Vs_LIC_Term_Insurance_01e20f9768.jpg",
  },
    {
    id: 3,
    title: "Impact of Inflation on Term Insurance Coverage Amount ",
    summary:
      `

Find how inflation can impact term insurance coverage amount and how you can beat the inflation.


`,
    author: "Kritika Singh",
    date: "05 Aug 2024",
    image: "https://staticimg.insurancedekho.com/strapi/Importance_of_Considering_Inflation_While_Choosing_Term_Insurance_Plan_560f5a892f.jpg",
  },
  {
    id: 4,
    title: "Best Term Insurance Plan With Rs. 1 Crore Coverage",
    summary:
      `

Find out all about the best term insurance plans that provide Rs. 1 crore coverage. Also read about their benefits and features.



`
,
    author: "InsuranceDekho",
    date: "15 Sep 2023",
    image: "https://healthstatic.insurancedekho.com/prod/news/one_crore_term_insurance.webp",
  },
  
  
];

const TermNews = () => {
  return (
    <div className="news-page">
      <h1>Term Insurance News</h1>

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

export default  TermNews;
