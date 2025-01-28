import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { sendEmailVerification } from "firebase/auth"

export default function VerifyEmail() {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(60)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login")
      } else if (user.emailVerified) {
        const role = localStorage.getItem("userRole") || "parent"
        navigate(role === "tutor" ? "/tutor-registration" : "/parent-registration")
      }
    })

    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => {
      unsubscribe()
      clearInterval(timer)
    }
  }, [navigate])

  const handleResendEmail = async () => {
    const user = auth.currentUser
    if (user) {
      try {
        await sendEmailVerification(user)
        setCountdown(60)
      } catch (error) {
        console.error("Error sending verification email:", error)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Verify your email</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We've sent a verification email to your inbox. Please verify your email to continue.
          </p>
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={handleResendEmail}
            disabled={countdown > 0}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {countdown > 0 ? `Resend email in ${countdown}s` : "Resend verification email"}
          </button>
        </div>
      </div>
    </div>
  )
}

