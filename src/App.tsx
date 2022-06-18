import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/bio">Bio</Link>
        <Link to="/cv">CV</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </div>
  );
}

export default App;
