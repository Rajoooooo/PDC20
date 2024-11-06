import React from "react";
import BasicForm from './BasicForms';
import { Link, Route, Routes } from "react-router-dom";
import ControlledInput from "./ControlledInput";
import UncontrolledInput from "./UncontrolledInput";
import TabbedForm from "./TabForm/TabbedForm";
import '../../src/components/Nav.css';

const MyMainForm = () => {
    return (
        <div className="main-container">
            <h1 className="main-title">React Forms App</h1>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="basic-form" className="nav-button">Basic Form</Link></li>
                    <li><Link to="controlled-input" className="nav-button">Controlled Input</Link></li>
                    <li><Link to="uncontrolled-input" className="nav-button">Uncontrolled Input</Link></li>
                    <li><Link to="tabbed-form" className="nav-button">Tabbed Form</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="basic-form" element={<BasicForm />} />
                <Route path="controlled-input" element={<ControlledInput />} />
                <Route path="uncontrolled-input" element={<UncontrolledInput />} />
                <Route path="tabbed-form" element={<TabbedForm/>} />
            </Routes>
        </div>
    );
}

export default MyMainForm;
