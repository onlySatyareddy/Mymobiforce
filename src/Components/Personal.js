import React, { useState, useEffect } from 'react';
import './Personal.css'; 
import {  useNavigate } from 'react-router-dom'


const PersonalDetails = () => {
         
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('TOKEN')
    if (!token) {
      navigate('/Personal')
    }
  }, [navigate])

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState(''); // To store selected gender

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !fatherName || !dob || !gender) {
      alert('Please fill in all required fields.');
      return;
    }
    navigate('/otherdet');

    // Handle the form submission or data as needed
    console.log('Submitted:', {
      firstName,
      lastName,
      fatherName,
      aadharNumber,
      dob,
      gender,

    

    });
   
  };


  return (

    <div className="personal-details-container">
      <h2>Personal Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Father's Name:</label>
          <input
            type="text"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Aadhar Card Number:</label>
          <input
            type="text"
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth (DD-MM-YY):</label>
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="DD-MM-YY"
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          </div>
        </div>
        {/* <button type="submit" onClick={() => {
          localStorage.clear()
          navigate('/otherdet')
        }}>Next</button> */}
       <button type="submit">Next</button>
        <br />
        <button
          onClick={() => {
            localStorage.clear()
            navigate('/Login')
          }}
        > LOGOUT </button>
      </form>


    </div>

  );
};

export default PersonalDetails;

