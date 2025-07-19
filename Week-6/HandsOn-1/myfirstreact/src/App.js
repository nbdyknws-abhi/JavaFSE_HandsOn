import logo from './Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          WELCOME TO THE FIRST SESSION OF REACT 
        </h1>
        <a
          className="App-link"
          href="https://github.com/rick/roll"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to My Repository 
        </a>
      </header>
    </div>
  );
}

export default App;
