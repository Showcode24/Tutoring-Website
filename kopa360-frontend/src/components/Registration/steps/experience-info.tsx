import type React from "react"
import { useState, useEffect } from "react"

type ExperienceInfoProps = {
  onDataChange?: (data: {
    yearsOfExperience: string
    previousSchools: string[]
    specializations: string[]
  }) => void
  initialData?: {
    yearsOfExperience: string
    previousSchools: string[]
    specializations: string[]
  }
}

export default function ExperienceInfo({ onDataChange, initialData }: ExperienceInfoProps) {
  const [experienceInfo, setExperienceInfo] = useState({
    yearsOfExperience: initialData?.yearsOfExperience || "",
    previousSchools: initialData?.previousSchools || [],
    specializations: initialData?.specializations || [],
  })

  useEffect(() => {
    if (onDataChange) {
      onDataChange(experienceInfo)
    }
  }, [experienceInfo, onDataChange])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === "previousSchools" || name === "specializations") {
      setExperienceInfo((prev) => ({
        ...prev,
        [name]: value
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== ""),
      }))
    } else {
      setExperienceInfo((prev) => ({ ...prev, [name]: value }))
    }
  }

  return (
    <div className="experience-info">
      <h2 className="h3 mb-3">Experience Information</h2>
      <p className="text-muted mb-4">Please provide details about your teaching experience</p>

      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="yearsOfExperience">
          Years of Teaching Experience
        </label>
        <input
          type="number"
          className="form-control"
          id="yearsOfExperience"
          name="yearsOfExperience"
          placeholder="Enter your years of experience"
          min="0"
          value={experienceInfo.yearsOfExperience}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="previousSchools">
          Previous Schools (if any)
        </label>
        <textarea
          className="form-control"
          id="previousSchools"
          name="previousSchools"
          rows={3}
          placeholder="List the schools you've taught at previously, separated by commas"
          value={experienceInfo.previousSchools.join(", ")}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="specializations">
          Areas of Specialization
        </label>
        <input
          type="text"
          className="form-control"
          id="specializations"
          name="specializations"
          placeholder="Enter your teaching specializations, separated by commas"
          value={experienceInfo.specializations.join(", ")}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

