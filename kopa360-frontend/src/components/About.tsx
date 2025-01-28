import { useState } from 'react';
import { Edit, Shield, UserCheck } from 'react-feather';

const SignupPage = () => {
  const [userType, setUserType] = useState<'freelancer' | 'client'>('freelancer');

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Left Section */}
        <div className="col-md-4 bg-mint position-relative">
          <div className="signup-form-container p-4">
            <div className="card border-0 bg-white rounded-4 p-4 shadow-sm">
              <h2 className="text-center mb-4">Join us for free</h2>

              <div className="user-type-toggle mb-4">
                <div className="d-flex justify-content-between gap-3">
                  <button
                    className={`toggle-btn ${userType === 'freelancer' ? 'active' : ''}`}
                    onClick={() => setUserType('freelancer')}
                  >
                    <svg className="user-icon" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Freelancer
                  </button>
                  <button
                    className={`toggle-btn ${userType === 'client' ? 'active' : ''}`}
                    onClick={() => setUserType('client')}
                  >
                    <svg className="user-icon" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Client
                  </button>
                </div>
              </div>

              <button className="btn btn-success w-100 create-account-btn">
                Create account
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-8">
          <div className="content-container p-5">
            <h1 className="display-5 fw-bold mb-5">
              Boost Your Learning Game, Effortlessly
            </h1>

            <div className="benefits-list">
              <div className="benefit-item mb-4">
                <div className="benefit-icon">
                  <UserCheck size={24} />
                </div>
                <div className="benefit-content">
                  <h3>No fees to get started</h3>
                  <p className="text-muted">
                    Sign up, browse tutor profiles, explore available courses, or schedule a consultation at your convenience.
                  </p>
                </div>
              </div>

              <div className="benefit-item mb-4">
                <div className="benefit-icon">
                  <Edit size={24} />
                </div>
                <div className="benefit-content">
                  <h3>Post a tutoring request and connect with top educators</h3>
                  <p className="text-muted">
                    Finding the right tutor doesn’t have to be complicated. Post a request or let us help you find the perfect match!
                  </p>
                </div>
              </div>

              <div className="benefit-item mb-5">
                <div className="benefit-icon">
                  <Shield size={24} />
                </div>
                <div className="benefit-content">
                  <h3>Work with the best—without overspending</h3>
                  <p className="text-muted">
                    Kopa 360 ensures quality tutoring at affordable rates, with low service fees so you can focus on learning.
                  </p>
                </div>
              </div>

              <div className="cta-buttons">
                <button className="btn btn-success me-3">
                  Sign up for free
                </button>
                <button className="btn btn-outline-success">
                  Learn how to hire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

