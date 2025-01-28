export default function SubmitInfo() {
  return (
    <div className="text-center">
      <h2 className="h3 mb-3">Submit Your Application</h2>
      <p className="text-muted mb-4">You're almost done! Click the button below to submit your application.</p>

      <div className="mb-3">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="termsAgreement" />
          <label className="form-check-label" htmlFor="termsAgreement">
            I agree to the terms and conditions
          </label>
        </div>
      </div>

      <button className="btn btn-primary btn-lg">Submit Application</button>

      <p className="mt-3 text-muted small">
        By clicking "Submit Application", you confirm that all the information provided is accurate and complete.
      </p>
    </div>
  )
}

