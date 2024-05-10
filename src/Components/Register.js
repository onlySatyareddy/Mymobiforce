import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Update the CSS file name if necessary

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [validationError, setValidationError] = useState(false);

  const handleSubmit = async (event) => {

    event.preventDefault();
    console.log('Registering with:', { username, email, password });
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      if (!username || !email || !password) {
        setValidationError(true);
        return; 
      }
    
      setValidationError(false);
      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful', data);

        // Redirect to another page after registration, if needed
        navigate('/Login');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='register'>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
        <br></br>
        {validationError && <p className="error">All fields are mandatory</p>}

        <button onClick={() => navigate('/mymobiforce')}>Back Mymobiforce</button>
      </form>
    </div>
  );
};

export default Register;


