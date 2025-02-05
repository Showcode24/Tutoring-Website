import type React from "react"
import { useState, useEffect } from "react"

type BankInfoProps = {
  onDataChange?: (data: {
    accountName: string
    accountNumber: string
    bankName: string
  }) => void
  initialData?: {
    accountName: string
    accountNumber: string
    bankName: string
  }
}

export default function BankInfo({ onDataChange, initialData }: BankInfoProps) {
  const [bankInfo, setBankInfo] = useState({
    accountName: initialData?.accountName || "",
    accountNumber: initialData?.accountNumber || "",
    bankName: initialData?.bankName || "",
  })

  useEffect(() => {
    if (onDataChange) {
      onDataChange(bankInfo)
    }
  }, [bankInfo, onDataChange])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBankInfo((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="bank-info">
      <h2 className="form-title">Bank Information</h2>
      <p className="form-description">Please provide your banking details</p>

      <div className="form-group mb-3">
        <label className="form-label" htmlFor="accountName">
          Account Name
        </label>
        <input
          id="accountName"
          name="accountName"
          type="text"
          className="form-control"
          placeholder="Enter account name"
          value={bankInfo.accountName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group mb-3">
        <label className="form-label" htmlFor="accountNumber">
          Account Number
        </label>
        <input
          id="accountNumber"
          name="accountNumber"
          type="text"
          className="form-control"
          placeholder="Enter account number"
          maxLength={10}
          value={bankInfo.accountNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group mb-3">
        <label className="form-label" htmlFor="bankName">
          Bank Name
        </label>
        <input
          id="bankName"
          name="bankName"
          type="text"
          className="form-control"
          placeholder="Enter bank name"
          value={bankInfo.bankName}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  )
}

