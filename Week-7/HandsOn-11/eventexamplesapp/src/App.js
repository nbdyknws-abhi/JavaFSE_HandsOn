import React, { useState } from 'react';
import './App.css';
import ConvertToEuroButton from './components/ConvertToEuroButton'; 
import ConvertToINRButton from './components/ConvertToINRButton';   

function App() {
  
  const [count, setCount] = useState(0);
  const [euroInput, setEuroInput] = useState('');
  const [inrInput, setInrInput] = useState('');
  const [convertedEuroResult, setConvertedEuroResult] = useState('');
  const [convertedInrResult, setConvertedInrResult] = useState('');

  
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count <= 0) {
      alert("Counter cannot go below zero");
      return;
    }
    else{
      setCount(prevCount => prevCount - 1);

    }
  };

  const sayHello = () => {
    alert("Hello! This is a static message.");
  };

  const handleIncreaseAndGreet = () => {
    increment();
    sayHello();
  };

  
  const sayWelcome = (message) => {
    alert(message);
  };

  
  const handleSyntheticClick = (event) => {
    console.log("Synthetic Event:", event);
    alert("I was clicked");
  };

  

  // Handle change in Euro input field
  const handleEuroInputChange = (e) => {
    const value = e.target.value;
    setEuroInput(value); // Update Euro input state
    setInrInput(''); // Clear INR input when Euro is typed
    setConvertedEuroResult(''); // Clear previous results
    setConvertedInrResult('');
  };

  // Handle change in INR input field
  const handleInrInputChange = (e) => {
    const value = e.target.value;
    setInrInput(value); // Update INR input state
    setEuroInput(''); // Clear Euro input when INR is typed
    setConvertedEuroResult(''); // Clear previous results
    setConvertedInrResult('');
  };

  // Function to convert INR to Euro (triggered by button click)
  const convertInrToEuro = (amountInINR) => {
    if (amountInINR) {
      const euroValue = parseFloat(amountInINR) / 100; // Assuming 1 Euro = 100 Rupees
      setConvertedEuroResult(euroValue.toFixed(2));
      setConvertedInrResult(''); // Clear INR result as we're converting to Euro
    } else {
      setConvertedEuroResult('');
    }
  };

  // Function to convert Euro to INR (triggered by button click)
  const convertEuroToInr = (amountInEuro) => {
    if (amountInEuro) {
      const inrValue = parseFloat(amountInEuro) * 100; // Assuming 1 Euro = 100 Rupees
      setConvertedInrResult(inrValue.toFixed(2));
      setConvertedEuroResult(''); // Clear Euro result as we're converting to INR
    } else {
      setConvertedInrResult('');
    }
  };

  // Determine which button to show based on input
  const showConvertEuroButton = inrInput !== '';
  const showConvertInrButton = euroInput !== '';

  return (
    <div className="App">
      <h1>React Event Handling Examples</h1>

      <section className="event-section">
        <h2>Counter Example</h2>
        <p>Counter Value: {count}</p>
        <button onClick={handleIncreaseAndGreet}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </section>

      <hr />

      <section className="event-section">
        <h2>Button with Argument</h2>
        <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>
      </section>

      <hr />

      <section className="event-section">
        <h2>Synthetic Event Example</h2>
        <button onClick={handleSyntheticClick}>Click Me </button>
      </section>

      <hr />

      {/* --- Currency Converter Section --- */}
      <section className="event-section">
        <h2>Currency Converter</h2>
        <p>Enter an amount in either field</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '400px', margin: 'auto', gap: '10px' }}>
          <label>
            Euro (€):
            <input
              type="number"
              value={euroInput}
              onChange={handleEuroInputChange}
              placeholder="Enter amount in EUR"
            />
          </label>
        
          <label>
            Indian Rupees (₹):
            <input
              type="number"
              value={inrInput}
              onChange={handleInrInputChange}
              placeholder="Enter amount in INR"
            />
          </label>
        </div>

        {/* Conditionally render buttons */}
        <div >
          {showConvertEuroButton && (
            <ConvertToEuroButton onClick={convertInrToEuro} value={inrInput} />
          )}
          {showConvertInrButton && (
            <ConvertToINRButton onClick={convertEuroToInr} value={euroInput} />
          )}
        </div>

        {/* Display results */}
        {convertedEuroResult && <p>Converted Euro: €{convertedEuroResult}</p>}
        {convertedInrResult && <p>Converted Rupees: ₹{convertedInrResult}</p>}
      </section>
    </div>
  );
}

export default App;