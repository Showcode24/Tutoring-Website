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

export default function LocationInfo() {
  return (
    <div>
      <h2 className="form-title">Location</h2>
      <p className="form-description">Select your Local Government Area in Edo State</p>

      <div className="form-group">
        <label className="form-label" htmlFor="lga">
          Local Government Area
        </label>
        <select id="lga" className="form-input">
          <option value="">Select LGA</option>
          {edoLGAs.map((lga) => (
            <option key={lga} value={lga.toLowerCase()}>
              {lga}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

