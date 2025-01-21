import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    localGovernment: "Oredo",
    emailUpdates: true,
    termsAccepted: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const edoLocalGovernments = [
    "Akoko-Edo",
    "Egor",
    "Esan Central",
    "Esan North-East",
    "Esan South-East",
    "Esan West",
    "Etsako Central",
    "Etsako East",
    "Etsako West",
    "Igueben",
    "Ikpoba-Okha",
    "Oredo",
    "Orhionmwon",
    "Ovia North-East",
    "Ovia South-West",
    "Owan East",
    "Owan West",
    "Uhunmwonde",
  ]

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign up to hire talent</h1>

      <div className="social-buttons">
        <button className="social-button apple-button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple logo"
            className="social-icon"
          />
          Continue with Apple
        </button>
        <button className="social-button google-button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google logo"
            className="social-icon"
          />
          Continue with Google
        </button>
      </div>

      <div className="divider">
        <span>or</span>
      </div>

      <form onSubmit={handleSubmit} className="signup-form">
        <div className="name-fields">
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Work email address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>

        <div className="form-group password-group">
          <label htmlFor="password">Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password (8 or more characters)"
              value={formData.password}
              onChange={handleInputChange}
              required
              minLength={8}
            />
            <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="localGovernment">Local Government in Edo State</label>
          <div className="select-wrapper">
            <select
              id="localGovernment"
              name="localGovernment"
              value={formData.localGovernment}
              onChange={handleInputChange}
              required
            >
              {edoLocalGovernments.map((lg) => (
                <option key={lg} value={lg}>
                  {lg}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input type="checkbox" name="emailUpdates" checked={formData.emailUpdates} onChange={handleInputChange} />
            <span className="custom-checkbox"></span>
            <span>Send me emails with tips on how to find talent that fits my needs.</span>
          </label>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
              required
            />
            <span className="custom-checkbox"></span>
            <span>
              Yes, I understand and agree to the Kopa360 <a href="/terms">Terms of Service</a>, including the
              <a href="/user-agreement">User Agreement</a> and <a href="/privacy">Privacy Policy</a>.
            </span>
          </label>
        </div>

        <button type="submit" className="submit-button" disabled={!formData.termsAccepted}>
          Create my account
        </button>

        <div className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </div>
      </form>
    </div>
  )
}

