import React, { useState } from 'react';
import './About.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; 

const faqData = {
  General: [
    {
      question: 'What do you mean by Insurance?',
      answer:
        `Insurance is a contract which is presented as a policy to be used as a risk management tool to ensure financial protection at the time of crisis. Insurance helps an individual to ensure financial protection against losses that may arise during an unforeseen event. An insurance policy is a contract between an individual (policyholder) and an insurance company (Insurance provider), under which, the individual makes regular payments known as premiums to the insurance company which in return pays the sum assured in case an unforeseen event such as demise of the policyholder, 
        accident, damage to the vehicles or other possessions.`,
    },
    {
      question: 'How to make a claim in insurance?',
      answer: `

There are two ways in which you can make a claim:
Cashless claims:  Get in touch with your insurer and inform them about your claim. Depending on the type of insurance (motor/health), the insurer will guide you about the cashless claim settlement process. In case of motor insurance, the insurer shares the details of a nearby cashless workshop if available and you just have to pay your part of the liability to get your car/bike repaired. In case of health insurance, you can get in touch with your 
TPA (Third Party Administrator) help desk at the time of hospitalization for a cashless claim.`,
    },
    {
      question: 'Why is insurance important?',
      answer:  `Unfortunate events like accidents, illnesses, and natural disasters come without any warning and thus it is necessary for you to keep yourself and your loved ones shielded against such unforeseen happenings. One of the best and simplest ways of
 keeping yourself secured against these contingent events which may cause a financial loss is buying an insurance policy`,
    },
    {
      question: 'How Does Insurance Work?',
      answer: `
As mentioned earlier, insurance is a legal contract between the policyholder and the insurance provider. The insurance policy carries all the details about the aspects and conditions under which the insurance provider will pay out the insurance amount to the policyholder or their nominee in case an unforeseen event occurs. Insurance is a financial tool which helps in ensuring financial protection of yourself and your family. Generally the person who has purchased the policy also known as policyholder has to pay premiums for the coverage available 
under the insurance policy. Any person can seek insurance from an insurance company.`,
    },
  ],
  Car: [
    {
      question: 'What is a car insurance policy?',
      answer: `
It is an agreement between an insurance company and a car owner under which the former provides an insurance cover to the policyholder for financial damages incurred by his/her car in unforeseen events. Depending on the coverage, there are three types of car insurance plans - third party , standalone own-damage and 
comprehensive insurance. It's renewal online process provides instant e-Policy.`,
    },
      {
question: 'Why should I buy car insurance?',
      answer: `
There are a number of benefits of owning four wheeler insurance. Firstly, it helps you meet the legal requirement of owning at least a third party cover. Moreover, an insurance policy helps you meet financial liabilities that may arise towards a 
third party or own damages to your car due to a road accident or any other unfortunate event.`,
  },
  {
question: 'Is car insurance mandatory in India?',
      answer: `

As per the Indian Motor Tariff, every car owner in the country is compulsorily required to own at least a third party cover. Absence of a valid plan is a punishable offence which attracts
 a fine of Rs. 2,000 and/or imprisonment of up to 3 months for the first offence.`,
  },
   {
question: 'Can car insurance be transferred to the new owner at the purchase of a second hand four wheeler?',
      answer: `
Yes, the four wheeler insurance can be transferred from the old owner to the new owner in case the sale of a second-hand car. As per the Indian Motor Tariff, 
the policy transfer should be completed within 14 days from the car’s purchase date.`,
  },
  
  ],
  Bike: [{
question: 'What is a two wheeler insurance policy?',
      answer: `
A two wheeler insurance policy is an agreement between an insurance company and a bike owner wherein the insurance provider promises to cover any damage or loss sustained by the insured bike due to an accident, theft, fire, etc., based on the opted policy. Generally, 
the contract between insured and insurer is of a year which should be renewed every year.`,
  },
  {
question: 'Why should I purchase a two wheeler insurance policy?',
      answer: `
No matter which bike you own, you need to comply with some laws to ride it. To carry a bike insurance policy is the most important rule to drive a motorcycle / scooter as you need to adhere to the legal requirement of carrying at least a third party cover. Besides this, a policy also covers your financial liabilities which you may incur towards a third 
party or own damages sustained by your bike due to an accident or any unfortunate incident.`,
  },
  {
question: 'What are the different types of bike insurance plan?',
      answer: `

There are three types of two wheeler insurance plans such as third party
 two wheeler plan, standalone own damage, and comprehensive insurance plan.`,
  },
   {
question: 'What if my bike insurance policy gets expired?',
      answer: `
Every two-wheeler insurance policy has a date of expiry before which you should renew it to continue to avail it. However, if you fail to renew the policy on time, you still can renew it within the 90 days grace period from the expiry date. However, bike insurance renewal process is not possible after this period.
 As a result, you will have to buy a new insurance policy in that case.`,
  },
  

  ],
  Health: [
    {
question: 'What is a health insurance plan?',
      answer: `
Health insurance policy is an agreement whereby an insurance company agrees to undertake a guarantee to compensate the insured for medical expenses in case of a medical emergency. A health insurance policy protects the insured for several surgical expenses, critical illnesses,
 and daycare expenses, for a policy term, for up to the sum insured limit. `,
  },
    {
question: 'Why should I buy a health insurance plan?',
      answer: `
A health insurance policy not only protects the insured financially for future, but also offers relief in the present. Lifestyle habits such as drinking, smoking, or sedentary lifestyle invite health  issues, which can be minor or serious, may be expensive to treat. To stay financially protected in such times, you need a reliable health insurance plan that covers you at all times. Apart from this, buying a health insurance policy also reduces your overall tax liability by allowing you 
tax deductions on the premium paid, under Section 80D of the Income Tax Act, 1961.`,
  },
  {
question: 'Can I cancel my health insurance policy? If yes, will I get a refund for the same?',
      answer: `
Yes. You can cancel your health insurance policy. Every health insurance company provides you a free look period to understand the policy terms and conditions. During this period, if you find any objectionable clause in your health insurance policy, then you can cancel the policy and ask for a refund. 
Note that you will receive the refund only if no claim has been made during the policy term.`,
  },
   {
question: 'Can I purchase more than 1 health insurance plan? How are the claims settled in this case?',
      answer: `
Yes. You can be covered under more than one health insurance plan. In this case, the claims are settled as per the contribution clause, 
when the claim is higher than the sum insured for one health insurance policy.`,
  },
  
  ],
 
  Term: [

    {
question: 'Why should I choose a term insurance plan?',
      answer: `
Term Insurance is the most affordable type of life insurance plans. These plans provide high insurance cover at a nominal premium amount. Some term insurance plans also offer whole life cover benefits with which you get a life cover till 99 years of age. A term insurance plan helps you enjoy peace of
 mind and leave a financially stable future for your family in your absence. `,
  },
    {
question: 'What are the key features of a term insurance plan?',
      answer: `
Following are the key features of a term insurance plan - 
Budget Friendliness Long-term life protection Availability of riders`,
  },
  {
question: 'What are the different types of term insurance plans?',
      answer: `
Term insurance plans come in 5 different types namely Level Term Plans, Term Insurance With Return on Premiums (TROP), 
Increasing Term Plans, Decreasing Term Plans, and Convertible Plans.`,
  },
   {
question: 'Is suicide covered under term insurance ?',
      answer: `
Generally suicide is not covered under term insurance plans. In case the life assured commits a suicide within 12 months of issuance of the policy, the nominee receives a minimum of 80% of the total 
premiums paid till the date of death after deduction of applicable taxes and charges.`,
  },
  
  ],
  Investment: [

    {
question: 'How should I invest my future money?',
      answer: `
To invest your future money, it is essential to have a fair knowledge about your financial goals, if they are short term or long term, current and future expenses, number of dependents, etc. 
it will help you determine which type of investment plan is best for you.`,
  },
    {
question: 'Which is the best investment option with high returns?',
      answer: `
The best investment plans that give high returns are ULIPs and traditional investment plans. But, you must seek the help of your financial 
planner before investing in them, to balance your investment portfolio.`,
  },
  {
question: 'What is a Unit Linked Fund?',
      answer: `
In a Unit Linked Insurance Policy, the premium paid gets accumulated in the Unit Linked Fund, which is managed by the insurance company. It is invested in different equity and debt instruments 
to offer the dual benefit of a life cover and potential to get maximum benefits.  `,
  },
   {
question: 'What are the things to keep in mind before investing my money?',
      answer: `

Following are the things to keep in mind when investing money:
Identify your motive of investment It is not recommended to put all your money in one basket.
 Neither all the money should be invested Do not make any decision in a hurry`,
  },
  
  ],
  
};

const About = () => {
  const categories = Object.keys(faqData);
  const [activeCategory, setActiveCategory] = useState('General');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions About Insurance</h2>
      <p>Know why did they choose InsuranceDekho</p>

      {/* Tabs */}
      <div className="faq-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => {
              setActiveCategory(category);
              setExpandedIndex(null);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="faq-accordion">
        {faqData[activeCategory].length === 0 ? (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>No FAQs available.</p>
        ) : (
          faqData[activeCategory].map((item, idx) => (
            <div key={idx} className="faq-item">
              <div className="faq-question" onClick={() => toggleQuestion(idx)}>
                <div className="faq-index">{idx + 1}</div>
                <div className="faq-title">{item.question}</div>
                <div className="faq-icon">
                  {expandedIndex === idx ? <FiChevronUp /> : <FiChevronDown />}
                </div>
              </div>
              {expandedIndex === idx && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default About;
