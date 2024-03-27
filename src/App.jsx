// App.js
import React from 'react';
import Article from './components/Article';
import CommentSection from './components/CommentSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Article />
      <CommentSection />
    </div>
  );
}

export default App;
