import React, { useState } from "react";
import skillsStore from "../data/skillsStore"; // shared reference
import "../skills.css";

function SkillAdmin() {
  const [skills, setSkills] = useState(skillsStore);

  const [newSkill, setNewSkill] = useState("");
  const [newJob, setNewJob] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editedJob, setEditedJob] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !skills[newSkill]) {
      setSkills({ ...skills, [newSkill]: [] });
      setNewSkill("");
    }
  };

  const deleteSkill = (skill) => {
    const updatedSkills = { ...skills };
    delete updatedSkills[skill];
    setSkills(updatedSkills);
    if (selectedSkill === skill) {
      setSelectedSkill(null);
    }
  };

  const addJobToSkill = () => {
    if (selectedSkill && newJob.trim()) {
      setSkills({
        ...skills,
        [selectedSkill]: [...skills[selectedSkill], newJob],
      });
      setNewJob("");
    }
  };

  const deleteJob = (skill, index) => {
    const updatedJobs = [...skills[skill]];
    updatedJobs.splice(index, 1);
    setSkills({ ...skills, [skill]: updatedJobs });
  };

  const startEdit = (index, currentValue) => {
    setEditIndex(index);
    setEditedJob(currentValue);
  };

  const saveEdit = () => {
    const updatedJobs = [...skills[selectedSkill]];
    updatedJobs[editIndex] = editedJob;
    setSkills({ ...skills, [selectedSkill]: updatedJobs });
    setEditIndex(null);
    setEditedJob("");
  };

  return (
    <div className="skills-jobs-container">
      <h2>Admin Skill Manager</h2>

      <div style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Add new skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button onClick={addSkill}>Add Skill</button>
      </div>

      <div className="skills-list">
        {Object.keys(skills).map((skill) => (
          <div key={skill} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              className={`skill-button ${selectedSkill === skill ? "active" : ""}`}
              onClick={() => {
                setSelectedSkill(skill);
                setEditIndex(null);
                setEditedJob("");
              }}
            >
              {skill}
            </button>
            <button onClick={() => deleteSkill(skill)} style={{ backgroundColor: "#e74c3c", color: "white", border: "none", borderRadius: "4px", padding: "6px" }}>🗑️</button>
          </div>
        ))}
      </div>

      {selectedSkill && (
        <div className="jobs-display">
          <h3>Edit Jobs for <span>{selectedSkill}</span></h3>
          <input
            type="text"
            placeholder="Add job title"
            value={newJob}
            onChange={(e) => setNewJob(e.target.value)}
          />
          <button onClick={addJobToSkill}>Add Job</button>
          <ul>
            {skills[selectedSkill].map((job, idx) => (
              <li key={idx} className="job-card">
                {editIndex === idx ? (
                  <>
                    <input
                      type="text"
                      value={editedJob}
                      onChange={(e) => setEditedJob(e.target.value)}
                    />
                    <button onClick={saveEdit}>Save</button>
                    <button onClick={() => setEditIndex(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    {job}
                    <button onClick={() => startEdit(idx, job)}>✏️</button>
                    <button onClick={() => deleteJob(selectedSkill, idx)}>❌</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SkillAdmin;

