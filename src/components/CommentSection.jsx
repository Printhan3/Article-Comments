import React, { useState,useEffect } from 'react';
import Comment from './Comment'; 

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    addComment();
  };

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      {/* Form for submitting new comments */}
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="What are your thoughts?"
          value={newComment}
          onChange={handleInputChange}
        />
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

{/*import React, { useState } from 'react';

function App() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const removeComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="App">
      <h1>Comments</h1>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="What are your thoughts?"
        />
        <button onClick={addComment}>Comment</button>
      </div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment}
            <button onClick={() => removeComment(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;*/}

      
