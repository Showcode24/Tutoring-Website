const subjects = {
  Mathematics: ["Basic Mathematics", "Further Mathematics", "Statistics"],
  Sciences: ["Physics", "Chemistry", "Biology"],
  Languages: ["English Language", "Literature", "French"],
  Arts: ["Fine Arts", "Music", "Drama"],
  Technical: ["Computer Science", "Technical Drawing", "Wood Work"],
  Vocational: ["Home Economics", "Agriculture", "Commerce"],
}

export default function SubjectsSelection() {
  return (
    <div>
      <h2 className="form-title">Subjects You Can Teach</h2>
      <p className="form-description">Select all subjects that you are qualified to teach</p>

      {Object.entries(subjects).map(([category, subjectList]) => (
        <div key={category} className="subject-category">
          <h5 className="category-title">{category}</h5>
          <div className="checkbox-group">
            {subjectList.map((subject) => (
              <label key={subject} className="radio-label">
                <input type="checkbox" name="subjects" className="check" value={subject} />
                {subject}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

