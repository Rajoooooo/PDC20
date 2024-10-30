import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <NavLink to="/" className="nav-link" activeClassName="active" aria-current="page">Home</NavLink>
                    <NavLink to="/profile" className="nav-link" activeClassName="active" aria-current="page">Profile</NavLink>
                    <NavLink to="/contact" className="nav-link" activeClassName="active" aria-current="page">Contact</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
