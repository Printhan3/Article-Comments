// Comment.js
import React from 'react';
import Reply from './Reply';

function Comment({ comment }) {
  const { text, replies, upvotes } = comment;

  return (
    <div className="comment">
      <p>{text}</p>
      <button>Upvote ({upvotes})</button>
      {/* Form for replying to comments */}
      <form>
        <input type="text" placeholder="Write your reply..." />
        <button type="submit">Reply</button>
      </form>
      {/* Display replies */}
      {replies.map((reply, index) => (
        <Reply key={index} reply={reply} />
      ))}
    </div>
  );
}

export default Comment;
