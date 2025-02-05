import { useState, useEffect } from "react"
import { Search, ChevronDown, ExternalLink } from "lucide-react"
import { getAuth } from "firebase/auth"
import { getFirestore, doc, getDoc } from "firebase/firestore"

function TutorDashboard() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const auth = getAuth()
  const db = getFirestore()

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid))
        if (userDoc.exists()) {
          const userData = userDoc.data()
          setFirstName(userData.firstName || "")
          setLastName(userData.lastName || "")
        }
      }
    }

    fetchUserData()
  }, [auth.currentUser, db]) // Added db to dependencies

  const fullName = `${firstName} ${lastName}`.trim() || "User"

  return (
    <div className="dashboard-container">
      <div className="row">
        <div className="col-md-8">
          {/* Boost Banner */}
          <div className="boost-banner">
            <h2>Stand Out to Parents and Students</h2>
            <h3>Enhanced Profiles get noticed much faster by clients looking for tutors</h3>
            <button className="boost-button">Boost Your Profile</button>
          </div>

          {/* Search Bar */}
          <div className="search-container position-relative mb-4">
            <Search className="search-icon" size={20} />
            <input type="text" className="search-input" placeholder="Search for tutoring gigs or students" />
          </div>

          {/* Job Tabs */}
          <div className="job-tabs">
            <a href="#" className="job-tab active">
              Best Matches
            </a>
            <a href="#" className="job-tab">
              Requests
            </a>
            <a href="#" className="job-tab">
              Appointments (2)
            </a>
          </div>

          {/* Tutoring Listings */}
          <div className="job-list">
            <div className="job-card">
              <div className="job-header">
                <span className="job-time">Posted 1 hour ago</span>
                <div>
                  <button className="btn btn-link">
                    <i className="bi bi-bookmark"></i>
                  </button>
                </div>
              </div>
              <h3 className="job-title">Home Tutor Needed for Basic Math (JSS 2)</h3>
              <div className="job-meta">₦3,000/hour · Beginner Level · 2 sessions per week</div>
              <p className="job-description">
                Looking for a patient tutor with a strong background in mathematics to help a student improve basic math
                skills. Sessions will be held in Benin City...
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
              <div className="profile-info">
                <h4>{fullName}</h4>
                <p>Experienced Math Tutor</p>
              </div>
            </div>
            <a href="#" className="text-success text-decoration-none mb-2 d-block">
              Complete your profile
            </a>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: "75%" }}></div>
            </div>
          </div>

          {/* Sidebar Sections */}
          <div className="sidebar-section">
            <h5>
              Promote Your Profile
              <ChevronDown size={20} />
            </h5>
          </div>

          <div className="sidebar-section">
            <h5>
              Preferences
              <ChevronDown size={20} />
            </h5>
          </div>

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
  )
}

export default TutorDashboard

