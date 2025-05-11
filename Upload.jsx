import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Upload.css';

const Upload = () => {
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [fileName, setFileName] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name); // Store the file name
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fileName) {
      alert('Please select a file to upload.');
      return;
    }

    // Simulate file upload success
    setUploadSuccess(true);

    // Save the file name to local storage
    localStorage.setItem('uploadedFile', fileName);

    // Navigate to the Results page after a short delay
    setTimeout(() => {
      navigate('/results'); // Redirect to Results page
    }, 2000); // 2-second delay
  };

  return (
    <div className="upload-page">
      <h1>Upload Your Files</h1>
      <p>Use the form below to upload your research files.</p>
      <p>Welcome to the Research Submission Portal. This platform allows researchers to upload their research papers in PDF format for evaluation. Once submitted, the papers will be securely stored and made accessible to authorized reviewers. Each submission is carefully reviewed, and feedback is provided within a short time to ensure timely communication and support for your academic work. Please fill in the required details and upload your file to begin the review process.</p>

      <form onSubmit={handleSubmit}>
        {/* Accept only PDF files */}
        <input type="file" name="file" accept=".pdf" onChange={handleFileChange} required />
        <button type="submit">Upload</button>
      </form>
      {uploadSuccess && <p className="success-message">File uploaded successfully! Redirecting to Results...</p>}
    </div>
  );
};

export default Upload;