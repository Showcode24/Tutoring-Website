import type React from "react"
import { useState, useEffect } from "react"

type BioInfoProps = {
  onDataChange?: (data: { bio: string; achievements: string[]; interests: string[] }) => void
  initialData?: { bio: string; achievements: string[]; interests: string[] }
}

export default function BioInfo({ onDataChange, initialData }: BioInfoProps) {
  const [bioInfo, setBioInfo] = useState({
    bio: initialData?.bio || "",
    achievements: initialData?.achievements || [],
    interests: initialData?.interests || [],
  })

  useEffect(() => {
    if (onDataChange) {
      onDataChange(bioInfo)
    }
  }, [bioInfo, onDataChange])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === "achievements" || name === "interests") {
      setBioInfo((prev) => ({ ...prev, [name]: value.split(",").map((item) => item.trim()) }))
    } else {
      setBioInfo((prev) => ({ ...prev, [name]: value }))
    }
  }

  return (
    <div>
      <h2 className="h3 mb-3">Bio Information</h2>
      <p className="text-muted mb-4">Tell us more about yourself</p>

      <div className="mb-3">
        <label className="form-label" htmlFor="bio">
          Your Bio
        </label>
        <textarea
          className="form-control"
          id="bio"
          name="bio"
          rows={5}
          placeholder="Write a brief description about yourself, your teaching philosophy, and what makes you unique as an educator"
          value={bioInfo.bio}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="achievements">
          Key Achievements
        </label>
        <input
          type="text"
          className="form-control"
          id="achievements"
          name="achievements"
          placeholder="List your key achievements, separated by commas"
          value={bioInfo.achievements.join(", ")}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="interests">
          Interests and Hobbies
        </label>
        <input
          type="text"
          className="form-control"
          id="interests"
          name="interests"
          placeholder="List your interests and hobbies, separated by commas"
          value={bioInfo.interests.join(", ")}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

