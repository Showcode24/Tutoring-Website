import React from 'react';
import { User, Mail, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  rating: number;
  hourlyRate: number;
  jobsCompleted: number;
  quote: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  rating,
  hourlyRate,
  jobsCompleted,
  quote,
  image
}) => (
  <div className="testimonial">
    <div className="testimonial-nav">
      <button className="nav-btn"><ChevronLeft /></button>
      <button className="nav-btn"><ChevronRight /></button>
    </div>

    <div className="testimonial-content">
      <img src={image} alt={name} className="testimonial-image" />
      <div className="testimonial-info">
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <div className="stats">
          <span className="rating">⭐ {rating.toFixed(1)}</span>
          <span className="rate">${hourlyRate.toFixed(2)}/hr</span>
          <span className="jobs">{jobsCompleted} jobs</span>
        </div>
        <blockquote>{quote}</blockquote>
      </div>
    </div>
  </div>
);

export default function Onboarding() {
  return (
    <div className="onboarding-container">
      <div className="onboarding-content">
        <h1>Hey Emmanuel. Ready for your next big opportunity?</h1>

        <div className="steps">
          <div className="step">
            <User size={24} />
            <p>Answer a few questions and start building your profile</p>
          </div>

          <div className="step">
            <Mail size={24} />
            <p>Apply for open roles or list services for clients to buy</p>
          </div>

          <div className="step">
            <Shield size={24} />
            <p>Get paid safely and know we're there to help</p>
          </div>
        </div>

        <button className="get-started-btn">Get started</button>

        <p className="time-note">
          It only takes 5-10 minutes and you can edit it later.<br />
          We'll save as you go.
        </p>
      </div>

      <Testimonial
        name="Sasheen M."
        role="Customer Experience Consultant"
        rating={5.0}
        hourlyRate={65.00}
        jobsCompleted={14}
        quote="Upwork has enabled me to increase my rates. I know what I'm bringing to the table and love the feeling of being able to help a variety of clients."
        image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
      />
    </div>
  );
}