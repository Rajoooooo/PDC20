import React, {useState} from "react";
import Tab from "./Tab";
import TabContents from "./TabContents";

const TabbedForm = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [formData, setFormData] = useState({
        name:'',
        age:'',
        email:'',
        phone:'',
        username:'',
        password:'',
    })

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Data: ${JSON.stringify(formData, null, 2)}`);
    }
    return (
        <div>
            <h1>Tabbed Form with Shared State</h1>
            <div style={{display:'flex',borderBottom: "1px solid #ccc"}}>
                <Tab
                    name="Basic Information"
                    isActive={activeTab === 'basic'}
                    onClick={() => handleTabChange('basic')}
                    />

                    <Tab
                    name="Contact Information"
                    isActive={activeTab === 'contact'}
                    onClick={() => handleTabChange('contact')}
                    />

                    <Tab
                    name="Account Information"
                    isActive={activeTab === 'account'}
                    onClick={() => handleTabChange('account')}
                    />
            </div>

            <form onSubmit={handleSubmit}>
                <TabContents
                    activeTab={activeTab}
                    formData={formData}
                    onChange={handleChange}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default TabbedForm;