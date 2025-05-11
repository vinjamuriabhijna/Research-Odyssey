import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { motion } from 'framer-motion';
import './StudentHome.css';

const StudentHome = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  return (
    <div className="container">
      {/* Left Section with Buttons */}
      <div className="left-buttons">
        <button className="action-btn" onClick={() => navigate('/upload')}>Upload</button>
        <button className="action-btn" onClick={() => navigate('/results')}>Results</button>
      </div>

      {/* Center Section */}
      <motion.div
        className="center-section"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>The Future Research,<br />Finding the Unknown</h1>
        <p>Making your Research journey easy and happy.</p>
      </motion.div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-heading">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-8">
              Please feel free to contact us &amp; we would be happy to assist you!
            </p>
            <div className="footer-mails">
              <h2 className="text-xl font-semibold mb-2">Email IDs</h2>
              <p><a href="mailto:2300030732@kluniversity.in">2300030732@kluniversity.in</a></p>
              <p><a href="mailto:2300030544@kluniversity.in">2300030544@kluniversity.in</a></p>
              <p><a href="mailto:2300030461@kluniversity.in">2300030461@kluniversity.in</a></p>
            </div>
            <div>
              <h2>Phone Numbers</h2>
              <p><a href="tel:9346895020">9346895020</a></p>
              <p><a href="tel:8125089844">8125089844</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentHome;