import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './RequestDemo.css';

const RequestDemo = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    companyName: '',
    dateTime: new Date()
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dateTime: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here (e.g., send to an API)
    alert("Event successfully scheduled!");
  };
  return (
    <>
        <div  className='select'>
       <form onSubmit={handleSubmit} >
      <div>
        <label>Date and Time:</label>
        <DatePicker
          selected={formData.dateTime}
          onChange={handleDateChange}
          showTimeSelect
          dateFormat="Pp"
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Your mobile number:</label>
        <input
          type="tel"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Company Name:</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Schedule Event</button>
    </form>
    </div>
    </>
  );
};

export default RequestDemo;
