import React, { useState } from "react";
import Tab from "./Tab";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import AcademicInfo from "./AcademicInfo";
import AdditionalDetails from "./AdditionalDetails";

const TabbedForm = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        studentId: '',
        program: '',
        yearLevel: '',
        gpa: '',
        hobbies: '',
        skills: '',
        notes: ''
    });

    const [errors, setErrors] = useState({});

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
    
        // Personal Information
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.dob) newErrors.dob = 'Date of Birth is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
    
        // Contact Information
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.city) newErrors.city = 'City is required';
    
        // Academic Information
        if (!formData.studentId) newErrors.studentId = 'Student ID is required';
        if (!formData.program) newErrors.program = 'Program is required';
        if (!formData.yearLevel) newErrors.yearLevel = 'Year Level is required';
        if (!formData.gpa) newErrors.gpa = 'GPA is required';
    
        // Additional Details
        if (!formData.hobbies) newErrors.hobbies = 'Hobbies are required';
        if (!formData.skills) newErrors.skills = 'Skills are required';
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                // Success Alert and Display JSON data
                alert(`Form submitted successfully! \nData: ${JSON.stringify(formData, null, 2)}`);
            } catch (error) {
                // Error Alert
                alert(`Error submitting form: ${error.message}`);
            }
        } else {
            alert('Please fill out all required fields.');
        }
    };

    return (
        <div>
            <h1>Student     Registration Form</h1>

            <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
                <Tab name="Personal Information" isActive={activeTab === "personal"} onClick={() => handleTabChange("personal")} />
                <Tab name="Contact Information" isActive={activeTab === "contact"} onClick={() => handleTabChange("contact")} />
                <Tab name="Academic Information" isActive={activeTab === "academic"} onClick={() => handleTabChange("academic")} />
                <Tab name="Additional Details" isActive={activeTab === "additional"} onClick={() => handleTabChange("additional")} />
            </div>

            <form onSubmit={handleSubmit}>
                {activeTab === "personal" && <PersonalInfo formData={formData} onChange={handleChange} errors={errors} />}
                {activeTab === "contact" && <ContactInfo formData={formData} onChange={handleChange} errors={errors} />}
                {activeTab === "academic" && <AcademicInfo formData={formData} onChange={handleChange} errors={errors} />}
                {activeTab === "additional" && <AdditionalDetails formData={formData} onChange={handleChange} errors={errors} />}
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TabbedForm;
