import type React from "react";
import { useState, useEffect } from "react";

const subjects: Record<string, string[]> = {
  Mathematics: ["Basic Mathematics", "Further Mathematics", "Statistics"],
  Sciences: ["Physics", "Chemistry", "Biology"],
  Languages: ["English Language", "Literature", "French"],
  Arts: ["Fine Arts", "Music", "Drama"],
  Technical: ["Computer Science", "Technical Drawing", "Wood Work"],
  Vocational: ["Home Economics", "Agriculture", "Commerce"],
};

type SubjectCategories = "mathematics" | "sciences" | "languages" | "arts" | "technical" | "vocational";

type SubjectsSelectionProps = {
  onDataChange?: (data: Record<SubjectCategories, string[]>) => void;
  initialData?: Record<SubjectCategories, string[]>;
};

export default function SubjectsSelection({ onDataChange, initialData }: SubjectsSelectionProps) {
  const [selectedSubjects, setSelectedSubjects] = useState<Record<SubjectCategories, string[]>>({
    mathematics: initialData?.mathematics || [],
    sciences: initialData?.sciences || [],
    languages: initialData?.languages || [],
    arts: initialData?.arts || [],
    technical: initialData?.technical || [],
    vocational: initialData?.vocational || [],
  });

  useEffect(() => {
    if (onDataChange) {
      onDataChange(selectedSubjects);
    }
  }, [selectedSubjects, onDataChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    const category = name.toLowerCase() as SubjectCategories;

    setSelectedSubjects((prev) => ({
      ...prev,
      [category]: checked
        ? [...prev[category], value]
        : prev[category].filter((subject: string) => subject !== value),
    }));
  };

  return (
    <div>
      <h2 className="form-title">Subjects You Can Teach</h2>
      <p className="form-description">Select all subjects that you are qualified to teach</p>

      {Object.entries(subjects).map(([category, subjectList]) => {
        const categoryKey = category.toLowerCase() as SubjectCategories;
        return (
          <div key={category} className="subject-category">
            <h5 className="category-title">{category}</h5>
            <div className="checkbox-group">
              {subjectList.map((subject) => (
                <label key={subject} className="radio-label">
                  <input
                    type="checkbox"
                    name={categoryKey}
                    className="check"
                    value={subject}
                    onChange={handleChange}
                    checked={selectedSubjects[categoryKey].includes(subject)}
                  />
                  {subject}
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
