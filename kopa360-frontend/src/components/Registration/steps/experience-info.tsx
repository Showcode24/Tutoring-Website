export default function ExperienceInfo() {
  return (
    <div>
      <h2 className="h3 mb-3">Experience Information</h2>
      <p className="text-muted mb-4">Please provide details about your teaching experience</p>

      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="yearsOfExperience">
          Years of Teaching Experience
        </label>
        <input
          type="number"
          className="form-input"
          id="yearsOfExperience"
          placeholder="Enter your years of experience"
          min="0"
        />
      </div>

      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="previousSchools">
          Previous Schools (if any)
        </label>
        <textarea
          className="form-input"
          id="previousSchools"
          rows={3}
          placeholder="List the schools you've taught at previously"
        ></textarea>
      </div>

      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="specializations">
          Areas of Specialization
        </label>
        <input
          type="text"
          className="form-input"
          id="specializations"
          placeholder="Enter your teaching specializations"
        />
      </div>
    </div>
  )
}

