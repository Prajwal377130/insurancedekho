import React from "react";
import "./CarNews.css";

const newsArticles = [
  {
    id: 1,
    title: "How to Claim Leave Travel Allowance (LTA) in Simple Steps?",
    summary:
      `



Want to claim Leave Travel Allowance (LTA)? Follow this step-by-step guide to understand eligibility, documents, tax benefits, and claim process in India.








`,

    author: "Saad Ahmad",
    date: "14 May 2025",
    image: "https://staticimg.insurancedekho.com/strapi/Small_How_to_Claim_Leave_Travel_Allowance_LTA_in_Simple_Steps_13835a7f8b.webp",
  },
  {
    id: 2,
    title: `TDS Rates Chart: Plan Your Investments Wisely` ,
    summary:
      `


Stay updated with the latest TDS rates. Use this chart to plan your taxes, manage investments wisely, and ensure smooth financial compliance.










`,
    author: "Anurag Kumar",
    date: "13 May 2025",
    image: "https://staticimg.insurancedekho.com/strapi/Small_TDS_Rates_Chart_Plan_Your_Investments_Wisely_d55069cc24.webp",
  },
    {
    id: 3,
    title: "13 Ways to Start Your Investment Journey in 2025 ",
    summary:
      `




Explore the best investment options in India for 2025, from stocks to real estate. Compare risks, returns, and tax benefits to make smart financial decisions.







`,
    author: "Anurag Kumar",
    date: "08 May 2025",
    image: "https://staticimg.insurancedekho.com/strapi/Small_13_Ways_to_Start_Your_Investment_6ab852137b.webp",
  },
  {
    id: 4,
    title: "Income from Other Sources: Tax Rules, Deductions & Examples Explained",
    summary:
      `


Understand how 'Income from Other Sources' is taxed under Indian law. Get insights on applicable tax rates, deductions, exemptions, and practical examples for better clarity.



`
,
    author: "Anurag Kumar",
    date: "06 May 2025",
    image: "https://staticimg.insurancedekho.com/strapi/Small_How_to_Raise_EPF_related_Complaints_or_Grievance_on_EPFO_Portal_41870ab3c9.webp",
  },
  {
    id: 5,
    title: "Section 194DA: TDS Rates, Procedure, Exemption & Deductions",
    summary:
      `



Learn all about Section 194DA of the Income Tax Act, covering TDS rates on life insurance payouts, exemption rules, deduction eligibility, and filing procedures in India.



`,
    author: "Saad Ahmad",
    date: "06 May 2025",
    image: "https://staticimg.insurancedekho.com/strapi/Small_Section_194_DA_TDS_Rates_Procedure_Exemption_and_Deductions_4c5404db2d.webp",
  },
  
];

const InvestmentNews = () => {
  return (
    <div className="news-page">
      <h1>Investment Insurance News</h1>

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

export default  InvestmentNews;
