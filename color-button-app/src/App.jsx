import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const className = disabled ? 'gray' : buttonColor;

  return (
    <div>
      <button
        className={className}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <br/>
      <input type="checkbox" id="disable-button-checkbox" onChange={(e) => setDisabled(e.target.checked)}></input>
      <label htmlfor="disable-button-checkbox">Disable Button</label>
    </div>
  );
}

export default App;
