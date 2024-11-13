import React, { useState } from "react";
import '../../src/components/Nav.css';

const ControlledInput = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
        console.log("Current Email:", e.target.value);
    }

    return (
        <div className="input-container">
            <h2 className="input-title">Enter Your Email</h2>
            <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Email Address"
                className="email-input"
            />
        </div>
    );
}

export default ControlledInput;
