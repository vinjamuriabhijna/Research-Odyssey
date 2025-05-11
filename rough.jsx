import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Upload from './components/Upload';
import Quality from './components/Quality';
import Guidlines from './components/Guidlines';

import image1 from './assets/Transportation and Infrastructure.jpg';
import image2 from './assets/bisness marketing.jpg';
import image3 from './assets/Envirolment and agriculture science.png';
import image4 from './assets/Humanities.png';
import image5 from './assets/Medical and science.png';
import image6 from './assets/science and technology.jpg';
import image7 from './assets/Social Science.png';
import image8 from './assets/Education_and_Pedagogy.png';
import image9 from './assets/Law.png';
import image10 from './assets/Interdisciplinary Sectors.png';
import image11 from './assets/Aerospace and Defense.png';
import image12 from './assets/energy and sustainabulity.png';

const images = [
  {
    src: image1,
    data: [
      'Transportation and Infrastructure',
      'Smart Cities',
      'Autonomous Vehicles',
      'Public Transit Systems',
    ],
  },
  {
    src: image2,
    data: [
      'Business and Management',
      'Marketing, Finance',
      'Human Resources',
      'Operations Research',
      'Entrepreneurship',
    ],
  },
  {
    src: image3,
    data: [
      'Environmental and Agricultural Sciences',
      'Environmental Science',
      'Climate Science',
      'Forestry, Agronomy',
      'Food Science',
    ],
  },
  {
    src: image4,
    data: [
      'Humanities',
      'History, Philosophy',
      'Literature, Linguistics',
      'Arts & Culture',
    ],
  },
  {
    src: image5,
    data: [
      'Medical and Health Sciences',
      'Medicine, Public Health',
      'Biomedical Engineering',
      'Pharmacology',
      'Nursing and Clinical Research',
    ],
  },
  {
    src: image6,
    data: [
      'Science and Technology',
      'Physical Sciences (Physics, Chemistry)',
      'Life Sciences (Biology, Genetics, Neuroscience)',
      'Computer Science & AI',
      'Engineering (Mechanical, Electrical, Civil, etc.)',
    ],
  },
  {
    src: image7,
    data: [
      'Social Sciences',
      'Psychology, Sociology',
      'Political Science',
      'Anthropology, Economics',
    ],
  },
  {
    src: image8,
    data: [
      'Education and Pedagogy',
      'Curriculum Development',
      'Educational Psychology',
      'e-Learning',
      'Policy in Education',
    ],
  },
  {
    src: image9,
    data: [
      'Law and Legal Studies',
      'Criminal Justice',
      'Human Rights',
      'International Law',
    ],
  },
  {
    src: image10,
    data: [
      'Interdisciplinary Sectors',
      'Data Science',
      'Cognitive Science',
      'Digital Humanities',
      'Urban Studies',
      'Innovation Studies',
    ],
  },
  {
    src: image11,
    data: [
      'Aerospace and Defense',
      'Space Exploration',
      'Military Technology',
      'Aeronautical Engineering',
    ],
  },
  {
    src: image12,
    data: [
      'Energy and Sustainability',
      'Renewable Energy (solar, wind, etc.)',
      'Energy Storage',
      'Sustainable Development',
      'Green Technology',
    ],
  },
];

const Home = () => (
  <main className="main-section">
    <motion.div
      className="search-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <input type="text" placeholder="Search..." className="search-input" />
      <button className="search-btn">Search</button>
    </motion.div>

    <motion.div
      className="left-section"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>The Future Research,<br />finding the unknown</h1>
      <p>Making your Research journey easy and happy.</p>
    </motion.div>

    <motion.div className="right-section">
      {images.map((image, index) => (
        <div key={index} className="grid-item">
          <img src={image.src} alt={`Image ${index + 1}`} />
          <div className="overlay">
            <h3>{image.data[0]}</h3>
            <ul>
              {image.data.slice(1).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </motion.div>
  </main>
);

const App = () => {
  return (
    <Router>
      <div className="page-container">
        <header className="navbar">
          <div className="logo">RESEARCH<br />ODYSSEY</div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/upload">Upload</Link>
            <Link to="/quality">Quality</Link>
            <a href="#">Spotlighting</a>
            <Link to="/guidlines">Guidlines</Link>
          </nav>
          <div className="nav-buttons">
            <Link to="/login" className="login-btn">Log in</Link>
            <Link to="/signup" className="cta-btn">Sign Up</Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/guidlines" element={<Guidlines />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-heading">
              <h1 className="text-4xl font-bold mb-4">Contact us</h1>
              <p className="text-lg mb-8">
                Please feel free to contact us &amp; we would be happy to assist you!
              </p>
              <div className="footer-mails">
                <h2 className="text-xl font-semibold mb-2">Email Ids</h2>
                <p><a href="2300030732@kluniversity.in" className="text-blue-400">2300030732@kluniversity.in</a></p>
                <p><a href="2300030544@kluniversity.in" className="text-blue-400">2300030544@kluniversity.in</a></p>
                <p><a href="2300030461@kluniversity.in" className="text-blue-400">2300030461@kluniversity.in</a></p>
              </div>
              <div>
                <h2 className="footer-contact">Phone Numbers</h2>
                <p><a href="tel:9346895020" className="text-blue-400">9346895020</a></p>
                <p><a href="tel:8125089844" className="text-blue-400">8125089844</a></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;