import React, { useEffect, useState } from 'react';
import './Results.css';

const Results = () => {
  const [uploadedFile, setUploadedFile] = useState('');
  const [uploadedFileUrl, setUploadedFileUrl] = useState('');

  const researchPapers = [
    {
      title: 'The Impact of AI on Modern Education',
      rating: 4.5,
      improvements: ['Add more case studies', 'Include recent AI advancements'],
    },
    {
      title: 'Climate Change and Its Effects on Agriculture',
      rating: 4.2,
      improvements: ['Provide more regional data', 'Focus on mitigation strategies'],
    },
    {
      title: 'Advancements in Renewable Energy Technologies',
      rating: 4.8,
      improvements: ['Expand on storage solutions', 'Discuss cost-effectiveness'],
    },
  ];

  useEffect(() => {
    // Retrieve the uploaded file name and URL from local storage
    const fileName = localStorage.getItem('uploadedFile');
    const fileUrl = localStorage.getItem('uploadedFileUrl'); // Assuming the file URL is stored
    if (fileName) {
      setUploadedFile(fileName);
    }
    if (fileUrl) {
      setUploadedFileUrl(fileUrl);
    }
  }, []);

  return (
    <div className="results-page">
      <h1>Research Paper Results</h1>
      <div className="results-list">
        {/* Display the uploaded file if it exists */}
        {uploadedFile && (
          <div className="result-item">
            <h2>{uploadedFile}</h2>
            <p>Review will be given shortly.</p>
            {uploadedFileUrl && (
              <a href={uploadedFileUrl} target="_blank" rel="noopener noreferrer" className="pdf-link">
                View PDF
              </a>
            )}
          </div>
        )}

        {/* Display predefined research papers */}
        {researchPapers.map((paper, index) => (
          <div key={index} className="result-item">
            <h2>{paper.title}</h2>
            <p><strong>Rating:</strong> {paper.rating} ⭐</p>
            <p><strong>Improvements:</strong></p>
            <ul>
              {paper.improvements.map((improvement, i) => (
                <li key={i}>{improvement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;