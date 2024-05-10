// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import './OtherDetails.css';

// const OtherDetails = () => {
//   const [businessName, setBusinessName] = useState('');
//   const [workTitle, setWorkTitle] = useState('');
//   const [email, setEmail] = useState('');
//   const [emergencyContact, setEmergencyContact] = useState('');
//   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//     console.log('Submitted:', {
//       businessName,
//       workTitle,
//       email,
//       emergencyContact,
//     });

    
//     history.push('/OtherDetails');
//   };

//   const handleBusinessNameChange = (e) => {
//     setBusinessName(e.target.value);
  
//   };

//   const handleWorkTitleChange = (e) => {
//     setWorkTitle(e.target.value);
  
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
   
//   };

//   const handleEmergencyContactChange = (e) => {
//     setEmergencyContact(e.target.value);
 
//   };

//   return (
//     <div className="other-details-container">
//       <h2>Other Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group" >
//           <label>Business/Shop Name:</label>
//           <input
//             type="text"
//             value={businessName}
//             onChange={handleBusinessNameChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Work Title/Designation:</label>
//           <input
//             type="text"
//             value={workTitle}
//             onChange={handleWorkTitleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Email ID:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Emergency Contact Number:</label>
//           <input
//             type="text"
//             value={emergencyContact}
//             onChange={handleEmergencyContactChange}
//             required
//           />
//         </div>
//         <button type="submit" >Save and Go to Other Page</button>
//       </form>
//     </div>
//   );
// };

// export default OtherDetails;