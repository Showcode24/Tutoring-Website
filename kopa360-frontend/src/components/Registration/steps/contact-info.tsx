export default function ContactInfo() {
  return (
    <div>
      <h2 className="h3 mb-3">Contact Information</h2>
      <p className="text-muted mb-4">How can we reach you?</p>

      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="email">
          Email Address
        </label>
        <input id="email" type="email" className="form-input" placeholder="Enter your email address" />
      </div>

      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="phone">
          Phone Number
        </label>
        <input id="phone" type="tel" className="form-input" placeholder="Enter your phone number" />
      </div>

      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="address">
          Address
        </label>
        <textarea id="address" className="form-input" placeholder="Enter your address" rows={3}></textarea>
      </div>
    </div>
  )
}

