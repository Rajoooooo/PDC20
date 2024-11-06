import React from "react";
import './Nav.css'; // Ensure this is correctly imported

const MyProfile = () => {
    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        className="profile-image"
                    />
                    <h1 className="profile-title">Rafael John L. Castro</h1>
                    <p className="profile-bio">
                        This is a brief bio about yourself. You can write about your interests, skills, and what you do.
                    </p>
                </div>

                <div className="profile-stats">
                    <h2 className="stats-title">Profile Stats</h2>
                    <ul className="stats-list">
                        <li><strong>Public Repositories:</strong> 25</li>
                        <li><strong>Followers:</strong> 150</li>
                        <li><strong>Following:</strong> 30</li>
                    </ul>
                </div>

                <div className="profile-repos">
                    <h2 className="repos-title">Repositories</h2>
                    <ul className="repo-list">
                        <li>
                            <a href="#" className="repo-link">Project A</a> - A brief description of Project A.
                        </li>
                        <li>
                            <a href="#" className="repo-link">Project B</a> - A brief description of Project B.
                        </li>
                        <li>
                            <a href="#" className="repo-link">Project C</a> - A brief description of Project C.
                        </li>
                    </ul>
                </div>

                <div className="profile-actions">
                    <button className="btn btn-primary">Edit Profile</button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
    