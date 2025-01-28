export default function BioInfo() {
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
          rows={5}
          placeholder="Write a brief description about yourself, your teaching philosophy, and what makes you unique as an educator"
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
          placeholder="List your key achievements, separated by commas"
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
          placeholder="List your interests and hobbies, separated by commas"
        />
      </div>
    </div>
  )
}

