export default function BankInfo() {
  return (
    <div>
      <h2 className="form-title">Bank Information</h2>
      <p className="form-description">Please provide your banking details</p>

      <div className="form-group">
        <label className="form-label" htmlFor="accountName">
          Account Name
        </label>
        <input id="accountName" type="text" className="form-input" placeholder="Enter account name" />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="accountNumber">
          Account Number
        </label>
        <input
          id="accountNumber"
          type="text"
          className="form-input"
          placeholder="Enter account number"
          maxLength={10}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="bankName">
          Bank Name
        </label>
        <input id="bankName" type="text" className="form-input" placeholder="Enter bank name" />
      </div>
    </div>
  )
}

