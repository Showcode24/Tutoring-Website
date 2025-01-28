import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { auth, db } from "../firebase"

export default function SignupForm() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    localGovernment: "Oredo",
    emailUpdates: true,
    termsAccepted: false,
    role: "parent"
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Create authentication user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )

      // Send verification email
      await sendEmailVerification(userCredential.user)

      // Create user document in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        localGovernment: formData.localGovernment,
        emailUpdates: formData.emailUpdates,
        role: formData.role,
        emailVerified: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })

      // Route based on role
      if (formData.role === "tutor") {
        navigate("/tutor-registration")
      } else {
        navigate("/parent-registration")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred during signup")
    } finally {
      setLoading(false)
    }
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
      <h1 className="signup-title">Sign up</h1>

      {error && <div className="error-message bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}

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
        <div className="role-selection mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">I am a:</label>
          <div className="flex gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="role"
                value="parent"
                checked={formData.role === "parent"}
                onChange={handleInputChange}
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">Parent</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="role"
                value="tutor"
                checked={formData.role === "tutor"}
                onChange={handleInputChange}
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">Tutor</span>
            </label>
          </div>
        </div>

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
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
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
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
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
            <input
              type="checkbox"
              name="emailUpdates"
              checked={formData.emailUpdates}
              onChange={handleInputChange}
            />
            <span className="custom-checkbox"></span>
            <span>Send me emails with tips on how to find Tutor that fits my needs.</span>
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

        <button
          type="submit"
          className="submit-button"
          disabled={!formData.termsAccepted || loading}
        >
          {loading ? "Creating account..." : "Create my account"}
        </button>

        <div className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </div>
      </form>
    </div>
  )
}