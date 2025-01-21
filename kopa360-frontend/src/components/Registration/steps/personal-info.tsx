export default function PersonalInfo() {
  return (
    <div>
      <h2 className="h3 mb-3">Personal Information</h2>
      <p className="text-muted mb-4">Please provide your basic information</p>

      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Full Name
        </label>
        <input id="name" type="text" className="form-control" placeholder="Enter your full name" />
      </div>

      <div className="mb-3">
        <label className="form-label d-block">Gender</label>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </div>
    </div>
  )
}

