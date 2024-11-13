import React from "react";

const AdditionalDetails = ({ formData, onChange, errors }) => {
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
        textarea: {
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            outline: "none",
            fontSize: "1rem",
            transition: "border-color 0.3s",
            backgroundColor: "#fff",
            resize: "vertical", 
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Additional Details</h2>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Hobbies:</label>
                <input
                    type="text"
                    placeholder="Enter your hobbies" 
                    style={styles.inputField}
                    value={formData.hobbies}
                    onChange={(e) => onChange("hobbies", e.target.value)}
                    onFocus={(e) => (e.target.style = { ...styles.inputField, ...styles.inputFieldFocus })}
                    onBlur={(e) => (e.target.style = styles.inputField)}
                />
                {errors.hobbies && <p style={styles.errorMessage}>{errors.hobbies}</p>}
            </div>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Skills:</label>
                <input
                    type="text"
                    placeholder="Enter your skills" 
                    style={styles.inputField}
                    value={formData.skills}
                    onChange={(e) => onChange("skills", e.target.value)}
                    onFocus={(e) => (e.target.style = { ...styles.inputField, ...styles.inputFieldFocus })}
                    onBlur={(e) => (e.target.style = styles.inputField)}
                />
                {errors.skills && <p style={styles.errorMessage}>{errors.skills}</p>}
            </div>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Notes:</label>
                <textarea
                    placeholder="Enter additional notes" 
                    style={styles.textarea}
                    value={formData.notes}
                    onChange={(e) => onChange("notes", e.target.value)}
                />
            </div>
        </div>
    );
};

export default AdditionalDetails;
