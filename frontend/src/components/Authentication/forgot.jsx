// import React, { useState } from 'react';
// import axios from 'axios';

// const ForgotPasswordForm = ({ onClose }) => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleForgotPassword = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/forgot-password', { email });
//       setMessage('Password reset email sent. Please check your inbox.');
//     } catch (error) {
//       setMessage('Error: Unable to send password reset email.');
//       console.error('Error sending password reset email:', error);
//     }
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <h2>Forgot Password</h2>
//         <form onSubmit={handleForgotPassword}>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <button type="submit">Submit</button>
//         </form>
//         {message && <p>{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default ForgotPasswordForm;
