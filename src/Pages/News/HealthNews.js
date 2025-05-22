import React from "react";
import "./CarNews.css";

const newsArticles = [
  {
    id: 1,
    title: "Star Health vs Care Health Insurance: Selecting the Superior Plan",
    summary:
      `

Discover the distinctions between Care and Star health insurance plans. Make an informed decision with our detailed comparison. Compare Star health insurance plans and care health insurance plans for ...




`,

    author: "Kritika Singh",
    date: "16 Oct 2023",
    image: "https://healthstatic.insurancedekho.com/prod/articles/star_vs_care.webp",
  },
  {
    id: 2,
    title: "Things You Should Know About World Thyroid Day 2024 ",
    summary:
      `

Know all details related to World Thyroid Day 2024






`,
    author: "Rupanjali Mitra Basu",
    date: "19 May 2023",
    image: "https://healthstatic.insurancedekho.com/prod/articles/small_world_thyroid_day.jpg",
  },
    {
    id: 3,
    title: "Importance of Getting Health Insurance That Covers Home Treatmen ",
    summary:
      `


t
With COVID-19 pandemic spread far and wide, and the scenario repeated in every state and with larger and larger pockets of the population.Find out about getting health insurance covering home treatmen...









`,
    author: "Shrida Gulati",
    date: "02 Jan 2022.",
    image: "https://healthstatic.insurancedekho.com/prod/articles/Untitled-2_0001_Layer_19.jpg",
  },
  {
    id: 4,
    title: "Protect Yourself from Omicron",
    summary:
      `


Omicron is delivering a loud and obvious message that this virus is capable of considerably more alterations and diversity than most people ever imagined. Find out more about omicron virus.







`
,
    author: "Shrida Gulati",
    date: "01 Jan 2022",
    image: "https://healthstatic.insurancedekho.com/prod/articles/Untitled-2_0003_Layer_17.jpg",
  },
  {
    id: 5,
    title: "Benefits of Arogya Premier Policy Offered by SBI General Insurance Company",
    summary:
      `

SBI General Insurance Company offers several health insurance plans that cater to various requirements of people. One such useful policy is Arogya Premier Policy that offers several benefits to the in...







`,
    author: "KANIKA WADHWA",
    date: "27 Nov 2021",
    image: "https://healthstatic.insurancedekho.com/prod/articles/Untitled-3_0042_Why_should_you_buy_Care_Health_Insurance_plans.jpg",
  },
  
];

const HealthNews = () => {
  return (
    <div className="news-page">
      <h1>Health Insurance News</h1>

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

export default  HealthNews;
