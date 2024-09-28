import React, { useState } from 'react';
import './Create-New-Patient.css';

const CreatePatient = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        weight: '',
        diagnosis: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Patient Data:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="patient-form">
            <h2>Create New Patient</h2>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />

            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleInputChange} required />

            <label htmlFor="weight">Weight:</label>
            <input type="text" id="weight" name="weight" value={formData.weight} onChange={handleInputChange} required />

            <label htmlFor="diagnosis">Diagnosis:</label>
            <input type="text" id="diagnosis" name="diagnosis" value={formData.diagnosis} onChange={handleInputChange} required />

            <div className="button-container">
                <button type="submit" className="submit-button">Save</button>
            </div>
        </form>
    );
};

export default CreatePatient;
