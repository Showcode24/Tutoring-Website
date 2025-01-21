export default function EducationInfo() {
  return (
    <div>
      <h2 className="h3 mb-3">Education Information</h2>
      <p className="text-muted mb-4">Please provide details about your educational background</p>

      <div className="mb-3">
        <label className="form-label" htmlFor="qualification">
          Highest Qualification
        </label>
        <select className="form-select" id="qualification">
          <option value="">Select your highest qualification</option>
          <option value="high-school">High School</option>
          <option value="bachelors">Bachelor's Degree</option>
          <option value="masters">Master's Degree</option>
          <option value="phd">Ph.D.</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="institution">
          Institution Name
        </label>
        <input type="text" className="form-control" id="institution" placeholder="Enter the name of your institution" />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="graduationYear">
          Year of Graduation
        </label>
        <input
          type="number"
          className="form-control"
          id="graduationYear"
          placeholder="Enter your graduation year"
          min="1900"
          max={new Date().getFullYear()}
        />
      </div>
    </div>
  )
}

