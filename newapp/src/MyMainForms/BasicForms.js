import React, { useState } from 'react';
import '../../src/components/Nav.css';

const BasicForm = () => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Name: ${name}`);
    };

    return (
        <div className="home-container">
            <h2 className="home-title">Welcome to Our Website!</h2>
            <p className="home-description">Please enter your name below:</p>

            <div className="contact-container">
                <div className="contact-card">
                    <h3 className="contact-title">Enter Your Details</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Name:</label>
                            <input 
                                type="text"
                                id="name"
                                className="form-control"
                                value={name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                        </div>
                        <button type="submit" className="btn-primary">Submit</button>
                    </form>
                    {name && <p>Your name is: {name}</p>}
                </div>
            </div>
        </div>
    );
};

export default BasicForm;
