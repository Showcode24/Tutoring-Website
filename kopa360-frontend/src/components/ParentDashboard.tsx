import { useState, useEffect } from "react"
import { Search, ChevronDown, ExternalLink } from "lucide-react"
import { getAuth } from "firebase/auth"
import { getFirestore, doc, getDoc } from "firebase/firestore"

function ParentDashboard() {
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
  }, [auth.currentUser, db])

  const fullName = `${firstName} ${lastName}`.trim() || "User"

  return (
    <div className="dashboard-container">
      <div className="row">
        <div className="col-md-8">
          {/* Boost Banner */}
          <div className="boost-banner">
            <h2>Find the Perfect Tutor for Your Child</h2>
            <h3>Browse through our qualified tutors and find the best match for your child's needs</h3>
            <button className="boost-button">Start Searching</button>
          </div>

          {/* Search Bar */}
          <div className="search-container position-relative mb-4">
            <Search className="search-icon" size={20} />
            <input type="text" className="search-input" placeholder="Search for tutors by subject or location" />
          </div>

          {/* Tutor Tabs */}
          <div className="job-tabs">
            <a href="#" className="job-tab active">
              Recommended Tutors
            </a>
            <a href="#" className="job-tab">
              My Requests
            </a>
            <a href="#" className="job-tab">
              Upcoming Sessions (2)
            </a>
          </div>

          {/* Tutor Listings */}
          <div className="job-list">
            <div className="job-card">
              <div className="job-header">
                <span className="job-time">Last active 2 hours ago</span>
                <div>
                  <button className="btn btn-link">
                    <i className="bi bi-bookmark"></i>
                  </button>
                </div>
              </div>
              <h3 className="job-title">Experienced Math Tutor (JSS - SSS)</h3>
              <div className="job-meta">₦3,500/hour · 5 years experience · 4.8 star rating</div>
              <p className="job-description">
                Dedicated math tutor with a passion for helping students excel in mathematics. Specializing in JSS and
                SSS levels, I use interactive methods to make learning engaging and effective...
              </p>
              <div className="skill-tags">
                <span className="skill-tag">Mathematics</span>
                <span className="skill-tag">Algebra</span>
                <span className="skill-tag">Geometry</span>
              </div>
              <div className="job-footer">
                <span>Identity Verified</span>
                <span>100+ hours tutored</span>
                <span>Lagos, Nigeria</span>
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
                <p>Parent</p>
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
              My Children
              <ChevronDown size={20} />
            </h5>
          </div>

          <div className="sidebar-section">
            <h5>
              Tutoring Preferences
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
              Scheduled Sessions
              <ExternalLink size={16} />
            </a>
            <a href="#" className="sidebar-item">
              Payment History
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

export default ParentDashboard

