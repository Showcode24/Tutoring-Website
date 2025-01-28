import { useState } from "react";

// Form steps components
import PersonalInfo from "./steps/personal-info";
import ContactInfo from "./steps/contact-info";
import BankInfo from "./steps/bank-info";
import LocationInfo from "./steps/location-info";
import EducationInfo from "./steps/education-info";
import ExperienceInfo from "./steps/experience-info";
import SubjectsSelection from "./steps/subjects-selection";
import BioInfo from "./steps/bio-info";
import ReviewInfo from "./steps/review-info";
import SubmitInfo from "./steps/submit-info";

export default function TutorRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <ContactInfo />;
      case 3:
        return <BankInfo />;
      case 4:
        return <LocationInfo />;
      case 5:
        return <EducationInfo />;
      case 6:
        return <ExperienceInfo />;
      case 7:
        return <SubjectsSelection />;
      case 8:
        return <BioInfo />;
      case 9:
        return <ReviewInfo />;
      case 10:
        return <SubmitInfo />;
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center p-5">
      <div className="w-100 text-left mb-4">
        {renderStep()}
      </div>

      <div className="w-100 mt-4">
        <div className="progress" style={{ height: "4px" }}>
          <div
            className={`progress-bar ${currentStep < 5 ? 'progress-bar-primary' : currentStep < 8 ? 'progress-bar-success' : 'progress-bar-danger'
              }`}
            role="progressbar"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            aria-valuenow={(currentStep / totalSteps) * 100}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>

      <div className="d-flex justify-content-between w-100 mt-4">
        {currentStep > 1 && (
          <button className="btn btn-outline-secondary" onClick={handleBack}>
            Back
          </button>
        )}
        {currentStep < totalSteps ? (
          <button
            className="btn btn-primary"
            onClick={handleNext}
            style={{ marginLeft: currentStep === 1 ? "auto" : "0" }}
          >
            Next
          </button>
        ) : (
          <button className="btn btn-success" onClick={() => alert("Form submitted!")}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
