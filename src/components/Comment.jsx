import React ,{useState}from 'react';
import Reply from './Reply';

function Comment({ comment }) {
  //const { text, replies, upvotes } = comment;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
 
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    addComment();
  };
  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

 

  return (
    <div className="comment">
      <p>{comment}</p>
      {/* <button>Upvote ({upvotes})</button> */}
      {/* Form for replying to comments*/}
      <form onSubmit={handleCommentSubmit}>
        <input type="text" placeholder="Write your reply..." name="reply" />
        <button type="submit">Reply</button>
      </form>
      {/* Display replies */}
      {comments.map((com, index) => (
        <Reply key={index} reply={com} /> 
      ))}
    </div>
  );
}

export default Comment;
