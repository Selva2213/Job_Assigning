// Components/JobForm.jsx
import React, { useState, useEffect } from "react";

const availableSkills = [
  "JavaScript", "Python", "React", "NodeJS", "TypeScript", "HTML", "CSS",
  "Angular", "VueJS", "Java", "C#", "PHP", "Ruby", "Swift", "Kotlin", "Go",
  "Rust", "SQL", "MongoDB", "AWS", "Docker", "Kubernetes", "GraphQL", "Django", "Flutter"
];

function JobForm({ onSubmit, initialData = {}, submitLabel }) {
  const [title, setTitle] = useState("");
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setTitle(initialData.title || "");
    setSkills(initialData.skills || []);
  }, [initialData]);

  const handleCheckboxChange = (skill) => {
    setSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill)
        : [...prevSkills, skill]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onSubmit({ title, skills });
    setTitle("");
    setSkills([]);
  };

  return (
    <form onSubmit={handleSubmit} className="job-form">
      <div>
        <label>Job Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter job title"
          required
        />
      </div>

      <div className="skills-checkboxes">
        <label>Skills:</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {availableSkills.map((skill) => (
            <label key={skill} style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                value={skill}
                checked={skills.includes(skill)}
                onChange={() => handleCheckboxChange(skill)}
              />
              {skill}
            </label>
          ))}
        </div>
      </div>

      <button type="submit">{submitLabel}</button>
    </form>
  );
}

export default JobForm;
