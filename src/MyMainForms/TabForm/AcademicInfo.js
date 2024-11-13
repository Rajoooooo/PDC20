import React from "react";

const AcademicInfo = ({ formData, onChange, errors }) => {
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
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Academic Information</h2>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Student ID:</label>
                <input
                    type="text"
                    placeholder="Enter your student ID"
                    style={styles.inputField}
                    value={formData.studentId}
                    onChange={(e) => onChange("studentId", e.target.value)}
                    onFocus={(e) => (e.target.style = { ...styles.inputField, ...styles.inputFieldFocus })}
                    onBlur={(e) => (e.target.style = styles.inputField)}
                />
                {errors.studentId && <p style={styles.errorMessage}>{errors.studentId}</p>}
            </div>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Program:</label>
                <input
                    type="text"
                    placeholder="Enter your program" 
                    style={styles.inputField}
                    value={formData.program}
                    onChange={(e) => onChange("program", e.target.value)}
                    onFocus={(e) => (e.target.style = { ...styles.inputField, ...styles.inputFieldFocus })}
                    onBlur={(e) => (e.target.style = styles.inputField)}
                />
                {errors.program && <p style={styles.errorMessage}>{errors.program}</p>}
            </div>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Year Level:</label>
                <input
                    type="text"
                    placeholder="Enter your year level" 
                    style={styles.inputField}
                    value={formData.yearLevel}
                    onChange={(e) => onChange("yearLevel", e.target.value)}
                    onFocus={(e) => (e.target.style = { ...styles.inputField, ...styles.inputFieldFocus })}
                    onBlur={(e) => (e.target.style = styles.inputField)}
                />
                {errors.yearLevel && <p style={styles.errorMessage}>{errors.yearLevel}</p>}
            </div>
            <div style={styles.inputGroup}>
                <label style={styles.label}>GPA:</label>
                <input
                    type="text"
                    placeholder="Enter your GPA" 
                    style={styles.inputField}
                    value={formData.gpa}
                    onChange={(e) => onChange("gpa", e.target.value)}
                    onFocus={(e) => (e.target.style = { ...styles.inputField, ...styles.inputFieldFocus })}
                    onBlur={(e) => (e.target.style = styles.inputField)}
                />
                {errors.gpa && <p style={styles.errorMessage}>{errors.gpa}</p>}
            </div>
        </div>
    );
};

export default AcademicInfo;
