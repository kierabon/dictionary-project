import React from "react";
import Logo from './CALogo (1).png';
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="col">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
      <h1>Dictionary</h1>
      </header>
    
       <Dictionary defaultKeyword="sunset" /> 
      
      <footer>
        <p>
          Made by Kiera Bonaparte
        </p>
        <a
          className="Code-link"
          href="https://github.com/kierabon/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          View code on GitHub
        </a>
      </footer>
    </div>
    </div>
  );
}

export default App;
