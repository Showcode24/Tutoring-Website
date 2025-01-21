import { useState } from "react"

// Form steps components
import PersonalInfo from "./steps/personal-info"
import ContactInfo from "./steps/contact-info"
import BankInfo from "./steps/bank-info"
import LocationInfo from "./steps/location-info"
import EducationInfo from "./steps/education-info"
import ExperienceInfo from "./steps/experience-info"
import SubjectsSelection from "./steps/subjects-selection"
import BioInfo from "./steps/bio-info"
import ReviewInfo from "./steps/review-info"
import SubmitInfo from "./steps/submit-info"

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 10

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />
      case 2:
        return <ContactInfo />
      case 3:
        return <BankInfo />
      case 4:
        return <LocationInfo />
      case 5:
        return <EducationInfo />
      case 6:
        return <ExperienceInfo />
      case 7:
        return <SubjectsSelection />
      case 8:
        return <BioInfo />
      case 9:
        return <ReviewInfo />
      case 10:
        return <SubmitInfo />
      default:
        return null
    }
  }

  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-muted small">
                    {currentStep}/{totalSteps}
                  </span>
                  <span className="text-muted small">5-10 min</span>
                </div>
                <div className="progress" style={{ height: "4px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    aria-valuenow={(currentStep / totalSteps) * 100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>

              {renderStep()}

              <div className="d-flex justify-content-between mt-4">
                {currentStep > 1 && (
                  <button className="btn btn-outline-primary" onClick={handleBack}>
                    Back
                  </button>
                )}
                {currentStep < totalSteps && (
                  <button
                    className="btn btn-primary"
                    onClick={handleNext}
                    style={{ marginLeft: currentStep === 1 ? "auto" : "0" }}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

