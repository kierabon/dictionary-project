import Logo from './CALogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
      </header>
      <p>
        
      </p>
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
  );
}

export default App;
