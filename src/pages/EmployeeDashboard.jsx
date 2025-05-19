// pages/EmployeeDashboard.jsx
import React, { useState } from "react";
import JobCard from "../Components/JobCard";
import SkillsWithJobs from "../Components/SkillsWithJob";

function EmployeeDashboard({ username }) {
  const [jobs, setJobs] = useState([]);

  const completeJob = (id) => {
    setJobs(jobs.map((job) => job.id === id ? { ...job, status: "Completed" } : job));
  };

  const assignedJobs = jobs.filter((job) => job.assignee === username);

  return (
    <div className="employee-dashboard">
      <div className="job-list">
        {assignedJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            showComplete
            onComplete={() => completeJob(job.id)}
          />
        ))}
      </div>
      <SkillsWithJobs/>
    </div>
  );
}

export default EmployeeDashboard;
