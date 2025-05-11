import React from 'react';
import './Login.css'; // Optional: Add specific styles for the login page

const Login = ({ onBack }) => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="login-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" required />
        <button type="submit" className="login-submit-btn">Login</button>
      </form>
      <button className="back-btn" onClick={onBack}>Back</button>
      <p>Welcome to the Research Submission Portal. This platform allows researchers to upload their research papers in PDF format for evaluation. Once submitted, the papers will be securely stored and made accessible to authorized reviewers. Each submission is carefully reviewed, and feedback is provided within a short time to ensure timely communication and support for your academic work. Please fill in the required details and upload your file to begin the review process.</p>
    </div>
  );
};

export default Login;