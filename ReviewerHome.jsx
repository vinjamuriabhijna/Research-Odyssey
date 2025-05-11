import React, { useState } from 'react';
import './ReviewerHome.css';

const ReviewerHome = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [review, setReview] = useState('');

  // Sample data for uploaded papers
  const papers = [
    {
      id: 1,
      title: 'AI in Transportation',
      author: 'John Doe',
      field: 'Transportation and Infrastructure',
      abstract: 'This paper explores the use of AI in optimizing public transit systems.',
    },
    {
      id: 2,
      title: 'Sustainable Agriculture',
      author: 'Jane Smith',
      field: 'Environmental and Agricultural Sciences',
      abstract: 'This paper discusses sustainable farming practices to combat climate change.',
    },
    {
      id: 3,
      title: 'Advances in Neuroscience',
      author: 'Alice Johnson',
      field: 'Medical and Health Sciences',
      abstract: 'This paper reviews recent breakthroughs in neuroscience research.',
    },
  ];

  // Filter papers based on the search term
  const filteredPapers = papers.filter((paper) =>
    paper.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    alert(`Review submitted for "${selectedPaper.title}": ${review}`);
    setSelectedPaper(null);
    setReview('');
  };

  return (
    <div className="reviewer-home">
      <header className="reviewer-header">
        <h1>Welcome, Reviewer</h1>
        <input
          type="text"
          placeholder="Search for papers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </header>

      <main className="papers-section">
        {selectedPaper ? (
          <div className="review-section">
            <h2>Review Paper: {selectedPaper.title}</h2>
            <p><strong>Author:</strong> {selectedPaper.author}</p>
            <p><strong>Abstract:</strong> {selectedPaper.abstract}</p>
            <form onSubmit={handleReviewSubmit}>
              <textarea
                placeholder="Write your review here..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              />
              <button type="submit" className="submit-review-btn">Submit Review</button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setSelectedPaper(null)}
              >
                Cancel
              </button>
            </form>
          </div>
        ) : (
          <div className="papers-list">
            <h2>Uploaded Papers</h2>
            {filteredPapers.length > 0 ? (
              filteredPapers.map((paper) => (
                <div key={paper.id} className="paper-card">
                  <h3>{paper.title}</h3>
                  <p><strong>Author:</strong> {paper.author}</p>
                  <p><strong>Field:</strong> {paper.field}</p>
                  <p><strong>Abstract:</strong> {paper.abstract}</p>
                  <button
                    className="review-btn"
                    onClick={() => setSelectedPaper(paper)}
                  >
                    Review Paper
                  </button>
                </div>
              ))
            ) : (
              <p>No papers found.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default ReviewerHome;