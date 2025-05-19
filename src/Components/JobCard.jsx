// Components/JobCard.jsx
import React from "react";

function JobCard({ job, onEdit, onDelete }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>Status: {job.status}</p>
      <p>Skills: {job.skills?.join(", ") || "None"}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default JobCard;
