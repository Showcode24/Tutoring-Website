import type React from "react"
import { useState, useEffect } from "react"

const edoLGAs = [
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

type LocationInfoProps = {
  onDataChange?: (data: { selectedLGA: string; state: string }) => void
  initialData?: { selectedLGA: string; state: string }
}

export default function LocationInfo({ onDataChange, initialData }: LocationInfoProps) {
  const [locationInfo, setLocationInfo] = useState({
    selectedLGA: initialData?.selectedLGA || "",
    state: initialData?.state || "Edo",
  })

  useEffect(() => {
    if (onDataChange) {
      onDataChange(locationInfo)
    }
  }, [locationInfo, onDataChange])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setLocationInfo((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <h2 className="form-title">Location</h2>
      <p className="form-description">Select your Local Government Area in Edo State</p>

      <div className="form-group">
        <label className="form-label" htmlFor="selectedLGA">
          Local Government Area
        </label>
        <select
          id="selectedLGA"
          name="selectedLGA"
          className="form-input"
          value={locationInfo.selectedLGA}
          onChange={handleChange}
        >
          <option value="">Select LGA</option>
          {edoLGAs.map((lga) => (
            <option key={lga} value={lga.toLowerCase()}>
              {lga}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="state">
          State
        </label>
        <input type="text" id="state" name="state" className="form-input" value={locationInfo.state} readOnly />
      </div>
    </div>
  )
}

