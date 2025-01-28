import { Search, ChevronDown, Edit2, ExternalLink } from 'lucide-react';

function ParentDashboard() {
  return (
    <div className="dashboard-container">
      <div className="row">
        <div className="col-md-8">
          {/* Boost Banner */}
          <div className="boost-banner">
            <h2>Stand Out to Parents and Students</h2>
            <h3>Enhanced Profiles get noticed much faster by clients looking for tutors</h3>
            <button className="boost-button">Boost Your Profile</button>
            {/* <img src="https://via.placeholder.com/200x150" alt="Boost illustration" className="boost-image" /> */}
          </div>

          {/* Search Bar */}
          <div className="search-container position-relative mb-4">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              className="search-input"
              placeholder="Search for tutoring gigs or students"
            />
          </div>

          {/* Job Tabs */}
          <div className="job-tabs">
            <a href="#" className="job-tab active">Best Matches</a>
            <a href="#" className="job-tab">Requests</a>
            <a href="#" className="job-tab">Appointments (2)</a>
          </div>

          {/* Tutoring Listings */}
          <div className="job-list">
            <div className="job-card">
              <div className="job-header">
                <span className="job-time">Posted 1 hour ago</span>
                <div>
                  <button className="btn btn-link"><i className="bi bi-bookmark"></i></button>
                </div>
              </div>
              <h3 className="job-title">Home Tutor Needed for Basic Math (JSS 2)</h3>
              <div className="job-meta">
                ₦3,000/hour · Beginner Level · 2 sessions per week
              </div>
              <p className="job-description">
                Looking for a patient tutor with a strong background in mathematics to help a student improve basic math skills. Sessions will be held in Benin City...
              </p>
              <div className="skill-tags">
                <span className="skill-tag">Mathematics</span>
                <span className="skill-tag">Patience</span>
                <span className="skill-tag">JSS Level</span>
              </div>
              <div className="job-footer">
                <span>Payment Verified</span>
                <span>₦20,000 spent</span>
                <span>Benin City, Edo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-header">
              {/* <img
                src="https://via.placeholder.com/48"
                alt="Profile"
                className="profile-image"
              /> */}
              <div className="profile-info">
                <h4>Edet Okonkwo</h4>
                <p>Experienced Math Tutor</p>
              </div>
            </div>
            <a href="#" className="text-success text-decoration-none mb-2 d-block">
              Complete your profile
            </a>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: '75%' }}></div>
            </div>
          </div>

          {/* Sidebar Sections */}
          <div className="sidebar-section">
            <h5>
              Promote Your Profile
              <ChevronDown size={20} />
            </h5>
            {/* <div className="sidebar-item">
              Availability badge
              <span className="d-flex align-items-center">
                Off
                <Edit2 size={16} className="ms-2 edit-icon" />
              </span>
            </div>
            <div className="sidebar-item">
              Boost your profile
              <span className="d-flex align-items-center">
                Off
                <Edit2 size={16} className="ms-2 edit-icon" />
              </span>
            </div> */}
          </div>

          {/* <div className="sidebar-section">
            <h5>
              Connects: 5
              <ChevronDown size={20} />
            </h5>
            <div className="d-flex justify-content-between mb-3">
              <a href="#" className="text-success">View details</a>
              <span className="text-muted">|</span>
              <a href="#" className="text-success">Buy Connects</a>
            </div>
          </div> */}

          <div className="sidebar-section">
            <h5>
              Preferences
              <ChevronDown size={20} />
            </h5>
          </div>

          {/* <div className="sidebar-section">
            <h5>
              Proposals
              <ChevronDown size={20} />
            </h5>
          </div> */}

          <div className="sidebar-section">
            <h5>
              Subject Catalog
              <ChevronDown size={20} />
            </h5>
          </div>

          <div className="sidebar-section">
            <a href="#" className="sidebar-item">
              Direct Bookings
              <ExternalLink size={16} />
            </a>
            <a href="#" className="sidebar-item">
              Payments
              <ExternalLink size={16} />
            </a>
            <a href="#" className="sidebar-item">
              Help Center
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentDashboard;
