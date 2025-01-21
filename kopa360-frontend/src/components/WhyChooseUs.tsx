import { FaRegEdit, FaRegBell } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BiLockOpenAlt } from "react-icons/bi";

export default function WhyChooseUs() {
  return (
    <div className="why-businesses">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content-left">
              <h2 className="title">Why they prefer Kopa 360</h2>

              <div className="features">
                <div className="feature-item">
                  <FaRegEdit className="feature-icon" size={24} />
                  <div className="feature-content">
                    <h3>Easy Job Posting</h3>
                    <p>Parents can create job posts in minutes to find the perfect tutor for their needs.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <IoLocationOutline className="feature-icon" size={24} />
                  <div className="feature-content">
                    <h3>Nearby Tutors</h3>
                    <p>Quickly find experienced tutors located close to you.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <BiLockOpenAlt className="feature-icon" size={24} />
                  <div className="feature-content">
                    <h3>Secure Payments</h3>
                    <p>Your payments are safe and secure, with options for flexible payment processing.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <FaRegBell className="feature-icon" size={24} />
                  <div className="feature-content">
                    <h3>24/7 Notifications</h3>
                    <p>Receive real-time updates and reminders for job applications, payments, and more.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="content-right">
              <div className="illustration-container">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="Business illustration"
                  className="d-none"
                />
                <div className="stats-card">
                  <h3>We're<br />the world's work<br />marketplace</h3>

                  <div className="stat-item">
                    <div className="stat-icon">★</div>
                    <div className="stat-content">
                      <h4>4.9/5</h4>
                      <p>Clients rate professionals on Kopa 360</p>
                    </div>
                  </div>

                  <div className="stat-item">
                    <div className="stat-icon">🏆</div>
                    <div className="stat-content">
                      <h4>Award winner</h4>
                      <p>G2's 2021 Best Software Awards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
