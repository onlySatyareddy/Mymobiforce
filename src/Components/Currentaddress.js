import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Currentaddress = () => {
  const [currentAddress, setCurrentAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      currentAddress,
      pinCode,
      city,
      state,
    });

    if (!currentAddress || !pinCode || !city || !state) {
      alert('Please fill in all required fields.');
      return;
    }

    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h2>Current Address</h2>
        <div>
          <label>
            Current Address:
            <input
              type="text"
              value={currentAddress}
              onChange={(e) => setCurrentAddress(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Pin Code:
            <input
              type="text"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            City:
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            State:
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </label>
        </div>
        {/* <button text='submit' onClick={() => {
          localStorage.clear()
          navigate('/')
        }}>Next</button> */}
        <button text='submit'>Next</button>
          <br></br>
        <button text='submit' onClick={() => {
          localStorage.clear()
          navigate('/otherdet')
        }}>Back</button>
      </form>
    </div>
  );
};

export default Currentaddress;
