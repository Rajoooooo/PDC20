import React from "react";

const ContactInfo = ({ formData, onChange, errors }) => {
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
            <h2 style={styles.title}>Contact Information</h2>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Email:</label>
                <input
                    type="email"
                    placeholder="Enter your email" 
                    style={styles.inputField}
                    value={formData.email}
                    onChange={(e) => onChange("email", e.target.value)}
                    onFocus={(e) => (e.target.style = { ...styles.inputField, ...styles.inputFieldFocus })}
                    onBlur={(e) => (e.target.style = styles.inputField)}
                />
                {errors.email && <p style={styles.errorMessage}>{errors.email}</p>}
            </div>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Phone Number:</label>
                <input
                    type="tel"
                    placeholder="Enter your phone number" 
                    style={styles.inputField}
                    value={formData.phone}
                    onChange={(e) => onChange("phone", e.target.value)}
                    onFocus={(e) => (e.target.style = { ...styles.inputField, ...styles.inputFieldFocus })}
                    onBlur={(e) => (e.target.style = styles.inputField)}
                />
                {errors.phone && <p style={styles.errorMessage}>{errors.phone}</p>}
            </div>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Address:</label>
                <input
                    type="text"
                    placeholder="Enter your address" 
                    style={styles.inputField}
                    value={formData.address}
                    onChange={(e) => onChange("address", e.target.value)}
                    onFocus={(e) => (e.target.style = { ...styles.inputField, ...styles.inputFieldFocus })}
                    onBlur={(e) => (e.target.style = styles.inputField)}
                />
                {errors.address && <p style={styles.errorMessage}>{errors.address}</p>}
            </div>
            <div style={styles.inputGroup}>
                <label style={styles.label}>City:</label>
                <input
                    type="text"
                    placeholder="Enter your city" 
                    style={styles.inputField}
                    value={formData.city}
                    onChange={(e) => onChange("city", e.target.value)}
                    onFocus={(e) => (e.target.style = { ...styles.inputField, ...styles.inputFieldFocus })}
                    onBlur={(e) => (e.target.style = styles.inputField)}
                />
                {errors.city && <p style={styles.errorMessage}>{errors.city}</p>}
            </div>
        </div>
    );
};

export default ContactInfo;
