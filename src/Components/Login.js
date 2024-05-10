import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const [validationError, setValidationError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Logging in with:', { username, password });

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      

      if (!username || !password) {
        setValidationError(true);
        return; 
      }
    
      setValidationError(false);


      if (response.ok) {
        // If login is successful (status code 200)
        const data = await response.json();
        // Handle response data if needed
        console.log('Login successful', data);

        // Redirect to personal details page
        // navigate.push('/Personal'); // Replace '/personal-details' with your actual route
        navigate('/Personal');
      } else {
        // Handle unsuccessful login (status code other than 200)
        console.error('Login failed');
        // Display error message or take appropriate action
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div >
    <form onSubmit={handleSubmit} className='login'>
      <div >
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
    {validationError && <p className="error">All fields are mandatory</p>}
      <button type="submit">Login</button>
      <br></br>
      <button onClick={() => navigate('/register')}>Go to Register</button>
    </form>
    </div>
  );
};

export default Login;






