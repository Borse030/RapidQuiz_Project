import React from 'react';
import { questions } from './questions';
import './Review.css'; // Import the CSS file

const Review = ({ ans, mainquestion }) => {
  return (
    <div className="review-container">
      <h2>Review Component</h2>
      <ul>
        {mainquestion.map((e, index) => (
          <div key={index}>
            <h3 className="review-question">{e.question}</h3>
            <h5 className="correct-answer">Correct answer - {e.correctAnswer}</h5>
            <h5 className="your-answer">
              Your answer - {ans.length === 0 || ans[index] === null ? 'Not Answered' : ans[index]}
            </h5>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Review;
