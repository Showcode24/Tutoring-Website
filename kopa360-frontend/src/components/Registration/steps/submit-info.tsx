import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAuth } from "firebase/auth"
import { getFirestore, doc, getDoc } from "firebase/firestore"

type SubmitInfoProps = {
  onSubmit: () => void
}

export default function SubmitInfo({ onSubmit }: SubmitInfoProps) {
  const [agreed, setAgreed] = useState(false)
  const navigate = useNavigate()
  const auth = getAuth()
  const db = getFirestore()

  const handleSubmit = async () => {
    if (!agreed) {
      alert("Please agree to the terms and conditions before submitting.")
      return
    }

    try {
      const user = auth.currentUser
      if (!user) {
        throw new Error("No user is signed in")
      }

      // Call the onSubmit prop function
      await onSubmit()

      // Fetch the user's role from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid))
      if (userDoc.exists()) {
        const userData = userDoc.data()
        const userRole = userData.role

        // Route based on user role
        if (userRole === "tutor") {
          navigate("/tutor-dashboard")
        } else if (userRole === "parent") {
          navigate("/parent-dashboard")
        } else {
          throw new Error("Invalid user role")
        }
      } else {
        throw new Error("User document not found")
      }
    } catch (error) {
      console.error("Error submitting application:", error)
      alert("An error occurred while submitting your application. Please try again.")
    }
  }

  return (
    <div className="text-center">
      <h2 className="h3 mb-3">Submit Your Application</h2>
      <p className="text-muted mb-4">You're almost done! Click the button below to submit your application.</p>

      <div className="mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="termsAgreement"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="termsAgreement">
            I agree to the terms and conditions
          </label>
        </div>
      </div>

      <button className="btn btn-primary btn-lg" onClick={handleSubmit}>
        Submit Application
      </button>

      <p className="mt-3 text-muted small">
        By clicking "Submit Application", you confirm that all the information provided is accurate and complete.
      </p>
    </div>
  )
}

