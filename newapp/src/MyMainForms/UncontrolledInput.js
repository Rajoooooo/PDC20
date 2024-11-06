import React, { useRef } from "react";
import '../../src/components/Nav.css';

const UncontrolledInput = () => {
    const phoneRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Phone Number: ${phoneRef.current.value}`);
    }

    return (
        <div className="input-container">
            <h2 className="input-title">Enter Your Phone Number</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    ref={phoneRef}
                    placeholder="Phone Number"
                    className="phone-input"
                />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default UncontrolledInput;
