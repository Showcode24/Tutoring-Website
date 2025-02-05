import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"

import { collection, addDoc } from "firebase/firestore"

import { db } from "../firebase"
import Header from "../components/Header"

interface FormData {
  fullName: string
  contactNumber: string
  email: string
  stateOfService: string
  callUpNumber: string
  batchStream: string
  motivation: string
  impact: string
  skills: string[]
  otherSkills: string
  interests: string[]
  termsAccepted: boolean
  emailUpdates: boolean
}

const states = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe", "Imo",
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa",
  "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
  "Yobe", "Zamfara",
]

const batchStreams = [
  "Batch A Stream 1", "Batch A Stream 2", "Batch B Stream 1",
  "Batch B Stream 2", "Batch C Stream 1", "Batch C Stream 2",
]

const skillsList = ["Leadership", "Project Management", "Public Speaking", "Graphic Design"]

const interestsList = ["Community Development", "Volunteering", "Mentorship", "Entrepreneurship"]

export default function InnovationBox() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true)
    setSubmitMessage("Submitting application...")
    window.location.href = 'https://chat.whatsapp.com/LbttK9Vw7hl18XaPRjDkzU'

    try {
      console.log("Starting file upload process...")

      // Prepare data for Firestore
      const applicationData = {
        batchStream: data.batchStream,
        callUpNumber: data.callUpNumber,
        contactNumber: data.contactNumber,
        email: data.email,
        emailUpdates: data.emailUpdates,
        firstName: data.fullName,
        impact: data.impact,
        interests: data.interests,
        motivation: data.motivation,
        otherSkills: [data.otherSkills],
        skills: data.skills,
        stateOfService: data.stateOfService,
        submittedAt: new Date().toISOString(),
        termsAccepted: data.termsAccepted
      }

      console.log("Prepared application data:", applicationData)

      console.log("Adding document to Firestore...")
      const docRef = await addDoc(collection(db, "applications"), applicationData)
      console.log("Document written with ID: ", docRef.id)

      setSubmitMessage("Application submitted successfully!")

      // Reset form fields after submission
      reset()
    } catch (error) {
      console.error("Error submitting application:", error)
      setSubmitMessage("An error occurred while submitting your application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="header-innovation mt-5">
          <h1>Welcome to the Winner's Circle!</h1>
          <p>Begin your journey of impactful service and personal growth</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Personal Information */}
          <section className="section-innovation">
            <h2>Personal Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" {...register("fullName", { required: "Full name is required" })} />
                {errors.fullName && <span className="error">{errors.fullName.message}</span>}
              </div>
              <div className="form-group">
                <label>Contact Number *</label>
                <input type="tel" {...register("contactNumber", { required: "Contact number is required" })} />
                {errors.contactNumber && <span className="error">{errors.contactNumber.message}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" {...register("email", { required: "Email is required" })} />
                {errors.email && <span className="error">{errors.email.message}</span>}
              </div>
              <div className="form-group">
                <label>State of Service *</label>
                <select {...register("stateOfService", { required: "State of service is required" })}>
                  <option value="">Select a state</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.stateOfService && <span className="error">{errors.stateOfService.message}</span>}
              </div>
            </div>
          </section>

          {/* Service Information */}
          <section className="section-innovation">
            <h2>Service Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label>NYSC Call-Up Number *</label>
                <input type="text" {...register("callUpNumber", { required: "Call-up number is required" })} />
                {errors.callUpNumber && <span className="error">{errors.callUpNumber.message}</span>}
              </div>
              <div className="form-group">
                <label>Batch/Stream *</label>
                <select {...register("batchStream", { required: "Batch/Stream is required" })}>
                  <option value="">Select Batch/Stream</option>
                  {batchStreams.map((batch) => (
                    <option key={batch} value={batch}>
                      {batch}
                    </option>
                  ))}
                </select>
                {errors.batchStream && <span className="error">{errors.batchStream.message}</span>}
              </div>
            </div>
          </section>

          {/* Motivation and Vision */}
          <section className="section-innovation">
            <h2>Motivation and Vision</h2>
            <div className="form-group">
              <label>Why do you want to join the Winner's Circle? *</label>
              <textarea {...register("motivation", { required: "This field is required" })} rows={4} />
              {errors.motivation && <span className="error">{errors.motivation.message}</span>}
            </div>
            <div className="form-group">
              <label>What impact do you intend to make during your service year? *</label>
              <textarea {...register("impact", { required: "This field is required" })} rows={4} />
              {errors.impact && <span className="error">{errors.impact.message}</span>}
            </div>
          </section>

          {/* Skills and Interests */}
          <section className="section-innovation">
            <h2>Skills and Interests</h2>
            <div className="form-group">
              <label>Key Skills</label>
              <div className="checkbox-list">
                {skillsList.map((skill) => (
                  <div key={skill} className="checkbox-item">
                    <input type="checkbox" id={`skill-${skill}`} value={skill} {...register("skills")} />
                    <label htmlFor={`skill-${skill}`}>{skill}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Other Skills</label>
              <input type="text" {...register("otherSkills")} placeholder="Specify other skills..." />
            </div>
            <div className="form-group">
              <label>Areas of Interest</label>
              <div className="checkbox-list">
                {interestsList.map((interest) => (
                  <div key={interest} className="checkbox-item">
                    <input type="checkbox" id={`interest-${interest}`} value={interest} {...register("interests")} />
                    <label htmlFor={`interest-${interest}`}>{interest}</label>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Declaration */}
          <section className="section-innovation">
            <h2>Declaration</h2>
            <div className="checkbox-list">
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  {...register("termsAccepted", { required: "You must accept the terms and conditions" })}
                />
                <label htmlFor="termsAccepted">I agree to the terms and conditions of the Winner's Circle *</label>
              </div>
              {errors.termsAccepted && <span className="error">{errors.termsAccepted.message}</span>}
              <div className="checkbox-item">
                <input type="checkbox" id="emailUpdates" {...register("emailUpdates")} />
                <label htmlFor="emailUpdates">I would like to receive email updates and notifications</label>
              </div>
            </div>
          </section>

          {submitMessage && <div className="submit-message">{submitMessage}</div>}

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </>
  )
}
