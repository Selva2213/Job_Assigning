import React, { useState } from "react";
import skillsStore from "../data/skillsStore";
import "../skills.css";

function SkillsWithJobs() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="skills-jobs-container">
      <h2>Explore Careers by Skill</h2>
      <div className="skills-list">
        {Object.keys(skillsStore).map((skill) => (
          <button key={skill} onClick={() => setSelectedSkill(skill)}>
            {skill}
          </button>
        ))}
      </div>

      {selectedSkill && (
        <div className="jobs-display">
          <h3>Jobs for <span>{selectedSkill}</span>:</h3>
          <ul>
            {skillsStore[selectedSkill].map((job, idx) => (
              <li key={idx} className="job-card">{job}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SkillsWithJobs;
