import React, { useState } from 'react';
import Comment from './Comment';

function CommentSection() {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      {/* Form for submitting new comments */}
      <form onSubmit={handleCommentSubmit}>
        <input type="text" placeholder="What are your thoughts?" />
        <button type="submit">Comment</button>
      </form>
      {/* Display existing comments */}
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}

export default CommentSection;

