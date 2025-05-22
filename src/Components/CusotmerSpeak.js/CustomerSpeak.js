import React from 'react';
import Slider from 'react-slick';
import './CustomerSpeak.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    title: 'Excellent Guidance',
    content:
      'When my bike was stolen, I was worried about the expenses. My friend recommended InsuranceDekho, and they provided excellent guidance on how to claim my ICICI bike insurance...',
    stars: 5,
    policy: 'ICICI Lombard bike Insurance',
    name: 'Simran Kaur',
    date: '2nd July, 2024',
  },
  {
    title: 'Accident Claim Settlement',
    content:
      'I was involved in a minor accident where the front bumper of my car was damaged. HDFC ERGO’s claim process was smooth and efficient. My claim was approved within 24 hours!',
    stars: 5,
    policy: 'HDFC ERGO car Insurance',
    name: 'Arundhati Raj Gupta',
    date: '2nd July, 2024',
  },
  {
    title: 'Quick Service',
    content:
      'The support team was very helpful in guiding me through my health insurance selection and helped me choose the best option.',
    stars: 4,
    policy: 'Star Health Insurance',
    name: 'Rohit Sharma',
    date: '10th August, 2024',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const CustomerSpeak = () => {
  return (
    <div className="testimonial-slider-wrapper">
      <h2 className="testimonial-slider-title">Customer's Speak</h2>
      <p className="testimonial-slider-subtitle">Know why they chose InsuranceDekho!</p>

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div className="testimonial-slide" key={index}>
            <div className="testimonial-card">
              <div className="quote-icon">❝</div>
              <h4>{item.title}</h4>
              <p className="content">{item.content}</p>
              <div className="stars">
                {'★'.repeat(item.stars)}{'☆'.repeat(5 - item.stars)}
              </div>
              <div className="footer">
                <strong>{item.policy}</strong>
                <div>By {item.name}</div>
                <div>On: {item.date}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerSpeak;
