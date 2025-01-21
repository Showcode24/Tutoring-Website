export default function ReviewInfo() {
  // In a real application, you would pass the collected data to this component
  // and display it for review. For this example, we'll use placeholder data.

  return (
    <div>
      <h2 className="h3 mb-3">Review Your Information</h2>
      <p className="text-muted mb-4">Please review the information you've provided</p>

      <div className="mb-3">
        <h5>Personal Information</h5>
        <p>
          <strong>Name:</strong> John Doe
        </p>
        <p>
          <strong>Gender:</strong> Male
        </p>
      </div>

      <div className="mb-3">
        <h5>Contact Information</h5>
        <p>
          <strong>Email:</strong> john.doe@example.com
        </p>
        <p>
          <strong>Phone:</strong> +234 123 456 7890
        </p>
        <p>
          <strong>Address:</strong> 123 Main St, Benin City, Edo State
        </p>
      </div>

      <div className="mb-3">
        <h5>Education</h5>
        <p>
          <strong>Qualification:</strong> Bachelor's Degree
        </p>
        <p>
          <strong>Institution:</strong> University of Benin
        </p>
        <p>
          <strong>Graduation Year:</strong> 2015
        </p>
      </div>

      <div className="mb-3">
        <h5>Experience</h5>
        <p>
          <strong>Years of Experience:</strong> 5
        </p>
        <p>
          <strong>Previous Schools:</strong> ABC Secondary School, XYZ High School
        </p>
        <p>
          <strong>Specializations:</strong> Mathematics, Physics
        </p>
      </div>

      <div className="mb-3">
        <h5>Subjects</h5>
        <p>Mathematics, Physics, Chemistry</p>
      </div>

      <p className="text-muted">If you need to make any changes, please go back to the relevant section.</p>
    </div>
  )
}

