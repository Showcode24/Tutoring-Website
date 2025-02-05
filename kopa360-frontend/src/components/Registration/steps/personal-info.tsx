import type React from "react"
import { useState, useEffect } from "react"

type PersonalInfoProps = {
  onDataChange?: (data: { fullName: string; gender: string }) => void
  initialData?: { fullName: string; gender: string }
}

export default function PersonalInfo({ onDataChange, initialData }: PersonalInfoProps) {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: initialData?.fullName || "",
    gender: initialData?.gender || "",
  })

  useEffect(() => {
    if (onDataChange) {
      onDataChange(personalInfo)
    }
  }, [personalInfo, onDataChange])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setPersonalInfo((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <div>
      <h2 className="h3 mb-3">Personal Information</h2>
      <p className="text-muted mb-4">Please provide your basic information</p>

      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="fullName">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          className="form-input search-input"
          placeholder="Enter your full name"
          value={personalInfo.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label d-block">Gender</label>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={personalInfo.gender === "male"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={personalInfo.gender === "female"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </div>
    </div>
  )
}

