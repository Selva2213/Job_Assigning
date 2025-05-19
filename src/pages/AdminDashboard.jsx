// pages/AdminDashboard.jsx
import React, { useState } from "react";
import skillsStore from "../data/skillsStore";
import SkillAdmin from "./SkillAdmin";
// import Login from "./Login";
import "../skills.css";

function AdminDashboard() {
    const [skills, setSkills] = useState(skillsStore);
    const handleSkillUpdate = (newSkills) => {
        setSkills({ ...newSkills });
    };
    return (
        <div className="admin-dashboard">
            <SkillAdmin skills={skills} onUpdate={handleSkillUpdate} />
        </div>
    );
}

export default AdminDashboard;
