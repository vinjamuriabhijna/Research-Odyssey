import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FirstTimePage from './FirstTimePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ReviewerHome from './ReviewerHome';
import StudentHome from './StudentHome';
import Upload from './components/Upload';
import Results from './components/Results'; 
import Guidelines from './components/Guidlines'; 
import Feedback from './components/Feedback'; 


const App = () => {
  const [userRole, setUserRole] = useState(null); 

  const handleSignUp = (role) => {
    setUserRole(role); // Set the user's role after signup
  };

  return (
    <Router>
      <div className="page-container">
        <Routes>
          {/* First Time Page */}
          <Route path="/" element={<FirstTimePage />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Sign Up Page */}
          <Route
            path="/signup"
            element={<SignUp onSignUp={handleSignUp} />}
          />

          {/* Reviewer Home Page */}
          <Route
            path="/reviewer-home"
            element={userRole === 'Reviewer' ? <ReviewerHome /> : <Navigate to="/" />}
          />

          {/* Student Home Page */}
          <Route
            path="/student-home"
            element={userRole === 'Student' ? <StudentHome /> : <Navigate to="/" />}
          />

          {/* Upload Page */}
          <Route path="/upload" element={<Upload />} />

        <Route path="/results" element={<Results />} />

         <Route path="/guidlines" element={<Guidelines />} />

          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;