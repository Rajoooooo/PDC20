import React from "react";

const PersonalInfo = ({ formData, onChange, errors }) => {
    const styles = {
        container: {
            backgroundColor: "#f9f9f9", 
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            maxWidth: "90%", 
            width: "100%",
            margin: "20px auto",
            fontFamily: "'Arial', sans-serif",
        },
        title: {
            textAlign: "left", 
            color: "#333",
            marginBottom: "20px",
            fontSize: "1.5rem",
        },
        inputGroup: {
            display: "flex",
            flexDirection: "column",
            marginBottom: "15px",
        },
        label: {
            fontWeight: "bold",
            color: "#555",
            marginBottom: "5px",
            textAlign: "left", 
        },
        inputField: {
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            outline: "none",
            fontSize: "1rem",
            transition: "border-color 0.3s",
            backgroundColor: "#fff",
        },
        inputFieldFocus: {
            borderColor: "#007bff",
            boxShadow: "0 0 6px rgba(0, 123, 255, 0.2)",
        },
        errorMessage: {
            color: "#ff6666", 
            fontSize: "0.85rem",
            marginTop: "5px",
            textAlign: "left", 
        },
        selectField: {
            appearance: "none",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "1rem",
            backgroundColor: "#fff",
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Personal Information</h2>
            <div style={styles.inputGroup}>
                <label style={styles.label}>First Name:</label>
                <input
                    type="text"
                    placeholder="Enter your first name" 
                    style={styles.inputField}
                    value={formData.firstName}
                    onChange={(e) => onChange("firstName", e.target.value)}
                    onFocus={(e) => (e.target.style = { ...styles.inputField, ...styles.inputFieldFocus })}
                    onBlur={(e) => (e.target.style = styles.inputField)}
                />
                {errors.firstName && <p style={styles.errorMessage}>{errors.firstName}</p>}
            </div>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Last Name:</label>
                <input
                    type="text"
                    placeholder="Enter your last name" 
                    style={styles.inputField}
                    value={formData.lastName}
                    onChange={(e) => onChange("lastName", e.target.value)}
                    onFocus={(e) => (e.target.style = { ...styles.inputField, ...styles.inputFieldFocus })}
                    onBlur={(e) => (e.target.style = styles.inputField)}
                />
                {errors.lastName && <p style={styles.errorMessage}>{errors.lastName}</p>}
            </div>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Date of Birth:</label>
                <input
                    type="date"
                    style={styles.inputField}
                    value={formData.dob}
                    onChange={(e) => onChange("dob", e.target.value)}
                    onFocus={(e) => (e.target.style = { ...styles.inputField, ...styles.inputFieldFocus })}
                    onBlur={(e) => (e.target.style = styles.inputField)}
                />
                {errors.dob && <p style={styles.errorMessage}>{errors.dob}</p>}
            </div>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Gender:</label>
                <select
                    style={styles.selectField}
                    value={formData.gender}
                    onChange={(e) => onChange("gender", e.target.value)}
                >
                    <option value="" disabled>Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {errors.gender && <p style={styles.errorMessage}>{errors.gender}</p>}
            </div>
        </div>
    );
};

export default PersonalInfo;
