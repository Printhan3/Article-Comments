import React from 'react';

function Reply({ reply }) {
  return (
    <div className="reply">
      <p>{reply.text}</p>
    </div>
  );
}

export default Reply; 

