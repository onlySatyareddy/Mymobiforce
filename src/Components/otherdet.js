import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './otherdet.css'; 

const Otherdet = () => {
    const [showBusinessName, setShowBusinessName] = useState(false);
    const [businessName, setBusinessName] = useState('');
    const [workTitle, setWorkTitle] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
  
    const navigate = useNavigate(); 
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({
        showBusinessName,
        businessName,
        workTitle,
        email,
        contactNumber,
      });
      
      if (!showBusinessName || !businessName || !workTitle || !email|| !contactNumber) {
        alert('Please fill in all required fields.');
        return;
      }

      navigate('/Currentaddress');
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h2>Other Details</h2>
        <div>
          <label>
            <input
              type="checkbox"
              checked={showBusinessName}
              onChange={(e) => setShowBusinessName(e.target.checked)}
            />
            Show my Business/Shop name on Card
          </label>
        </div>
        {showBusinessName && (
          <div>
            <label>
              Business/Shop Name:
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </label>
          </div>
        )}
        <div>
          <label>
            Work Title/Designation:
            <input
              type="text"
              value={workTitle}
              onChange={(e) => setWorkTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email ID:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Contact Number:
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </label>
        </div>
        
        <button text='submit'>Next</button>
          <br></br>
<button text='submit' onClick={() => {
          localStorage.clear()
          navigate('/Personal')
        }}>Back</button>
      </form>
    </div>
  );
};

export default Otherdet;
