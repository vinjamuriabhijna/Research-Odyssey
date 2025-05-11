import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = ({ onSignUp }) => {
  const [userType, setUserType] = useState('');
  const [field, setField] = useState('');
  const [experience, setExperience] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.'
      );
      return;
    } else {
      setPasswordError('');
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      return;
    } else {
      setConfirmPasswordError('');
    }

    // Proceed with sign-up logic
    if (userType === 'Reviewer') {
      onSignUp('Reviewer');
      console.log('Reviewer Details:', { field, experience });
      navigate('/reviewer-home');
    } else if (userType === 'Student') {
      onSignUp('Student');
      navigate('/student-home');
    }
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Rewrite Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Rewrite your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="userType">I am a:</label>
          <select
            id="userType"
            name="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="Student">Student</option>
            <option value="Reviewer">Reviewer</option>
          </select>
        </div>

        {userType === 'Reviewer' && (
          <>
            <div className="form-group">
              <label htmlFor="field">Field of Expertise:</label>
              <input
                type="text"
                id="field"
                name="field"
                placeholder="Enter your field of expertise"
                value={field}
                onChange={(e) => setField(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="experience">Years of Experience:</label>
              <input
                type="number"
                id="experience"
                name="experience"
                placeholder="Enter your years of experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              />
            </div>
          </>
        )}

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;