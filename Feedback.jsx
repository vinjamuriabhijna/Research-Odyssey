import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { email, feedback });
    alert('Thank you for your feedback! We will get back to you soon.');
    setFeedback('');
    setEmail('');
  };

  return (
    <div className="feedback-page">
      <h1>Give Us Your Feedback</h1>
      <p>If you are facing any trouble, kindly let us know. We will try to fix it as soon as possible.</p>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label>
          Your Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          Your Feedback:
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback"
            required
          ></textarea>
        </label>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;