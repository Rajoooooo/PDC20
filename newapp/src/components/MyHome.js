import React from "react";
import './Nav.css'; // Ensure this is correctly imported

const MyHome = () => {
    return (
        <div className="home-container mb-3">
            <h1 className="home-title">Welcome to Your GitHub Profile</h1>
            <p className="home-description">Showcasing your repositories and contributions.</p>

            <div className="card-container">
                <div className="card">
                    <h2 className="card-title">Repositories</h2>
                    <p className="card-content">Explore your projects and see what you can contribute to.</p>
                    <ul className="repo-list">
                        <li><a href="#" className="link">Project A</a> - A brief description of Project A.</li>
                        <li><a href="#" className="link">Project B</a> - A brief description of Project B.</li>
                        <li><a href="#" className="link">Project C</a> - A brief description of Project C.</li>
                    </ul>
                </div>

                <div className="card">
                    <h2 className="card-title">Contributions</h2>
                    <p className="card-content">Your recent contributions to other repositories.</p>
                    <ul className="contribution-list">
                        <li><a href="#" className="link">Fixed bug in Project X</a> - 1 day ago</li>
                        <li><a href="#" className="link">Added feature to Project Y</a> - 2 days ago</li>
                        <li><a href="#" className="link">Reviewed pull request for Project Z</a> - 3 days ago</li>
                    </ul>
                </div>

                <div className="card">
                    <h2 className="card-title">Profile Stats</h2>
                    <p className="card-content">Your GitHub stats to track your activity.</p>
                    <ul className="stats-list">
                        <li>Public Repositories: 25</li>
                        <li>Followers: 150</li>
                        <li>Following: 30</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MyHome;
