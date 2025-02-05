import type React from "react"
import { useState, useEffect } from "react"

type ContactInfoProps = {
  onDataChange?: (data: {
    email: string
    phoneNumber: string
    address: string
  }) => void
  initialData?: {
    email: string
    phoneNumber: string
    address: string
  }
}

export default function ContactInfo({ onDataChange, initialData }: ContactInfoProps) {
  const [contactInfo, setContactInfo] = useState({
    email: initialData?.email || "",
    phoneNumber: initialData?.phoneNumber || "",
    address: initialData?.address || "",
  })

  useEffect(() => {
    if (onDataChange) {
      onDataChange(contactInfo)
    }
  }, [contactInfo, onDataChange])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactInfo((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="contact-info">
      <h2 className="h3 mb-3">Contact Information</h2>
      <p className="text-muted mb-4">How can we reach you?</p>

      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-control"
          placeholder="Enter your email address"
          value={contactInfo.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          className="form-control"
          placeholder="Enter your phone number"
          value={contactInfo.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="address">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          className="form-control"
          placeholder="Enter your address"
          rows={3}
          value={contactInfo.address}
          onChange={handleChange}
          required
        ></textarea>
      </div>
    </div>
  )
}

