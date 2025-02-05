import type React from "react"
import { useState, useEffect } from "react"

type EducationInfoProps = {
  onDataChange?: (data: {
    qualification: string
    institution: string
    graduationYear: string
  }) => void
  initialData?: {
    qualification: string
    institution: string
    graduationYear: string
  }
}

export default function EducationInfo({ onDataChange, initialData }: EducationInfoProps) {
  const [educationInfo, setEducationInfo] = useState({
    qualification: initialData?.qualification || "",
    institution: initialData?.institution || "",
    graduationYear: initialData?.graduationYear || "",
  })

  useEffect(() => {
    if (onDataChange) {
      onDataChange(educationInfo)
    }
  }, [educationInfo, onDataChange])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setEducationInfo((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="education-info">
      <h2 className="h3 mb-3">Education Information</h2>
      <p className="text-muted mb-4">Please provide details about your educational background</p>

      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="qualification">
          Highest Qualification
        </label>
        <select
          className="form-select"
          id="qualification"
          name="qualification"
          value={educationInfo.qualification}
          onChange={handleChange}
          required
        >
          <option value="">Select your highest qualification</option>
          <option value="high-school">High School</option>
          <option value="bachelors">Bachelor's Degree</option>
          <option value="masters">Master's Degree</option>
          <option value="phd">Ph.D.</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="institution">
          Institution Name
        </label>
        <input
          type="text"
          className="form-control"
          id="institution"
          name="institution"
          placeholder="Enter the name of your institution"
          value={educationInfo.institution}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="graduationYear">
          Year of Graduation
        </label>
        <input
          type="number"
          className="form-control"
          id="graduationYear"
          name="graduationYear"
          placeholder="Enter your graduation year"
          min="1900"
          max={new Date().getFullYear()}
          value={educationInfo.graduationYear}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  )
}

